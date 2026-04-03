(function () {
  const {
    sum,
    max,
    min,
    defaultColor,
    getBorderColor,
    scaleLinear,
    dashFor,
    bgRect,
    axes,
    gridAndTicks,
    shapeStrokeAttrs,
  } = window.UiUtils;

  function renderPie(data, colors, W, H, opts, globalPadding = 0) {
    const showText = opts.showText !== false;
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) * 0.32;
    const total = sum(data.values);
    let angle = -Math.PI / 2 + (opts.startAngle * Math.PI) / 180;
    const pieces = [];
    const padding = globalPadding || 0;
    const paddingFactor = Math.max(0, Math.min(0.4, padding / 100));
    const sliceReduction = r * paddingFactor;
    const explosionDistance = opts.separated ? r * 0.1 : 0;

    data.values.forEach((v, i) => {
      const sliceAngle = (v / total) * Math.PI * 2;
      const midAngle = angle + sliceAngle / 2;
      const explosionX = explosionDistance * Math.cos(midAngle);
      const explosionY = explosionDistance * Math.sin(midAngle);
      const innerRadius = opts.donut ? r * 0.2 : 0;
      const paddedInnerRadius = Math.max(0, innerRadius + sliceReduction);
      const paddedOuterRadius = Math.max(paddedInnerRadius, r - sliceReduction);
      const slicePath = createPieSlicePath(
        cx + explosionX,
        cy + explosionY,
        paddedInnerRadius,
        paddedOuterRadius,
        angle,
        angle + sliceAngle,
        opts.borderRadius
      );
      const sliceColor = colors.slices && colors.slices[i] ? colors.slices[i] : defaultColor(i);
      const borderColor = colors.borders && colors.borders[i] ? colors.borders[i] : getBorderColor(sliceColor);

      pieces.push(`<path d="${slicePath}" fill="${sliceColor}" fill-opacity="${opts.fillOpacity}"/>`);

      if (opts.strokeWidth > 0) {
        const strokePath = createPieSlicePath(
          cx + explosionX,
          cy + explosionY,
          innerRadius,
          r,
          angle,
          angle + sliceAngle,
          opts.borderRadius
        );
        pieces.push(
          `<path d="${strokePath}" fill="none" stroke="${borderColor}" stroke-width="${opts.strokeWidth}" stroke-opacity="${opts.strokeOpacity}"/>`
        );
      }

      if (showText) {
        const labelRadius = r + 30 + explosionDistance;
        const labelX = cx + labelRadius * Math.cos(midAngle);
        const labelY = cy + labelRadius * Math.sin(midAngle);
        const textAnchor = Math.cos(midAngle) > 0 ? "start" : "end";
        pieces.push(
          `<text x="${labelX}" y="${labelY}" text-anchor="${textAnchor}" dominant-baseline="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${data.labels[i]} (${Math.round((v / total) * 100)}%)</text>`
        );
      }
      angle += sliceAngle;
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bgRect(W, H, opts)}${pieces.join("")}</svg>`;
  }

  function createPieSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle, borderRadius = 0) {
    if (borderRadius <= 0 || outerRadius - innerRadius < borderRadius * 2) {
      return createSimplePieSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle);
    }

    if (innerRadius === 0) {
      return createRoundedPiePath(cx, cy, outerRadius, startAngle, endAngle, borderRadius);
    }

    return createRoundedDonutPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle, borderRadius);
  }

  function createSimplePieSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const x1 = cx + outerRadius * Math.cos(startAngle);
    const y1 = cy + outerRadius * Math.sin(startAngle);
    const x2 = cx + outerRadius * Math.cos(endAngle);
    const y2 = cy + outerRadius * Math.sin(endAngle);
    const x3 = cx + innerRadius * Math.cos(endAngle);
    const y3 = cy + innerRadius * Math.sin(endAngle);
    const x4 = cx + innerRadius * Math.cos(startAngle);
    const y4 = cy + innerRadius * Math.sin(startAngle);

    if (innerRadius > 0) {
      return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
    }

    return `M ${cx} ${cy} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  }

  function createRoundedPiePath(cx, cy, radius, startAngle, endAngle, borderRadius) {
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const startAngleWithRadius = startAngle + borderRadius / radius;
    const endAngleWithRadius = endAngle - borderRadius / radius;
    const x1 = cx + radius * Math.cos(startAngleWithRadius);
    const y1 = cy + radius * Math.sin(startAngleWithRadius);
    const x2 = cx + radius * Math.cos(endAngleWithRadius);
    const y2 = cy + radius * Math.sin(endAngleWithRadius);
    const controlDist = borderRadius * 0.8;
    const control1X = cx + (radius - controlDist) * Math.cos(startAngle);
    const control1Y = cy + (radius - controlDist) * Math.sin(startAngle);
    const control2X = cx + (radius - controlDist) * Math.cos(endAngle);
    const control2Y = cy + (radius - controlDist) * Math.sin(endAngle);

    return `M ${cx} ${cy} L ${control1X} ${control1Y} Q ${cx + radius * Math.cos(startAngle)} ${cy + radius * Math.sin(startAngle)} ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Q ${cx + radius * Math.cos(endAngle)} ${cy + radius * Math.sin(endAngle)} ${control2X} ${control2Y} Z`;
  }

  function createRoundedDonutPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle, borderRadius) {
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const outerStartAngle = startAngle + borderRadius / outerRadius;
    const outerEndAngle = endAngle - borderRadius / outerRadius;
    const innerStartAngle = startAngle + borderRadius / innerRadius;
    const innerEndAngle = endAngle - borderRadius / innerRadius;
    const x1 = cx + outerRadius * Math.cos(outerStartAngle);
    const y1 = cy + outerRadius * Math.sin(outerStartAngle);
    const x2 = cx + outerRadius * Math.cos(outerEndAngle);
    const y2 = cy + outerRadius * Math.sin(outerEndAngle);
    const x3 = cx + innerRadius * Math.cos(innerEndAngle);
    const y3 = cy + innerRadius * Math.sin(innerEndAngle);
    const x4 = cx + innerRadius * Math.cos(innerStartAngle);
    const y4 = cy + innerRadius * Math.sin(innerStartAngle);
    const outerControlDist = borderRadius * 0.8;
    const innerControlDist = borderRadius * 0.8;
    const outerControl1X = cx + (outerRadius - outerControlDist) * Math.cos(startAngle);
    const outerControl1Y = cy + (outerRadius - outerControlDist) * Math.sin(startAngle);
    const outerControl2X = cx + (outerRadius - outerControlDist) * Math.cos(endAngle);
    const outerControl2Y = cy + (outerRadius - outerControlDist) * Math.sin(endAngle);
    const innerControl1X = cx + (innerRadius + innerControlDist) * Math.cos(startAngle);
    const innerControl1Y = cy + (innerRadius + innerControlDist) * Math.sin(startAngle);
    const innerControl2X = cx + (innerRadius + innerControlDist) * Math.cos(endAngle);
    const innerControl2Y = cy + (innerRadius + innerControlDist) * Math.sin(endAngle);

    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} Q ${cx + outerRadius * Math.cos(endAngle)} ${cy + outerRadius * Math.sin(endAngle)} ${outerControl2X} ${outerControl2Y} L ${innerControl2X} ${innerControl2Y} Q ${cx + innerRadius * Math.cos(endAngle)} ${cy + innerRadius * Math.sin(endAngle)} ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Q ${cx + innerRadius * Math.cos(startAngle)} ${cy + innerRadius * Math.sin(startAngle)} ${innerControl1X} ${innerControl1Y} L ${outerControl1X} ${outerControl1Y} Q ${cx + outerRadius * Math.cos(startAngle)} ${cy + outerRadius * Math.sin(startAngle)} ${x1} ${y1} Z`;
  }

  function renderBar(data, colors, W, H, pad, opts, globalPadding = 0) {
    const showText = opts.showText !== false;
    const cats = data.categories;
    const multi = data.series.length > 1 && !opts.stacked;
    const stacked = data.series.length > 1 && opts.stacked;
    const isHorizontal = !!opts.horizontal;
    const variant = opts.barVariant || "standard";
    const maxY = stacked
      ? max(cats.map((_, ci) => sum(data.series.map((s) => s.y[ci]))))
      : max(data.series.flatMap((s) => s.y));
    const fontSize = Math.max(11, opts.fontSize || 12);
    const longestCategory = cats.reduce((maxLabel, label) => Math.max(maxLabel, String(label || "").length), 0);
    const horizontalLabelSpace = Math.min(W * 0.34, Math.max(pad + 40, longestCategory * fontSize * 0.62 + 24));
    const x0 = isHorizontal ? horizontalLabelSpace : pad;
    const x1 = W - pad;
    const y0 = isHorizontal ? H - (pad + 18) : H - pad;
    const y1 = pad;
    const toY = scaleLinear([0, maxY], [y0, y1]);
    const toX = scaleLinear([0, maxY], [x0, x1]);
    const band = (x1 - x0) / cats.length;
    const hBand = (y0 - y1) / cats.length;
    const gap = 6;
    const barW = multi ? (band - 10) / data.series.length : band - 10;
    const barH = multi ? (hBand - 10) / data.series.length : hBand - 10;
    const rx = Math.min(opts.borderRadius, 20 - data.series.length * 2, barW / 2 - gap);
    const hrx = Math.min(opts.borderRadius, 20 - data.series.length * 2, barH / 2 - gap);
    const padding = globalPadding || 0;
    const hasPadding = padding > 0;
    let bars = "";

    const getVariantConfig = (w, h) => {
      const safeW = Math.max(1, w);
      const safeH = Math.max(1, h);
      let barRadius = isHorizontal ? hrx : rx;
      let fillOpacity = opts.fillOpacity;
      let strokeWidth = opts.strokeWidth;
      let floating = false;

      if (variant === "rounded") {
        barRadius = Math.min(Math.max(barRadius + 5, 10), safeW / 2, safeH / 2);
      } else if (variant === "capsule") {
        barRadius = Math.min(safeW, safeH) / 2;
      } else if (variant === "outline") {
        fillOpacity = Math.min(0.24, opts.fillOpacity);
        strokeWidth = Math.max(2, opts.strokeWidth);
      } else if (variant === "floating") {
        floating = true;
        barRadius = Math.min(Math.max(barRadius + 2, 8), safeW / 2, safeH / 2);
      }

      return {
        barRadius: Math.max(0, barRadius),
        fillOpacity,
        strokeWidth,
        floating,
      };
    };

    const drawBar = (x, y, w, h, fill, index) => {
      const borderColor = colors.borders && colors.borders[index] ? colors.borders[index] : getBorderColor(fill);
      const { barRadius, fillOpacity, strokeWidth, floating } = getVariantConfig(w, h);
      const strokeAttrs = `stroke="${borderColor}" stroke-opacity="${opts.strokeOpacity}" stroke-width="${strokeWidth}"`;

      const shadow = floating
        ? `<rect x="${x + 1.5}" y="${y + 2}" width="${Math.max(0, w)}" height="${Math.max(0, h)}" rx="${barRadius}" fill="#000" fill-opacity="0.15"/>`
        : "";

      if (hasPadding) {
        const outerBar = `${shadow}<rect x="${x}" y="${y}" width="${w}" height="${Math.max(0, h)}" rx="${barRadius}" fill="transparent" ${strokeAttrs}/>`;
        const innerX = x + padding;
        const innerY = y + padding;
        const innerW = Math.max(0, w - padding * 2);
        const innerH = Math.max(0, h - padding * 2);
        const innerRx = Math.max(0, barRadius - padding);
        const innerBar = `<rect x="${innerX}" y="${innerY}" width="${innerW}" height="${Math.max(0, innerH)}" rx="${innerRx}" fill="${fill}" fill-opacity="${fillOpacity}"/>`;
        return outerBar + innerBar;
      }

      return `${shadow}<rect x="${x}" y="${y}" width="${w}" height="${Math.max(0, h)}" rx="${barRadius}" fill="${fill}" fill-opacity="${fillOpacity}" ${strokeAttrs}/>`;
    };

    if (isHorizontal) {
      cats.forEach((c, ci) => {
        if (multi) {
          data.series.forEach((s, si) => {
            const v = s.y[ci];
            const y = y1 + ci * hBand + 5 + si * barH;
            const x = x0;
            const w = toX(v) - x0;
            const h = barH - gap;
            const fill = colors.series && colors.series[si];
            bars += drawBar(x, y, w, h, fill, si);
          });
        } else if (stacked) {
          let acc = 0;
          data.series.forEach((s, si) => {
            const v = s.y[ci];
            const x = toX(acc);
            const w = toX(acc + v) - x;
            const y = y1 + ci * hBand + 5;
            const h = barH - gap;
            const fill = colors.series && colors.series[si];
            bars += drawBar(x, y, w, h, fill, si);
            acc += v;
          });
        } else {
          const v = data.series[0].y[ci];
          const x = x0;
          const y = y1 + ci * hBand + 5;
          const w = toX(v) - x0;
          const h = barH - gap;
          const fill = colors.bars && colors.bars[ci];
          bars += drawBar(x, y, w, h, fill, ci);
        }
      });
    } else {
      cats.forEach((c, ci) => {
        if (multi) {
          data.series.forEach((s, si) => {
            const v = s.y[ci];
            const x = x0 + ci * band + 5 + si * barW;
            const y = toY(v);
            const h = y0 - y;
            const fill = colors.series && colors.series[si];
            bars += drawBar(x, y, barW - gap, h, fill, si);
          });
        } else if (stacked) {
          let acc = 0;
          data.series.forEach((s, si) => {
            const v = s.y[ci];
            const y = toY(acc + v);
            const h = toY(acc) - y;
            const x = x0 + ci * band + 5;
            const fill = colors.series && colors.series[si];
            bars += drawBar(x, y, barW - gap, h, fill, si);
            acc += v;
          });
        } else {
          const v = data.series[0].y[ci];
          const x = x0 + ci * band + 5;
          const y = toY(v);
          const h = y0 - y;
          const fill = colors.bars && colors.bars[ci];
          bars += drawBar(x, y, barW - gap, h, fill, ci);
        }
      });
    }

    const catLabels = showText
      ? cats
          .map((c, ci) => {
            if (isHorizontal) {
              const y = y1 + ci * hBand + hBand / 2;
              return `<text x="${x0 - 10}" y="${y}" text-anchor="end" dominant-baseline="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${c}</text>`;
            }
            const x = x0 + ci * band + band / 2;
            return `<text x="${x}" y="${y0 + 16}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${c}</text>`;
          })
          .join("")
      : "";

    const horizontalGridAndTicks = () => {
      const ticks = 4;
      const els = [];
      for (let i = 0; i <= ticks; i++) {
        const t = i / ticks;
        const x = x0 + t * (x1 - x0);
        const val = Math.round(t * maxY);
        if (opts.showGrid) {
          els.push(`<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="#202635" opacity="${opts.gridOpacity}"/>`);
        }
        if (showText) {
          els.push(`<text x="${x}" y="${y0 + 18}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${val}</text>`);
        }
      }
      return els.join("");
    };

    const gridTicks = isHorizontal
      ? horizontalGridAndTicks()
      : gridAndTicks(x0, x1, y0, y1, maxY, opts);

    const axisMarkup = opts.showAxes
      ? isHorizontal
        ? `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="#2b3345"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="#2b3345"/>`
        : axes(W, H, pad, opts.showAxes)
      : "";

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bgRect(W, H, opts)}${axisMarkup}${gridTicks}${bars}${catLabels}</svg>`;
  }

  function buildSmoothLinePath(points, tension = 0.18) {
    if (!Array.isArray(points) || points.length === 0) return "";
    if (points.length === 1) {
      return `M ${points[0][0]} ${points[0][1]}`;
    }
    if (points.length === 2) {
      return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]}`;
    }

    let d = `M ${points[0][0]} ${points[0][1]}`;

    for (let i = 0; i < points.length - 1; i++) {
      const previous = points[i - 1] || points[i];
      const current = points[i];
      const next = points[i + 1];
      const afterNext = points[i + 2] || next;

      const control1X = current[0] + ((next[0] - previous[0]) * tension);
      const control1Y = current[1] + ((next[1] - previous[1]) * tension);
      const control2X = next[0] - ((afterNext[0] - current[0]) * tension);
      const control2Y = next[1] - ((afterNext[1] - current[1]) * tension);

      d += ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${next[0]} ${next[1]}`;
    }

    return d;
  }

  function renderLine(data, colors, W, H, pad, opts) {
    const showText = opts.showText !== false;
    const X = data.x;
    const maxY = Math.max(...data.series.flatMap((s) => s.y));
    const minY = Math.min(0, ...data.series.flatMap((s) => s.y));
    const x0 = pad;
    const x1 = W - pad;
    const y0 = H - pad;
    const y1 = pad;
    const toX = scaleLinear([0, X.length - 1], [x0, x1]);
    const toY = scaleLinear([minY, maxY], [y0, y1]);

    const svgElements = [];

    data.series.forEach((series, seriesIndex) => {
      const points = series.y.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
      const dash = dashFor(opts.lineStyle || opts.strokeType, opts.strokeDash);
      const lineColor = colors.series && colors.series[seriesIndex] ? colors.series[seriesIndex] : defaultColor(seriesIndex);
      const borderColor = colors.borders && colors.borders[seriesIndex] ? colors.borders[seriesIndex] : getBorderColor(lineColor);
      const pathPts = series.y.map((v, i) => [toX(i), toY(v)]);

      const baseStroke = `stroke="${borderColor}" stroke-width="${Math.max(1, opts.lineWidth || 2)}" ${dash ? `stroke-dasharray="${dash}"` : ""} stroke-opacity="${opts.strokeOpacity}"`;
      let linePath = `<polyline fill="none" ${baseStroke} points="${points}"/>`;

      if (opts.smooth && series.y.length > 1) {
        const d = buildSmoothLinePath(pathPts);
        linePath = `<path d="${d}" fill="none" ${baseStroke}/>`;
      }

      svgElements.push(linePath);

      if (opts.showPoints) {
        const dots = series.y
          .map((v, i) => {
            const cx = toX(i);
            const cy = toY(v);
            const r = 3;
            switch (opts.pointShape) {
              case "square":
                return `<rect x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" fill="${lineColor}" fill-opacity="${opts.fillOpacity}" stroke="${borderColor}" stroke-width="${opts.strokeWidth}"/>`;
              case "triangle":
                return `<polygon points="${cx},${cy - r} ${cx - r},${cy + r} ${cx + r},${cy + r}" fill="${lineColor}" fill-opacity="${opts.fillOpacity}" stroke="${borderColor}" stroke-width="${opts.strokeWidth}"/>`;
              case "none":
                return "";
              default:
                return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${lineColor}" fill-opacity="${opts.fillOpacity}" stroke="${borderColor}" stroke-width="${opts.strokeWidth}"/>`;
            }
          })
          .filter(Boolean)
          .join("");

        if (dots) svgElements.push(dots);
      }

      if (opts.areaFill) {
        if (opts.smooth && series.y.length > 1) {
          let areaD = buildSmoothLinePath(pathPts);
          areaD += ` L ${toX(X.length - 1)} ${y0} L ${toX(0)} ${y0} Z`;
          svgElements.push(`<path d="${areaD}" fill="${lineColor}" opacity="${opts.fillOpacity * 0.25}"/>`);
        } else {
          svgElements.push(`<polyline fill="${lineColor}" opacity="${opts.fillOpacity * 0.25}" points="${points} ${toX(X.length - 1)},${y0} ${toX(0)},${y0}"/>`);
        }
      }
    });

    const xlabels = showText ? X.map((lbl, i) => `<text x="${toX(i)}" y="${y0 + 16}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${lbl}</text>`).join("") : "";

    const ticks = 4;
    const tickEls = [];
    for (let i = 0; i <= ticks; i++) {
      const t = i / ticks;
      const y = y0 - t * (y0 - y1);
      const val = (minY + t * (maxY - minY)).toFixed(0);
      if (opts.showGrid) tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`);
      if (showText) tickEls.push(`<text x="${x0 - 6}" y="${y + 4}" text-anchor="end" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${val}</text>`);
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bgRect(W, H, opts)}${axes(W, H, pad, opts.showAxes)}${tickEls.join("")}${svgElements.join("")}${xlabels}</svg>`;
  }

  function renderScatter(data, colors, W, H, pad, opts) {
    const showText = opts.showText !== false;
    const xs = data.points.map((p) => p.x);
    const ys = data.points.map((p) => p.y);
    const xmin = Math.min(...xs);
    const xmax = Math.max(...xs);
    const ymin = Math.min(...ys);
    const ymax = Math.max(...ys);
    const x0 = pad;
    const x1 = W - pad;
    const y0 = H - pad;
    const y1 = pad;
    const toX = scaleLinear([xmin, xmax], [x0, x1]);
    const toY = scaleLinear([ymin, ymax], [y0, y1]);
    const stroke = shapeStrokeAttrs(opts);

    const drawShape = (p) => {
      const r = opts.pointSize || p.r || 6;
      const cx = toX(p.x);
      const cy = toY(p.y);
      switch (opts.pointShape) {
        case "square":
          return `<rect x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
        case "triangle":
          return `<polygon points="${cx},${cy - r} ${cx - r},${cy + r} ${cx + r},${cy + r}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
        case "diamond":
          return `<polygon points="${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
        default:
          return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
      }
    };

    const dots = data.points.map(drawShape).join("");
    const ticks = 4;
    const tickEls = [];
    for (let i = 0; i <= ticks; i++) {
      const tx = xmin + (i * (xmax - xmin)) / ticks;
      const x = toX(tx);
      if (opts.showGrid) tickEls.push(`<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="#202635" opacity="${opts.gridOpacity}"/>`);
      if (showText) tickEls.push(`<text x="${x}" y="${y0 + 16}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${Math.round(tx)}</text>`);
    }
    for (let i = 0; i <= ticks; i++) {
      const ty = ymin + (i * (ymax - ymin)) / ticks;
      const y = toY(ty);
      if (opts.showGrid) tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`);
      if (showText) tickEls.push(`<text x="${x0 - 6}" y="${y + 4}" text-anchor="end" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${Math.round(ty)}</text>`);
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bgRect(W, H, opts)}${axes(W, H, pad, opts.showAxes)}${tickEls.join("")}${dots}</svg>`;
  }

  function renderHistogram(data, colors, W, H, pad, opts, globalPadding = 0) {
    const showText = opts.showText !== false;
    const vals = data.values.slice().sort((a, b) => a - b);
    const minv = data.range && data.range[0] !== undefined ? data.range[0] : vals[0];
    const maxv = data.range && data.range[1] !== undefined ? data.range[1] : vals[vals.length - 1];
    const bins = data.bins || opts.bins || Math.ceil(Math.sqrt(vals.length));
    const step = (maxv - minv) / bins;
    const edges = Array.from({ length: bins + 1 }, (_, i) => minv + i * step);
    const counts = new Array(bins).fill(0);
    vals.forEach((v) => {
      if (v < minv || v > maxv) return;
      const b = Math.min(bins - 1, Math.floor((v - minv) / step));
      counts[b]++;
    });
    const total = sum(counts);
    const countsOrDensity = opts.normalize ? counts.map((c) => c / (total * step)) : counts;
    const x0 = pad;
    const x1 = W - pad;
    const y0 = H - pad;
    const y1 = pad;
    const band = (x1 - x0) / bins;
    const maxC = Math.max(1, ...countsOrDensity);
    const toY = scaleLinear([0, maxC], [y0, y1]);
    const rx = Math.min(opts.borderRadius, 20);
    const padding = globalPadding || 0;
    const hasPadding = padding > 0;
    const borderColor = colors.border || getBorderColor(colors.bins);
    const strokeAttrs = `stroke="${borderColor}" stroke-opacity="${opts.strokeOpacity}" stroke-width="${opts.strokeWidth}"`;

    const drawBar = (x, y, w, h, fill) => {
      if (hasPadding) {
        const outerBar = `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(0, h)}" rx="${rx}" fill="transparent" ${strokeAttrs}/>`;
        const innerX = x + padding;
        const innerY = y + padding;
        const innerW = Math.max(0, w - padding * 2);
        const innerH = Math.max(0, h - padding * 2);
        const innerRx = Math.max(0, rx - padding);
        const innerBar = `<rect x="${innerX}" y="${innerY}" width="${innerW}" height="${Math.max(0, innerH)}" rx="${innerRx}" fill="${fill}" fill-opacity="${opts.fillOpacity}"/>`;
        return outerBar + innerBar;
      }

      return `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(0, h)}" rx="${rx}" fill="${fill}" fill-opacity="${opts.fillOpacity}" ${strokeAttrs}/>`;
    };

    const bars = countsOrDensity
      .map((c, i) => {
        const x = x0 + i * band + 2;
        const y = toY(c);
        const h = y0 - y;
        const w = band - 4;
        const fill = colors.bins;
        return drawBar(x, y, w, h, fill);
      })
      .join("");

    const xlabels = showText
      ? counts
          .map((_, i) => {
            const x = x0 + i * band + band / 2;
            const lbl = `${edges[i].toFixed(0)}-${edges[i + 1].toFixed(0)}`;
            return `<text x="${x}" y="${y0 + 16}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${lbl}</text>`;
          })
          .join("")
      : "";

    const ticks = 4;
    const tickEls = [];
    for (let i = 0; i <= ticks; i++) {
      const t = i / ticks;
      const y = y0 - t * (y0 - y1);
      const val = (t * maxC).toFixed(0);
      if (opts.showGrid) tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`);
      if (showText) tickEls.push(`<text x="${x0 - 6}" y="${y + 4}" text-anchor="end" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${val}</text>`);
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bgRect(W, H, opts)}${axes(W, H, pad, opts.showAxes)}${tickEls.join("")}${bars}${xlabels}</svg>`;
  }

  function generateColors(chartType, data, presetColors = null) {
    const colors = {};
    const colorArray = presetColors || Array.from({ length: 10 }, (_, i) => defaultColor(i));

    switch (chartType) {
      case "pie":
        colors.slices = data.labels.map((_, i) => colorArray[i % colorArray.length] || defaultColor(i));
        colors.borders = colors.slices.map((fillColor) => getBorderColor(fillColor));
        break;
      case "bar":
        if (data.series.length > 1) {
          colors.series = data.series.map((_, i) => colorArray[i % colorArray.length] || defaultColor(i));
          colors.borders = colors.series.map((fillColor) => getBorderColor(fillColor));
        } else {
          colors.bars = data.categories.map((_, i) => colorArray[i % colorArray.length] || defaultColor(i));
          colors.borders = colors.bars.map((fillColor) => getBorderColor(fillColor));
        }
        break;
      case "line":
        colors.line = colorArray[0] || defaultColor(0);
        colors.border = getBorderColor(colors.line);
        colors.series = data.series.map((_, i) => colorArray[i % colorArray.length] || defaultColor(i));
        colors.borders = colors.series.map((fillColor) => getBorderColor(fillColor));
        break;
      case "scatter":
        colors.points = colorArray[0] || defaultColor(0);
        colors.border = getBorderColor(colors.points);
        break;
      case "histogram":
        colors.bins = colorArray[0] || defaultColor(0);
        colors.border = getBorderColor(colors.bins);
        break;
    }
    return colors;
  }

  window.UiRenderers = {
    renderPie,
    renderBar,
    renderLine,
    renderScatter,
    renderHistogram,
    generateColors,
  };
})();
