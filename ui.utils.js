(function () {
  const sum = (arr) => arr.reduce((s, v) => s + v, 0);
  const max = (arr) => arr.reduce((m, v) => (v > m ? v : m), -Infinity);
  const min = (arr) => arr.reduce((m, v) => (v < m ? v : m), Infinity);

  const defaultColor = (i) => {
    const base = [106, 162, 255];
    const t = (i % 6) / 6;
    const c = base.map((b, idx) => Math.max(0, Math.min(255, Math.round(b - t * 40 - idx * 5))));
    const toHex = (x) => x.toString(16).padStart(2, "0");
    return `#${toHex(c[0])}${toHex(c[1])}${toHex(c[2])}`;
  };

  function hslToHex(h, s, l) {
    const sat = Math.max(0, Math.min(100, s)) / 100;
    const light = Math.max(0, Math.min(100, l)) / 100;
    const hue = ((h % 360) + 360) % 360;
    const c = (1 - Math.abs(2 * light - 1)) * sat;
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = light - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (hue < 60) {
      r = c; g = x; b = 0;
    } else if (hue < 120) {
      r = x; g = c; b = 0;
    } else if (hue < 180) {
      r = 0; g = c; b = x;
    } else if (hue < 240) {
      r = 0; g = x; b = c;
    } else if (hue < 300) {
      r = x; g = 0; b = c;
    } else {
      r = c; g = 0; b = x;
    }

    const toHex = (value) => Math.round((value + m) * 255).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function getBorderColor(fillColor) {
    if (!fillColor || !fillColor.startsWith("#")) return "#2b3345";
    try {
      if (fillColor.startsWith("hsl")) {
        const hslMatch = fillColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
        if (hslMatch) {
          const h = parseInt(hslMatch[1], 10);
          const s = parseInt(hslMatch[2], 10);
          let l = parseInt(hslMatch[3], 10);
          l = Math.max(0, l - 20);
          return `hsl(${h}, ${s}%, ${l}%)`;
        }
        return "#2b3345";
      }

      const hex = fillColor.replace("#", "");
      if (hex.length !== 6 && hex.length !== 3) return "#2b3345";
      const fullHex = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
      const r = parseInt(fullHex.substr(0, 2), 16);
      const g = parseInt(fullHex.substr(2, 2), 16);
      const b = parseInt(fullHex.substr(4, 2), 16);
      const darkenFactor = 0.7;
      const darkerR = Math.floor(r * darkenFactor);
      const darkerG = Math.floor(g * darkenFactor);
      const darkerB = Math.floor(b * darkenFactor);
      const toHex = (x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, "0");
      return `#${toHex(darkerR)}${toHex(darkerG)}${toHex(darkerB)}`;
    } catch (e) {
      console.error("Error generating border color:", e);
      return "#2b3345";
    }
  }

  function generateMonochromeColors(count) {
    const baseHue = Math.floor(Math.random() * 360);
    return Array.from({ length: count }, (_, i) => {
      const lightness = 30 + i * (40 / count);
      return hslToHex(baseHue, 50, lightness);
    });
  }

  function generatePastelColors(count) {
    return Array.from({ length: count }, () => {
      const hue = Math.floor(Math.random() * 360);
      return hslToHex(hue, 60, 85);
    });
  }

  function generateVibrantColors(count) {
    return Array.from({ length: count }, () => {
      const hue = Math.floor(Math.random() * 360);
      return hslToHex(hue, 80, 50);
    });
  }

  function generateDefaultColors(count) {
    return Array.from({ length: count }, (_, i) => defaultColor(i));
  }

  function scaleLinear(domain, range) {
    const [d0, d1] = domain;
    const [r0, r1] = range;
    const m = (r1 - r0) / (d1 - d0 || 1);
    return (v) => r0 + (v - d0) * m;
  }

  function dashFor(type, custom) {
    if (type === "dashed") return "6 3";
    if (type === "dotted") return "1 4";
    if (type === "custom") return custom || "4 2";
    return null;
  }

  function bgRect(W, H, opts) {
    if (opts.backgroundTransparent) return '<rect width="100%" height="100%" fill="#fff" opacity="0"/>';
    const fillOpacity = typeof opts.backgroundOpacity === "number" ? Math.max(0, Math.min(1, opts.backgroundOpacity)) : 1;
    return `<rect width="${W}" height="${H}" fill="${opts.backgroundColor}" fill-opacity="${fillOpacity}"/>`;
  }

  function axes(W, H, pad, showAxes) {
    if (!showAxes) return "";
    const x1 = pad;
    const y1 = H - pad;
    const x2 = W - pad;
    const y2 = pad;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y1}" stroke="#2b3345"/><line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y2}" stroke="#2b3345"/>`;
  }

  function gridAndTicks(x0, x1, y0, y1, maxY, opts) {
    const ticks = 4;
    const els = [];
    for (let i = 0; i <= ticks; i++) {
      const t = i / ticks;
      const y = y0 - t * (y0 - y1);
      const val = Math.round(t * maxY);
      if (opts.showGrid) {
        els.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`);
      }
      els.push(`<text x="${x0 - 6}" y="${y + 4}" text-anchor="end" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${val}</text>`);
    }
    return els.join("");
  }

  function shapeStrokeAttrs(opts, fillColor = null) {
    const sw = +opts.strokeWidth;
    if (sw <= 0) return "";
    const borderColor = fillColor ? getBorderColor(fillColor) : opts.strokeColor;
    const dash = dashFor(opts.strokeType, opts.strokeDash);
    return `stroke="${borderColor}" stroke-opacity="${opts.strokeOpacity}" stroke-width="${sw}" ${dash ? `stroke-dasharray="${dash}"` : ""}`;
  }

  window.UiUtils = {
    sum,
    max,
    min,
    defaultColor,
    getBorderColor,
    generateMonochromeColors,
    generatePastelColors,
    generateVibrantColors,
    generateDefaultColors,
    scaleLinear,
    dashFor,
    bgRect,
    axes,
    gridAndTicks,
    shapeStrokeAttrs,
  };
})();
