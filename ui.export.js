(function () {
  function getCurrentSvg() {
    const aiApp = document.getElementById("ai-app");
    const animationApp = document.getElementById("animation-app");
    if (animationApp && !animationApp.hidden) {
      return document.querySelector("#animation-svg-host svg") || document.querySelector("#svg-host svg") || document.querySelector("#ai-svg-host svg");
    }
    if (aiApp && !aiApp.hidden) {
      return document.querySelector("#ai-svg-host svg") || document.querySelector("#svg-host svg");
    }
    return document.querySelector("#svg-host svg") || document.querySelector("#ai-svg-host svg");
  }

  function exportSVG(chartType) {
    const svg = getCurrentSvg();
    if (!svg) {
      alert("No chart to export. Please generate a chart first.");
      return;
    }

    const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chart-${chartType}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function exportPNG(chartType) {
    const svg = getCurrentSvg();
    if (!svg) {
      alert("No chart to export. Please generate a chart first.");
      return;
    }

    const xml = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 380;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `chart-${chartType}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
  }

  function exportToFigma(optionsOrCallback, onSuccess) {
    const svg = getCurrentSvg();
    if (!svg) {
      alert("No chart to export. Please generate a chart first.");
      return;
    }

    const options = typeof optionsOrCallback === "function" ? {} : (optionsOrCallback || {});
    const successCallback = typeof optionsOrCallback === "function" ? optionsOrCallback : onSuccess;

    if (typeof parent !== "undefined" && parent.postMessage) {
      parent.postMessage({
        pluginMessage: {
          type: "EXPORT_SVG",
          svg: svg.outerHTML,
          animation: options.animation || null,
          exportStyle: options.exportStyle || null,
        }
      }, "*");
      if (typeof successCallback === "function") {
        successCallback();
      }
      return;
    }

    alert("Figma export is only available when running as a Figma plugin");
  }

  function requestUserData() {
    if (typeof parent !== "undefined" && parent.postMessage) {
      parent.postMessage({ pluginMessage: { type: "GET_USER_DATA" } }, "*");
    }
  }

  function getPluginGlobalSettings() {
    return new Promise((resolve) => {
      if (!(typeof parent !== "undefined" && parent.postMessage)) {
        resolve(null);
        return;
      }

      const requestId = `global-settings-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const handler = (event) => {
        const message = event.data && event.data.pluginMessage;
        if (!message || message.type !== "GLOBAL_SETTINGS_RESULT" || message.requestId !== requestId) return;
        window.removeEventListener("message", handler);
        resolve(message.settings || null);
      };

      window.addEventListener("message", handler);
      parent.postMessage({ pluginMessage: { type: "GET_GLOBAL_SETTINGS", requestId } }, "*");
    });
  }

  function savePluginGlobalSettings(settings) {
    return new Promise((resolve) => {
      if (!(typeof parent !== "undefined" && parent.postMessage)) {
        resolve(false);
        return;
      }

      const requestId = `save-global-settings-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const handler = (event) => {
        const message = event.data && event.data.pluginMessage;
        if (!message || message.type !== "GLOBAL_SETTINGS_SAVED" || message.requestId !== requestId) return;
        window.removeEventListener("message", handler);
        resolve(message.ok !== false);
      };

      window.addEventListener("message", handler);
      parent.postMessage({ pluginMessage: { type: "SAVE_GLOBAL_SETTINGS", requestId, settings } }, "*");
    });
  }

  function bindUserDataListener(onUserData) {
    const handler = (event) => {
      const message = event.data && event.data.pluginMessage;
      if (!message || message.type !== "USER_DATA") return;
      if (typeof onUserData === "function") {
        onUserData(message.user);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }

  window.UiExport = {
    exportSVG,
    exportPNG,
    exportToFigma,
    requestUserData,
    getPluginGlobalSettings,
    savePluginGlobalSettings,
    bindUserDataListener,
  };
})();
