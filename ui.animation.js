window.UiAnimation = (() => {
  const PRESET_CONFIGS = {
    "load-in": {
      label: "Load-in animation",
      copy: "Creates a two-state load-in flow with Smart Animate so the graph enters already wired for prototype playback.",
      defaultTrigger: "after-delay",
      states: ["Start", "Loaded"],
    },
    "hover-value": {
      label: "Hover state for value",
      copy: "Creates a default and hover-ready state so the graph can reveal value emphasis with Smart Animate.",
      defaultTrigger: "on-hover",
      states: ["Default", "Hover"],
    },
    "drill-down": {
      label: "Drill-down transition",
      copy: "Creates an overview and detail state so a graph can transition into a focused drill-down interaction.",
      defaultTrigger: "on-click",
      states: ["Overview", "Detail"],
    },
    compare: {
      label: "Compare before / after",
      copy: "Creates before and after states so the graph can toggle between comparison views with Smart Animate.",
      defaultTrigger: "on-click",
      states: ["Before", "After"],
    },
  };

  function getPresetConfig(preset) {
    return PRESET_CONFIGS[preset] || PRESET_CONFIGS["load-in"];
  }

  function createDefaultAnimationSettings() {
    const preset = "load-in";
    const config = getPresetConfig(preset);
    return {
      enabled: false,
      source: "animation-studio",
      version: 1,
      smartAnimate: true,
      preset,
      presetLabel: config.label,
      trigger: config.defaultTrigger,
      transition: "smart-animate",
      durationMs: 450,
      easing: "ease-out",
      direction: "smart",
      states: [...config.states],
    };
  }

  function updateAnimationPreset(state, preset) {
    const config = getPresetConfig(preset);
    state.animationSettings.preset = preset;
    state.animationSettings.presetLabel = config.label;
    state.animationSettings.trigger = config.defaultTrigger;
    state.animationSettings.states = [...config.states];
    state.animationSettings.transition = "smart-animate";
    state.animationSettings.smartAnimate = true;
    return config;
  }

  function syncAnimationControlLabels(state, elements) {
    const config = getPresetConfig(state.animationSettings.preset);
    if (elements.animationPresetCopy) {
      elements.animationPresetCopy.textContent = config.copy;
    }
    if (elements.animationStateSummary) {
      elements.animationStateSummary.textContent = state.animationSettings.states.join(" -> ");
    }
    if (elements.animationDurationValue) {
      elements.animationDurationValue.textContent = `${state.animationSettings.durationMs} ms`;
    }
  }

  function syncAnimationControls(state, elements) {
    if (elements.animationPresetSelect) {
      elements.animationPresetSelect.value = state.animationSettings.preset;
    }
    if (elements.animationTriggerSelect) {
      elements.animationTriggerSelect.value = state.animationSettings.trigger;
    }
    if (elements.animationEasingSelect) {
      elements.animationEasingSelect.value = state.animationSettings.easing;
    }
    if (elements.animationDirectionSelect) {
      elements.animationDirectionSelect.value = state.animationSettings.direction;
    }
    if (elements.animationDurationRange) {
      elements.animationDurationRange.value = String(state.animationSettings.durationMs);
    }
    syncAnimationControlLabels(state, elements);
  }

  function bindAnimationControls(state, elements) {
    syncAnimationControls(state, elements);

    if (elements.animationPresetSelect) {
      elements.animationPresetSelect.addEventListener("change", () => {
        updateAnimationPreset(state, elements.animationPresetSelect.value);
        syncAnimationControls(state, elements);
      });
    }

    if (elements.animationTriggerSelect) {
      elements.animationTriggerSelect.addEventListener("change", () => {
        state.animationSettings.trigger = elements.animationTriggerSelect.value;
        syncAnimationControlLabels(state, elements);
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
        syncAnimationControlLabels(state, elements);
      });
    }
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
    const config = getPresetConfig(state.animationSettings.preset);
    state.animationSettings.enabled = true;
    state.animationSettings.chartType = chartType;
    state.animationSettings.presetLabel = config.label;
    state.animationSettings.states = [...config.states];
    state.animationSettings.transition = "smart-animate";
    state.animationSettings.smartAnimate = true;
    state.animationSettings.savedAt = new Date().toISOString();
    return state.animationSettings;
  }

  return {
    bindAnimationControls,
    createDefaultAnimationSettings,
    enterAnimationStudioMode,
    exitAnimationStudioMode,
    saveAnimationSettings,
  };
})();
