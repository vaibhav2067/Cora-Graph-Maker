// ===== DOM ELEMENTS =====
    // Main UI elements
    const defaultApp = document.getElementById("default-app");
    const aiApp = document.getElementById("ai-app");
    const animationApp = document.getElementById("animation-app");
    const settingsApp = document.getElementById("settings-app");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const headerLayoutBtn = document.getElementById("header-layout-btn");
    const headerLayoutBtnIcon = document.getElementById("header-layout-btn-icon");
    const headerLayoutMenu = document.getElementById("header-layout-menu");
    const headerLayoutOptions = Array.from(document.querySelectorAll(".header-layout-option"));
    const aiHamburgerMenu = document.getElementById("ai-hamburger-menu");
    const aiDropdownMenu = document.getElementById("ai-dropdown-menu");
    const aiHomeBtn = document.getElementById("ai-home-btn");
    const aiThemeToggle = document.getElementById("ai-theme-toggle");
    const aiThemeToggleState = document.getElementById("ai-theme-toggle-state");
    const aiInfoBtn = document.getElementById("ai-info-btn");
    const themeToggle = document.getElementById("theme-toggle");
    const themeToggleState = document.getElementById("theme-toggle-state");
    const infoBtn = document.getElementById("info-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const aiSettingsBtn = document.getElementById("ai-settings-btn");
    const animationStudioBtn = document.getElementById("animation-studio-btn");
    const aiAnimationStudioBtn = document.getElementById("ai-animation-studio-btn");
    const animationHomeBtn = document.getElementById("animation-home-btn");
    const animationPreviewBtn = document.getElementById("animation-preview-btn");
    const animationSaveBtn = document.getElementById("animation-save-btn");
    const animationPresetSelect = document.getElementById("animation-preset-select");
    const animationTriggerSelect = document.getElementById("animation-trigger-select");
    const animationEasingSelect = document.getElementById("animation-easing-select");
    const animationDirectionSelect = document.getElementById("animation-direction-select");
    const animationDurationRange = document.getElementById("animation-duration-range");
    const animationDurationValue = document.getElementById("animation-duration-value");
    const animationPresetCopy = document.getElementById("animation-preset-copy");
    const animationStateSummary = document.getElementById("animation-state-summary");
    const animationChartTypeLabel = document.getElementById("animation-chart-type-label");
    const settingsHomeBtn = document.getElementById("settings-home-btn");
    const settingsResetBtn = document.getElementById("settings-reset-btn");
    const settingsSaveBtn = document.getElementById("settings-save-btn");
    const settingsNavItems = Array.from(document.querySelectorAll(".settings-nav-item"));
    const settingsDetailPanels = Array.from(document.querySelectorAll(".settings-detail-panel"));
    const settingsThemeToggle = document.getElementById("settings-theme-toggle");
    const settingsThemeToggleLabel = document.getElementById("settings-theme-toggle-label");
    const settingsPreviewFillToggle = document.getElementById("settings-preview-fill-toggle");
    const settingsPreviewFillToggleLabel = document.getElementById("settings-preview-fill-toggle-label");
    const settingsProfileName = document.getElementById("settings-profile-name");
    const settingsProfileToggle = document.getElementById("settings-profile-toggle");
    const settingsProfileToggleLabel = document.getElementById("settings-profile-toggle-label");
    const settingsLayoutSelect = document.getElementById("settings-layout-select");
    const infoModal = document.getElementById("info-modal");
    const modalClose = document.getElementById("modal-close");
    const experienceModal = document.getElementById("experience-modal");
    const experienceModalClose = document.getElementById("experience-modal-close");
    const experienceBookmarkBtn = document.getElementById("experience-bookmark-btn");
    const experienceRemindBtn = document.getElementById("experience-remind-btn");
    const chartDataModal = document.getElementById("chart-data-modal");
    const chartDataModalClose = document.getElementById("chart-data-modal-close");
    const chartDataEmptyState = document.getElementById("chart-data-empty-state");
    const chartDataTabDefault = document.getElementById("chart-data-tab-default");
    const chartDataTabManual = document.getElementById("chart-data-tab-manual");
    const chartDataTabJson = document.getElementById("chart-data-tab-json");
    const chartDataChartTypeBadge = document.getElementById("chart-data-chart-type-badge");
    const chartDataSourceBadge = document.getElementById("chart-data-source-badge");
    const btnOpenDataModal = document.getElementById("btn-open-data-modal");
    const defaultDataSection = document.getElementById("default-data-section");
    const manualDataSection = document.getElementById("manual-data-section");
    const btnApplyData = document.getElementById("btn-apply-data");
    const btnAddManualRow = document.getElementById("btn-add-manual-row");
    const btnAddManualSeries = document.getElementById("btn-add-manual-series");
    const btnResetDefaultData = document.getElementById("btn-reset-default-data");
    const manualInputSubtitle = document.getElementById("manual-input-subtitle");
    const manualFormHead = document.getElementById("manual-form-head");
    const manualFormRows = document.getElementById("manual-form-rows");
    const jsonDataSection = document.getElementById("json-data-section");
    const jsonModeUploadBtn = document.getElementById("json-mode-upload");
    const jsonModeEditorBtn = document.getElementById("json-mode-editor");
    const jsonUploadPanel = document.getElementById("json-upload-panel");
    const jsonEditorPanel = document.getElementById("json-editor-panel");
    const jsonFileInput = document.getElementById("json-file-input");
    const jsonFileName = document.getElementById("json-file-name");
    const jsonEditor = document.getElementById("json-editor");
    const btnApplyJson = document.getElementById("btn-apply-json");
    const sourceRefreshBtn = document.getElementById("source-refresh-btn");
    const customColorsPanel = document.getElementById("custom-colors-panel");
    const customColorsTitle = document.getElementById("custom-colors-title");
    const customColorsList = document.getElementById("custom-colors-list");
    const customColorsClose = document.getElementById("custom-colors-close");
    const customColorsCancel = document.getElementById("custom-colors-cancel");
    const customColorsApply = document.getElementById("custom-colors-apply");
    const customColorPickerPanel = document.getElementById("custom-color-picker-panel");
    const customColorPickerTitle = document.getElementById("custom-color-picker-title");
    const customColorCanvas = document.getElementById("custom-color-canvas");
    const customColorCanvasCursor = document.getElementById("custom-color-canvas-cursor");
    const customColorHue = document.getElementById("custom-color-hue");
    const customColorFormat = document.getElementById("custom-color-format");
    const customColorValue = document.getElementById("custom-color-value");
    const aiChatShell = document.getElementById("ai-chat-shell");
    const aiSuggestionGrid = document.getElementById("ai-suggestion-grid");
    const aiChatMessages = document.getElementById("ai-chat-messages");
    const aiChatForm = document.getElementById("ai-chat-form");
    const aiChatInput = document.getElementById("ai-chat-input");
    const aiBtnOpenDataModal = document.getElementById("ai-btn-open-data-modal");

    // Global toolbar elements
    const colorPresetBtn = document.getElementById("color-preset-btn");
    const colorPresetDropdown = document.getElementById("color-preset-dropdown");
    const globalToolbar = document.querySelector(".global-toolbar");
    const fontSizeBtn = document.getElementById("font-size-btn");
    const fontSizePopup = document.getElementById("font-size-popup");
    const popupFontSize = document.getElementById("popup-font-size");
    const fontSizeValue = document.getElementById("font-size-value");
    const fontToggle = document.getElementById("font-toggle");
    const fontFamilySelect = document.getElementById("font-family-select");
    const fontWeightSelect = document.getElementById("font-weight-select");
    const fontColorControl = document.getElementById("font-color-control");
    const fontColorSwatch = document.getElementById("font-color-swatch");
    const fontColorCode = document.getElementById("font-color-code");
    const fontColorPanel = document.getElementById("font-color-panel");
    const fontColorCanvas = document.getElementById("font-color-canvas");
    const fontColorCanvasCursor = document.getElementById("font-color-canvas-cursor");
    const fontColorHue = document.getElementById("font-color-hue");
    const fontColorInput = document.getElementById("font-color-input");
    const fontColorValue = document.getElementById("font-color-value");
    const paddingBtn = document.getElementById("padding-btn");
    const paddingPopup = document.getElementById("padding-popup");
    const popupPadding = document.getElementById("popup-padding");
    const paddingValue = document.getElementById("padding-value");
    const borderRadiusBtn = document.getElementById("border-radius-btn");
    const borderRadiusPopup = document.getElementById("border-radius-popup");
    const popupBorderRadius = document.getElementById("popup-border-radius");
    const borderRadiusValue = document.getElementById("border-radius-value");
    const globalBgControl = document.getElementById("global-bg-control");
    const globalBgColor = document.getElementById("global-bg-color");
    const globalBgSwatch = document.getElementById("global-bg-swatch");
    const globalBgValue = document.getElementById("global-bg-value");
    const bgColorPanel = document.getElementById("bg-color-panel");
    const bgColorHexInput = document.getElementById("bg-color-hex");
    const bgColorFormat = document.getElementById("bg-color-format");
    const bgColorCanvas = document.getElementById("bg-color-canvas");
    const bgColorCanvasCursor = document.getElementById("bg-color-canvas-cursor");
    const bgColorHue = document.getElementById("bg-color-hue");
    const bgColorOpacity = document.getElementById("bg-color-opacity");
    const bgColorOpacityValue = document.getElementById("bg-color-opacity-value");
    const resetStylesBtn = document.getElementById("reset-styles-btn");
    const moreDropdown = document.getElementById("more-dropdown");

    // Chart control elements
    const toolbarColor = document.getElementById("toolbar-color");
    const toolbarOpacity = document.getElementById("toolbar-opacity");
    const opacityValue = document.getElementById("opacity-value");
    const btnExportPrimary = document.getElementById("btn-export-primary");
    const btnExportToggle = document.getElementById("btn-export-toggle");
    const exportDropdown = document.getElementById("export-dropdown");
    const exportLabel = btnExportPrimary.querySelector(".export-label");
    const btnExportSvg = document.getElementById("btn-export-svg");
    const btnExportPng = document.getElementById("btn-export-png");
    const btnExportFigma = document.getElementById("btn-export-figma");
    let selectedExportType = "figma";
    const aiBtnExportPrimary = document.getElementById("ai-btn-export-primary");
    const aiBtnExportToggle = document.getElementById("ai-btn-export-toggle");
    const aiExportDropdown = document.getElementById("ai-export-dropdown");
    const aiExportLabel = document.getElementById("ai-export-label");
    const aiBtnExportSvg = document.getElementById("ai-btn-export-svg");
    const aiBtnExportPng = document.getElementById("ai-btn-export-png");
    const aiBtnExportFigma = document.getElementById("ai-btn-export-figma");
    let aiSelectedExportType = "figma";
    let jsonInputMode = "upload";
    const PLUGIN_COMMUNITY_URL = "https://www.figma.com/community/plugin/1544686878314493439";
    const EXPERIENCE_REMIND_KEY = "graph_generator_experience_remind_until";
    let settingsReturnView = "default";
    let pendingTheme = "light";
    let activeSettingsPanel = "general";
    let pendingGlobalSettings = null;
    let latestUserData = null;

    // Pie chart controls
    const pieGapToggle = document.getElementById('pie-gap-toggle');
    const pieDonutToggle = document.getElementById('pie-donut-toggle');

    // Bar chart elements
    const toolbarBorderColor = document.getElementById("toolbar-border-color");
    const toolbarBorderWidth = document.getElementById("toolbar-border-width");
    const borderWidthValue = document.getElementById("border-width-value");
    const toolbarBarWidth = document.getElementById("toolbar-bar-width");
    const barWidthValue = document.getElementById("bar-width-value");
    const toolbarCornerRadius = document.getElementById("toolbar-corner-radius");
    const cornerRadiusValue = document.getElementById("corner-radius-value");
    const toolbarValueDisplay = document.getElementById("toolbar-value-display");
    const toolbarBarVerticalOption = document.getElementById("toolbar-bar-vertical-option");
    const toolbarBarHorizontalOption = document.getElementById("toolbar-bar-horizontal-option");

    // Pie chart elements
    const toolbarSlicePadding = document.getElementById("toolbar-slice-padding");
    const slicePaddingValue = document.getElementById("slice-padding-value");
    const toolbarSliceBorderColor = document.getElementById("toolbar-slice-border-color");
    const toolbarSliceBorderRadius = document.getElementById("toolbar-slice-border-radius");
    const sliceBorderRadiusValue = document.getElementById("slice-border-radius-value");
    const toolbarLabelDisplay = document.getElementById("toolbar-label-display");

    // Action buttons
    const toolbarReset = document.getElementById("toolbar-reset");
    const toolbarApplyAll = document.getElementById("toolbar-apply-all");

    // Line chart controls
    const lineAreaToggle = document.getElementById('line-area-toggle');
    const lineCurveToggle = document.getElementById('line-curve-toggle');
    const lineWidthBtn = document.getElementById('line-width-btn');
    const lineWidthPopup = document.getElementById('line-width-popup');
    const popupLineWidth = document.getElementById('popup-line-width');
    const lineWidthValue = document.getElementById('line-width-value');
    const pointShapesBtn = document.getElementById('point-shapes-btn');
    const pointShapesPopup = document.getElementById('point-shapes-popup');
    const radarAreaToggle = document.getElementById('radar-area-toggle');
    const radarLineWidthBtn = document.getElementById('radar-line-width-btn');
    const radarLineWidthPopup = document.getElementById('radar-line-width-popup');
    const popupRadarLineWidth = document.getElementById('popup-radar-line-width');
    const radarLineWidthValue = document.getElementById('radar-line-width-value');
    const radarPointShapesBtn = document.getElementById('radar-point-shapes-btn');
    const radarGridShapeBtn = document.getElementById('radar-grid-shape-btn');
    const radarGridShapePopup = document.getElementById('radar-grid-shape-popup');
    const radarStartAngleBtn = document.getElementById('radar-start-angle-btn');
    const radarStartAnglePopup = document.getElementById('radar-start-angle-popup');
    const popupRadarStartAngle = document.getElementById('popup-radar-start-angle');
    const radarStartAngleValue = document.getElementById('radar-start-angle-value');

    // Scatter chart controls
    const scatterPointShapesBtn = document.getElementById('scatter-point-shapes-btn');
    const scatterPointShapesPopup = document.getElementById('scatter-point-shapes-popup');
    const scatterPointSizeBtn = document.getElementById('scatter-point-size-btn');
    const scatterPointSizePopup = document.getElementById('scatter-point-size-popup');
    const popupScatterPointSize = document.getElementById('popup-scatter-point-size');
    const scatterPointSizeValue = document.getElementById('scatter-point-size-value');
    const scatterPointPaddingBtn = document.getElementById('scatter-point-padding-btn');
    const scatterPointPaddingPopup = document.getElementById('scatter-point-padding-popup');
    const popupScatterPointPadding = document.getElementById('popup-scatter-point-padding');
    const scatterPointPaddingValue = document.getElementById('scatter-point-padding-value');
    const dotLineWidthControl = document.getElementById('dot-line-width-control');
    const dotLineWidthBtn = document.getElementById('dot-line-width-btn');
    const dotLineWidthPopup = document.getElementById('dot-line-width-popup');
    const popupDotLineWidth = document.getElementById('popup-dot-line-width');
    const dotLineWidthValue = document.getElementById('dot-line-width-value');

    const {
      getDefaultData,
      dataTableConfig,
      getTableDataFromChartData,
      convertTableDataToChartData,
      isValidDataForChart,
      getDefaultRowCountForChartType,
    } = window.UiData;
    const {
      exportSVG,
      exportPNG,
      exportToFigma,
      requestUserData,
      getPluginGlobalSettings,
      savePluginGlobalSettings,
      bindUserDataListener,
    } = window.UiExport;
    const {
      updateUserProfile,
      showCustomAlert,
      applyLightTheme,
      applyDarkTheme,
    } = window.UiUi;
    const {
      bindAnimationControls,
      createDefaultAnimationSettings,
      enterAnimationStudioMode: openAnimationStudio,
      exitAnimationStudioMode: closeAnimationStudio,
      getPresetConfig: getAnimationPresetConfig,
      saveAnimationSettings,
      syncAnimationStudioForChart,
    } = window.UiAnimation;
    const {
      renderPie,
      renderBar,
      renderLine,
      renderRadar,
      renderScatter,
      renderDot,
      renderHistogram,
      generateColors,
    } = window.UiRenderers;

    // ===== APPLICATION STATE =====
    const state = {
      chartType: "bar",
      dataSource: "default",
      data: null,
      colors: {},
      selectedColorPreset: "default",
      globalSettings: {
        backgroundColor: "#ffffff",
        backgroundOpacity: 1,
        showGrid: true,
        showAxes: true,
        showText: true,
        fontFamily: "Segoe UI",
        fontSize: 12,
        fontWeight: "normal",
        fontColor: "#9aa4b2",
        padding: 0,
        borderRadius: 0,
        previewPanelFill: true,
        profileSyncEnabled: true,
        dotLineUseGradient: true,
        defaultLayoutMode: "layout-option-1",
      },
      selectedElement: null,
      currentData: null,
      animationSettings: createDefaultAnimationSettings(),
      aiPreviewReady: false,
      opts: {
        pie: defaultOpts(),
        bar: defaultOpts(),
        line: {
          ...defaultOpts(),
          areaFill: false,
          smooth: false, 
          lineWidth: 2,
          pointShape: 'circle',
          showPoints: true
        },
        radar: {
          ...defaultOpts(),
          areaFill: false,
          lineWidth: 2,
          pointShape: 'circle',
          gridShape: 'polygon',
          startAngle: -90,
        },
        scatter: {
          ...defaultOpts(),
          pointShape: 'circle'
        },
        dot: {
          ...defaultOpts(),
          pointShape: 'circle',
          horizontal: true,
        },
        histogram: defaultOpts(),
      },
      dataRegistry: null,
    };
    let animationPreviewResetTimer = null;

    function getDefaultGlobalSettings() {
      return {
        backgroundColor: "#ffffff",
        backgroundOpacity: 1,
        showGrid: true,
        showAxes: true,
        showText: true,
        fontFamily: "Segoe UI",
        fontSize: 12,
        fontWeight: "normal",
        fontColor: "#9aa4b2",
        padding: 0,
        borderRadius: 0,
        previewPanelFill: true,
        profileSyncEnabled: true,
        dotLineUseGradient: true,
        defaultLayoutMode: "layout-option-1",
      };
    }

    // Multi-series support
    let currentSeries = 1;
    let customColorDraft = [];
    let activeCustomColorIndex = null;

    const {
      sum,
      max,
      min,
      defaultColor,
      getBorderColor,
      generateMonochromeColors,
      generatePastelColors,
      generateVibrantColors,
      generateDefaultColors,
    } = window.UiUtils;

    const CHART_TYPES = ["bar", "pie", "line", "radar", "scatter", "dot", "histogram"];
    const DATA_STORAGE_KEY = "graph_generator_data_registry_v1";

    // Default options
    function defaultOpts() {
      return {
        strokeWidth: 1,
        strokeColor: "#2b3345",
        strokeOpacity: 1,
        strokeType: "solid",
        strokeDash: "4 2",
        fillOpacity: 0.95,
        borderRadius: 6,
        donut: false,
        separated: false,
        areaFill: false,
        smooth: false,
        lineWidth: 2,
        pointShape: 'circle',
        showPoints: true,
        fontFamily: "Segoe UI",
        fontSize: 12,
        fontWeight: "normal",
        fontColor: "#9aa4b2",
        showText: true,
        showGrid: true,
        gridOpacity: 0.4,
        showAxes: true,
        backgroundTransparent: true,
        backgroundColor: "#ffffff",
        backgroundOpacity: 1,
        startAngle: 0,
        horizontal: false,
        lineStyle: "solid",
        pointSize: 6,
        pointPadding: 0,
        bins: 10,
        normalize: false,
        gridShape: "polygon",
      };
    }

    // ===== CHART UPDATE AND COLOR FUNCTIONS =====
    function getActiveSvgHost() {
      if (aiApp && !aiApp.hidden && !state.aiPreviewReady) {
        return null;
      }
      if (animationApp && !animationApp.hidden) {
        return document.getElementById("animation-svg-host");
      }
      if (aiApp && !aiApp.hidden) {
        return document.getElementById("ai-svg-host");
      }
      return document.getElementById("svg-host");
    }

    function getPreviewAnimationEasing(easing) {
      switch (easing) {
        case "ease-in":
          return "cubic-bezier(0.42, 0, 1, 1)";
        case "ease-in-out":
          return "cubic-bezier(0.42, 0, 0.58, 1)";
        case "linear":
          return "linear";
        case "gentle":
          return "cubic-bezier(0.2, 0.8, 0.2, 1)";
        case "quick":
          return "cubic-bezier(0.35, 0, 0.15, 1)";
        case "ease-out":
        default:
          return "cubic-bezier(0, 0, 0.2, 1)";
      }
    }

    function resetAnimationPreviewPlayback() {
      if (animationPreviewResetTimer) {
        clearTimeout(animationPreviewResetTimer);
        animationPreviewResetTimer = null;
      }

      const animationHost = document.getElementById("animation-svg-host");
      if (!animationHost) return;

      animationHost.querySelectorAll(".is-preview-playing").forEach((node) => {
        node.classList.remove(
          "is-preview-playing",
          "axis-vertical",
          "axis-horizontal",
          "flow-up",
          "flow-right",
          "flow-down",
          "flow-left",
          "flow-smart",
          "effect-grow",
          "effect-draw",
          "effect-pop",
          "effect-pulse",
          "effect-sweep",
          "effect-bloom",
          "effect-rise",
          "effect-radial",
          "effect-spin"
        );
        node.style.removeProperty("--preview-duration");
        node.style.removeProperty("--preview-delay");
        node.style.removeProperty("--preview-easing");
        node.style.removeProperty("--preview-stroke-length");
        node.style.removeProperty("--bar-grow-duration");
        node.style.removeProperty("--bar-grow-delay");
        node.style.removeProperty("--bar-grow-easing");
        if (node.dataset.previewStrokeDasharray) {
          node.style.strokeDasharray = node.dataset.previewStrokeDasharray;
        } else {
          node.style.removeProperty("stroke-dasharray");
        }
        if (node.dataset.previewStrokeDashoffset) {
          node.style.strokeDashoffset = node.dataset.previewStrokeDashoffset;
        } else {
          node.style.removeProperty("stroke-dashoffset");
        }
      });
    }

    function syncAnimationPreviewButton() {
      if (!animationPreviewBtn) return;
      const isReady = !!state.currentData;
      animationPreviewBtn.disabled = !isReady;
      animationPreviewBtn.textContent = isReady ? "See Animation" : "No Preview Data";
      animationPreviewBtn.title = isReady
        ? "Play the current animation preset in the preview"
        : "Animation preview is available once the current graph has data";
    }

    function getAnimationPreviewTargets() {
      switch (state.chartType) {
        case "pie":
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-pie-slice"));
        case "line":
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-line-animatable"));
        case "radar":
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-radar-animatable"));
        case "scatter":
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-scatter-point"));
        case "dot":
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-dot-animatable"));
        case "histogram":
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-histogram-bar"));
        case "bar":
        default:
          return Array.from(document.querySelectorAll("#animation-svg-host .preview-bar-animatable"));
      }
    }

    function prepareDrawPreviewTarget(node) {
      if (typeof node.getTotalLength !== "function") return;
      try {
        const totalLength = node.getTotalLength();
        if (!Number.isFinite(totalLength) || totalLength <= 0) return;
        node.dataset.previewStrokeDasharray = node.style.strokeDasharray || "";
        node.dataset.previewStrokeDashoffset = node.style.strokeDashoffset || "";
        node.style.setProperty("--preview-stroke-length", `${totalLength}`);
        node.style.strokeDasharray = `${totalLength}`;
        node.style.strokeDashoffset = `${totalLength}`;
      } catch (error) {
        // Some SVG nodes do not support path length calculations.
      }
    }

    function playAnimationPreview() {
      if (!animationApp || animationApp.hidden) {
        syncAnimationPreviewButton();
        return;
      }

      const animationHost = document.getElementById("animation-svg-host");
      if (!animationHost) return;

      const targets = getAnimationPreviewTargets();
      if (!targets.length) return;

      resetAnimationPreviewPlayback();

      const isHorizontal = !!state.opts.bar.horizontal;
      const selectedDirection = String(state.animationSettings.direction || "smart");
      const flowDirection = isHorizontal
        ? (selectedDirection === "left" || selectedDirection === "right" ? selectedDirection : "right")
        : (selectedDirection === "up" || selectedDirection === "down" ? selectedDirection : "up");
      const axisClass = isHorizontal ? "axis-horizontal" : "axis-vertical";
      const easing = getPreviewAnimationEasing(state.animationSettings.easing);
      const duration = Math.max(100, parseInt(state.animationSettings.durationMs, 10) || 450);
      const effectName = String(state.animationSettings.previewEffect || "grow");
      const uniqueTargetCount = new Set(
        targets.map((target) => String(target.dataset.animationIndex || target.dataset.barIndex || "0"))
      ).size || 1;
      const staggerStep = Math.min(80, Math.round(duration / Math.max(4, uniqueTargetCount * 1.5)));

      targets.forEach((target, index) => {
        const animationIndex = parseInt(target.dataset.animationIndex || target.dataset.barIndex || String(index), 10) || 0;
        target.style.setProperty("--preview-duration", `${duration}ms`);
        target.style.setProperty("--preview-delay", `${animationIndex * staggerStep}ms`);
        target.style.setProperty("--preview-easing", easing);
        target.style.setProperty("--bar-grow-duration", `${duration}ms`);
        target.style.setProperty("--bar-grow-delay", `${animationIndex * staggerStep}ms`);
        target.style.setProperty("--bar-grow-easing", easing);
        if (effectName === "draw") {
          prepareDrawPreviewTarget(target);
        }
        target.classList.add("is-preview-playing", `effect-${effectName}`);
        if (effectName === "grow") {
          target.classList.add(axisClass, `flow-${flowDirection}`);
        }
      });

      animationPreviewResetTimer = window.setTimeout(() => {
        resetAnimationPreviewPlayback();
      }, duration + ((uniqueTargetCount - 1) * staggerStep) + 160);
    }

    // Update chart preview
    function updatePreview() {
      const svgHost = getActiveSvgHost();
      syncAnimationPreviewButton();
      if (!svgHost) return;
      if (!state.currentData) {
        svgHost.innerHTML = `<div style="color:var(--muted); text-align:center; padding:40px;"><p>Please configure your data to see the chart preview</p></div>`;
        return;
      }

      const currentOpts = state.opts[state.chartType];
      currentOpts.backgroundColor = state.globalSettings.backgroundColor;
      currentOpts.backgroundOpacity = state.globalSettings.backgroundOpacity;
      currentOpts.showText = state.globalSettings.showText;
      currentOpts.fontFamily = state.globalSettings.fontFamily;
      currentOpts.fontSize = state.globalSettings.fontSize;
      currentOpts.fontWeight = state.globalSettings.fontWeight;
      currentOpts.fontColor = state.globalSettings.fontColor;
      currentOpts.borderRadius = state.globalSettings.borderRadius;
      currentOpts.backgroundTransparent = state.globalSettings.backgroundOpacity <= 0;
      currentOpts.dotLineUseGradient = state.globalSettings.dotLineUseGradient;

      if (state.chartType === "pie") {
        currentOpts.showGrid = false;
        currentOpts.showAxes = false;
      } else {
        currentOpts.showGrid = state.globalSettings.showGrid;
        currentOpts.showAxes = state.globalSettings.showAxes;
      }

      applyChartSpecificPadding(state.chartType, state.globalSettings.padding, currentOpts);
      const colors = normalizeChartColors(state.chartType, state.currentData, state.colors);
      state.colors = colors;
      const previewCanvas = svgHost;
      const W = previewCanvas.clientWidth;
      const H = previewCanvas.clientHeight;
      const pad = Math.min(W, H) * 0.07;

      try {
        let svg = "";
        switch (state.chartType) {
          case "pie":
            svg = renderPie(state.currentData, colors, W, H, currentOpts, state.globalSettings.padding);
            break;
          case "bar":
            svg = renderBar(state.currentData, colors, W, H, pad, currentOpts, state.globalSettings.padding);
            break;
          case "line":
            svg = renderLine(state.currentData, colors, W, H, pad, currentOpts);
            break;
          case "radar":
            svg = renderRadar(state.currentData, colors, W, H, pad, currentOpts);
            break;
          case "scatter":
            svg = renderScatter(state.currentData, colors, W, H, pad, currentOpts);
            break;
          case "dot":
            svg = renderDot(state.currentData, colors, W, H, pad, currentOpts);
            break;
          case "histogram":
            svg = renderHistogram(state.currentData, colors, W, H, pad, currentOpts, state.globalSettings.padding);
            break;
          default:
            svg = renderBar(state.currentData, colors, W, H, pad, currentOpts, state.globalSettings.padding);
        }
        svgHost.innerHTML = svg;
        syncAnimationPreviewButton();
        setTimeout(() => { addChartElementInteractivity(); }, 100);
      } catch (error) {
        console.error("Chart rendering error:", error);
        svgHost.innerHTML = `<div style="color:var(--muted); text-align:center; padding:40px;"><p>Error rendering chart. Please check your data.</p><p style="font-size:12px; color:var(--ink-2);">${error.message}</p></div>`;
        syncAnimationPreviewButton();
      }
    }

    // Apply chart-specific padding
    function applyChartSpecificPadding(chartType, padding, opts) {
      switch (chartType) {
        case "bar":
          opts.barSpacing = padding;
          break;
        case "pie":
          break;
        case "scatter":
          break;
        case "radar":
          break;
        case "histogram":
          opts.barSpacing = padding;
          break;
        default:
          break;
      }
    }

    function hasGeneratedColors(colors) {
      return !!colors && typeof colors === "object" && Object.keys(colors).length > 0;
    }

    function updateColorPresetSelection(preset) {
      document.querySelectorAll(".color-preset-option").forEach((option) => {
        option.classList.toggle("active", option.dataset.preset === preset);
      });
    }

    function isHexColor(value) {
      return /^#([0-9a-fA-F]{6})$/.test(String(value || "").trim());
    }

    function normalizeColorValue(value) {
      const raw = String(value || "").trim();
      if (!raw) return null;
      if (isHexColor(raw)) return raw.toLowerCase();
      return parseColorFromInput(raw, "hex")
        || parseColorFromInput(raw, "rgb")
        || parseColorFromInput(raw, "hsl");
    }

    function normalizeChartColors(chartType, data, storedColors = null) {
      const base = generateColors(chartType, data);
      if (!storedColors || typeof storedColors !== "object") return base;

      switch (chartType) {
        case "pie":
          base.slices = data.labels.map((_, index) => (
            normalizeColorValue(storedColors.slices && storedColors.slices[index]) || base.slices[index]
          ));
          base.borders = base.slices.map((fillColor) => getBorderColor(fillColor));
          break;
        case "bar":
          if (data.series.length > 1) {
            base.series = data.series.map((_, index) => (
              normalizeColorValue(storedColors.series && storedColors.series[index]) || base.series[index]
            ));
            base.borders = base.series.map((fillColor) => getBorderColor(fillColor));
          } else {
            base.bars = data.categories.map((_, index) => (
              normalizeColorValue(storedColors.bars && storedColors.bars[index]) || base.bars[index]
            ));
            base.borders = base.bars.map((fillColor) => getBorderColor(fillColor));
          }
          break;
        case "line":
          base.series = data.series.map((_, index) => (
            normalizeColorValue(storedColors.series && storedColors.series[index]) || base.series[index]
          ));
          base.line = base.series[0] || base.line;
          base.border = getBorderColor(base.line);
          base.borders = base.series.map((fillColor) => getBorderColor(fillColor));
          break;
        case "radar":
          base.series = data.series.map((_, index) => (
            normalizeColorValue(storedColors.series && storedColors.series[index]) || base.series[index]
          ));
          base.borders = base.series.map((fillColor) => getBorderColor(fillColor));
          break;
        case "scatter":
          base.series = (data.series || [{ label: "Series 1" }]).map((_, index) => (
            normalizeColorValue(storedColors.series && storedColors.series[index])
            || (index === 0 && normalizeColorValue(storedColors.points))
            || base.series[index]
          ));
          base.borders = base.series.map((fillColor) => getBorderColor(fillColor));
          break;
        case "dot":
          base.series = (data.series || [{ label: "Series 1" }]).map((_, index) => (
            normalizeColorValue(storedColors.series && storedColors.series[index]) || base.series[index]
          ));
          base.borders = base.series.map((fillColor) => getBorderColor(fillColor));
          break;
        case "histogram":
          base.bins = normalizeColorValue(storedColors.bins) || base.bins;
          base.border = getBorderColor(base.bins);
          break;
        default:
          break;
      }

      return base;
    }

    function saveChartColorState(chartType, colors, preset = state.selectedColorPreset) {
      if (!state.dataRegistry) state.dataRegistry = loadDataRegistry();
      state.dataRegistry.chartColors[chartType] = deepClone(colors);
      state.dataRegistry.colorPresets[chartType] = preset;
      saveDataRegistry();
    }

    function loadChartColorState(chartType, data) {
      if (!state.dataRegistry) state.dataRegistry = loadDataRegistry();
      state.selectedColorPreset = state.dataRegistry.colorPresets[chartType] || "default";
      state.colors = normalizeChartColors(chartType, data, state.dataRegistry.chartColors[chartType]);
    }

    function getColorCountForCurrentChart() {
      const data = state.currentData;
      if (!data) return 0;

      switch (state.chartType) {
        case "pie":
          return data.labels.length;
        case "bar":
          return data.series.length > 1 ? data.series.length : data.categories.length;
        case "line":
          return data.series ? data.series.length : 1;
        case "radar":
          return data.series ? data.series.length : 1;
        case "scatter":
          return data.series ? data.series.length : 1;
        case "dot":
          return data.series ? data.series.length : 1;
        case "histogram":
          return 1;
        default:
          return 0;
      }
    }

    function getColorArrayForPreset(preset, colorCount) {
      switch (preset) {
        case "monochrome":
          return generateMonochromeColors(colorCount);
        case "pastel":
          return generatePastelColors(colorCount);
        case "vibrant":
          return generateVibrantColors(colorCount);
        default:
          return generateDefaultColors(colorCount);
      }
    }

    function getCustomColorEntries(chartType, data, colors) {
      switch (chartType) {
        case "pie":
          return data.labels.map((label, index) => ({
            key: "slices",
            index,
            label: String(label || `Slice ${index + 1}`),
            hint: `Slice ${index + 1}`,
            value: colors.slices[index],
          }));
        case "bar":
          if (data.series.length > 1) {
            return data.series.map((series, index) => ({
              key: "series",
              index,
              label: String((series && series.label) || `Series ${index + 1}`),
              hint: `Series ${index + 1}`,
              value: colors.series[index],
            }));
          }
          return data.categories.map((category, index) => ({
            key: "bars",
            index,
            label: String(category || `Category ${index + 1}`),
            hint: `Bar ${index + 1}`,
            value: colors.bars[index],
          }));
        case "line":
          return data.series.map((series, index) => ({
            key: "series",
            index,
            label: String((series && series.label) || `Series ${index + 1}`),
            hint: `Line ${index + 1}`,
            value: colors.series[index],
          }));
        case "radar":
          return data.series.map((series, index) => ({
            key: "series",
            index,
            label: String((series && series.label) || `Series ${index + 1}`),
            hint: `Radar ${index + 1}`,
            value: colors.series[index],
          }));
        case "scatter":
          return (data.series || [{ label: "Series 1" }]).map((series, index) => ({
            key: "series",
            index,
            label: String((series && series.label) || `Series ${index + 1}`),
            hint: `Series ${index + 1}`,
            value: colors.series[index],
          }));
        case "dot":
          return (data.series || [{ label: "Series 1" }]).map((series, index) => ({
            key: "series",
            index,
            label: String((series && series.label) || `Series ${index + 1}`),
            hint: `Series ${index + 1}`,
            value: colors.series[index],
          }));
        case "histogram":
          return [{
            key: "bins",
            index: 0,
            label: "Bins",
            hint: "Histogram bars",
            value: colors.bins,
          }];
        default:
          return [];
      }
    }

    function buildColorsFromCustomEntries(chartType, entries) {
      if (!state.currentData) return generateColors(chartType, state.currentData);
      const next = generateColors(chartType, state.currentData);

      entries.forEach((entry) => {
        const value = isHexColor(entry.value) ? entry.value.toLowerCase() : defaultColor(entry.index || 0);
        if (entry.key === "points" || entry.key === "bins") {
          next[entry.key] = value;
          next.border = getBorderColor(value);
          return;
        }
        if (!Array.isArray(next[entry.key])) return;
        next[entry.key][entry.index] = value;
      });

      if (Array.isArray(next.slices)) next.borders = next.slices.map((fillColor) => getBorderColor(fillColor));
      if (Array.isArray(next.bars)) next.borders = next.bars.map((fillColor) => getBorderColor(fillColor));
      if (Array.isArray(next.series)) {
        next.borders = next.series.map((fillColor) => getBorderColor(fillColor));
        if (chartType === "line") {
          next.line = next.series[0] || next.line;
          next.border = getBorderColor(next.line);
        }
      }

      return next;
    }

    function renderCustomColorsPanel() {
      if (!customColorsList || !customColorsTitle) return;
      const chartLabel = getChartTypeLabel(state.chartType);
      customColorsTitle.textContent = `${chartLabel} Colors`;
      customColorsList.innerHTML = customColorDraft.map((entry, index) => `
        <div class="custom-colors-row">
          <div class="custom-colors-label">
            <strong>${entry.label}</strong>
            <span>${entry.hint}</span>
          </div>
          <div class="custom-colors-inputs">
            <button
              class="figma-color-control custom-colors-control"
              type="button"
              data-custom-color-index="${index}"
              aria-label="Edit ${entry.label} color"
            >
              <span class="figma-color-swatch-wrap">
                <span class="figma-color-swatch" style="background:${entry.value}"></span>
              </span>
              <span class="figma-color-meta">
                <span class="figma-color-label">Color</span>
                <span class="figma-color-value">${entry.value.toUpperCase()}</span>
              </span>
            </button>
          </div>
        </div>
      `).join("");
    }

    function closeCustomColorsPanel() {
      customColorDraft = [];
      activeCustomColorIndex = null;
      if (customColorsPanel) customColorsPanel.hidden = true;
      if (customColorPickerPanel) customColorPickerPanel.classList.remove("visible");
    }

    function openCustomColorsPanel() {
      if (!state.currentData) return;
      state.colors = normalizeChartColors(state.chartType, state.currentData, state.colors);
      customColorDraft = getCustomColorEntries(state.chartType, state.currentData, state.colors)
        .map((entry) => ({ ...entry, value: String(entry.value || defaultColor(entry.index || 0)).toLowerCase() }));
      renderCustomColorsPanel();
      if (customColorsPanel) customColorsPanel.hidden = false;
    }

    function seedCustomColorsDraftFromPreset(preset) {
      const colorCount = getColorCountForCurrentChart();
      if (!colorCount) return;
      const colorArray = getColorArrayForPreset(preset, colorCount);
      const seededColors = generateColors(state.chartType, state.currentData, colorArray);
      customColorDraft = getCustomColorEntries(state.chartType, state.currentData, seededColors)
        .map((entry) => ({ ...entry, value: String(entry.value || defaultColor(entry.index || 0)).toLowerCase() }));
      renderCustomColorsPanel();
    }

    function applyCustomColors() {
      if (!customColorDraft.length) {
        closeCustomColorsPanel();
        return;
      }
      state.colors = buildColorsFromCustomEntries(state.chartType, customColorDraft);
      state.selectedColorPreset = "custom";
      saveChartColorState(state.chartType, state.colors, "custom");
      updateColorPresetSelection("custom");
      updatePreview();
      closeCustomColorsPanel();
    }

    function getCustomPickerInputFormat() {
      return customColorFormat ? customColorFormat.value : "hex";
    }

    function updateCustomPickerInputField(hex) {
      if (!customColorValue) return;
      const format = getCustomPickerInputFormat();
      customColorValue.placeholder = getBgInputPlaceholder(format);
      customColorValue.value = formatColorForInput(hex, format);
    }

    function renderCustomPickerUi() {
      if (!customColorCanvas || !customColorCanvasCursor || !customColorHue) return;
      const hueColor = hsvToRgb(customPickerState.h, 1, 1);
      const hueHex = rgbToHex(hueColor.r, hueColor.g, hueColor.b);
      customColorCanvas.style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueHex})`;
      customColorHue.style.background = "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)";
      customColorHue.value = Math.round(customPickerState.h);
      const xPct = clamp01(customPickerState.s) * 100;
      const yPct = (1 - clamp01(customPickerState.v)) * 100;
      customColorCanvasCursor.style.left = `${xPct}%`;
      customColorCanvasCursor.style.top = `${yPct}%`;
    }

    function syncCustomPickerFromHex(hex) {
      const rgb = hexToRgb(hex);
      if (!rgb) return;
      const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      customPickerState.h = hsv.h;
      customPickerState.s = hsv.s;
      customPickerState.v = hsv.v;
      renderCustomPickerUi();
    }

    function setCustomDraftColor(index, value) {
      const normalized = String(value || "").trim();
      if (!isHexColor(normalized) || !customColorDraft[index]) return;
      const hex = normalized.toLowerCase();
      customColorDraft[index].value = hex;
      const control = customColorsList && customColorsList.querySelector(`button[data-custom-color-index="${index}"]`);
      if (control) {
        const swatch = control.querySelector(".figma-color-swatch");
        const valueLabel = control.querySelector(".figma-color-value");
        if (swatch) swatch.style.background = hex;
        if (valueLabel) valueLabel.textContent = hex.toUpperCase();
      }
      if (activeCustomColorIndex === index) {
        if (customColorPickerTitle) customColorPickerTitle.textContent = customColorDraft[index].label;
        updateCustomPickerInputField(hex);
        syncCustomPickerFromHex(hex);
      }
    }

    function openCustomColorPicker(index, trigger) {
      if (!customColorPickerPanel || !trigger || !customColorDraft[index]) return;
      activeCustomColorIndex = index;
      if (customColorPickerTitle) customColorPickerTitle.textContent = customColorDraft[index].label;
      updateCustomPickerInputField(customColorDraft[index].value);
      syncCustomPickerFromHex(customColorDraft[index].value);
      positionDropdown(trigger, customColorPickerPanel);
      customColorPickerPanel.classList.add("visible");
    }

    // Apply color preset
    function applyColorPreset(preset) {
      const data = state.currentData;
      if (!data) return;

      if (preset === "custom") {
        if (!hasGeneratedColors(state.colors)) {
          state.colors = normalizeChartColors(state.chartType, state.currentData, null);
        }
        openCustomColorsPanel();
        return;
      }

      const newColors = getColorArrayForPreset(preset, getColorCountForCurrentChart());
      state.colors = generateColors(state.chartType, state.currentData, newColors);
      state.selectedColorPreset = preset;
      saveChartColorState(state.chartType, state.colors, preset);
      closeCustomColorsPanel();
      updateColorPresetSelection(preset);
      updatePreview();
    }

    // ===== DROPDOWN MANAGEMENT =====
    // Dropdown positioning and management
    function positionDropdown(button, dropdown) {
      const rect = button.getBoundingClientRect();
      const isShapePopup = dropdown.classList.contains("shape-popup");
      const measureDisplay = isShapePopup ? "grid" : "flex";

      // Measure hidden dropdown size for viewport-aware placement.
      const prevDisplay = dropdown.style.display;
      const prevVisibility = dropdown.style.visibility;
      const wasHidden = !dropdown.classList.contains("visible");
      if (wasHidden) {
        dropdown.style.visibility = "hidden";
        dropdown.style.display = measureDisplay;
      }
      const dropdownWidth = dropdown.offsetWidth || 220;
      const dropdownHeight = dropdown.offsetHeight || 160;
      if (wasHidden) {
        dropdown.style.display = prevDisplay;
        dropdown.style.visibility = prevVisibility;
      }

      const gap = 6;
      const viewportPadding = 8;
      let left = rect.left;
      let top = rect.bottom + gap;

      // Keep inside right viewport edge.
      if (left + dropdownWidth > window.innerWidth - viewportPadding) {
        left = Math.max(viewportPadding, window.innerWidth - dropdownWidth - viewportPadding);
      }

      // Flip upward if there is not enough space below.
      if (top + dropdownHeight > window.innerHeight - viewportPadding) {
        top = rect.top - dropdownHeight - gap;
      }

      // Clamp top for very small viewports.
      if (top < viewportPadding) {
        top = viewportPadding;
      }

      dropdown.style.position = "fixed";
      dropdown.style.left = left + "px";
      dropdown.style.top = top + "px";
    }

    function closeAllDropdowns() {
      colorPresetDropdown.classList.remove("visible");
      bgColorPanel.classList.remove("visible");
      if (customColorPickerPanel) customColorPickerPanel.classList.remove("visible");
      fontSizePopup.classList.remove("visible");
      paddingPopup.classList.remove("visible");
      borderRadiusPopup.classList.remove("visible");
      moreDropdown.classList.remove("visible");
      exportDropdown.classList.remove("visible");
      btnExportToggle.setAttribute("aria-expanded", "false");
      if (aiExportDropdown) aiExportDropdown.classList.remove("visible");
      if (aiBtnExportToggle) aiBtnExportToggle.setAttribute("aria-expanded", "false");
      lineWidthPopup.classList.remove("visible"); 
      if (radarLineWidthPopup) radarLineWidthPopup.classList.remove("visible");
      if (radarStartAnglePopup) radarStartAnglePopup.classList.remove("visible");
      if (dotLineWidthPopup) dotLineWidthPopup.classList.remove("visible");
      pointShapesPopup.classList.remove("visible");
      if (radarGridShapePopup) radarGridShapePopup.classList.remove("visible");
      scatterPointShapesPopup.classList.remove("visible");
      if (scatterPointSizePopup) scatterPointSizePopup.classList.remove("visible");
      if (scatterPointPaddingPopup) scatterPointPaddingPopup.classList.remove("visible");
      if (fontColorPanel) fontColorPanel.classList.remove("visible");
      document.querySelectorAll(".custom-select-panel.visible").forEach((panel) => panel.classList.remove("visible"));
      document.querySelectorAll(".custom-select-trigger.active").forEach((trigger) => trigger.classList.remove("active"));
    }

    function closeCustomSelectPanels() {
      document.querySelectorAll(".custom-select-panel.visible").forEach((panel) => panel.classList.remove("visible"));
      document.querySelectorAll(".custom-select-trigger.active").forEach((trigger) => trigger.classList.remove("active"));
    }

    function syncCustomSelect(select, trigger, panel) {
      if (!select || !trigger || !panel) return;
      const selectedOption = select.options[select.selectedIndex];
      const label = trigger.querySelector(".custom-select-trigger-label");
      if (label) label.textContent = selectedOption ? selectedOption.textContent : "";
      panel.querySelectorAll(".custom-select-option").forEach((optionButton) => {
        optionButton.classList.toggle("active", optionButton.dataset.value === select.value);
      });
    }

    function refreshCustomStyledSelect(select) {
      if (!select) return;
      const host = select.parentElement;
      const trigger = host && host.querySelector(".custom-select-trigger");
      const panel = document.querySelector(`.custom-select-panel[data-select-id="${select.id}"]`);
      syncCustomSelect(select, trigger, panel);
    }

    function initCustomStyledSelect(select, host) {
      if (!select || !host) return;
      host.classList.add("custom-select-host");

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "custom-select-trigger";
      trigger.innerHTML = '<span class="custom-select-trigger-label"></span><span class="custom-select-trigger-caret" aria-hidden="true">&#9662;</span>';

      const panel = document.createElement("div");
      panel.className = "custom-select-panel";
      panel.dataset.selectId = select.id;

      Array.from(select.options).forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "custom-select-option";
        optionButton.dataset.value = option.value;
        optionButton.textContent = option.textContent;
        optionButton.addEventListener("click", (e) => {
          e.stopPropagation();
          select.value = option.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          syncCustomSelect(select, trigger, panel);
          panel.classList.remove("visible");
          trigger.classList.remove("active");
        });
        panel.appendChild(optionButton);
      });

      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isVisible = panel.classList.contains("visible");
        closeCustomSelectPanels();
        if (!isVisible) {
          positionDropdown(host, panel);
          panel.classList.add("visible");
          trigger.classList.add("active");
          syncCustomSelect(select, trigger, panel);
        }
      });

      select.addEventListener("change", () => {
        syncCustomSelect(select, trigger, panel);
      });

      host.appendChild(trigger);
      document.body.appendChild(panel);
      syncCustomSelect(select, trigger, panel);
    }

    function setSelectedExport(type) {
      selectedExportType = type;
      btnExportSvg.classList.remove("active");
      btnExportPng.classList.remove("active");
      btnExportFigma.classList.remove("active");

      if (type === "svg") {
        btnExportSvg.classList.add("active");
        exportLabel.textContent = "Export SVG";
        return;
      }
      if (type === "png") {
        btnExportPng.classList.add("active");
        exportLabel.textContent = "Export PNG";
        return;
      }

      btnExportFigma.classList.add("active");
      exportLabel.textContent = "Add to Figma";
    }

    function runSelectedExport() {
      if (selectedExportType === "svg") {
        exportSVG(state.chartType);
        maybeShowExperienceModal();
        return;
      }
      if (selectedExportType === "png") {
        exportPNG(state.chartType);
        maybeShowExperienceModal();
        return;
      }
      exportToFigma({ animation: state.animationSettings }, () => {
        showCustomAlert(
          "Chart successfully sent to Figma canvas! Your visualization is now available in your Figma document.",
          'success',
          'Export Complete'
        );
        maybeShowExperienceModal();
      });
    }

    function setAiSelectedExport(type) {
      if (!aiExportLabel) return;
      aiSelectedExportType = type;
      if (aiBtnExportSvg) aiBtnExportSvg.classList.remove("active");
      if (aiBtnExportPng) aiBtnExportPng.classList.remove("active");
      if (aiBtnExportFigma) aiBtnExportFigma.classList.remove("active");

      if (type === "svg") {
        if (aiBtnExportSvg) aiBtnExportSvg.classList.add("active");
        aiExportLabel.textContent = "Export SVG";
        return;
      }
      if (type === "png") {
        if (aiBtnExportPng) aiBtnExportPng.classList.add("active");
        aiExportLabel.textContent = "Export PNG";
        return;
      }

      if (aiBtnExportFigma) aiBtnExportFigma.classList.add("active");
      aiExportLabel.textContent = "Add to Figma";
    }

    function runAiSelectedExport() {
      if (aiSelectedExportType === "svg") {
        exportSVG(state.chartType);
        maybeShowExperienceModal();
        return;
      }
      if (aiSelectedExportType === "png") {
        exportPNG(state.chartType);
        maybeShowExperienceModal();
        return;
      }
      exportToFigma({ animation: state.animationSettings }, () => {
        showCustomAlert(
          "Chart successfully sent to Figma canvas! Your visualization is now available in your Figma document.",
          "success",
          "Export Complete"
        );
        maybeShowExperienceModal();
      });
    }

    // ===== TOOLBAR MANAGEMENT =====
    const bgPickerState = { h: 220, s: 0.88, v: 0.10 };
    const fontPickerState = { h: 220, s: 0.20, v: 0.70 };
    const customPickerState = { h: 220, s: 0.88, v: 0.10 };

    function clamp01(v) {
      return Math.min(1, Math.max(0, v));
    }

    function rgbToHex(r, g, b) {
      const toHex = (n) => Math.max(0, Math.min(255, n)).toString(16).padStart(2, "0");
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    function hexToRgb(hex) {
      const h = (hex || "").replace("#", "");
      if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
      return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
      };
    }

    function hsvToRgb(h, s, v) {
      const c = v * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = v - c;
      let r = 0, g = 0, b = 0;
      if (h < 60) { r = c; g = x; b = 0; }
      else if (h < 120) { r = x; g = c; b = 0; }
      else if (h < 180) { r = 0; g = c; b = x; }
      else if (h < 240) { r = 0; g = x; b = c; }
      else if (h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }
      return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
      };
    }

    function rgbToHsv(r, g, b) {
      const rn = r / 255, gn = g / 255, bn = b / 255;
      const maxv = Math.max(rn, gn, bn);
      const minv = Math.min(rn, gn, bn);
      const d = maxv - minv;
      let h = 0;
      if (d !== 0) {
        if (maxv === rn) h = 60 * (((gn - bn) / d) % 6);
        else if (maxv === gn) h = 60 * ((bn - rn) / d + 2);
        else h = 60 * ((rn - gn) / d + 4);
      }
      if (h < 0) h += 360;
      const s = maxv === 0 ? 0 : d / maxv;
      const v = maxv;
      return { h, s, v };
    }

    function rgbToHsl(r, g, b) {
      const rn = r / 255, gn = g / 255, bn = b / 255;
      const maxv = Math.max(rn, gn, bn);
      const minv = Math.min(rn, gn, bn);
      const d = maxv - minv;
      const l = (maxv + minv) / 2;
      let h = 0;
      let s = 0;
      if (d !== 0) {
        s = d / (1 - Math.abs(2 * l - 1));
        if (maxv === rn) h = 60 * (((gn - bn) / d) % 6);
        else if (maxv === gn) h = 60 * ((bn - rn) / d + 2);
        else h = 60 * ((rn - gn) / d + 4);
      }
      if (h < 0) h += 360;
      return { h, s: isFinite(s) ? s : 0, l };
    }

    function hslToRgb(h, s, l) {
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l - c / 2;
      let r = 0, g = 0, b = 0;
      if (h < 60) { r = c; g = x; b = 0; }
      else if (h < 120) { r = x; g = c; b = 0; }
      else if (h < 180) { r = 0; g = c; b = x; }
      else if (h < 240) { r = 0; g = x; b = c; }
      else if (h < 300) { r = x; g = 0; b = c; }
      else { r = c; g = 0; b = x; }
      return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
      };
    }

    function getBgInputFormat() {
      return (bgColorFormat && bgColorFormat.value) || "hex";
    }

    function getBgInputPlaceholder(format) {
      if (format === "rgb") return "rgb(17, 19, 24)";
      if (format === "hsl") return "hsl(0, 0%, 7%)";
      return "#111318";
    }

    function formatColorForInput(hex, format) {
      const rgb = hexToRgb(hex);
      if (!rgb) return hex.toUpperCase();
      if (format === "rgb") return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      if (format === "hsl") {
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
      }
      return hex.toUpperCase();
    }

    function parseColorFromInput(raw, format) {
      const value = String(raw || "").trim();
      if (!value) return null;
      if (format === "hex") {
        const hex = value.startsWith("#") ? value : `#${value}`;
        return /^#([0-9a-fA-F]{6})$/.test(hex) ? hex : null;
      }
      if (format === "rgb") {
        const match = value.match(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i)
          || value.match(/^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*$/);
        if (!match) return null;
        const r = Math.max(0, Math.min(255, parseInt(match[1], 10)));
        const g = Math.max(0, Math.min(255, parseInt(match[2], 10)));
        const b = Math.max(0, Math.min(255, parseInt(match[3], 10)));
        return rgbToHex(r, g, b);
      }
      if (format === "hsl") {
        const match = value.match(/hsl\s*\(\s*(-?\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)/i)
          || value.match(/^\s*(-?\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*$/);
        if (!match) return null;
        let h = parseInt(match[1], 10);
        while (h < 0) h += 360;
        h = h % 360;
        const s = Math.max(0, Math.min(100, parseInt(match[2], 10))) / 100;
        const l = Math.max(0, Math.min(100, parseInt(match[3], 10))) / 100;
        const rgb = hslToRgb(h, s, l);
        return rgbToHex(rgb.r, rgb.g, rgb.b);
      }
      return null;
    }

    function updateBgInputField(hex) {
      if (!bgColorHexInput) return;
      const format = getBgInputFormat();
      bgColorHexInput.placeholder = getBgInputPlaceholder(format);
      bgColorHexInput.value = formatColorForInput(hex, format);
    }

    function renderFontPickerUi() {
      if (!fontColorCanvas || !fontColorCanvasCursor || !fontColorHue) return;
      const hueColor = hsvToRgb(fontPickerState.h, 1, 1);
      const hueHex = rgbToHex(hueColor.r, hueColor.g, hueColor.b);
      fontColorCanvas.style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueHex})`;
      fontColorHue.style.background = "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)";
      fontColorHue.value = Math.round(fontPickerState.h);
      const xPct = clamp01(fontPickerState.s) * 100;
      const yPct = (1 - clamp01(fontPickerState.v)) * 100;
      fontColorCanvasCursor.style.left = `${xPct}%`;
      fontColorCanvasCursor.style.top = `${yPct}%`;
    }

    function syncFontPickerFromHex(hex) {
      const rgb = hexToRgb(hex);
      if (!rgb) return;
      const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      fontPickerState.h = hsv.h;
      fontPickerState.s = hsv.s;
      fontPickerState.v = hsv.v;
      renderFontPickerUi();
    }

    function setFontColor(value) {
      const normalized = String(value || "").trim();
      if (!/^#([0-9a-fA-F]{6})$/.test(normalized)) return;
      const hex = normalized.toLowerCase();
      state.globalSettings.fontColor = hex;
      if (fontColorInput) fontColorInput.value = hex;
      if (fontColorValue) fontColorValue.value = hex.toUpperCase();
      if (fontColorSwatch) fontColorSwatch.style.background = hex;
      if (fontColorCode) fontColorCode.textContent = hex.toUpperCase();
      syncFontPickerFromHex(hex);
      updatePreview();
    }

    function renderBgPickerUi() {
      if (!bgColorCanvas || !bgColorCanvasCursor || !bgColorHue) return;
      const hueColor = hsvToRgb(bgPickerState.h, 1, 1);
      const hueHex = rgbToHex(hueColor.r, hueColor.g, hueColor.b);
      bgColorCanvas.style.background = `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueHex})`;
      bgColorHue.style.background = "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)";
      if (bgColorOpacity) {
        bgColorOpacity.style.background = `linear-gradient(to right, transparent, ${hueHex})`;
      }
      bgColorHue.value = Math.round(bgPickerState.h);
      const xPct = clamp01(bgPickerState.s) * 100;
      const yPct = (1 - clamp01(bgPickerState.v)) * 100;
      bgColorCanvasCursor.style.left = `${xPct}%`;
      bgColorCanvasCursor.style.top = `${yPct}%`;
    }

    function syncPickerFromHex(hex) {
      const rgb = hexToRgb(hex);
      if (!rgb) return;
      const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      bgPickerState.h = hsv.h;
      bgPickerState.s = hsv.s;
      bgPickerState.v = hsv.v;
      renderBgPickerUi();
    }

    function setGlobalBackgroundColor(value) {
      const normalized = String(value || "").trim();
      if (!/^#([0-9a-fA-F]{6})$/.test(normalized)) return;
      const hex = normalized.toLowerCase();
      state.globalSettings.backgroundColor = hex;
      globalBgColor.value = hex;
      if (globalBgSwatch) globalBgSwatch.style.background = hex;
      if (globalBgValue) globalBgValue.textContent = hex.toUpperCase();
      updateBgInputField(hex);
      state.opts[state.chartType].backgroundColor = hex;
      state.opts[state.chartType].backgroundOpacity = state.globalSettings.backgroundOpacity;
      state.opts[state.chartType].backgroundTransparent = false;
      syncPickerFromHex(hex);
      updatePreview();
    }

    // Update global toolbar values
    function updateGlobalToolbarValues() {
      globalBgColor.value = state.globalSettings.backgroundColor;
      if (globalBgSwatch) globalBgSwatch.style.background = state.globalSettings.backgroundColor;
      if (globalBgValue) globalBgValue.textContent = state.globalSettings.backgroundColor.toUpperCase();
      updateBgInputField(state.globalSettings.backgroundColor);
      if (bgColorOpacity) bgColorOpacity.value = String(Math.round(state.globalSettings.backgroundOpacity * 100));
      if (bgColorOpacityValue) bgColorOpacityValue.textContent = `${Math.round(state.globalSettings.backgroundOpacity * 100)}%`;
      syncPickerFromHex(state.globalSettings.backgroundColor);
      if (fontToggle) {
        fontToggle.classList.toggle("active", state.globalSettings.showText);
        fontToggle.textContent = state.globalSettings.showText ? "On" : "Off";
        fontToggle.setAttribute("aria-pressed", state.globalSettings.showText ? "true" : "false");
      }
      if (fontSizeBtn) {
        fontSizeBtn.classList.toggle("active", state.globalSettings.showText);
      }
      if (fontFamilySelect) fontFamilySelect.value = state.globalSettings.fontFamily;
      refreshCustomStyledSelect(fontFamilySelect);
      popupFontSize.value = state.globalSettings.fontSize;
      fontSizeValue.textContent = state.globalSettings.fontSize + "px";
      if (fontWeightSelect) fontWeightSelect.value = state.globalSettings.fontWeight;
      refreshCustomStyledSelect(fontWeightSelect);
      refreshCustomStyledSelect(bgColorFormat);
      if (fontColorInput) fontColorInput.value = state.globalSettings.fontColor;
      if (fontColorValue) fontColorValue.value = state.globalSettings.fontColor.toUpperCase();
      if (fontColorSwatch) fontColorSwatch.style.background = state.globalSettings.fontColor;
      if (fontColorCode) fontColorCode.textContent = state.globalSettings.fontColor.toUpperCase();
      syncFontPickerFromHex(state.globalSettings.fontColor);
      popupPadding.value = state.globalSettings.padding;
      paddingValue.textContent = state.globalSettings.padding + "%";
      popupBorderRadius.value = state.globalSettings.borderRadius;
      borderRadiusValue.textContent = state.globalSettings.borderRadius + "px";
      if (popupRadarLineWidth) popupRadarLineWidth.value = String(state.opts.radar.lineWidth || 2);
      if (radarLineWidthValue) radarLineWidthValue.textContent = `${state.opts.radar.lineWidth || 2}px`;
      if (popupRadarStartAngle) popupRadarStartAngle.value = String(state.opts.radar.startAngle ?? -90);
      if (radarStartAngleValue) radarStartAngleValue.textContent = `${state.opts.radar.startAngle ?? -90}°`;
      if (popupDotLineWidth) popupDotLineWidth.max = String(Math.max(1, state.opts.dot.pointSize || 6));
      if (popupDotLineWidth) popupDotLineWidth.value = String(Math.min(state.opts.dot.lineWidth || 2, state.opts.dot.pointSize || 6));
      if (dotLineWidthValue) dotLineWidthValue.textContent = `${Math.min(state.opts.dot.lineWidth || 2, state.opts.dot.pointSize || 6)}px`;

      if (state.globalSettings.showGrid) {
        document.getElementById("global-grid-toggle").classList.add("active");
      } else {
        document.getElementById("global-grid-toggle").classList.remove("active");
      }

      if (state.globalSettings.showAxes) {
        document.getElementById("global-axes-toggle").classList.add("active");
      } else {
        document.getElementById("global-axes-toggle").classList.remove("active");
      }
    }

    // Update toolbar for chart type
    function updateToolbarForChartType() {
      const gridAxesControls = document.getElementById('grid-axes-controls');
      const pieControls = document.getElementById('pie-controls');
      const lineControls = document.getElementById('line-controls');
      const radarControls = document.getElementById('radar-controls');
      const scatterControls = document.getElementById('scatter-controls');
      const paddingBtn = document.getElementById('padding-btn').closest('.toolbar-item');
      const borderRadiusBtn = document.getElementById('border-radius-btn').closest('.toolbar-item');
      const gridToggle = document.getElementById('global-grid-toggle').closest('.toolbar-item');
      const axesToggle = document.getElementById('global-axes-toggle').closest('.toolbar-item');
      const barOrientationControl = document.getElementById('bar-orientation-control');

      gridAxesControls.style.display = 'none';
      pieControls.style.display = 'none';
      lineControls.style.display = 'none';
      if (radarControls) radarControls.style.display = 'none';
      scatterControls.style.display = 'none';
      if (dotLineWidthControl) dotLineWidthControl.classList.add('hidden');
      paddingBtn.classList.remove('hidden');
      borderRadiusBtn.classList.remove('hidden');
      gridToggle.classList.remove('hidden');
      axesToggle.classList.remove('hidden');
      if (barOrientationControl) barOrientationControl.classList.add('hidden');

      if (state.chartType === 'line') {
        lineControls.style.display = 'flex';
        gridAxesControls.style.display = 'flex';
        paddingBtn.classList.add('hidden');
        borderRadiusBtn.classList.add('hidden');
        document.getElementById('line-area-toggle').classList.toggle('active', state.opts.line.areaFill);
        document.getElementById('line-curve-toggle').classList.toggle('active', state.opts.line.smooth);
        updatePointShapeIcon(state.opts.line.pointShape);
        syncShapePopupSelection('#point-shapes-popup', state.opts.line.pointShape);
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      } else if (state.chartType === 'radar') {
        if (radarControls) radarControls.style.display = 'flex';
        gridAxesControls.style.display = 'flex';
        paddingBtn.classList.add('hidden');
        borderRadiusBtn.classList.add('hidden');
        if (radarAreaToggle) radarAreaToggle.classList.toggle('active', state.opts.radar.areaFill);
        if (popupRadarLineWidth) popupRadarLineWidth.value = String(state.opts.radar.lineWidth || 2);
        if (radarLineWidthValue) radarLineWidthValue.textContent = `${state.opts.radar.lineWidth || 2}px`;
        if (popupRadarStartAngle) popupRadarStartAngle.value = String(state.opts.radar.startAngle ?? -90);
        if (radarStartAngleValue) radarStartAngleValue.textContent = `${state.opts.radar.startAngle ?? -90}°`;
        updateRadarPointShapeIcon(state.opts.radar.pointShape);
        syncShapePopupSelection('#point-shapes-popup', state.opts.radar.pointShape);
        updateRadarGridShapeIcon(state.opts.radar.gridShape);
        syncRadarGridShapePopupSelection(state.opts.radar.gridShape);
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      } else if (state.chartType === 'pie') {
        pieControls.style.display = 'flex';
        gridToggle.classList.add('hidden');
        axesToggle.classList.add('hidden');
        document.getElementById('pie-gap-toggle').classList.toggle('active', state.opts.pie.separated);
        document.getElementById('pie-donut-toggle').classList.toggle('active', state.opts.pie.donut > 0);
      } else if (state.chartType === 'scatter') {
        scatterControls.style.display = 'flex';
        gridAxesControls.style.display = 'flex';
        paddingBtn.classList.add('hidden');
        borderRadiusBtn.classList.add('hidden');
        const pointShape = state.opts.scatter.pointShape;
        updateScatterPointShapeIcon(pointShape);
        syncShapePopupSelection('#scatter-point-shapes-popup', pointShape);
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      } else if (state.chartType === 'dot') {
        scatterControls.style.display = 'flex';
        gridAxesControls.style.display = 'flex';
        paddingBtn.classList.add('hidden');
        borderRadiusBtn.classList.add('hidden');
        if (dotLineWidthControl) dotLineWidthControl.classList.remove('hidden');
        if (barOrientationControl) barOrientationControl.classList.remove('hidden');
        if (toolbarBarVerticalOption) toolbarBarVerticalOption.classList.toggle('active', !state.opts.dot.horizontal);
        if (toolbarBarHorizontalOption) toolbarBarHorizontalOption.classList.toggle('active', !!state.opts.dot.horizontal);
        const pointShape = state.opts.dot.pointShape;
        updateScatterPointShapeIcon(pointShape);
        syncShapePopupSelection('#scatter-point-shapes-popup', pointShape);
        if (popupDotLineWidth) popupDotLineWidth.max = String(Math.max(1, state.opts.dot.pointSize || 6));
        if (popupDotLineWidth) popupDotLineWidth.value = String(Math.min(state.opts.dot.lineWidth || 2, state.opts.dot.pointSize || 6));
        if (dotLineWidthValue) dotLineWidthValue.textContent = `${Math.min(state.opts.dot.lineWidth || 2, state.opts.dot.pointSize || 6)}px`;
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      } else if (state.chartType === 'bar') {
        gridAxesControls.style.display = 'flex';
        if (barOrientationControl) barOrientationControl.classList.remove('hidden');
        if (toolbarBarVerticalOption) toolbarBarVerticalOption.classList.toggle('active', !state.opts.bar.horizontal);
        if (toolbarBarHorizontalOption) toolbarBarHorizontalOption.classList.toggle('active', !!state.opts.bar.horizontal);
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      } else {
        gridAxesControls.style.display = 'flex';
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      }
    }

    // Update point shape icons
    function updatePointShapeIcon(shape) {
      const pointShapesBtn = document.getElementById('point-shapes-btn');
      if (!pointShapesBtn) return;
      let iconHTML = '';
      switch (shape) {
        case 'none':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5.877c1.648 0 3.155.604 4.315 1.6l.832-.83a.5.5 0 0 1 .707.707l-.832.83a6.623 6.623 0 0 1-9.337 9.337l-.831.833a.5.5 0 0 1-.707-.707l.83-.832A6.623 6.623 0 0 1 7.499.877M3.856 11.85a5.673 5.673 0 0 0 7.991-7.991zM7.5 1.826A5.674 5.674 0 0 0 1.826 7.5a5.65 5.65 0 0 0 1.325 3.642l7.99-7.99a5.65 5.65 0 0 0-3.642-1.325"/></svg>`;
          break;
        case 'square':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173M5 19V5z"/></svg>`;
          break;
        case 'triangle':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.98 10.762C8.608 5.587 9.92 3 12 3s3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572s.105-3.722 2.287-8.022z"/></svg>`;
          break;
        default:
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>`;
      }
      pointShapesBtn.innerHTML = iconHTML;
    }

    function pointShapeIconMarkup(shape) {
      switch (shape) {
        case 'none':
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5.877c1.648 0 3.155.604 4.315 1.6l.832-.83a.5.5 0 0 1 .707.707l-.832.83a6.623 6.623 0 0 1-9.337 9.337l-.831.833a.5.5 0 0 1-.707-.707l.83-.832A6.623 6.623 0 0 1 7.499.877M3.856 11.85a5.673 5.673 0 0 0 7.991-7.991zM7.5 1.826A5.674 5.674 0 0 0 1.826 7.5a5.65 5.65 0 0 0 1.325 3.642l7.99-7.99a5.65 5.65 0 0 0-3.642-1.325"/></svg>`;
        case 'square':
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173M5 19V5z"/></svg>`;
        case 'triangle':
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.98 10.762C8.608 5.587 9.92 3 12 3s3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572s.105-3.722 2.287-8.022z"/></svg>`;
        default:
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>`;
      }
    }

    function updateRadarPointShapeIcon(shape) {
      if (!radarPointShapesBtn) return;
      radarPointShapesBtn.innerHTML = pointShapeIconMarkup(shape);
    }

    function updateScatterPointShapeIcon(shape) {
      const scatterPointShapesBtn = document.getElementById('scatter-point-shapes-btn');
      if (!scatterPointShapesBtn) return;
      let iconHTML = '';
      switch (shape) {
        case 'square':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173M5 19V5z"/></svg>`;
          break;
        case 'triangle':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.98 10.762C8.608 5.587 9.92 3 12 3s3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572s.105-3.722 2.287-8.022z"/></svg>`;
          break;
        case 'diamond':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M4.511 13.542c-.681-.852-.681-2.232 0-3.084l6.256-7.82c.68-.85 1.785-.85 2.467 0l6.255 7.82c.681.852.681 2.232 0 3.084l-6.256 7.82c-.68.85-1.785.85-2.466 0z"/></svg>`;
          break;
        default:
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>`;
      }
      scatterPointShapesBtn.innerHTML = iconHTML;
    }

    function syncShapePopupSelection(popupSelector, shape) {
      const options = document.querySelectorAll(`${popupSelector} .shape-option`);
      options.forEach((opt) => {
        opt.classList.toggle('active', opt.dataset.shape === shape);
      });
    }

    function updateRadarGridShapeIcon(shape) {
      if (!radarGridShapeBtn) return;
      radarGridShapeBtn.innerHTML = shape === 'circle'
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3L19 7v10l-7 4l-7-4V7z"/><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" d="M12 7l3.5 2v6L12 17l-3.5-2V9z"/></svg>`;
    }

    function syncRadarGridShapePopupSelection(shape) {
      document.querySelectorAll('#radar-grid-shape-popup .shape-option').forEach((opt) => {
        opt.classList.toggle('active', opt.dataset.gridShape === shape);
      });
    }

    function deepClone(value) {
      return JSON.parse(JSON.stringify(value));
    }

    function createFreshDataRegistry() {
      return {
        activeSource: "default",
        default: Object.fromEntries(CHART_TYPES.map((type) => [type, getDefaultData(type)])),
        manual: {},
        json: {},
        chartColors: {},
        colorPresets: {},
        jsonDrafts: {},
        jsonInputMode: "editor",
      };
    }

    function saveDataRegistry() {
      if (!state.dataRegistry) return;
      try {
        localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(state.dataRegistry));
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
    }

    function loadDataRegistry() {
      const fallback = createFreshDataRegistry();
      try {
        const raw = localStorage.getItem(DATA_STORAGE_KEY);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        const next = {
          activeSource: parsed.activeSource === "manual" || parsed.activeSource === "json" ? parsed.activeSource : "default",
          default: {},
          manual: {},
          json: {},
          chartColors: parsed.chartColors && typeof parsed.chartColors === "object" ? parsed.chartColors : {},
          colorPresets: parsed.colorPresets && typeof parsed.colorPresets === "object" ? parsed.colorPresets : {},
          jsonDrafts: parsed.jsonDrafts && typeof parsed.jsonDrafts === "object" ? parsed.jsonDrafts : {},
          jsonInputMode: parsed.jsonInputMode === "upload" ? "upload" : "editor",
        };

        CHART_TYPES.forEach((type) => {
          next.default[type] = isValidDataForChart(parsed.default && parsed.default[type], type)
            ? parsed.default[type]
            : fallback.default[type];
          if (isValidDataForChart(parsed.manual && parsed.manual[type], type)) {
            next.manual[type] = parsed.manual[type];
          }
          if (isValidDataForChart(parsed.json && parsed.json[type], type)) {
            next.json[type] = parsed.json[type];
          }
        });

        return next;
      } catch (error) {
        return fallback;
      }
    }

    function syncCurrentSeriesFromData(data, chartType = state.chartType) {
      if (chartType === "bar" || chartType === "line" || chartType === "radar" || chartType === "scatter" || chartType === "dot") {
        const tableData = getTableDataFromChartData(data, chartType);
        currentSeries = Math.max(1, tableData[0] ? tableData[0].length - 1 : 1);
        return;
      }
      currentSeries = 1;
    }

    function ensureSourceDataset(sourceType, chartType, seedData = null) {
      if (!state.dataRegistry) {
        state.dataRegistry = loadDataRegistry();
      }

      if (sourceType === "default") {
        if (!isValidDataForChart(state.dataRegistry.default[chartType], chartType)) {
          state.dataRegistry.default[chartType] = getDefaultData(chartType);
          saveDataRegistry();
        }
        return state.dataRegistry.default[chartType];
      }

      const bucket = state.dataRegistry[sourceType];
      if (!bucket) return getDefaultData(chartType);

      if (!isValidDataForChart(bucket[chartType], chartType)) {
        const baseData = isValidDataForChart(seedData, chartType)
          ? deepClone(seedData)
          : deepClone(ensureSourceDataset("default", chartType));
        bucket[chartType] = baseData;
        if (sourceType === "json" && !state.dataRegistry.jsonDrafts[chartType]) {
          state.dataRegistry.jsonDrafts[chartType] = JSON.stringify(baseData, null, 2);
        }
        saveDataRegistry();
      }

      return bucket[chartType];
    }

    function getSourceData(sourceType, chartType, seedData = null) {
      return deepClone(ensureSourceDataset(sourceType, chartType, seedData));
    }

    function persistSourceData(sourceType, chartType, data, options = {}) {
      if (!isValidDataForChart(data, chartType)) return false;
      ensureSourceDataset(sourceType, chartType);
      state.dataRegistry[sourceType][chartType] = deepClone(data);
      if (sourceType === "json" && options.updateDraft !== false) {
        state.dataRegistry.jsonDrafts[chartType] = JSON.stringify(data, null, 2);
      }
      saveDataRegistry();
      return true;
    }

    function updateJsonDraft(rawText) {
      if (!state.dataRegistry) state.dataRegistry = loadDataRegistry();
      state.dataRegistry.jsonDrafts[state.chartType] = rawText;
      saveDataRegistry();
    }

    function syncDataSourceSelectorUi(sourceType) {
      const dataSourceSelect = document.getElementById("data-source-select");
      if (!dataSourceSelect) return;
      const sourceOptions = dataSourceSelect.querySelectorAll(".source-option");
      const selected = dataSourceSelect.querySelector(`.source-option[data-value="${sourceType}"]`);
      if (selected) {
        const nextName = selected.querySelector("span");
        const sourceName = dataSourceSelect.querySelector(".source-name");
        if (sourceName && nextName) sourceName.textContent = nextName.textContent;
      }
      sourceOptions.forEach((opt) => opt.classList.toggle("active", opt.dataset.value === sourceType));
      if (sourceRefreshBtn) {
        sourceRefreshBtn.classList.toggle("hidden", sourceType !== "default");
      }
    }

    function regenerateDefaultDataForCurrentChart() {
      const freshDefault = getDefaultData(state.chartType);
      persistSourceData("default", state.chartType, freshDefault, { updateDraft: false });
      state.dataSource = "default";
      state.dataRegistry.activeSource = "default";
      state.currentData = deepClone(freshDefault);
      syncCurrentSeriesFromData(state.currentData);
      saveDataRegistry();
      syncDataSourceSelectorUi("default");
      syncChartDataSourceTabs();
      showDataSection("default");
      updateModernDataTableForChartType();
      updateChartDataModalMeta();
      updatePreview();
      const dataSourceSelect = document.getElementById("data-source-select");
      if (dataSourceSelect) dataSourceSelect.classList.remove("active");
    }

    function updateChartDataModalMeta() {
      if (chartDataChartTypeBadge) {
        const label = {
          bar: "Bar Chart",
          pie: "Pie Chart",
          line: "Line Chart",
          radar: "Radar Chart",
          scatter: "Scatter Plot",
          dot: "Dot Plot",
          histogram: "Histogram",
        }[state.chartType] || "Chart";
        chartDataChartTypeBadge.textContent = label;
      }
      if (chartDataSourceBadge) {
        const sourceLabel = {
          default: "Default",
          manual: "Manual",
          json: "JSON",
        }[state.dataSource] || "Default";
        chartDataSourceBadge.textContent = sourceLabel;
      }
    }

    function syncChartDataSourceTabs() {
      const tabMap = {
        default: chartDataTabDefault,
        manual: chartDataTabManual,
        json: chartDataTabJson,
      };
      Object.entries(tabMap).forEach(([source, button]) => {
        if (!button) return;
        button.classList.toggle("active", source === state.dataSource);
        button.setAttribute("aria-selected", source === state.dataSource ? "true" : "false");
      });
      updateChartDataModalMeta();
    }

    function loadCurrentSourceData({ updatePreview = true } = {}) {
      state.currentData = getSourceData(state.dataSource, state.chartType, state.currentData);
      loadChartColorState(state.chartType, state.currentData);
      syncCurrentSeriesFromData(state.currentData);
      updateModernDataTableForChartType();
      if (state.dataSource === "manual") {
        renderManualDataForm();
      } else if (state.dataSource === "json") {
        updateJsonEditorFromCurrentData();
      }
      if (updatePreview) updatePreview();
    }

    function setActiveDataSource(sourceType, options = {}) {
      const nextSource = sourceType === "manual" || sourceType === "json" ? sourceType : "default";
      ensureSourceDataset(nextSource, state.chartType, state.currentData);
      state.dataSource = nextSource;
      state.dataRegistry.activeSource = nextSource;
      saveDataRegistry();
      closeCustomColorsPanel();
      syncDataSourceSelectorUi(nextSource);
      syncChartDataSourceTabs();
      showDataSection(nextSource);
      loadCurrentSourceData({ updatePreview: options.updatePreview !== false });
      if (options.openModal && chartDataModal) {
        chartDataModal.classList.add("visible");
      }
    }

    // ===== CHART TYPE AND DATA SOURCE MANAGEMENT =====
    // Handle chart type change
    function handleChartTypeChange(chartType) {
      closeCustomColorsPanel();
      state.chartType = chartType;
      ensureSourceDataset(state.dataSource, chartType);
      loadCurrentSourceData({ updatePreview: false });
      updateChartDataModalMeta();
      updateToolbarForChartType();
      updateColorPresetSelection(state.selectedColorPreset);
      syncAnimationStudioForChart(state, {
        animationPresetSelect,
        animationTriggerSelect,
        animationEasingSelect,
        animationDirectionSelect,
        animationDurationRange,
        animationDurationValue,
        animationPresetCopy,
        animationStateSummary,
        animationChartTypeLabel,
      }, chartType);
      updatePreview();
    }

    // Initialize chart type selector
    function initChartTypeSelector() {
      const chartSelect = document.getElementById('chart-type-select');
      const selectedOption = chartSelect.querySelector('.selected-option');
      const chartOptions = chartSelect.querySelectorAll('.chart-option');

      selectedOption.addEventListener('click', (e) => {
        e.stopPropagation();
        chartSelect.classList.toggle('active');
      });

      chartOptions.forEach(option => {
        option.addEventListener('click', () => {
          const chartType = option.dataset.value;
          const iconHTML = option.querySelector('.chart-icon').innerHTML;
          const name = option.querySelector('span').textContent;
          chartSelect.querySelector('.chart-icon').innerHTML = iconHTML;
          chartSelect.querySelector('.chart-name').textContent = name;
          chartOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
          chartSelect.classList.remove('active');
          handleChartTypeChange(chartType);
        });
      });

      document.addEventListener('click', () => {
        chartSelect.classList.remove('active');
      });
    }

    // Initialize data source selector
    function initDataSourceSelector() {
      const dataSourceSelect = document.getElementById('data-source-select');
      const selectedOption = dataSourceSelect.querySelector('.selected-option');
      const sourceOptions = dataSourceSelect.querySelectorAll('.source-option');

      selectedOption.addEventListener('click', (e) => {
        e.stopPropagation();
        dataSourceSelect.classList.toggle('active');
      });

      if (sourceRefreshBtn) {
        sourceRefreshBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          regenerateDefaultDataForCurrentChart();
        });
      }

      sourceOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          if (option.classList.contains('disabled')) {
            e.stopPropagation();
            return;
          }
          const sourceType = option.dataset.value;
          const name = option.querySelector('span').textContent;
          dataSourceSelect.querySelector('.source-name').textContent = name;
          sourceOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
          dataSourceSelect.classList.remove('active');
          handleDataSourceChange(sourceType);
        });
      });

      document.addEventListener('click', () => {
        dataSourceSelect.classList.remove('active');
      });
    }

    function setJsonInputMode(mode) {
      jsonInputMode = mode === "editor" ? "editor" : "upload";
      if (jsonModeUploadBtn) jsonModeUploadBtn.classList.toggle("active", jsonInputMode === "upload");
      if (jsonModeEditorBtn) jsonModeEditorBtn.classList.toggle("active", jsonInputMode === "editor");
      if (jsonUploadPanel) jsonUploadPanel.style.display = jsonInputMode === "upload" ? "block" : "none";
      if (jsonEditorPanel) jsonEditorPanel.style.display = jsonInputMode === "editor" ? "block" : "none";
      if (state.dataRegistry) {
        state.dataRegistry.jsonInputMode = jsonInputMode;
        saveDataRegistry();
      }
    }

    function updateJsonEditorFromCurrentData() {
      if (!jsonEditor) return;
      const draft = state.dataRegistry && state.dataRegistry.jsonDrafts
        ? state.dataRegistry.jsonDrafts[state.chartType]
        : "";
      try {
        jsonEditor.value = draft || JSON.stringify(getSourceData("json", state.chartType, state.currentData), null, 2);
      } catch (error) {
        jsonEditor.value = "";
      }
    }

    function showDataSection(section) {
      if (defaultDataSection) defaultDataSection.style.display = "none";
      if (manualDataSection) manualDataSection.style.display = "none";
      if (jsonDataSection) jsonDataSection.style.display = "none";
      if (section === "default" && defaultDataSection) defaultDataSection.style.display = "flex";
      if (section === "manual" && manualDataSection) manualDataSection.style.display = "flex";
      if (section === "json" && jsonDataSection) jsonDataSection.style.display = "flex";
    }

    function setChartDataModalEmptyState(isEmpty) {
      const toolbar = chartDataTabDefault && chartDataTabDefault.closest(".chart-data-modal-toolbar");
      if (chartDataEmptyState) chartDataEmptyState.style.display = isEmpty ? "grid" : "none";
      if (toolbar) toolbar.style.display = isEmpty ? "none" : "flex";
      if (defaultDataSection) defaultDataSection.style.display = isEmpty ? "none" : defaultDataSection.style.display;
      if (manualDataSection) manualDataSection.style.display = isEmpty ? "none" : manualDataSection.style.display;
      if (jsonDataSection) jsonDataSection.style.display = isEmpty ? "none" : jsonDataSection.style.display;
    }

    function openChartDataModalForCurrentSource() {
      const isAiWithoutChart = aiApp && !aiApp.hidden && !state.aiPreviewReady;
      if (isAiWithoutChart) {
        setChartDataModalEmptyState(true);
        chartDataModal.classList.add("visible");
        return;
      }
      setChartDataModalEmptyState(false);
      syncChartDataSourceTabs();
      showDataSection(state.dataSource);
      loadCurrentSourceData({ updatePreview: false });
      chartDataModal.classList.add("visible");
    }

    function parseJsonPayload(rawJson) {
      const parsed = JSON.parse(rawJson);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        if (parsed[state.chartType] && typeof parsed[state.chartType] === "object") {
          return parsed[state.chartType];
        }
        if (parsed.chartType && parsed.data && typeof parsed.data === "object") {
          const parsedChartType = String(parsed.chartType).toLowerCase();
          if (["bar", "pie", "line", "radar", "scatter", "dot", "histogram"].includes(parsedChartType) && parsedChartType !== state.chartType) {
            syncChartTypeSelectorUi(parsedChartType);
            handleChartTypeChange(parsedChartType);
          }
          return parsed.data;
        }
      }
      return parsed;
    }

    function applyJsonData(rawJson) {
      let parsedData;
      try {
        parsedData = parseJsonPayload(rawJson);
      } catch (error) {
        showCustomAlert(`Invalid JSON: ${error.message}`, "error", "JSON Parse Error");
        return false;
      }

      if (!isValidDataForChart(parsedData, state.chartType)) {
        const example = JSON.stringify(getDefaultData(state.chartType), null, 2);
        showCustomAlert(
          `JSON does not match ${state.chartType} chart format.\nExpected shape example:\n${example}`,
          "warning",
          "Invalid Chart Data"
        );
        return false;
      }

      state.currentData = parsedData;
      persistSourceData("json", state.chartType, parsedData);
      state.dataSource = "json";
      state.dataRegistry.activeSource = "json";
      saveDataRegistry();
      syncDataSourceSelectorUi("json");
      syncChartDataSourceTabs();
      updateModernDataTableForChartType();
      updatePreview();
      chartDataModal.classList.remove("visible");
      showCustomAlert("JSON data applied successfully.", "success", "Data Updated");
      return true;
    }

    // Handle data source change
    function handleDataSourceChange(sourceType) {
      switch (sourceType) {
        case 'default':
          setActiveDataSource("default");
          break;
        case 'manual':
          setActiveDataSource("manual");
          break;
        case 'csv':
        case 'excel':
        case 'sheets':
          alert('This feature is coming soon!');
          break;
        case 'json':
          setActiveDataSource("json");
          break;
      }
    }

    function getManualHeadersForChart(chartType, sampleRow) {
      const config = dataTableConfig[chartType];
      if (!config) return [];
      if ((chartType === "bar" || chartType === "line" || chartType === "radar" || chartType === "scatter" || chartType === "dot") && sampleRow && sampleRow.length > 2) {
        const headers = [config.headers[0]];
        for (let i = 1; i < sampleRow.length; i++) {
          headers.push(`Series ${i}`);
        }
        return headers;
      }
      return config.headers.slice();
    }

    function getManualTypesForChart(chartType, sampleRow) {
      const config = dataTableConfig[chartType];
      if (!config) return [];
      if ((chartType === "bar" || chartType === "line" || chartType === "radar" || chartType === "scatter" || chartType === "dot") && sampleRow && sampleRow.length > 2) {
        const firstType = chartType === "scatter" ? "number" : "text";
        const types = [firstType];
        for (let i = 1; i < sampleRow.length; i++) {
          types.push("number");
        }
        return types;
      }
      return config.types.slice();
    }

    function getManualSubtitle(chartType) {
      switch (chartType) {
        case "bar":
          return "Bar chart form: first column is category, remaining columns are series values.";
        case "pie":
          return "Pie chart form: add a label and value for each slice.";
        case "line":
          return "Line chart form: first column is x-axis label, remaining columns are series values.";
        case "radar":
          return "Radar chart form: first column is axis label, remaining columns are series values.";
        case "scatter":
          return "Scatter form: first column is X, remaining columns are series Y values.";
        case "dot":
          return "Dot plot form: first column is category, remaining columns are series values.";
        case "histogram":
          return "Histogram form: enter raw numeric values, one per row.";
        default:
          return "Enter values directly in the form below, then apply to update the chart.";
      }
    }

    function isManualSeriesSupported(chartType) {
      return chartType === "bar" || chartType === "line" || chartType === "radar" || chartType === "scatter" || chartType === "dot";
    }

    function getManualGridTemplate(columnCount) {
      if (columnCount <= 1) return "30px 1fr auto";
      return `30px ${Array.from({ length: columnCount }, (_, i) => (i === 0 ? "1.2fr" : "1fr")).join(" ")} auto`;
    }

    function renderManualDataForm() {
      if (!manualFormHead || !manualFormRows) return;
      const rows = getTableDataFromChartData(state.currentData, state.chartType);
      const config = dataTableConfig[state.chartType];
      if (!config) return;
      const fallbackRow = config.getDefaultRowData(0);
      const sampleRow = rows[0] || fallbackRow;
      const headers = getManualHeadersForChart(state.chartType, sampleRow);
      const types = getManualTypesForChart(state.chartType, sampleRow);
      if (manualInputSubtitle) {
        manualInputSubtitle.textContent = getManualSubtitle(state.chartType);
      }
      if (btnAddManualSeries) {
        btnAddManualSeries.style.display = isManualSeriesSupported(state.chartType) ? "inline-flex" : "none";
      }

      manualFormHead.style.gridTemplateColumns = getManualGridTemplate(headers.length);
      manualFormHead.innerHTML = `<span class="manual-col-label">#</span>${headers.map((header) => `<span class="manual-col-label">${header}</span>`).join("")}<span class="manual-col-label">Action</span>`;

      const rowMarkup = (row, rowIndex) => `
        <div class="manual-form-row" data-row="${rowIndex}" style="grid-template-columns: ${getManualGridTemplate(headers.length)};">
          <span class="manual-row-index">${rowIndex + 1}</span>
          ${headers.map((_, cellIndex) => {
            const type = types[cellIndex] || "text";
            const value = row[cellIndex] ?? "";
            const attrs = type === "number" ? 'step="1"' : "";
            return `<input type="${type}" value="${value}" data-cell="${cellIndex}" ${attrs}>`;
          }).join("")}
          <button class="manual-form-remove" type="button" data-row="${rowIndex}" title="Remove row">&times;</button>
        </div>
      `;

      const safeRows = rows.length ? rows : [fallbackRow];
      manualFormRows.innerHTML = safeRows.map((row, idx) => rowMarkup(row, idx)).join("");
    }

    function normalizeManualRowLength(row, targetLength, rowIndex) {
      const normalized = row.slice(0, targetLength);
      while (normalized.length < targetLength) {
        if (normalized.length === 0) {
          normalized.push(`Row ${rowIndex + 1}`);
        } else {
          normalized.push(Math.floor(Math.random() * 91) + 10);
        }
      }
      return normalized;
    }

    function addManualFormRow() {
      const config = dataTableConfig[state.chartType];
      if (!config) return;
      const currentRows = manualFormRows.querySelectorAll(".manual-form-row").length;
      if (currentRows >= config.maxRows) {
        showCustomAlert(
          `Maximum ${config.maxRows} rows allowed for ${state.chartType} charts.`,
          "warning",
          "Data Limit Reached"
        );
        return;
      }
      const currentTableData = readManualFormData();
      const defaultRow = config.getDefaultRowData(currentTableData.length);
      const targetLength = currentTableData[0] ? currentTableData[0].length : defaultRow.length;
      currentTableData.push(normalizeManualRowLength(defaultRow, targetLength, currentTableData.length));
      const nextData = convertTableDataToChartData(currentTableData, state.chartType);
      state.currentData = nextData;
      persistSourceData("manual", state.chartType, nextData, { updateDraft: false });
      renderManualDataForm();
    }

    function addManualFormSeries() {
      if (!isManualSeriesSupported(state.chartType)) return;
      const config = dataTableConfig[state.chartType];
      if (!config) return;

      const currentTableData = readManualFormData();
      if (!currentTableData.length) {
        addManualFormRow();
      }

      const rows = readManualFormData();
      const currentSeriesCount = Math.max(0, (rows[0] ? rows[0].length : 1) - 1);
      if (currentSeriesCount >= config.maxSeries) {
        showCustomAlert(
          `Maximum ${config.maxSeries} series allowed for ${state.chartType} charts.`,
          "warning",
          "Series Limit Reached"
        );
        return;
      }

      const expandedRows = rows.map((row, rowIndex) => {
        const next = row.slice();
        next.push(Math.floor(Math.random() * 91) + 10 + (rowIndex % 3));
        return next;
      });
      state.currentData = convertTableDataToChartData(expandedRows, state.chartType);
      persistSourceData("manual", state.chartType, state.currentData, { updateDraft: false });
      renderManualDataForm();
    }

    function readManualFormData() {
      const rows = Array.from(manualFormRows.querySelectorAll(".manual-form-row"));
      const tableData = rows.map((rowEl) => {
        const inputs = Array.from(rowEl.querySelectorAll("input"));
        return inputs.map((input) => input.value);
      });
      return tableData.filter((row) => row.some((cell) => String(cell).trim() !== ""));
    }

    // Apply manual data
    function applyManualData() {
      const tableData = readManualFormData();
      if (!tableData.length) {
        showCustomAlert(
          "Please add at least one row in the form before applying.",
          "warning",
          "No Data"
        );
        return;
      }

      state.currentData = convertTableDataToChartData(tableData, state.chartType);
      persistSourceData("manual", state.chartType, state.currentData, { updateDraft: false });
      state.dataSource = "manual";
      state.dataRegistry.activeSource = "manual";
      saveDataRegistry();
      syncDataSourceSelectorUi("manual");
      syncChartDataSourceTabs();
      if (isManualSeriesSupported(state.chartType)) {
        const detectedSeries = Math.max(1, tableData[0].length - 1);
        currentSeries = detectedSeries;
      }
      updateModernDataTableForChartType();
      updatePreview();
    }

    function resetDefaultDataForCurrentChart() {
      const freshDefault = getDefaultData(state.chartType);
      persistSourceData("default", state.chartType, freshDefault, { updateDraft: false });
      if (state.dataSource === "default") {
        loadCurrentSourceData();
      } else {
        updateChartDataModalMeta();
      }
    }

    // Initialize modern data table
    function initModernDataTable() {
      const addRowBtn = document.getElementById('btn-add-row-modern');
      const addSeriesBtn = document.getElementById('btn-add-series-modern');
      addRowBtn.addEventListener('click', addNewRow);
      addSeriesBtn.addEventListener('click', addNewSeries);
    }

    // Update modern data table for chart type
    function updateModernDataTableForChartType() {
      const config = dataTableConfig[state.chartType];
      const headersContainer = document.getElementById('modern-data-table-headers');
      const bodyContainer = document.getElementById('modern-data-table-body');
      const addSeriesBtn = document.getElementById('btn-add-series-modern');
      const seriesCount = document.getElementById('modern-series-count');
      
      if (config.maxSeries > 1) {
        addSeriesBtn.style.display = 'flex';
        seriesCount.style.display = 'block';
        seriesCount.textContent = `${currentSeries} series`;
        currentSeries = Math.min(currentSeries, config.maxSeries);
      } else {
        addSeriesBtn.style.display = 'none';
        seriesCount.style.display = 'none';
        currentSeries = 1;
      }
      
      headersContainer.innerHTML = generateModernTableHeaders(config);
      
      if (!state.currentData || !isValidDataForChart(state.currentData, state.chartType)) {
        const defaultRowCount = getDefaultRowCountForChartType(state.chartType);
        const defaultTableData = Array.from({ length: defaultRowCount }, (_, index) => 
          config.getDefaultRowData(index)
        );
        state.currentData = convertTableDataToChartData(defaultTableData, state.chartType);
      }
      
      bodyContainer.innerHTML = generateModernTableRows(getTableDataFromChartData(state.currentData, state.chartType), config);
      updateModernRowCount();
      updateModernDataLimits();
    }

    // Generate modern table headers
    function generateModernTableHeaders(config) {
      let headers = config.headers.slice();
      if (currentSeries > 1 && state.chartType !== 'pie') {
        const baseHeaders = headers.slice(0, 1);
        for (let i = 1; i <= currentSeries; i++) {
          baseHeaders.push(`Series ${i}`);
        }
        headers = baseHeaders;
      }
      headers.push('Actions');
      
      return `<tr>${headers.map((header, index) => {
        const isSeriesColumn = currentSeries > 1 && state.chartType !== 'pie' && index > 0 && index < headers.length - 1;
        if (isSeriesColumn) {
          return `<th><div class="series-header-modern"><span>${header}</span><button class="delete-series-btn" data-series="${index}" title="Delete series"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/></svg></button></div></th>`;
        } else {
          return `<th>${header}</th>`;
        }
      }).join('')}</tr>`;
    }

    // Generate modern table rows
    function generateModernTableRows(data, config) {
      return data.map((row, rowIndex) => {
        let actualRowData = row;
        if (currentSeries > 1 && state.chartType !== 'pie' && row.length < currentSeries + 1) {
          actualRowData = [row[0]];
          for (let i = 1; i <= currentSeries; i++) {
            actualRowData.push(row[i] || '');
          }
        }
        
        return `<tr data-row="${rowIndex}">${actualRowData.map((cell, cellIndex) => {
          let inputType = 'text';
          if (state.chartType === 'pie') {
            inputType = cellIndex === 0 ? 'text' : 'number';
          } else if (currentSeries > 1 && state.chartType !== 'pie') {
            inputType = cellIndex === 0
              ? (state.chartType === 'scatter' ? 'number' : 'text')
              : 'number';
          } else {
            inputType = config.types[cellIndex] || 'text';
          }
          
          if (inputType === 'color') {
            return `<td class="color-cell-modern"><div class="color-preview-modern" style="background: ${cell}"></div><input type="color" value="${cell}" data-cell="${cellIndex}" title="Choose color"></td>`;
          } else {
            return `<td><input type="${inputType}" value="${cell}" data-cell="${cellIndex}" ${inputType === 'number' ? 'min="0" step="1"' : ''}></td>`;
          }
        }).join('')}<td class="row-actions-modern"><button class="delete-row-btn" data-row="${rowIndex}" title="Delete row"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/></svg></button></td></tr>`;
      }).join('');
    }

    // Update modern row count
    function updateModernRowCount() {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      document.getElementById('modern-row-count').textContent = `${currentData.length} row${currentData.length !== 1 ? 's' : ''}`;
    }

    // Update modern data limits
    function updateModernDataLimits() {
      const config = dataTableConfig[state.chartType];
      const seriesText = config.maxSeries > 1 ? `, ${currentSeries}/${config.maxSeries} series` : '';
      document.getElementById('modern-data-limits').textContent = `Max: ${config.maxRows} rows${seriesText}`;
      const seriesCount = document.getElementById('modern-series-count');
      if (config.maxSeries > 1) {
        seriesCount.textContent = `${currentSeries} series`;
      }
    }

    // Setup modern table event listeners
    function setupModernTableEventListeners() {
      const table = document.getElementById('modern-data-table');
      table.addEventListener('focusin', (e) => {
          if (e.target.matches('input')) {
            const cell = e.target.closest('td');
            cell.classList.add('editing');
          }
        });
        
        table.addEventListener('focusout', (e) => {
          if (e.target.matches('input')) {
            const cell = e.target.closest('td');
            cell.classList.remove('editing');
          }
        });

      table.addEventListener('input', (e) => {
        if (e.target.matches('input')) {
          const row = e.target.closest('tr');
          const rowIndex = parseInt(row.dataset.row);
          const cellIndex = parseInt(e.target.dataset.cell);
          const newValue = e.target.value;
          handleCellEdit(rowIndex, cellIndex, newValue);
        }
      });
      
      table.addEventListener('click', (e) => {
        if (e.target.matches('.delete-row-btn') || e.target.closest('.delete-row-btn')) {
          const btn = e.target.matches('.delete-row-btn') ? e.target : e.target.closest('.delete-row-btn');
          const rowIndex = parseInt(btn.dataset.row);
          deleteRow(rowIndex);
        }
        if (e.target.matches('.delete-series-btn') || e.target.closest('.delete-series-btn')) {
          const btn = e.target.matches('.delete-series-btn') ? e.target : e.target.closest('.delete-series-btn');
          const seriesIndex = parseInt(btn.dataset.series);
          deleteSeries(seriesIndex);
        }
      });
    }

    // Data table operations
    function addNewRow() {
      const config = dataTableConfig[state.chartType];
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      if (currentData.length >= config.maxRows) {
        showCustomAlert(
          `Maximum ${config.maxRows} rows allowed for ${state.chartType} charts. Consider simplifying your data or using a different chart type.`,
          'warning',
          'Data Limit Reached'
        );
        return;
      }
      
      // Generate random default data for the new row
      const newRow = config.getDefaultRowData(currentData.length);
      
      currentData.push(newRow);
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      persistSourceData(state.dataSource, state.chartType, state.currentData, { updateDraft: state.dataSource === "json" });
      updateModernDataTableForChartType();
      updatePreview();
    }

    function addNewSeries() {
      const config = dataTableConfig[state.chartType];
      if (currentSeries >= config.maxSeries) {
        showCustomAlert(
          `Maximum ${config.maxSeries} data series allowed for ${state.chartType} charts. You can create multiple charts for additional series.`,
          'warning',
          'Series Limit Reached'
        );
        return;
      }
      
      currentSeries++;
      
      // Update existing data structure to include new series with random values
      const currentTableData = getTableDataFromChartData(state.currentData, state.chartType);
      
      // Add new series column with random data to each row
      currentTableData.forEach(row => {
        const randomValue = Math.floor(Math.random() * 91) + 10;
        row.push(randomValue);
      });
      
      state.currentData = convertTableDataToChartData(currentTableData, state.chartType);
      persistSourceData(state.dataSource, state.chartType, state.currentData, { updateDraft: state.dataSource === "json" });
      updateModernDataTableForChartType();
      updatePreview();
    }

    function deleteRow(rowIndex) {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      if (currentData.length <= 1) {
        showCustomAlert(
          'Cannot delete the last row. Charts require at least one data point to display properly.',
          'warning',
          'Data Required'
        );
        return;
      }
      currentData.splice(rowIndex, 1);
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      persistSourceData(state.dataSource, state.chartType, state.currentData, { updateDraft: state.dataSource === "json" });
      updateModernDataTableForChartType();
      updatePreview();
    }

    function deleteSeries(seriesIndex) {
      if (currentSeries <= 1) {
        showCustomAlert(
          'Cannot delete the last series. Charts require at least one data series to display properly.',
          'warning',
          'Series Required'
        );
        return;
      }
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      currentData.forEach(row => { row.splice(seriesIndex, 1); });
      currentSeries--;
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      persistSourceData(state.dataSource, state.chartType, state.currentData, { updateDraft: state.dataSource === "json" });
      updateModernDataTableForChartType();
      updatePreview();
    }

    function handleCellEdit(rowIndex, cellIndex, newValue) {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      if (currentData[rowIndex]) {
        currentData[rowIndex][cellIndex] = newValue;
        state.currentData = convertTableDataToChartData(currentData, state.chartType);
        persistSourceData(state.dataSource, state.chartType, state.currentData, { updateDraft: state.dataSource === "json" });
        updatePreview();
      }
    }

    // ===== CONTEXT TOOLBAR HELPER FUNCTIONS =====

    // Show slider popup for numeric controls
    function showSliderPopup(type, button, currentValue) {
      closeAllSliderPopups();
      
      let popup, slider, valueDisplay;
      
      switch(type) {
        case 'border-radius':
          popup = document.getElementById('border-radius-popup-toolbar');
          slider = document.getElementById('popup-border-radius-toolbar');
          valueDisplay = document.getElementById('border-radius-value-toolbar');
          break;
        case 'padding':
          popup = document.getElementById('padding-popup-toolbar');
          slider = document.getElementById('popup-padding-toolbar');
          valueDisplay = document.getElementById('padding-value-toolbar');
          break;
        case 'slice-padding':
          popup = document.getElementById('slice-padding-popup-toolbar');
          slider = document.getElementById('popup-slice-padding-toolbar');
          valueDisplay = document.getElementById('slice-padding-value-toolbar');
          break;
      }
      
      if (popup && slider && valueDisplay) {
        slider.value = currentValue;
        valueDisplay.textContent = currentValue + (type === 'padding' || type === 'slice-padding' ? '%' : 'px');
        
        positionSliderPopup(button, popup);
        popup.classList.add('visible');
      }
    }

    // Position slider popup relative to icon button
    function positionSliderPopup(button, popup) {
      const rect = button.getBoundingClientRect();
      const toolbarRect = contextToolbar.getBoundingClientRect();
      
      popup.style.position = 'fixed';
      popup.style.left = (rect.left + rect.width / 2 - popup.offsetWidth / 2) + 'px';
      popup.style.top = (toolbarRect.bottom + 5) + 'px';
    }

    // Close all slider popups
    function closeAllSliderPopups() {
      document.querySelectorAll('.slider-popup').forEach(popup => {
        popup.classList.remove('visible');
      });
    }

    // Toggle bar value display
    function toggleBarValueDisplay(button) {
      if (state.selectedElement && state.chartType === 'bar') {
        const isActive = button.classList.toggle('active');
        state.selectedElement.setAttribute('data-show-value', isActive.toString());
        updatePreview();
      }
    }

    // Toggle pie label display
    function togglePieLabelDisplay(button) {
      if (state.selectedElement && state.chartType === 'pie') {
        const isActive = button.classList.toggle('active');
        state.selectedElement.setAttribute('data-show-label', isActive.toString());
        updatePreview();
      }
    }

    // Store element-specific data
    let currentElementData = { type: null, index: null, originalStyles: null };

    // Listen for user data from Figma
    bindUserDataListener((userData) => {
      latestUserData = userData || null;
      applyStoredUserProfile();
    });

    // ===== THEME MANAGEMENT =====
    const THEME_STORAGE_KEY = "graph_generator_theme";
    const GLOBAL_SETTINGS_STORAGE_KEY = "graph_generator_global_settings_v1";
    let currentTheme = "light";

    function getStoredTheme() {
      try {
        return localStorage.getItem(THEME_STORAGE_KEY);
      } catch (error) {
        return null;
      }
    }

    function storeTheme(theme) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
    }

    function normalizeStoredGlobalSettings(value) {
      const fallback = { ...state.globalSettings };
      if (!value || typeof value !== "object") return fallback;
      const normalizedBackgroundColor = normalizeColorValue(value.backgroundColor);
      const normalizedFontColor = normalizeColorValue(value.fontColor);
      const normalizedFontFamily = typeof value.fontFamily === "string" && value.fontFamily.trim()
        ? value.fontFamily.trim()
        : fallback.fontFamily;
      const normalizedFontWeight = typeof value.fontWeight === "string" && value.fontWeight.trim()
        ? value.fontWeight.trim()
        : fallback.fontWeight;
      return {
        ...fallback,
        ...value,
        backgroundColor: normalizedBackgroundColor || fallback.backgroundColor,
        backgroundOpacity: Number.isFinite(Number(value.backgroundOpacity))
          ? Math.max(0, Math.min(1, Number(value.backgroundOpacity)))
          : fallback.backgroundOpacity,
        showGrid: typeof value.showGrid === "boolean" ? value.showGrid : fallback.showGrid,
        showAxes: typeof value.showAxes === "boolean" ? value.showAxes : fallback.showAxes,
        showText: typeof value.showText === "boolean" ? value.showText : fallback.showText,
        fontFamily: normalizedFontFamily,
        fontSize: Number.isFinite(Number(value.fontSize))
          ? Math.max(8, Math.min(48, parseInt(value.fontSize, 10)))
          : fallback.fontSize,
        fontWeight: normalizedFontWeight,
        fontColor: normalizedFontColor || fallback.fontColor,
        padding: Number.isFinite(Number(value.padding))
          ? Math.max(0, Math.min(24, parseInt(value.padding, 10)))
          : fallback.padding,
        borderRadius: Number.isFinite(Number(value.borderRadius))
          ? Math.max(0, Math.min(28, parseInt(value.borderRadius, 10)))
          : fallback.borderRadius,
        previewPanelFill: typeof value.previewPanelFill === "boolean" ? value.previewPanelFill : fallback.previewPanelFill,
        profileSyncEnabled: typeof value.profileSyncEnabled === "boolean" ? value.profileSyncEnabled : fallback.profileSyncEnabled,
        dotLineUseGradient: typeof value.dotLineUseGradient === "boolean" ? value.dotLineUseGradient : fallback.dotLineUseGradient,
        defaultLayoutMode: normalizeDefaultLayoutMode(value.defaultLayoutMode),
      };
    }

    async function getStoredGlobalSettings() {
      const pluginSettings = await getPluginGlobalSettings();
      if (pluginSettings) {
        return normalizeStoredGlobalSettings(pluginSettings);
      }
      try {
        const raw = localStorage.getItem(GLOBAL_SETTINGS_STORAGE_KEY);
        if (!raw) return null;
        return normalizeStoredGlobalSettings(JSON.parse(raw));
      } catch (error) {
        return null;
      }
    }

    async function storeGlobalSettings(settings) {
      const normalized = normalizeStoredGlobalSettings(settings);
      const savedInPlugin = await savePluginGlobalSettings(normalized);
      try {
        localStorage.setItem(
          GLOBAL_SETTINGS_STORAGE_KEY,
          JSON.stringify(normalized)
        );
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
      return savedInPlugin;
    }

    async function clearStoredGlobalSettings() {
      await savePluginGlobalSettings(null);
      try {
        localStorage.removeItem(GLOBAL_SETTINGS_STORAGE_KEY);
        localStorage.removeItem(THEME_STORAGE_KEY);
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
    }

    function updateThemeToggleLabel() {
      const label = currentTheme === "dark" ? "Light Mode" : "Dark Mode";
      if (themeToggleState) themeToggleState.textContent = label;
      if (aiThemeToggleState) aiThemeToggleState.textContent = label;
    }

    function syncSettingsThemeSelection() {
      if (settingsThemeToggle) {
        settingsThemeToggle.checked = pendingTheme === "dark";
      }
      if (settingsThemeToggleLabel) {
        settingsThemeToggleLabel.textContent = pendingTheme === "dark" ? "On" : "Off";
      }
    }

    function normalizeDefaultLayoutMode(value) {
      return /^layout-option-[1-4]$/.test(String(value || "")) ? value : "layout-option-1";
    }

    function applyDefaultLayoutMode(layoutMode) {
      if (!defaultApp) return;
      const normalized = normalizeDefaultLayoutMode(layoutMode);
      defaultApp.classList.remove("layout-option-1", "layout-option-2", "layout-option-3", "layout-option-4");
      defaultApp.classList.add(normalized);
      syncHeaderLayoutSelection();
    }

    function syncHeaderLayoutSelection() {
      const activeLayoutMode = normalizeDefaultLayoutMode(state.globalSettings.defaultLayoutMode);
      let activeIconMarkup = "";
      headerLayoutOptions.forEach((option) => {
        const isActive = option.dataset.layoutOption === activeLayoutMode;
        option.classList.toggle("active", isActive);
        option.setAttribute("aria-pressed", isActive ? "true" : "false");
        if (isActive) {
          const icon = option.querySelector(".layout-option-icon");
          activeIconMarkup = icon ? icon.innerHTML : "";
        }
      });
    }

    function syncSettingsLayoutSelection() {
      const draft = getSettingsDraft();
      const activeLayoutMode = normalizeDefaultLayoutMode(draft.defaultLayoutMode);
      if (settingsLayoutSelect) {
        settingsLayoutSelect.value = activeLayoutMode;
        refreshCustomStyledSelect(settingsLayoutSelect);
      }
    }

    function getSettingsDraft() {
      return pendingGlobalSettings || state.globalSettings;
    }

    function applyStoredUserProfile() {
      const profileEnabled = state.globalSettings.profileSyncEnabled !== false;
      if (settingsProfileName) {
        if (!profileEnabled) {
          settingsProfileName.textContent = "Disabled";
        } else if (latestUserData && latestUserData.name) {
          settingsProfileName.textContent = latestUserData.name;
        } else {
          settingsProfileName.textContent = "Loading...";
        }
      }
      if (!profileEnabled) {
        updateUserProfile({ name: "Profile Hidden", photoUrl: null });
        return;
      }
      if (latestUserData) {
        updateUserProfile(latestUserData);
      }
    }

    function requestUserProfileIfEnabled() {
      if (state.globalSettings.profileSyncEnabled === false) {
        applyStoredUserProfile();
        return;
      }
      requestUserData();
    }

    function applyPreviewPanelFill(enabled) {
      if (!defaultApp) return;
      defaultApp.classList.toggle("preview-panel-fill-disabled", enabled === false);
    }

    function syncGeneralSettingsSummary() {
      const draft = getSettingsDraft();
      if (settingsProfileName) {
        if (draft.profileSyncEnabled === false) {
          settingsProfileName.textContent = "Disabled";
        } else if (latestUserData && latestUserData.name) {
          settingsProfileName.textContent = latestUserData.name;
        } else {
          settingsProfileName.textContent = "Loading...";
        }
      }
    }

    function syncSettingsControlValues() {
      const draft = getSettingsDraft();
      if (settingsPreviewFillToggle) settingsPreviewFillToggle.checked = !!draft.previewPanelFill;
      if (settingsPreviewFillToggleLabel) settingsPreviewFillToggleLabel.textContent = draft.previewPanelFill ? "On" : "Off";
      if (settingsProfileToggle) settingsProfileToggle.checked = draft.profileSyncEnabled !== false;
      if (settingsProfileToggleLabel) settingsProfileToggleLabel.textContent = draft.profileSyncEnabled !== false ? "On" : "Off";
      syncSettingsLayoutSelection();
    }

    function getChartTypeLabel(chartType) {
      const labels = {
        bar: "Bar Chart",
        pie: "Pie Chart",
        line: "Line Chart",
        radar: "Radar Chart",
        scatter: "Scatter Plot",
        dot: "Dot Plot",
        histogram: "Histogram",
      };
      return labels[chartType] || chartType;
    }

    function getDataSourceLabel(source) {
      const labels = {
        default: "Default",
        manual: "Manual",
        json: "JSON",
      };
      return labels[source] || source;
    }

    function setActiveSettingsPanel(panelKey) {
      activeSettingsPanel = panelKey;
      settingsNavItems.forEach((item) => {
        item.classList.toggle("active", item.dataset.settingsPanel === panelKey);
      });
      settingsDetailPanels.forEach((panel) => {
        const isActive = panel.dataset.settingsPanelContent === panelKey;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    }

    function setTheme(theme) {
      currentTheme = theme === "dark" ? "dark" : "light";
      if (currentTheme === "dark") {
        applyDarkTheme();
      } else {
        applyLightTheme();
      }
      storeTheme(currentTheme);
      updateThemeToggleLabel();
      updatePreview();
    }

    function toggleTheme() {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    }

    function getExperienceRemindUntil() {
      try {
        return parseInt(localStorage.getItem(EXPERIENCE_REMIND_KEY) || "0", 10) || 0;
      } catch (error) {
        return 0;
      }
    }

    function setExperienceRemindLater() {
      const remindUntil = Date.now() + (24 * 60 * 60 * 1000);
      try {
        localStorage.setItem(EXPERIENCE_REMIND_KEY, String(remindUntil));
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
    }

    function maybeShowExperienceModal() {
      if (!experienceModal) return;
      const remindUntil = getExperienceRemindUntil();
      if (Date.now() < remindUntil) return;
      experienceModal.classList.add("visible");
    }

    function hideExperienceModal() {
      if (!experienceModal) return;
      experienceModal.classList.remove("visible");
    }

    function syncChartTypeSelectorUi(chartType) {
      const chartSelect = document.getElementById("chart-type-select");
      if (!chartSelect) return;
      const chartOptions = chartSelect.querySelectorAll(".chart-option");
      const selected = chartSelect.querySelector(`.chart-option[data-value="${chartType}"]`);
      if (!selected) return;
      const selectedIcon = chartSelect.querySelector(".selected-option .chart-icon");
      const selectedName = chartSelect.querySelector(".selected-option .chart-name");
      const nextIcon = selected.querySelector(".chart-icon");
      const nextName = selected.querySelector("span");
      if (selectedIcon && nextIcon) selectedIcon.innerHTML = nextIcon.innerHTML;
      if (selectedName && nextName) selectedName.textContent = nextName.textContent;
      chartOptions.forEach((opt) => opt.classList.toggle("active", opt === selected));
    }

    function appendAiChatMessage(role, text) {
      if (!aiChatMessages) return;
      const message = document.createElement("div");
      message.className = `ai-chat-message ${role}`;
      message.textContent = text;
      aiChatMessages.appendChild(message);
      syncAiChatLayout();
      aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }

    function syncAiChatLayout() {
      if (!aiChatShell || !aiChatMessages) return;
      aiChatShell.classList.toggle("has-conversation", aiChatMessages.childElementCount > 0);
    }

    function ensureAiChatSeedMessages() {
      syncAiChatLayout();
    }

    function clearAiPreview() {
      const aiSvgHost = document.getElementById("ai-svg-host");
      if (!aiSvgHost) return;
      aiSvgHost.innerHTML = "";
    }

    function syncAiPlaygroundDataAccess() {
      if (!aiBtnOpenDataModal) return;
      aiBtnOpenDataModal.disabled = false;
      aiBtnOpenDataModal.setAttribute("aria-disabled", "false");
      aiBtnOpenDataModal.title = "";
    }

    function parseChartTypeFromPrompt(prompt) {
      const normalized = prompt.toLowerCase();
      if (normalized.includes("pie") || normalized.includes("donut")) return "pie";
      if (normalized.includes("line")) return "line";
      if (normalized.includes("radar")) return "radar";
      if (normalized.includes("scatter")) return "scatter";
      if (normalized.includes("dot plot") || normalized.includes("dotplot") || normalized.includes("dot")) return "dot";
      if (normalized.includes("histogram")) return "histogram";
      if (normalized.includes("bar")) return "bar";
      return null;
    }

    function handleAiPrompt(prompt) {
      state.aiPreviewReady = true;
      syncAiPlaygroundDataAccess();
      const requestedChartType = parseChartTypeFromPrompt(prompt);
      if (requestedChartType) {
        syncChartTypeSelectorUi(requestedChartType);
        handleChartTypeChange(requestedChartType);
      } else {
        updatePreview();
      }

      if (requestedChartType) {
        appendAiChatMessage(
          "assistant",
          `Generated a ${requestedChartType} chart on the right panel. You can refine it with another prompt.`
        );
        return;
      }

      appendAiChatMessage(
        "assistant",
        "Graph generated on the right panel. Mention a chart type like bar, pie, line, radar, scatter, dot, or histogram to switch."
      );
    }

    function enterAiPlaygroundMode() {
      if (!defaultApp || !aiApp) return;
      defaultApp.hidden = true;
      defaultApp.style.display = "none";
      aiApp.hidden = false;
      aiApp.style.display = "grid";
      if (dropdownMenu) dropdownMenu.classList.remove("visible");
      if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
      closeAllDropdowns();
      ensureAiChatSeedMessages();
      if (aiChatInput) aiChatInput.focus();
      syncAiChatLayout();
      state.aiPreviewReady = false;
      syncAiPlaygroundDataAccess();
      clearAiPreview();
    }

    function exitAiPlaygroundMode() {
      if (!defaultApp || !aiApp) return;
      aiApp.hidden = true;
      aiApp.style.display = "none";
      defaultApp.hidden = false;
      defaultApp.style.display = "grid";
      if (dropdownMenu) dropdownMenu.classList.remove("visible");
      if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
      closeAllDropdowns();
      updateToolbarForChartType();
      updatePreview();
    }

    function enterAnimationStudioMode() {
      syncAnimationStudioForChart(state, {
        animationPresetSelect,
        animationTriggerSelect,
        animationEasingSelect,
        animationDirectionSelect,
        animationDurationRange,
        animationDurationValue,
        animationPresetCopy,
        animationStateSummary,
        animationChartTypeLabel,
      }, state.chartType);
      openAnimationStudio(
        { animationApp, defaultApp, aiApp, dropdownMenu, aiDropdownMenu },
        { closeAllDropdowns, updatePreview }
      );
      window.requestAnimationFrame(() => {
        playAnimationPreview();
      });
    }

    function exitAnimationStudioMode() {
      resetAnimationPreviewPlayback();
      closeAnimationStudio(
        { animationApp, defaultApp, aiApp, dropdownMenu, aiDropdownMenu },
        { closeAllDropdowns, updateToolbarForChartType, updatePreview }
      );
    }

    function enterSettingsMode(sourceView = "default", panelKey = "general") {
      if (!settingsApp) return;
      settingsReturnView = sourceView === "ai" ? "ai" : "default";
      pendingGlobalSettings = { ...state.globalSettings };
      pendingTheme = currentTheme;
      syncSettingsThemeSelection();
      syncGeneralSettingsSummary();
      syncSettingsControlValues();
      setActiveSettingsPanel(panelKey);
      if (defaultApp) {
        defaultApp.hidden = true;
        defaultApp.style.display = "none";
      }
      if (aiApp) {
        aiApp.hidden = true;
        aiApp.style.display = "none";
      }
      if (animationApp) {
        animationApp.hidden = true;
        animationApp.style.display = "none";
      }
      settingsApp.hidden = false;
      settingsApp.style.display = "grid";
      if (dropdownMenu) dropdownMenu.classList.remove("visible");
      if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
      closeAllDropdowns();
    }

    function exitSettingsMode() {
      if (!settingsApp) return;
      settingsApp.hidden = true;
      settingsApp.style.display = "none";
      pendingGlobalSettings = null;
      pendingTheme = currentTheme;
      if (settingsReturnView === "ai" && aiApp) {
        aiApp.hidden = false;
        aiApp.style.display = "grid";
        syncAiChatLayout();
        return;
      }
      if (defaultApp) {
        defaultApp.hidden = false;
        defaultApp.style.display = "grid";
      }
      updateToolbarForChartType();
      updatePreview();
    }
    

    // ===== EVENT LISTENERS SETUP =====
    // Setup event listeners
    function setupEventListeners() {
      // Hamburger Menu
      const hamburgerBtn = hamburgerMenu.querySelector(".hamburger-btn");
      hamburgerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("visible");
      });
      if (aiHamburgerMenu) {
        const aiHamburgerBtn = aiHamburgerMenu.querySelector(".hamburger-btn");
        aiHamburgerBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          aiDropdownMenu.classList.toggle("visible");
        });
      }
      document.addEventListener("click", () => {
        dropdownMenu.classList.remove("visible");
        if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
      });

      // Theme Toggle
      if (themeToggle) {
        themeToggle.addEventListener("click", (e) => {
          e.preventDefault();
          toggleTheme();
        });
      }
      if (aiThemeToggle) {
        aiThemeToggle.addEventListener("click", (e) => {
          e.preventDefault();
          toggleTheme();
        });
      }

      // Info Modal
      if (infoBtn) {
        infoBtn.addEventListener("click", () => {
          infoModal.classList.add("visible");
          dropdownMenu.classList.remove("visible");
        });
      }
      if (aiInfoBtn) {
        aiInfoBtn.addEventListener("click", () => {
          infoModal.classList.add("visible");
          if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
        });
      }
      if (settingsBtn) {
        settingsBtn.addEventListener("click", () => {
          enterSettingsMode("default", activeSettingsPanel);
        });
      }
      if (aiSettingsBtn) {
        aiSettingsBtn.addEventListener("click", () => {
          enterSettingsMode("ai", activeSettingsPanel);
        });
      }
      settingsNavItems.forEach((item) => {
        item.addEventListener("click", () => {
          setActiveSettingsPanel(item.dataset.settingsPanel);
        });
      });
      if (settingsThemeToggle) {
        settingsThemeToggle.addEventListener("change", () => {
          pendingTheme = settingsThemeToggle.checked ? "dark" : "light";
          syncSettingsThemeSelection();
        });
      }
      if (settingsPreviewFillToggle) {
        settingsPreviewFillToggle.addEventListener("change", () => {
          if (!pendingGlobalSettings) pendingGlobalSettings = { ...state.globalSettings };
          pendingGlobalSettings.previewPanelFill = settingsPreviewFillToggle.checked;
          syncSettingsControlValues();
        });
      }
      if (settingsProfileToggle) {
        settingsProfileToggle.addEventListener("change", () => {
          if (!pendingGlobalSettings) pendingGlobalSettings = { ...state.globalSettings };
          pendingGlobalSettings.profileSyncEnabled = settingsProfileToggle.checked;
          syncGeneralSettingsSummary();
          syncSettingsControlValues();
        });
      }
      if (settingsLayoutSelect) {
        settingsLayoutSelect.addEventListener("change", () => {
          if (!pendingGlobalSettings) pendingGlobalSettings = { ...state.globalSettings };
          pendingGlobalSettings.defaultLayoutMode = normalizeDefaultLayoutMode(settingsLayoutSelect.value);
          syncSettingsControlValues();
        });
      }
      headerLayoutOptions.forEach((option) => {
        option.addEventListener("click", () => {
          const layoutMode = normalizeDefaultLayoutMode(option.dataset.layoutOption);
          state.globalSettings.defaultLayoutMode = layoutMode;
          if (pendingGlobalSettings) {
            pendingGlobalSettings.defaultLayoutMode = layoutMode;
          }
          applyDefaultLayoutMode(layoutMode);
          syncSettingsControlValues();
        });
      });
      if (settingsHomeBtn) {
        settingsHomeBtn.addEventListener("click", () => {
          exitSettingsMode();
        });
      }
      if (settingsResetBtn) {
        settingsResetBtn.addEventListener("click", async () => {
          await clearStoredGlobalSettings();
          state.globalSettings = getDefaultGlobalSettings();
          pendingGlobalSettings = { ...state.globalSettings };
          pendingTheme = "light";
          setTheme("light");
          applyPreviewPanelFill(state.globalSettings.previewPanelFill);
          applyDefaultLayoutMode(state.globalSettings.defaultLayoutMode);
          applyStoredUserProfile();
          requestUserProfileIfEnabled();
          updateGlobalToolbarValues();
          updatePreview();
          syncSettingsThemeSelection();
          syncGeneralSettingsSummary();
          syncSettingsControlValues();
          showCustomAlert("Stored settings were cleared and defaults were restored.", "success", "Settings Reset");
        });
      }
      if (settingsSaveBtn) {
        settingsSaveBtn.addEventListener("click", async () => {
          const themeChanged = pendingTheme !== currentTheme;
          if (pendingGlobalSettings) {
            state.globalSettings = { ...pendingGlobalSettings };
          }
          state.globalSettings = normalizeStoredGlobalSettings(state.globalSettings);
          await storeGlobalSettings(state.globalSettings);
          setTheme(pendingTheme);
          applyPreviewPanelFill(state.globalSettings.previewPanelFill);
          applyDefaultLayoutMode(state.globalSettings.defaultLayoutMode);
          applyStoredUserProfile();
          requestUserProfileIfEnabled();
          updateGlobalToolbarValues();
          syncGeneralSettingsSummary();
          exitSettingsMode();
          showCustomAlert(
            themeChanged ? "Settings saved and theme updated." : "Settings saved.",
            "success",
            "Settings Saved"
          );
        });
      }
      if (aiSuggestionGrid) {
        aiSuggestionGrid.addEventListener("click", (e) => {
          const card = e.target.closest(".ai-suggestion-card");
          if (!card || !aiChatInput) return;
          aiChatInput.value = card.dataset.prompt || "";
          aiChatInput.focus();
        });
      }
      if (animationStudioBtn) {
        animationStudioBtn.addEventListener("click", () => {
          if (animationStudioBtn.disabled || animationStudioBtn.getAttribute("aria-disabled") === "true") return;
          enterAnimationStudioMode();
        });
      }
      if (aiAnimationStudioBtn) {
        aiAnimationStudioBtn.addEventListener("click", () => {
          if (aiAnimationStudioBtn.disabled || aiAnimationStudioBtn.getAttribute("aria-disabled") === "true") return;
          enterAnimationStudioMode();
        });
      }
      if (animationHomeBtn) {
        animationHomeBtn.addEventListener("click", () => {
          exitAnimationStudioMode();
        });
      }
      if (animationPreviewBtn) {
        animationPreviewBtn.addEventListener("click", () => {
          playAnimationPreview();
        });
      }
      if (animationSaveBtn) {
        animationSaveBtn.addEventListener("click", () => {
          saveAnimationSettings(state, state.chartType);
          exitAnimationStudioMode();
          showCustomAlert("Animation settings saved. Figma export will include animation metadata.", "success", "Animation Saved");
        });
      }
      bindAnimationControls(state, {
        animationPresetSelect,
        animationTriggerSelect,
        animationEasingSelect,
        animationDirectionSelect,
        animationDurationRange,
        animationDurationValue,
        animationPresetCopy,
        animationStateSummary,
        animationChartTypeLabel,
      });
      [animationPresetSelect, animationEasingSelect, animationDirectionSelect, animationDurationRange]
        .filter(Boolean)
        .forEach((control) => {
          const eventName = control === animationDurationRange ? "input" : "change";
          control.addEventListener(eventName, () => {
            if (animationApp && !animationApp.hidden) {
              playAnimationPreview();
            }
          });
        });
      if (aiHomeBtn) {
        aiHomeBtn.addEventListener("click", () => {
          exitAiPlaygroundMode();
        });
      }
      if (aiChatForm && aiChatInput) {
        aiChatForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const prompt = aiChatInput.value.trim();
          if (!prompt) return;
          appendAiChatMessage("user", prompt);
          aiChatInput.value = "";
          handleAiPrompt(prompt);
        });
      }
      modalClose.addEventListener("click", () => {
        infoModal.classList.remove("visible");
      });
      infoModal.addEventListener("click", (e) => {
        if (e.target === infoModal) {
          infoModal.classList.remove("visible");
        }
      });
      if (experienceModalClose) {
        experienceModalClose.addEventListener("click", () => {
          hideExperienceModal();
        });
      }
      if (experienceModal) {
        experienceModal.addEventListener("click", (e) => {
          if (e.target === experienceModal) hideExperienceModal();
        });
      }
      if (experienceBookmarkBtn) {
        experienceBookmarkBtn.addEventListener("click", () => {
          hideExperienceModal();
          if (typeof window !== "undefined" && typeof window.open === "function") {
            window.open(PLUGIN_COMMUNITY_URL, "_blank", "noopener,noreferrer");
          }
        });
      }
      if (experienceRemindBtn) {
        experienceRemindBtn.addEventListener("click", () => {
          setExperienceRemindLater();
          hideExperienceModal();
        });
      }

      // Chart Data Modal
      btnOpenDataModal.addEventListener("click", () => {
        openChartDataModalForCurrentSource();
      });
      if (aiBtnOpenDataModal) {
        aiBtnOpenDataModal.addEventListener("click", () => {
          openChartDataModalForCurrentSource();
        });
      }
      chartDataModalClose.addEventListener("click", () => {
        chartDataModal.classList.remove("visible");
      });
      chartDataModal.addEventListener("click", (e) => {
        if (e.target === chartDataModal) {
          chartDataModal.classList.remove("visible");
        }
      });
      [chartDataTabDefault, chartDataTabManual, chartDataTabJson].forEach((tabButton) => {
        if (!tabButton) return;
        tabButton.addEventListener("click", () => {
          setActiveDataSource(tabButton.dataset.sourceTab, { updatePreview: true });
        });
      });
      if (btnResetDefaultData) {
        btnResetDefaultData.addEventListener("click", resetDefaultDataForCurrentChart);
      }

      // Apply Manual Data
      btnApplyData.addEventListener("click", applyManualData);
      if (jsonModeUploadBtn) {
        jsonModeUploadBtn.addEventListener("click", () => setJsonInputMode("upload"));
      }
      if (jsonModeEditorBtn) {
        jsonModeEditorBtn.addEventListener("click", () => {
          setJsonInputMode("editor");
          updateJsonEditorFromCurrentData();
        });
      }
      if (jsonFileInput && jsonFileName) {
        jsonFileInput.addEventListener("change", () => {
          const file = jsonFileInput.files && jsonFileInput.files[0];
          jsonFileName.textContent = file ? file.name : "No file selected";
        });
      }
      if (jsonEditor) {
        jsonEditor.addEventListener("input", () => {
          updateJsonDraft(jsonEditor.value);
        });
      }
      if (btnApplyJson) {
        btnApplyJson.addEventListener("click", async () => {
          if (jsonInputMode === "upload") {
            const file = jsonFileInput && jsonFileInput.files && jsonFileInput.files[0];
            if (!file) {
              showCustomAlert("Please choose a JSON file first.", "warning", "No File Selected");
              return;
            }
            const raw = await file.text();
            applyJsonData(raw);
            return;
          }

          if (!jsonEditor || !jsonEditor.value.trim()) {
            showCustomAlert("Please enter JSON in the editor.", "warning", "No JSON Content");
            return;
          }
          applyJsonData(jsonEditor.value);
        });
      }
      if (btnAddManualRow) {
        btnAddManualRow.addEventListener("click", addManualFormRow);
      }
      if (btnAddManualSeries) {
        btnAddManualSeries.addEventListener("click", addManualFormSeries);
      }
      if (manualFormRows) {
        manualFormRows.addEventListener("click", (e) => {
          const removeBtn = e.target.closest(".manual-form-remove");
          if (!removeBtn) return;
          const tableData = readManualFormData();
          const rowIndex = Number(removeBtn.dataset.row);
          if (Number.isNaN(rowIndex)) return;
          tableData.splice(rowIndex, 1);
          if (!tableData.length) {
            addManualFormRow();
            return;
          }
          state.currentData = convertTableDataToChartData(tableData, state.chartType);
          persistSourceData("manual", state.chartType, state.currentData, { updateDraft: false });
          renderManualDataForm();
        });
      }

      // Global Toolbar Controls
      globalBgControl.addEventListener("click", (e) => {
        e.stopPropagation();
        const isVisible = bgColorPanel.classList.contains("visible");
        closeAllDropdowns();
        if (!isVisible) {
          syncPickerFromHex(state.globalSettings.backgroundColor);
          positionDropdown(globalBgControl, bgColorPanel);
          bgColorPanel.classList.add("visible");
        }
      });

      globalBgColor.addEventListener("input", (e) => {
        setGlobalBackgroundColor(e.target.value);
      });

      if (fontColorControl) {
        fontColorControl.addEventListener("click", (e) => {
          e.stopPropagation();
          const isVisible = fontColorPanel && fontColorPanel.classList.contains("visible");
          closeCustomSelectPanels();
          if (fontColorPanel) fontColorPanel.classList.remove("visible");
          if (!isVisible && fontColorPanel) {
            syncFontPickerFromHex(state.globalSettings.fontColor);
            positionDropdown(fontColorControl, fontColorPanel);
            fontColorPanel.classList.add("visible");
          }
        });
      }

      bgColorHue.addEventListener("input", (e) => {
        bgPickerState.h = parseInt(e.target.value, 10) || 0;
        const rgb = hsvToRgb(bgPickerState.h, bgPickerState.s, bgPickerState.v);
        renderBgPickerUi();
        setGlobalBackgroundColor(rgbToHex(rgb.r, rgb.g, rgb.b));
      });

      if (fontColorHue) {
        fontColorHue.addEventListener("input", (e) => {
          fontPickerState.h = parseInt(e.target.value, 10) || 0;
          const rgb = hsvToRgb(fontPickerState.h, fontPickerState.s, fontPickerState.v);
          renderFontPickerUi();
          setFontColor(rgbToHex(rgb.r, rgb.g, rgb.b));
        });
      }

      let draggingBgCanvas = false;
      const updateBgCanvasFromPointer = (clientX, clientY) => {
        const rect = bgColorCanvas.getBoundingClientRect();
        const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
        const y = Math.min(rect.height, Math.max(0, clientY - rect.top));
        bgPickerState.s = rect.width ? x / rect.width : 0;
        bgPickerState.v = rect.height ? 1 - y / rect.height : 0;
        const rgb = hsvToRgb(bgPickerState.h, bgPickerState.s, bgPickerState.v);
        renderBgPickerUi();
        setGlobalBackgroundColor(rgbToHex(rgb.r, rgb.g, rgb.b));
      };

      bgColorCanvas.addEventListener("mousedown", (e) => {
        draggingBgCanvas = true;
        updateBgCanvasFromPointer(e.clientX, e.clientY);
      });
      let draggingFontCanvas = false;
      const updateFontCanvasFromPointer = (clientX, clientY) => {
        const rect = fontColorCanvas.getBoundingClientRect();
        const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
        const y = Math.min(rect.height, Math.max(0, clientY - rect.top));
        fontPickerState.s = rect.width ? x / rect.width : 0;
        fontPickerState.v = rect.height ? 1 - y / rect.height : 0;
        const rgb = hsvToRgb(fontPickerState.h, fontPickerState.s, fontPickerState.v);
        renderFontPickerUi();
        setFontColor(rgbToHex(rgb.r, rgb.g, rgb.b));
      };
      if (fontColorCanvas) {
        fontColorCanvas.addEventListener("mousedown", (e) => {
          draggingFontCanvas = true;
          updateFontCanvasFromPointer(e.clientX, e.clientY);
        });
      }
      document.addEventListener("mousemove", (e) => {
        if (!draggingBgCanvas) return;
        updateBgCanvasFromPointer(e.clientX, e.clientY);
      });
      document.addEventListener("mousemove", (e) => {
        if (!draggingCustomCanvas) return;
        updateCustomCanvasFromPointer(e.clientX, e.clientY);
      });
      document.addEventListener("mousemove", (e) => {
        if (!draggingFontCanvas) return;
        updateFontCanvasFromPointer(e.clientX, e.clientY);
      });
      document.addEventListener("mouseup", () => {
        draggingBgCanvas = false;
        draggingCustomCanvas = false;
        draggingFontCanvas = false;
      });

      bgColorHexInput.addEventListener("change", (e) => {
        const hex = parseColorFromInput(e.target.value, getBgInputFormat());
        if (hex) {
          setGlobalBackgroundColor(hex);
        } else {
          updateBgInputField(state.globalSettings.backgroundColor);
        }
      });

      bgColorHexInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          bgColorHexInput.blur();
        }
      });

      bgColorFormat.addEventListener("change", () => {
        updateBgInputField(state.globalSettings.backgroundColor);
      });

      bgColorOpacity.addEventListener("input", (e) => {
        const value = Math.max(0, Math.min(100, parseInt(e.target.value, 10) || 0));
        state.globalSettings.backgroundOpacity = value / 100;
        state.opts[state.chartType].backgroundOpacity = state.globalSettings.backgroundOpacity;
        if (bgColorOpacityValue) bgColorOpacityValue.textContent = `${value}%`;
        updatePreview();
      });

      // Grid Toggle
      document.getElementById("global-grid-toggle").addEventListener("click", function() {
        if (state.chartType === 'pie') return;
        this.classList.toggle("active");
        state.globalSettings.showGrid = this.classList.contains("active");
        if (state.chartType !== "pie") {
          state.opts[state.chartType].showGrid = state.globalSettings.showGrid;
        }
        updatePreview();
      });

      // Axes Toggle  
      document.getElementById("global-axes-toggle").addEventListener("click", function() {
        if (state.chartType === 'pie') return;
        this.classList.toggle("active");
        state.globalSettings.showAxes = this.classList.contains("active");
        if (state.chartType !== "pie") {
          state.opts[state.chartType].showAxes = state.globalSettings.showAxes;
        }
        updatePreview();
      });

      if (toolbarBarVerticalOption) {
        toolbarBarVerticalOption.addEventListener("click", function() {
          if (state.chartType !== "bar" && state.chartType !== "dot") return;
          state.opts[state.chartType].horizontal = false;
          toolbarBarVerticalOption.classList.add("active");
          if (toolbarBarHorizontalOption) toolbarBarHorizontalOption.classList.remove("active");
          updatePreview();
        });
      }
      if (toolbarBarHorizontalOption) {
        toolbarBarHorizontalOption.addEventListener("click", function() {
          if (state.chartType !== "bar" && state.chartType !== "dot") return;
          state.opts[state.chartType].horizontal = true;
          toolbarBarHorizontalOption.classList.add("active");
          if (toolbarBarVerticalOption) toolbarBarVerticalOption.classList.remove("active");
          updatePreview();
        });
      }

      resetStylesBtn.addEventListener("click", () => {
        state.globalSettings = {
          backgroundColor: "#111318",
          backgroundOpacity: 1,
          showGrid: true,
          showAxes: true,
          showText: true,
          fontFamily: "Segoe UI",
          fontSize: 12,
          fontWeight: "normal",
          fontColor: "#9aa4b2",
          padding: 0,
          borderRadius: 6,
          previewPanelFill: true,
          dotLineUseGradient: true,
          defaultLayoutMode: state.globalSettings.defaultLayoutMode,
        };
        applyPreviewPanelFill(state.globalSettings.previewPanelFill);
        updateGlobalToolbarValues();
        updatePreview();
      });

      // Close all dropdowns when clicking outside
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".has-dropdown") && !e.target.closest(".dropdown-menu") && !e.target.closest(".slider-popup") && !e.target.closest(".font-popup") && !e.target.closest(".color-preset-dropdown") && !e.target.closest(".bg-color-panel") && !e.target.closest(".font-color-panel") && !e.target.closest(".custom-select-panel") && !e.target.closest(".custom-select-host")) {
          closeAllDropdowns();
        }
      });

      // Export dropdown and export actions
      setSelectedExport("figma");
      setAiSelectedExport("figma");

      btnExportPrimary.addEventListener("click", () => {
        closeAllDropdowns();
        runSelectedExport();
      });

      btnExportToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isVisible = exportDropdown.classList.contains("visible");
        closeAllDropdowns();
        if (!isVisible) {
          positionDropdown(btnExportPrimary, exportDropdown);
          exportDropdown.classList.add("visible");
          btnExportToggle.setAttribute("aria-expanded", "true");
        }
      });

      btnExportSvg.addEventListener("click", () => {
        setSelectedExport("svg");
        closeAllDropdowns();
        runSelectedExport();
      });
      btnExportPng.addEventListener("click", () => {
        setSelectedExport("png");
        closeAllDropdowns();
        runSelectedExport();
      });
      btnExportFigma.addEventListener("click", () => {
        setSelectedExport("figma");
        closeAllDropdowns();
        runSelectedExport();
      });
      if (aiBtnExportPrimary) {
        aiBtnExportPrimary.addEventListener("click", () => {
          closeAllDropdowns();
          runAiSelectedExport();
        });
      }
      if (aiBtnExportToggle) {
        aiBtnExportToggle.addEventListener("click", (e) => {
          e.stopPropagation();
          const isVisible = aiExportDropdown.classList.contains("visible");
          closeAllDropdowns();
          if (!isVisible) {
            positionDropdown(aiBtnExportPrimary, aiExportDropdown);
            aiExportDropdown.classList.add("visible");
            aiBtnExportToggle.setAttribute("aria-expanded", "true");
          }
        });
      }
      if (aiBtnExportSvg) {
        aiBtnExportSvg.addEventListener("click", () => {
          setAiSelectedExport("svg");
          closeAllDropdowns();
          runAiSelectedExport();
        });
      }
      if (aiBtnExportPng) {
        aiBtnExportPng.addEventListener("click", () => {
          setAiSelectedExport("png");
          closeAllDropdowns();
          runAiSelectedExport();
        });
      }
      if (aiBtnExportFigma) {
        aiBtnExportFigma.addEventListener("click", () => {
          setAiSelectedExport("figma");
          closeAllDropdowns();
          runAiSelectedExport();
        });
      }

      // Line chart controls
      lineAreaToggle.addEventListener('click', () => {
        lineAreaToggle.classList.toggle('active');
        state.opts.line.areaFill = lineAreaToggle.classList.contains('active');
        updatePreview();
      });

      if (radarAreaToggle) {
        radarAreaToggle.addEventListener('click', () => {
          radarAreaToggle.classList.toggle('active');
          state.opts.radar.areaFill = radarAreaToggle.classList.contains('active');
          updatePreview();
        });
      }

      lineCurveToggle.addEventListener('click', () => {
        lineCurveToggle.classList.toggle('active');
        state.opts.line.smooth = lineCurveToggle.classList.contains('active');
        updatePreview();
      });

      lineWidthBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        positionDropdown(lineWidthBtn, lineWidthPopup);
        lineWidthPopup.classList.toggle('visible');
      });

      if (radarLineWidthBtn && radarLineWidthPopup) {
        radarLineWidthBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          positionDropdown(radarLineWidthBtn, radarLineWidthPopup);
          radarLineWidthPopup.classList.toggle('visible');
        });
      }

      popupLineWidth.addEventListener('input', (e) => {
        state.opts.line.lineWidth = parseInt(e.target.value);
        lineWidthValue.textContent = e.target.value + 'px';
        updatePreview();
      });

      if (popupRadarLineWidth) {
        popupRadarLineWidth.addEventListener('input', (e) => {
          state.opts.radar.lineWidth = parseInt(e.target.value, 10) || 2;
          if (radarLineWidthValue) radarLineWidthValue.textContent = e.target.value + 'px';
          updatePreview();
        });
      }

      pointShapesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        syncShapePopupSelection('#point-shapes-popup', state.opts.line.pointShape);
        positionDropdown(pointShapesBtn, pointShapesPopup);
        pointShapesPopup.classList.toggle('visible');
      });

      if (radarPointShapesBtn) {
        radarPointShapesBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          syncShapePopupSelection('#point-shapes-popup', state.opts.radar.pointShape);
          positionDropdown(radarPointShapesBtn, pointShapesPopup);
          pointShapesPopup.classList.toggle('visible');
        });
      }

      document.querySelectorAll('#point-shapes-popup .shape-option').forEach(option => {
        option.addEventListener('click', (e) => {
          const shape = e.currentTarget.dataset.shape;
          document.querySelectorAll('#point-shapes-popup .shape-option').forEach(opt => { opt.classList.remove('active'); });
          e.currentTarget.classList.add('active');
          if (state.chartType === 'radar') {
            state.opts.radar.pointShape = shape;
            updateRadarPointShapeIcon(shape);
          } else {
            state.opts.line.pointShape = shape;
            state.opts.line.showPoints = shape !== 'none';
            updatePointShapeIcon(shape);
          }
          updatePreview();
          pointShapesPopup.classList.remove('visible');
        });
      });

      if (radarGridShapeBtn && radarGridShapePopup) {
        radarGridShapeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          syncRadarGridShapePopupSelection(state.opts.radar.gridShape);
          positionDropdown(radarGridShapeBtn, radarGridShapePopup);
          radarGridShapePopup.classList.toggle('visible');
        });
      }

      document.querySelectorAll('#radar-grid-shape-popup .shape-option').forEach(option => {
        option.addEventListener('click', (e) => {
          const gridShape = e.currentTarget.dataset.gridShape || 'polygon';
          state.opts.radar.gridShape = gridShape;
          syncRadarGridShapePopupSelection(gridShape);
          updateRadarGridShapeIcon(gridShape);
          updatePreview();
          radarGridShapePopup.classList.remove('visible');
        });
      });

      if (radarStartAngleBtn && radarStartAnglePopup) {
        radarStartAngleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          if (popupRadarStartAngle) popupRadarStartAngle.value = String(state.opts.radar.startAngle ?? -90);
          if (radarStartAngleValue) radarStartAngleValue.textContent = `${state.opts.radar.startAngle ?? -90}°`;
          positionDropdown(radarStartAngleBtn, radarStartAnglePopup);
          radarStartAnglePopup.classList.toggle('visible');
        });
      }

      if (popupRadarStartAngle) {
        popupRadarStartAngle.addEventListener('input', (e) => {
          state.opts.radar.startAngle = parseInt(e.target.value, 10) || 0;
          if (radarStartAngleValue) radarStartAngleValue.textContent = `${state.opts.radar.startAngle}°`;
          updatePreview();
        });
      }

      // Pie chart controls
      pieGapToggle.addEventListener('click', () => {
        pieGapToggle.classList.toggle('active');
        state.opts.pie.separated = pieGapToggle.classList.contains('active');
        updatePreview();
      });

      pieDonutToggle.addEventListener('click', () => {
        pieDonutToggle.classList.toggle('active');
        state.opts.pie.donut = pieDonutToggle.classList.contains('active');
        updatePreview();
      });

      // Color preset dropdown
      colorPresetBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        positionDropdown(colorPresetBtn, colorPresetDropdown);
        colorPresetDropdown.classList.toggle("visible");
      });

      if (globalToolbar) {
        globalToolbar.addEventListener("wheel", (e) => {
          const canScrollHorizontally = globalToolbar.scrollWidth > globalToolbar.clientWidth + 1;
          if (!canScrollHorizontally) return;

          const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          if (!delta) return;

          globalToolbar.scrollLeft += delta;
          e.preventDefault();
        }, { passive: false });
      }

      // Font size popup
      fontSizeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        positionDropdown(fontSizeBtn, fontSizePopup);
        fontSizePopup.classList.toggle("visible");
      });

      // Padding popup
      paddingBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        positionDropdown(paddingBtn, paddingPopup);
        paddingPopup.classList.toggle("visible");
      });

      // Border radius popup
      borderRadiusBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        positionDropdown(borderRadiusBtn, borderRadiusPopup);
        borderRadiusPopup.classList.toggle("visible");
      });

      // Popup slider events
      popupFontSize.addEventListener("input", (e) => {
        state.globalSettings.fontSize = parseInt(e.target.value);
        fontSizeValue.textContent = e.target.value + "px";
        updatePreview();
      });
      if (fontToggle) {
        fontToggle.addEventListener("click", () => {
          state.globalSettings.showText = !state.globalSettings.showText;
          updateGlobalToolbarValues();
          updatePreview();
        });
      }
      if (fontFamilySelect) {
        fontFamilySelect.addEventListener("change", (e) => {
          state.globalSettings.fontFamily = e.target.value;
          updatePreview();
        });
      }
      if (fontWeightSelect) {
        fontWeightSelect.addEventListener("change", (e) => {
          state.globalSettings.fontWeight = e.target.value;
          updatePreview();
        });
      }
      if (fontColorValue) {
        fontColorValue.addEventListener("change", (e) => {
          const value = String(e.target.value || "").trim();
          const normalized = value.startsWith("#") ? value : `#${value}`;
          if (!/^#([0-9a-fA-F]{6})$/.test(normalized)) {
            updateGlobalToolbarValues();
            return;
          }
          setFontColor(normalized);
        });
      }

      popupPadding.addEventListener("input", (e) => {
        state.globalSettings.padding = parseInt(e.target.value);
        paddingValue.textContent = e.target.value + "%";
        updatePreview();
      });

      popupBorderRadius.addEventListener("input", (e) => {
        state.globalSettings.borderRadius = parseInt(e.target.value);
        borderRadiusValue.textContent = e.target.value + "px";
        updatePreview();
      });

      // Color preset options
      document.querySelectorAll(".color-preset-option").forEach((option) => {
        option.addEventListener("click", (e) => {
          const preset = e.currentTarget.dataset.preset;
          applyColorPreset(preset);
          colorPresetDropdown.classList.remove("visible");
        });
      });

      if (customColorsClose) {
        customColorsClose.addEventListener("click", () => {
          closeCustomColorsPanel();
        });
      }

      if (customColorsCancel) {
        customColorsCancel.addEventListener("click", () => {
          closeCustomColorsPanel();
        });
      }

      if (customColorsApply) {
        customColorsApply.addEventListener("click", () => {
          applyCustomColors();
        });
      }

      if (customColorsList) {
        customColorsList.addEventListener("click", (e) => {
          const trigger = e.target.closest("button[data-custom-color-index]");
          if (!trigger) return;
          e.stopPropagation();
          const index = Number(trigger.dataset.customColorIndex);
          if (Number.isNaN(index) || !customColorDraft[index]) return;
          closeAllDropdowns();
          openCustomColorPicker(index, trigger);
        });
      }

      if (customColorHue) {
        customColorHue.addEventListener("input", (e) => {
          if (activeCustomColorIndex == null) return;
          customPickerState.h = parseInt(e.target.value, 10) || 0;
          const rgb = hsvToRgb(customPickerState.h, customPickerState.s, customPickerState.v);
          renderCustomPickerUi();
          setCustomDraftColor(activeCustomColorIndex, rgbToHex(rgb.r, rgb.g, rgb.b));
        });
      }

      let draggingCustomCanvas = false;
      const updateCustomCanvasFromPointer = (clientX, clientY) => {
        if (!customColorCanvas || activeCustomColorIndex == null) return;
        const rect = customColorCanvas.getBoundingClientRect();
        const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
        const y = Math.min(rect.height, Math.max(0, clientY - rect.top));
        customPickerState.s = rect.width ? x / rect.width : 0;
        customPickerState.v = rect.height ? 1 - y / rect.height : 0;
        const rgb = hsvToRgb(customPickerState.h, customPickerState.s, customPickerState.v);
        renderCustomPickerUi();
        setCustomDraftColor(activeCustomColorIndex, rgbToHex(rgb.r, rgb.g, rgb.b));
      };

      if (customColorCanvas) {
        customColorCanvas.addEventListener("mousedown", (e) => {
          draggingCustomCanvas = true;
          updateCustomCanvasFromPointer(e.clientX, e.clientY);
        });
      }

      if (customColorValue) {
        customColorValue.addEventListener("change", (e) => {
          if (activeCustomColorIndex == null) return;
          const hex = parseColorFromInput(e.target.value, getCustomPickerInputFormat());
          if (hex) {
            setCustomDraftColor(activeCustomColorIndex, hex);
          } else {
            updateCustomPickerInputField(customColorDraft[activeCustomColorIndex].value);
          }
        });

        customColorValue.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            customColorValue.blur();
          }
        });
      }

      if (customColorFormat) {
        customColorFormat.addEventListener("change", () => {
          if (activeCustomColorIndex == null || !customColorDraft[activeCustomColorIndex]) return;
          updateCustomPickerInputField(customColorDraft[activeCustomColorIndex].value);
        });
      }

      // Scatter point shapes popup
      scatterPointShapesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        const pointOpts = state.opts[state.chartType === "dot" ? "dot" : "scatter"];
        syncShapePopupSelection('#scatter-point-shapes-popup', pointOpts.pointShape);
        positionDropdown(scatterPointShapesBtn, scatterPointShapesPopup);
        scatterPointShapesPopup.classList.toggle('visible');
      });

      document.querySelectorAll('#scatter-point-shapes-popup .shape-option').forEach(option => {
        option.addEventListener('click', (e) => {
          const shape = e.currentTarget.dataset.shape;
          document.querySelectorAll('#scatter-point-shapes-popup .shape-option').forEach(opt => { opt.classList.remove('active'); });
          e.currentTarget.classList.add('active');
          const activePointChart = state.chartType === "dot" ? "dot" : "scatter";
          state.opts[activePointChart].pointShape = shape;
          updateScatterPointShapeIcon(shape);
          updatePreview();
          scatterPointShapesPopup.classList.remove('visible');
        });
      });

      if (scatterPointSizeBtn && scatterPointSizePopup) {
        scatterPointSizeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          const pointOpts = state.opts[state.chartType === "dot" ? "dot" : "scatter"];
          if (popupScatterPointSize) popupScatterPointSize.value = pointOpts.pointSize;
          if (scatterPointSizeValue) scatterPointSizeValue.textContent = `${pointOpts.pointSize}px`;
          positionDropdown(scatterPointSizeBtn, scatterPointSizePopup);
          scatterPointSizePopup.classList.toggle('visible');
        });
      }

      if (popupScatterPointSize) {
        popupScatterPointSize.addEventListener('input', (e) => {
          const activePointChart = state.chartType === "dot" ? "dot" : "scatter";
          state.opts[activePointChart].pointSize = parseInt(e.target.value, 10) || 6;
          if (scatterPointSizeValue) scatterPointSizeValue.textContent = `${state.opts[activePointChart].pointSize}px`;
          if (state.opts[activePointChart].pointPadding > state.opts[activePointChart].pointSize - 1) {
            state.opts[activePointChart].pointPadding = Math.max(0, state.opts[activePointChart].pointSize - 1);
            if (popupScatterPointPadding) popupScatterPointPadding.value = state.opts[activePointChart].pointPadding;
            if (scatterPointPaddingValue) scatterPointPaddingValue.textContent = `${state.opts[activePointChart].pointPadding}px`;
          }
          if (activePointChart === "dot" && state.opts.dot.lineWidth > state.opts.dot.pointSize) {
            state.opts.dot.lineWidth = state.opts.dot.pointSize;
            if (popupDotLineWidth) {
              popupDotLineWidth.max = String(state.opts.dot.pointSize);
              popupDotLineWidth.value = String(state.opts.dot.lineWidth);
            }
            if (dotLineWidthValue) dotLineWidthValue.textContent = `${state.opts.dot.lineWidth}px`;
          }
          updatePreview();
        });
      }

      if (scatterPointPaddingBtn && scatterPointPaddingPopup) {
        scatterPointPaddingBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          const pointOpts = state.opts[state.chartType === "dot" ? "dot" : "scatter"];
          if (popupScatterPointPadding) {
            popupScatterPointPadding.max = String(Math.max(0, pointOpts.pointSize - 1));
            popupScatterPointPadding.value = pointOpts.pointPadding;
          }
          if (scatterPointPaddingValue) scatterPointPaddingValue.textContent = `${pointOpts.pointPadding}px`;
          positionDropdown(scatterPointPaddingBtn, scatterPointPaddingPopup);
          scatterPointPaddingPopup.classList.toggle('visible');
        });
      }

      if (popupScatterPointPadding) {
        popupScatterPointPadding.addEventListener('input', (e) => {
          const activePointChart = state.chartType === "dot" ? "dot" : "scatter";
          state.opts[activePointChart].pointPadding = Math.min(
            parseInt(e.target.value, 10) || 0,
            Math.max(0, state.opts[activePointChart].pointSize - 1)
          );
          e.target.value = state.opts[activePointChart].pointPadding;
          if (scatterPointPaddingValue) scatterPointPaddingValue.textContent = `${state.opts[activePointChart].pointPadding}px`;
          updatePreview();
        });
      }

      if (dotLineWidthBtn && dotLineWidthPopup) {
        dotLineWidthBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeAllDropdowns();
          if (popupDotLineWidth) {
            popupDotLineWidth.max = String(Math.max(1, state.opts.dot.pointSize));
            popupDotLineWidth.value = String(Math.min(state.opts.dot.lineWidth || 2, state.opts.dot.pointSize));
          }
          if (dotLineWidthValue) dotLineWidthValue.textContent = `${Math.min(state.opts.dot.lineWidth || 2, state.opts.dot.pointSize)}px`;
          positionDropdown(dotLineWidthBtn, dotLineWidthPopup);
          dotLineWidthPopup.classList.toggle('visible');
        });
      }

      if (popupDotLineWidth) {
        popupDotLineWidth.addEventListener('input', (e) => {
          state.opts.dot.lineWidth = Math.min(
            parseInt(e.target.value, 10) || 1,
            Math.max(1, state.opts.dot.pointSize)
          );
          e.target.value = String(state.opts.dot.lineWidth);
          if (dotLineWidthValue) dotLineWidthValue.textContent = `${state.opts.dot.lineWidth}px`;
          updatePreview();
        });
      }
    }

    // ===== INITIALIZATION =====
    // Initialize the application
    async function init() {
      if (defaultApp) defaultApp.hidden = false;
      if (defaultApp) defaultApp.style.display = "grid";
      if (aiApp) aiApp.hidden = true;
      if (aiApp) aiApp.style.display = "none";
      if (animationApp) animationApp.hidden = true;
      if (animationApp) animationApp.style.display = "none";
      if (settingsApp) settingsApp.hidden = true;
      if (settingsApp) settingsApp.style.display = "none";
      state.dataRegistry = loadDataRegistry();
      state.dataSource = state.dataRegistry.activeSource || "default";
      jsonInputMode = state.dataRegistry.jsonInputMode === "upload" ? "upload" : "editor";
      const storedGlobalSettings = await getStoredGlobalSettings();
      if (storedGlobalSettings) {
        state.globalSettings = { ...state.globalSettings, ...storedGlobalSettings };
      }
      state.currentData = getSourceData(state.dataSource, state.chartType);
      loadChartColorState(state.chartType, state.currentData);
      syncCurrentSeriesFromData(state.currentData);
      const savedTheme = getStoredTheme();
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(savedTheme || (prefersDark ? "dark" : "light"));
      pendingTheme = currentTheme;
      state.globalSettings = normalizeStoredGlobalSettings(state.globalSettings);
      applyPreviewPanelFill(state.globalSettings.previewPanelFill);
      applyDefaultLayoutMode(state.globalSettings.defaultLayoutMode);
      syncHeaderLayoutSelection();
      syncSettingsThemeSelection();
      setActiveSettingsPanel(activeSettingsPanel);
      initCustomStyledSelect(bgColorFormat, bgColorFormat && bgColorFormat.parentElement);
      initCustomStyledSelect(fontFamilySelect, fontFamilySelect && fontFamilySelect.parentElement);
      initCustomStyledSelect(fontWeightSelect, fontWeightSelect && fontWeightSelect.parentElement);
      initCustomStyledSelect(settingsLayoutSelect, settingsLayoutSelect && settingsLayoutSelect.parentElement);
      setupEventListeners();
      initChartTypeSelector();
      initDataSourceSelector();
      initModernDataTable();
      setupModernTableEventListeners();
      syncDataSourceSelectorUi(state.dataSource);
      syncChartDataSourceTabs();
      updateModernDataTableForChartType();
      updateToolbarForChartType();
      updatePreview();
      updateGlobalToolbarValues();
      updateColorPresetSelection(state.selectedColorPreset);
      setJsonInputMode(jsonInputMode);
      updateJsonEditorFromCurrentData();
      // Request user data from Figma
      applyStoredUserProfile();
      requestUserProfileIfEnabled();
    }

    // Initialize reliably in both browser and Figma UI runtimes.
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
