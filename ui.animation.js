window.UiAnimation = (() => {
  const CHART_PRESET_CONFIGS = {
    bar: {
      label: "Bar Chart",
      presets: [
        {
          id: "bar-rise",
          label: "Rise In",
          copy: "Bars grow in sequence so the chart builds from the baseline.",
          defaultTrigger: "after-delay",
          states: ["Baseline", "Raised"],
          previewEffect: "grow",
          exportPreset: "load-in",
        },
        {
          id: "bar-hover",
          label: "Value Focus",
          copy: "Bars stay in place while the focus shifts into a value-emphasis interaction.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pulse",
          exportPreset: "hover-value",
        },
        {
          id: "bar-compare",
          label: "Compare Sweep",
          copy: "Bars play as a comparison handoff for before and after storytelling.",
          defaultTrigger: "on-click",
          states: ["Before", "After"],
          previewEffect: "sweep",
          exportPreset: "compare",
        },
      ],
    },
    pie: {
      label: "Pie Chart",
      presets: [
        {
          id: "pie-radial",
          label: "Radial Reveal",
          copy: "Slices reveal in a staggered radial motion around the center.",
          defaultTrigger: "after-delay",
          states: ["Hidden", "Revealed"],
          previewEffect: "radial",
          exportPreset: "load-in",
        },
        {
          id: "pie-hover",
          label: "Slice Focus",
          copy: "A slice-focus interaction previews how hover emphasis can feel in the chart.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pop",
          exportPreset: "hover-value",
        },
        {
          id: "pie-drill",
          label: "Detail Drill",
          copy: "The pie animates like a drill-down transition into a focused detail state.",
          defaultTrigger: "on-click",
          states: ["Overview", "Detail"],
          previewEffect: "spin",
          exportPreset: "drill-down",
        },
      ],
    },
    line: {
      label: "Line Chart",
      presets: [
        {
          id: "line-draw",
          label: "Line Draw",
          copy: "Line paths draw across the chart and reveal the data trend progressively.",
          defaultTrigger: "after-delay",
          states: ["Start", "Drawn"],
          previewEffect: "draw",
          exportPreset: "load-in",
        },
        {
          id: "line-hover",
          label: "Point Focus",
          copy: "Points pop into focus so hover-ready value emphasis is easy to preview.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pop",
          exportPreset: "hover-value",
        },
        {
          id: "line-compare",
          label: "Trend Compare",
          copy: "The line sweeps into a comparison-style motion for before and after views.",
          defaultTrigger: "on-click",
          states: ["Before", "After"],
          previewEffect: "sweep",
          exportPreset: "compare",
        },
      ],
    },
    radar: {
      label: "Radar Chart",
      presets: [
        {
          id: "radar-bloom",
          label: "Radar Bloom",
          copy: "The radar surface expands out from the center to reveal the full shape.",
          defaultTrigger: "after-delay",
          states: ["Seed", "Expanded"],
          previewEffect: "bloom",
          exportPreset: "load-in",
        },
        {
          id: "radar-hover",
          label: "Vertex Focus",
          copy: "Radar vertices pulse to simulate a focus or hover-value interaction.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pop",
          exportPreset: "hover-value",
        },
        {
          id: "radar-drill",
          label: "Shape Drill",
          copy: "The radar chart blooms into a focused detail-style transition.",
          defaultTrigger: "on-click",
          states: ["Overview", "Detail"],
          previewEffect: "sweep",
          exportPreset: "drill-down",
        },
      ],
    },
    scatter: {
      label: "Scatter Plot",
      presets: [
        {
          id: "scatter-rise",
          label: "Point Rise",
          copy: "Scatter points rise into place so the plot builds progressively.",
          defaultTrigger: "after-delay",
          states: ["Start", "Placed"],
          previewEffect: "rise",
          exportPreset: "load-in",
        },
        {
          id: "scatter-hover",
          label: "Point Focus",
          copy: "Point emphasis previews a hover-oriented interaction for exact values.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pop",
          exportPreset: "hover-value",
        },
        {
          id: "scatter-compare",
          label: "Cluster Compare",
          copy: "Clusters reveal with a comparison sweep to suggest before and after patterns.",
          defaultTrigger: "on-click",
          states: ["Before", "After"],
          previewEffect: "sweep",
          exportPreset: "compare",
        },
      ],
    },
    dot: {
      label: "Dot Plot",
      presets: [
        {
          id: "dot-range",
          label: "Range Draw",
          copy: "Range lines draw first and the dots settle into place across the scale.",
          defaultTrigger: "after-delay",
          states: ["Start", "Connected"],
          previewEffect: "draw",
          exportPreset: "load-in",
        },
        {
          id: "dot-hover",
          label: "Dot Focus",
          copy: "Dots pulse into focus to preview a value-reveal interaction.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pop",
          exportPreset: "hover-value",
        },
        {
          id: "dot-compare",
          label: "Range Compare",
          copy: "Range positions sweep to compare states across categories.",
          defaultTrigger: "on-click",
          states: ["Before", "After"],
          previewEffect: "sweep",
          exportPreset: "compare",
        },
      ],
    },
    histogram: {
      label: "Histogram",
      presets: [
        {
          id: "histogram-rise",
          label: "Bin Rise",
          copy: "Bins rise from the baseline so the full distribution appears in sequence.",
          defaultTrigger: "after-delay",
          states: ["Start", "Built"],
          previewEffect: "grow",
          exportPreset: "load-in",
        },
        {
          id: "histogram-hover",
          label: "Density Focus",
          copy: "The distribution pulses for a focus-oriented value interaction.",
          defaultTrigger: "on-hover",
          states: ["Default", "Focus"],
          previewEffect: "pulse",
          exportPreset: "hover-value",
        },
        {
          id: "histogram-compare",
          label: "Distribution Compare",
          copy: "Bins play through a compare-style handoff between two states.",
          defaultTrigger: "on-click",
          states: ["Before", "After"],
          previewEffect: "sweep",
          exportPreset: "compare",
        },
      ],
    },
  };

  function getChartKey(chartType) {
    return CHART_PRESET_CONFIGS[chartType] ? chartType : "bar";
  }

  function getChartPresetCollection(chartType) {
    return CHART_PRESET_CONFIGS[getChartKey(chartType)];
  }

  function getChartPresetOptions(chartType) {
    return getChartPresetCollection(chartType).presets;
  }

  function getDefaultPresetId(chartType) {
    const presets = getChartPresetOptions(chartType);
    return presets[0] ? presets[0].id : "bar-rise";
  }

  function getPresetConfig(chartType, presetId) {
    const presets = getChartPresetOptions(chartType);
    return presets.find((preset) => preset.id === presetId) || presets[0];
  }

  function ensureAnimationPresetState(state) {
    if (!state.animationSettings) {
      state.animationSettings = createDefaultAnimationSettings();
    }
    if (!state.animationSettings.presetsByChart || typeof state.animationSettings.presetsByChart !== "object") {
      state.animationSettings.presetsByChart = {};
    }
    return state.animationSettings;
  }

  function createDefaultAnimationSettings() {
    const chartType = "bar";
    const config = getPresetConfig(chartType, getDefaultPresetId(chartType));
    return {
      enabled: false,
      source: "animation-studio",
      version: 1,
      smartAnimate: true,
      chartType,
      preset: config.id,
      presetLabel: config.label,
      trigger: config.defaultTrigger,
      transition: "smart-animate",
      durationMs: 450,
      easing: "ease-out",
      direction: "smart",
      states: [...config.states],
      previewEffect: config.previewEffect,
      exportPreset: config.exportPreset,
      presetsByChart: {
        [chartType]: config.id,
      },
    };
  }

  function populateAnimationPresetOptions(selectEl, chartType) {
    if (!selectEl) return;
    const presets = getChartPresetOptions(chartType);
    selectEl.innerHTML = presets
      .map((preset) => `<option value="${preset.id}">${preset.label}</option>`)
      .join("");
  }

  function updateAnimationPreset(state, chartType, presetId) {
    const animationSettings = ensureAnimationPresetState(state);
    const nextChartType = getChartKey(chartType);
    const config = getPresetConfig(nextChartType, presetId);
    animationSettings.chartType = nextChartType;
    animationSettings.preset = config.id;
    animationSettings.presetLabel = config.label;
    animationSettings.trigger = config.defaultTrigger;
    animationSettings.states = [...config.states];
    animationSettings.transition = "smart-animate";
    animationSettings.smartAnimate = true;
    animationSettings.previewEffect = config.previewEffect;
    animationSettings.exportPreset = config.exportPreset;
    animationSettings.presetsByChart[nextChartType] = config.id;
    return config;
  }

  function syncAnimationControlLabels(state, elements, chartType) {
    const animationSettings = ensureAnimationPresetState(state);
    const activeChartType = getChartKey(chartType || animationSettings.chartType);
    const config = getPresetConfig(activeChartType, animationSettings.preset);

    if (elements.animationChartTypeLabel) {
      elements.animationChartTypeLabel.textContent = getChartPresetCollection(activeChartType).label;
    }
    if (elements.animationPresetCopy) {
      elements.animationPresetCopy.textContent = config.copy;
    }
    if (elements.animationStateSummary) {
      elements.animationStateSummary.textContent = animationSettings.states.join(" -> ");
    }
    if (elements.animationDurationValue) {
      elements.animationDurationValue.textContent = `${animationSettings.durationMs} ms`;
    }
  }

  function syncAnimationControls(state, elements, chartType) {
    const animationSettings = ensureAnimationPresetState(state);
    const activeChartType = getChartKey(chartType || animationSettings.chartType);
    const selectedPreset =
      animationSettings.presetsByChart[activeChartType] ||
      animationSettings.preset ||
      getDefaultPresetId(activeChartType);
    const config = updateAnimationPreset(state, activeChartType, selectedPreset);

    populateAnimationPresetOptions(elements.animationPresetSelect, activeChartType);

    if (elements.animationPresetSelect) {
      elements.animationPresetSelect.value = config.id;
    }
    if (elements.animationTriggerSelect) {
      elements.animationTriggerSelect.value = animationSettings.trigger;
    }
    if (elements.animationEasingSelect) {
      elements.animationEasingSelect.value = animationSettings.easing;
    }
    if (elements.animationDirectionSelect) {
      elements.animationDirectionSelect.value = animationSettings.direction;
    }
    if (elements.animationDurationRange) {
      elements.animationDurationRange.value = String(animationSettings.durationMs);
    }
    syncAnimationControlLabels(state, elements, activeChartType);
  }

  function bindAnimationControls(state, elements) {
    syncAnimationControls(state, elements, state.chartType);

    if (elements.animationPresetSelect) {
      elements.animationPresetSelect.addEventListener("change", () => {
        updateAnimationPreset(state, state.chartType, elements.animationPresetSelect.value);
        syncAnimationControls(state, elements, state.chartType);
      });
    }

    if (elements.animationTriggerSelect) {
      elements.animationTriggerSelect.addEventListener("change", () => {
        state.animationSettings.trigger = elements.animationTriggerSelect.value;
        syncAnimationControlLabels(state, elements, state.chartType);
      });
    }

    if (elements.animationEasingSelect) {
      elements.animationEasingSelect.addEventListener("change", () => {
        state.animationSettings.easing = elements.animationEasingSelect.value;
      });
    }

    if (elements.animationDirectionSelect) {
      elements.animationDirectionSelect.addEventListener("change", () => {
        state.animationSettings.direction = elements.animationDirectionSelect.value;
      });
    }

    if (elements.animationDurationRange) {
      elements.animationDurationRange.addEventListener("input", () => {
        state.animationSettings.durationMs = parseInt(elements.animationDurationRange.value, 10) || 450;
        syncAnimationControlLabels(state, elements, state.chartType);
      });
    }
  }

  function syncAnimationStudioForChart(state, elements, chartType) {
    syncAnimationControls(state, elements, chartType || state.chartType);
  }

  function enterAnimationStudioMode(elements, actions) {
    const { animationApp, defaultApp, aiApp, dropdownMenu, aiDropdownMenu } = elements;
    const { closeAllDropdowns, updatePreview } = actions;

    if (!animationApp || !defaultApp || !aiApp) return;

    defaultApp.hidden = true;
    defaultApp.style.display = "none";
    aiApp.hidden = true;
    aiApp.style.display = "none";
    animationApp.hidden = false;
    animationApp.style.display = "grid";

    if (dropdownMenu) dropdownMenu.classList.remove("visible");
    if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
    closeAllDropdowns();
    updatePreview();
  }

  function exitAnimationStudioMode(elements, actions) {
    const { animationApp, defaultApp, aiApp, dropdownMenu, aiDropdownMenu } = elements;
    const { closeAllDropdowns, updateToolbarForChartType, updatePreview } = actions;

    if (!animationApp || !defaultApp || !aiApp) return;

    animationApp.hidden = true;
    animationApp.style.display = "none";
    aiApp.hidden = true;
    aiApp.style.display = "none";
    defaultApp.hidden = false;
    defaultApp.style.display = "grid";

    updateToolbarForChartType();
    if (dropdownMenu) dropdownMenu.classList.remove("visible");
    if (aiDropdownMenu) aiDropdownMenu.classList.remove("visible");
    closeAllDropdowns();
    updatePreview();
  }

  function saveAnimationSettings(state, chartType) {
    const activeChartType = getChartKey(chartType);
    const config = getPresetConfig(activeChartType, state.animationSettings.preset);
    state.animationSettings.enabled = true;
    state.animationSettings.chartType = activeChartType;
    state.animationSettings.preset = config.id;
    state.animationSettings.presetLabel = config.label;
    state.animationSettings.states = [...config.states];
    state.animationSettings.transition = "smart-animate";
    state.animationSettings.smartAnimate = true;
    state.animationSettings.previewEffect = config.previewEffect;
    state.animationSettings.exportPreset = config.exportPreset;
    state.animationSettings.savedAt = new Date().toISOString();
    return state.animationSettings;
  }

  return {
    bindAnimationControls,
    createDefaultAnimationSettings,
    enterAnimationStudioMode,
    exitAnimationStudioMode,
    getChartPresetCollection,
    getPresetConfig,
    saveAnimationSettings,
    syncAnimationStudioForChart,
    updateAnimationPreset,
  };
})();
