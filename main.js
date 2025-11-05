// DOM Elements
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const themeToggle = document.getElementById("theme-toggle");
    const infoBtn = document.getElementById("info-btn");
    const infoModal = document.getElementById("info-modal");
    const modalClose = document.getElementById("modal-close");
    const defaultDataSection = document.getElementById("default-data-section");
    const manualDataSection = document.getElementById("manual-data-section");
    const btnApplyData = document.getElementById("btn-apply-data");
    const dataInput = document.getElementById("data-input");
    const contextToolbar = document.getElementById("context-toolbar");
    const toolbarColor = document.getElementById("toolbar-color");
    const toolbarOpacity = document.getElementById("toolbar-opacity");
    const opacityValue = document.getElementById("opacity-value");
    const btnExportSvg = document.getElementById("btn-export-svg");
    const btnExportPng = document.getElementById("btn-export-png");
    const btnExportFigma = document.getElementById("btn-export-figma");

    // Global Toolbar Elements
    const colorPresetBtn = document.getElementById("color-preset-btn");
    const colorPresetDropdown = document.getElementById("color-preset-dropdown");
    const fontSizeBtn = document.getElementById("font-size-btn");
    const fontSizePopup = document.getElementById("font-size-popup");
    const popupFontSize = document.getElementById("popup-font-size");
    const fontSizeValue = document.getElementById("font-size-value");
    const paddingBtn = document.getElementById("padding-btn");
    const paddingPopup = document.getElementById("padding-popup");
    const popupPadding = document.getElementById("popup-padding");
    const paddingValue = document.getElementById("padding-value");
    const borderRadiusBtn = document.getElementById("border-radius-btn");
    const borderRadiusPopup = document.getElementById("border-radius-popup");
    const popupBorderRadius = document.getElementById("popup-border-radius");
    const borderRadiusValue = document.getElementById("border-radius-value");
    const globalBgColor = document.getElementById("global-bg-color");
    const resetStylesBtn = document.getElementById("reset-styles-btn");
    const moreOptionsBtn = document.getElementById("more-options-btn");
    const moreDropdown = document.getElementById("more-dropdown");

    // Pie Chart Controls
    const pieGapToggle = document.getElementById('pie-gap-toggle');
    const pieDonutToggle = document.getElementById('pie-donut-toggle');

    // Bar Chart Elements
    const toolbarBorderColor = document.getElementById("toolbar-border-color");
    const toolbarBorderWidth = document.getElementById("toolbar-border-width");
    const borderWidthValue = document.getElementById("border-width-value");
    const toolbarBarWidth = document.getElementById("toolbar-bar-width");
    const barWidthValue = document.getElementById("bar-width-value");
    const toolbarCornerRadius = document.getElementById("toolbar-corner-radius");
    const cornerRadiusValue = document.getElementById("corner-radius-value");
    const toolbarValueDisplay = document.getElementById("toolbar-value-display");

    // Pie Chart Elements
    const toolbarSlicePadding = document.getElementById("toolbar-slice-padding");
    const slicePaddingValue = document.getElementById("slice-padding-value");
    const toolbarSliceBorderColor = document.getElementById("toolbar-slice-border-color");
    const toolbarSliceBorderRadius = document.getElementById("toolbar-slice-border-radius");
    const sliceBorderRadiusValue = document.getElementById("slice-border-radius-value");
    const toolbarLabelDisplay = document.getElementById("toolbar-label-display");

    // Action Buttons
    const toolbarReset = document.getElementById("toolbar-reset");
    const toolbarApplyAll = document.getElementById("toolbar-apply-all");

    // Line Chart Controls
    const lineAreaToggle = document.getElementById('line-area-toggle');
    const lineCurveToggle = document.getElementById('line-curve-toggle');
    const lineWidthBtn = document.getElementById('line-width-btn');
    const lineWidthPopup = document.getElementById('line-width-popup');
    const popupLineWidth = document.getElementById('popup-line-width');
    const lineWidthValue = document.getElementById('line-width-value');
    const pointShapesBtn = document.getElementById('point-shapes-btn');
    const pointShapesPopup = document.getElementById('point-shapes-popup');

    // Area Toggle
    lineAreaToggle.addEventListener('click', () => {
      lineAreaToggle.classList.toggle('active');
      state.opts.line.areaFill = lineAreaToggle.classList.contains('active');
      updatePreview();
    });

    // Curve Toggle
    lineCurveToggle.addEventListener('click', () => {
      lineCurveToggle.classList.toggle('active');
      state.opts.line.smooth = lineCurveToggle.classList.contains('active');
      updatePreview();
    });

    // Line Width Popup
    lineWidthBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(lineWidthBtn, lineWidthPopup);
      lineWidthPopup.classList.toggle('visible');
    });

    // Line Width Slider
    popupLineWidth.addEventListener('input', (e) => {
      state.opts.line.lineWidth = parseInt(e.target.value);
      lineWidthValue.textContent = e.target.value + 'px';
      updatePreview();
    });

    // Point Shapes Popup
    pointShapesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(pointShapesBtn, pointShapesPopup);
      pointShapesPopup.classList.toggle('visible');
    });

    // Point Shape Selection
    document.querySelectorAll('.shape-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const shape = e.currentTarget.dataset.shape;
        
        // Update active state
        document.querySelectorAll('.shape-option').forEach(opt => {
          opt.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        
        // Update state and icon
        state.opts.line.pointShape = shape;
        state.opts.line.showPoints = shape !== 'none';
        updatePointShapeIcon(shape);
        updatePreview();
        
        // Close popup
        pointShapesPopup.classList.remove('visible');
      });
    });

    // Dropdown positioning and management
    function positionDropdown(button, dropdown) {
      const rect = button.getBoundingClientRect();
      dropdown.style.position = "fixed";
      dropdown.style.left = rect.left + "px";
      dropdown.style.top = rect.bottom + 5 + "px";
    }

    function closeAllDropdowns() {
      colorPresetDropdown.classList.remove("visible");
      fontSizePopup.classList.remove("visible");
      paddingPopup.classList.remove("visible");
      borderRadiusPopup.classList.remove("visible");
      moreDropdown.classList.remove("visible");
      lineWidthPopup.classList.remove("visible"); 
      pointShapesPopup.classList.remove("visible");
      scatterPointShapesPopup.classList.remove("visible");
    }

    // Color Preset Dropdown
    colorPresetBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(colorPresetBtn, colorPresetDropdown);
      colorPresetDropdown.classList.toggle("visible");
    });

    // Font Size Popup
    fontSizeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(fontSizeBtn, fontSizePopup);
      fontSizePopup.classList.toggle("visible");
    });

    // More Options Dropdown
    moreOptionsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(moreOptionsBtn, moreDropdown);
      moreDropdown.classList.toggle("visible");
    });

    // Padding Popup
    paddingBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(paddingBtn, paddingPopup);
      paddingPopup.classList.toggle("visible");
    });

    // Border Radius Popup
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

    // Pie Chart Controls
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

    function applyColorPreset(preset) {
      const data = state.currentData;
      let colorCount = 0;

      // Determine how many colors we need based on chart type and data
      switch (state.chartType) {
        case "pie":
          colorCount = data.labels.length;
          break;
        case "bar":
          colorCount =
            data.series.length > 1
              ? data.series.length
              : data.categories.length;
          break;
        case "line":
          colorCount = 1;
          break;
        case "scatter":
          colorCount = 1;
          break;
        case "histogram":
          colorCount = 1;
          break;
      }

      // Generate new colors based on preset
      let newColors = [];
      switch (preset) {
        case "monochrome":
          newColors = generateMonochromeColors(colorCount);
          break;
        case "pastel":
          newColors = generatePastelColors(colorCount);
          break;
        case "vibrant":
          newColors = generateVibrantColors(colorCount);
          break;
        default:
          newColors = generateDefaultColors(colorCount);
      }

      // Apply the colors to the chart
      state.colors = generateColors(
        state.chartType,
        state.currentData,
        newColors
      );
      updatePreview();
    }

    // Helper function to generate border color from fill color
    function getBorderColor(fillColor) {
      if (!fillColor || !fillColor.startsWith('#')) return '#2b3345'; // fallback
      
      try {
        // Handle HSL colors
        if (fillColor.startsWith('hsl')) {
          // Extract HSL values
          const hslMatch = fillColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
          if (hslMatch) {
            const h = parseInt(hslMatch[1]);
            const s = parseInt(hslMatch[2]);
            let l = parseInt(hslMatch[3]);
            
            // Darken by 20%
            l = Math.max(0, l - 20);
            return `hsl(${h}, ${s}%, ${l}%)`;
          }
          return '#2b3345'; // fallback for invalid HSL
        }
        
        // Handle hex colors
        const hex = fillColor.replace('#', '');
        if (hex.length !== 6 && hex.length !== 3) return '#2b3345';
        
        // Expand 3-digit hex to 6-digit
        const fullHex = hex.length === 3 
          ? hex.split('').map(c => c + c).join('')
          : hex;
          
        const r = parseInt(fullHex.substr(0, 2), 16);
        const g = parseInt(fullHex.substr(2, 2), 16);
        const b = parseInt(fullHex.substr(4, 2), 16);
        
        // Darken by 30%
        const darkenFactor = 0.7;
        const darkerR = Math.floor(r * darkenFactor);
        const darkerG = Math.floor(g * darkenFactor);
        const darkerB = Math.floor(b * darkenFactor);
        
        const toHex = (x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0');
        return `#${toHex(darkerR)}${toHex(darkerG)}${toHex(darkerB)}`;
      } catch (e) {
        console.error('Error generating border color:', e);
        return '#2b3345'; // fallback color
      }
    }

    function updateGlobalToolbarValues() {
      globalBgColor.value = state.globalSettings.backgroundColor;
      popupFontSize.value = state.globalSettings.fontSize;
      fontSizeValue.textContent = state.globalSettings.fontSize + "px";
      popupPadding.value = state.globalSettings.padding;
      paddingValue.textContent = state.globalSettings.padding + "%";
      popupBorderRadius.value = state.globalSettings.borderRadius;
      borderRadiusValue.textContent = state.globalSettings.borderRadius + "px";

      // Update toggle states
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

    function updateToolbarForChartType() {
      const gridAxesControls = document.getElementById('grid-axes-controls');
      const pieControls = document.getElementById('pie-controls');
      const lineControls = document.getElementById('line-controls');
      const scatterControls = document.getElementById('scatter-controls');
      
      // Get the individual toolbar items that should be hidden for specific charts
      const paddingBtn = document.getElementById('padding-btn').closest('.toolbar-item');
      const borderRadiusBtn = document.getElementById('border-radius-btn').closest('.toolbar-item');
      const gridToggle = document.getElementById('global-grid-toggle').closest('.toolbar-item');
      const axesToggle = document.getElementById('global-axes-toggle').closest('.toolbar-item');

      // Hide all specialized toolbars first
      gridAxesControls.style.display = 'none';
      pieControls.style.display = 'none';
      lineControls.style.display = 'none';
      scatterControls.style.display = 'none';
      
      // Reset all hidden states first
      paddingBtn.classList.remove('hidden');
      borderRadiusBtn.classList.remove('hidden');
      gridToggle.classList.remove('hidden');
      axesToggle.classList.remove('hidden');

      // Handle each chart type specifically
      if (state.chartType === 'line') {
        lineControls.style.display = 'flex';
        lineControls.style.display = 'flex';
        gridAxesControls.style.display = 'flex';
        paddingBtn.classList.add('hidden');
        borderRadiusBtn.classList.add('hidden');
        
        // Set initial active states for line controls
        document.getElementById('line-area-toggle').classList.toggle('active', state.opts.line.areaFill);
        document.getElementById('line-curve-toggle').classList.toggle('active', state.opts.line.smooth);
        updatePointShapeIcon(state.opts.line.pointShape);
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      } 
      else if (state.chartType === 'pie') {
        pieControls.style.display = 'flex';
        gridToggle.classList.add('hidden');
        axesToggle.classList.add('hidden');
        document.getElementById('pie-gap-toggle').classList.toggle('active', state.opts.pie.separated);
        document.getElementById('pie-donut-toggle').classList.toggle('active', state.opts.pie.donut > 0);
      } 
      else if (state.chartType === 'scatter') {
        scatterControls.style.display = 'flex'; // SHOW SCATTER CONTROLS
        gridAxesControls.style.display = 'flex';
        paddingBtn.classList.add('hidden');
        borderRadiusBtn.classList.add('hidden');
        updateScatterPointShapeIcon(state.opts.scatter.pointShape);
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      }
      else {
        gridAxesControls.style.display = 'flex';
        document.getElementById('global-grid-toggle').classList.toggle('active', state.globalSettings.showGrid);
        document.getElementById('global-axes-toggle').classList.toggle('active', state.globalSettings.showAxes);
      }
    }

    // Scatter Chart Controls
    const scatterPointShapesBtn = document.getElementById('scatter-point-shapes-btn');
    const scatterPointShapesPopup = document.getElementById('scatter-point-shapes-popup');

    // Helper function to update scatter point shape icon
    function updateScatterPointShapeIcon(shape) {
      const scatterPointShapesBtn = document.getElementById('scatter-point-shapes-btn');
      let iconHTML = '';
      
      switch (shape) {
        case 'square':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173M5 19V5z"/>
          </svg>`;
          break;
        case 'triangle':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.98 10.762C8.608 5.587 9.92 3 12 3s3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572s.105-3.722 2.287-8.022z"/>
          </svg>`;
          break;
        case 'diamond':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M4.511 13.542c-.681-.852-.681-2.232 0-3.084l6.256-7.82c.68-.85 1.785-.85 2.467 0l6.255 7.82c.681.852.681 2.232 0 3.084l-6.256 7.82c-.68.85-1.785.85-2.466 0z"/>
          </svg>`;
          break;
        default: // circle
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
          </svg>`;
      }
      
      scatterPointShapesBtn.innerHTML = iconHTML;
    }

    // Scatter Point Shapes Popup
    scatterPointShapesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      positionDropdown(scatterPointShapesBtn, scatterPointShapesPopup);
      scatterPointShapesPopup.classList.toggle('visible');
    });

    // Scatter Point Shape Selection
    document.querySelectorAll('#scatter-point-shapes-popup .shape-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const shape = e.currentTarget.dataset.shape;
        
        // Update active state
        document.querySelectorAll('#scatter-point-shapes-popup .shape-option').forEach(opt => {
          opt.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        
        // Update state and icon
        state.opts.scatter.pointShape = shape;
        updateScatterPointShapeIcon(shape);
        updatePreview();
        
        // Close popup
        scatterPointShapesPopup.classList.remove('visible');
      });
    });

    function updatePointShapeIcon(shape) {
      const pointShapesBtn = document.getElementById('point-shapes-btn');
      let iconHTML = '';
      
      switch (shape) {
        case 'none':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15">
            <path fill="currentColor" d="M7.5.877c1.648 0 3.155.604 4.315 1.6l.832-.83a.5.5 0 0 1 .707.707l-.832.83a6.623 6.623 0 0 1-9.337 9.337l-.831.833a.5.5 0 0 1-.707-.707l.83-.832A6.623 6.623 0 0 1 7.499.877M3.856 11.85a5.673 5.673 0 0 0 7.991-7.991zM7.5 1.826A5.674 5.674 0 0 0 1.826 7.5a5.65 5.65 0 0 0 1.325 3.642l7.99-7.99a5.65 5.65 0 0 0-3.642-1.325"/>
          </svg>`;
          break;
        case 'square':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173M5 19V5z"/>
          </svg>`;
          break;
        case 'triangle':
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.98 10.762C8.608 5.587 9.92 3 12 3s3.393 2.587 6.02 7.762l.327.644c2.182 4.3 3.274 6.45 2.287 8.022C19.648 21 17.208 21 12.327 21h-.654c-4.88 0-7.321 0-8.307-1.572s.105-3.722 2.287-8.022z"/>
          </svg>`;
          break;
        default: // circle
          iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
          </svg>`;
      }
      
      pointShapesBtn.innerHTML = iconHTML;
    }

    // Application State
    const state = {
      chartType: "bar",
      data: null,
      colors: {},
      globalSettings: {
        backgroundColor: "#111318",
        showGrid: true,
        showAxes: true,
        fontSize: 12,
        padding: 0,
        borderRadius: 6,
      },
      selectedElement: null,
      currentData: getDefaultData("bar"),
      opts: {
        pie: defaultOpts(),
        bar: defaultOpts(),
        line: {
          ...defaultOpts(), // Keep all default options
          areaFill: false,   // Add line-specific defaults
          smooth: false, 
          lineWidth: 2,
          pointShape: 'circle',
          showPoints: true
        },
        scatter: {
          ...defaultOpts(),
          pointShape: 'circle'
        },
        histogram: defaultOpts(),
      },
    };

    function handleChartTypeChange(chartType) {
      state.chartType = chartType;
      currentSeries = 1;
      state.currentData = getDefaultData(chartType);
      updateModernDataTableForChartType();
      updateToolbarForChartType();
      updatePreview();
    }

    function initChartTypeSelector() {
      const chartSelect = document.getElementById('chart-type-select');
      const selectedOption = chartSelect.querySelector('.selected-option');
      const chartOptions = chartSelect.querySelectorAll('.chart-option');

      // Open/close dropdown
      selectedOption.addEventListener('click', (e) => {
        e.stopPropagation();
        chartSelect.classList.toggle('active');
      });

      // Handle option selection
      chartOptions.forEach(option => {
        option.addEventListener('click', () => {
          const chartType = option.dataset.value;
          const iconHTML = option.querySelector('.chart-icon').innerHTML;
          const name = option.querySelector('span').textContent;

          // Update selected display
          chartSelect.querySelector('.chart-icon').innerHTML = iconHTML;
          chartSelect.querySelector('.chart-name').textContent = name;

          // Update active states
          chartOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');

          // Close dropdown
          chartSelect.classList.remove('active');

          // Update chart
          handleChartTypeChange(chartType);
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        chartSelect.classList.remove('active');
      });
    }

    function initDataSourceSelector() {
      const dataSourceSelect = document.getElementById('data-source-select');
      const selectedOption = dataSourceSelect.querySelector('.selected-option');
      const sourceOptions = dataSourceSelect.querySelectorAll('.source-option');

      // Open/close dropdown
      selectedOption.addEventListener('click', (e) => {
        e.stopPropagation();
        dataSourceSelect.classList.toggle('active');
      });

      // Handle option selection
      sourceOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          // Don't do anything if option is disabled
          if (option.classList.contains('disabled')) {
            e.stopPropagation();
            return;
          }

          const sourceType = option.dataset.value;
          const name = option.querySelector('span').textContent;

          // Update selected display
          dataSourceSelect.querySelector('.source-name').textContent = name;

          // Update active states
          sourceOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');

          // Close dropdown
          dataSourceSelect.classList.remove('active');

          // Handle data source change
          handleDataSourceChange(sourceType);
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        dataSourceSelect.classList.remove('active');
      });
    }

    function handleDataSourceChange(sourceType) {
      const defaultDataSection = document.getElementById('default-data-section');
      const manualDataSection = document.getElementById('manual-data-section');

      // Hide all sections first
      defaultDataSection.style.display = 'none';
      manualDataSection.style.display = 'none';

      switch (sourceType) {
        case 'default':
          defaultDataSection.style.display = 'flex';
          // Reset to default data for current chart type
          state.currentData = getDefaultData(state.chartType);
          updateModernDataTableForChartType(); // Changed from updateDataTableForChartType
          updatePreview();
          break;
        case 'manual':
          manualDataSection.style.display = 'flex';
          // Pre-populate the textarea with current data
          dataInput.value = JSON.stringify(state.currentData, null, 2);
          break;
        case 'csv':
        case 'excel':
        case 'sheets':
        case 'json':
          // These are disabled for now
          alert('This feature is coming soon!');
          break;
      }

      updatePreview();
    }
    
    // ========== CHART RENDERING FUNCTIONS ==========

    // Utilities
    const sum = (arr) => arr.reduce((s, v) => s + v, 0);
    const max = (arr) => arr.reduce((m, v) => (v > m ? v : m), -Infinity);
    const min = (arr) => arr.reduce((m, v) => (v < m ? v : m), Infinity);
    const defaultColor = (i) => {
      const base = [106, 162, 255];
      const t = (i % 6) / 6;
      const c = base.map((b, idx) =>
        Math.max(0, Math.min(255, Math.round(b - t * 40 - idx * 5)))
      );
      const toHex = (x) => x.toString(16).padStart(2, "0");
      return `#${toHex(c[0])}${toHex(c[1])}${toHex(c[2])}`;
    };

    // Color generation functions for presets
    function generateMonochromeColors(count) {
      const baseHue = Math.floor(Math.random() * 360);
      return Array.from({ length: count }, (_, i) => {
        const lightness = 30 + i * (40 / count);
        return `hsl(${baseHue}, 50%, ${lightness}%)`;
      });
    }

    function generatePastelColors(count) {
      return Array.from({ length: count }, (_, i) => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 60%, 85%)`;
      });
    }

    function generateVibrantColors(count) {
      return Array.from({ length: count }, (_, i) => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 80%, 50%)`;
      });
    }

    function generateDefaultColors(count) {
      return Array.from({ length: count }, (_, i) => defaultColor(i));
    }

    function defaultOpts() {
      return {
        // Universal
        strokeWidth: 1,
        strokeColor: "#2b3345",
        strokeOpacity: 1,
        strokeType: "solid",
        strokeDash: "4 2",
        fillOpacity: 0.95,
        borderRadius: 6,

        // Shadows
        dropShadowEnabled: false,
        dropShadowX: 2,
        dropShadowY: 2,
        dropShadowBlur: 4,
        dropShadowColor: "#000000",
        dropShadowOpacity: 0.35,

        innerShadowEnabled: false,
        innerShadowX: 0,
        innerShadowY: 1,
        innerShadowBlur: 3,
        innerShadowColor: "#000000",
        innerShadowOpacity: 0.3,

        // Pie chart specific
        donut: false,
        separated: false,

        // Line chart specific
        areaFill: false,
        smooth: false,
        lineWidth: 2,
        pointShape: 'circle',
        showPoints: true,

        // Text
        fontFamily: "Segoe UI",
        fontSize: 12,
        fontWeight: "normal",
        fontColor: "#9aa4b2",

        // Background / axes / grid
        showGrid: true,
        gridOpacity: 0.4,
        showAxes: true,
        backgroundTransparent: true,
        backgroundColor: "#ffffff",

        // Chart-specific placeholders
        startAngle: 0,
        horizontal: false,
        stacked: false,
        smooth: false,
        area: false,
        lineStyle: "solid",
        pointSize: 6,
        pointShape: "circle",
        bins: 10,
        normalize: false,
      };
    }

    function scaleLinear(domain, range) {
      const [d0, d1] = domain,
        [r0, r1] = range;
      const m = (r1 - r0) / (d1 - d0 || 1);
      return (v) => r0 + (v - d0) * m;
    }

    function dashFor(type, custom) {
      if (type === "dashed") return "6 3";
      if (type === "dotted") return "1 4";
      if (type === "custom") return custom || "4 2";
      return null;
    }

    function axes(W, H, pad, showAxes) {
      if (!showAxes) return "";
      const x1 = pad,
        y1 = H - pad,
        x2 = W - pad,
        y2 = pad;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y1}" stroke="#2b3345"/><line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y2}" stroke="#2b3345"/>`;
    }

    function gridAndTicks(x0, x1, y0, y1, maxY, opts) {
      const ticks = 4;
      const els = [];
      for (let i = 0; i <= ticks; i++) {
        const t = i / ticks;
        const y = y0 - t * (y0 - y1);
        const val = Math.round(t * maxY);
        if (opts.showGrid)
          els.push(
            `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`
          );
        els.push(
          `<text x="${x0 - 6}" y="${y + 4
          }" text-anchor="end" style="font-family:${opts.fontFamily
          };font-size:${opts.fontSize}px;font-weight:${opts.fontWeight
          };fill:${opts.fontColor}">${val}</text>`
        );
      }
      return els.join("");
    }

    function shapeStrokeAttrs(opts, fillColor = null) {
      const sw = +opts.strokeWidth;
      if (sw <= 0) return "";
      
      // Use provided fill color to generate border color, or use the strokeColor from opts
      const borderColor = fillColor ? getBorderColor(fillColor) : opts.strokeColor;
      const dash = dashFor(opts.strokeType, opts.strokeDash);
      
      return `stroke="${borderColor}" stroke-opacity="${opts.strokeOpacity}" stroke-width="${sw}" ${dash ? `stroke-dasharray="${dash}"` : ""}`;
    }

    function bgRect(W, H, opts) {
      if (opts.backgroundTransparent)
        return `<rect width="100%" height="100%" fill="#fff" opacity="0"/>`;
      return `<rect width="${W}" height="${H}" fill="${opts.backgroundColor}"/>`;
    }

    // Chart Renderers
    function renderPie(data, colors, W, H, opts) {
      const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.32;
      const total = sum(data.values);
      let angle = (-Math.PI / 2) + (opts.startAngle * Math.PI / 180);
      const pieces = [];

      const padding = state.globalSettings.padding || 0;
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

        const slicePath = createPieSlicePath(cx + explosionX, cy + explosionY, paddedInnerRadius, paddedOuterRadius, angle, angle + sliceAngle, opts.borderRadius);
        const sliceColor = colors.slices && colors.slices[i] ? colors.slices[i] : defaultColor(i);
        
        // FIXED: Get border color for this specific slice
        const borderColor = colors.borders && colors.borders[i] ? colors.borders[i] : getBorderColor(sliceColor);
        
        // Draw the colored slice
        pieces.push(`<path d="${slicePath}" fill="${sliceColor}" fill-opacity="${opts.fillOpacity}"/>`);

        // FIXED: Draw stroke around the entire slice with proper border color
        if (opts.strokeWidth > 0) {
          const strokePath = createPieSlicePath(cx + explosionX, cy + explosionY, innerRadius, r, angle, angle + sliceAngle, opts.borderRadius);
          pieces.push(`<path d="${strokePath}" fill="none" stroke="${borderColor}" stroke-width="${opts.strokeWidth}" stroke-opacity="${opts.strokeOpacity}"/>`);
        }

        // Add labels
        const labelRadius = r + 30 + explosionDistance;
        const labelX = cx + labelRadius * Math.cos(midAngle);
        const labelY = cy + labelRadius * Math.sin(midAngle);
        const textAnchor = Math.cos(midAngle) > 0 ? 'start' : 'end';

        pieces.push(`<text x="${labelX}" y="${labelY}" text-anchor="${textAnchor}" dominant-baseline="middle" 
      style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">
      ${data.labels[i]} (${Math.round((v / total) * 100)}%)
    </text>`);

        angle = angle + sliceAngle;
      });

      return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    ${bgRect(W, H, opts)}
    ${pieces.join('')}
  </svg>`;
    }

    // Helper function to create pie slice path with donut hole support
    function createPieSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle, borderRadius = 0) {
      // If no border radius or very small, use the original path
      if (borderRadius <= 0 || outerRadius - innerRadius < borderRadius * 2) {
        return createSimplePieSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle);
      }

      const largeArc = (endAngle - startAngle) > Math.PI ? 1 : 0;
      const paths = [];

      // Calculate the four corner points
      const x1 = cx + outerRadius * Math.cos(startAngle);
      const y1 = cy + outerRadius * Math.sin(startAngle);
      const x2 = cx + outerRadius * Math.cos(endAngle);
      const y2 = cy + outerRadius * Math.sin(endAngle);
      const x3 = cx + innerRadius * Math.cos(endAngle);
      const y3 = cy + innerRadius * Math.sin(endAngle);
      const x4 = cx + innerRadius * Math.cos(startAngle);
      const y4 = cy + innerRadius * Math.sin(startAngle);

      // For regular pie (innerRadius = 0), we need different logic
      if (innerRadius === 0) {
        return createRoundedPiePath(cx, cy, outerRadius, startAngle, endAngle, borderRadius);
      }

      // For donut chart with inner radius > 0
      return createRoundedDonutPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle, borderRadius);
    }

    function createSimplePieSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
      const largeArc = (endAngle - startAngle) > Math.PI ? 1 : 0;

      const x1 = cx + outerRadius * Math.cos(startAngle);
      const y1 = cy + outerRadius * Math.sin(startAngle);
      const x2 = cx + outerRadius * Math.cos(endAngle);
      const y2 = cy + outerRadius * Math.sin(endAngle);
      const x3 = cx + innerRadius * Math.cos(endAngle);
      const y3 = cy + innerRadius * Math.sin(endAngle);
      const x4 = cx + innerRadius * Math.cos(startAngle);
      const y4 = cy + innerRadius * Math.sin(startAngle);

      if (innerRadius > 0) {
        // Donut slice
        return `M ${x1} ${y1} 
            A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}
            L ${x3} ${y3}
            A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
            Z`;
      } else {
        // Regular pie slice
        return `M ${cx} ${cy} 
            L ${x1} ${y1}
            A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}
            Z`;
      }
    }

    function createRoundedPiePath(cx, cy, radius, startAngle, endAngle, borderRadius) {
      const largeArc = (endAngle - startAngle) > Math.PI ? 1 : 0;

      // Calculate points with border radius offset
      const startAngleWithRadius = startAngle + (borderRadius / radius);
      const endAngleWithRadius = endAngle - (borderRadius / radius);

      const x1 = cx + radius * Math.cos(startAngleWithRadius);
      const y1 = cy + radius * Math.sin(startAngleWithRadius);
      const x2 = cx + radius * Math.cos(endAngleWithRadius);
      const y2 = cy + radius * Math.sin(endAngleWithRadius);

      // Control points for rounded corners
      const controlDist = borderRadius * 0.8;
      const control1X = cx + (radius - controlDist) * Math.cos(startAngle);
      const control1Y = cy + (radius - controlDist) * Math.sin(startAngle);
      const control2X = cx + (radius - controlDist) * Math.cos(endAngle);
      const control2Y = cy + (radius - controlDist) * Math.sin(endAngle);

      return `M ${cx} ${cy} 
          L ${control1X} ${control1Y}
          Q ${cx + radius * Math.cos(startAngle)} ${cy + radius * Math.sin(startAngle)} ${x1} ${y1}
          A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
          Q ${cx + radius * Math.cos(endAngle)} ${cy + radius * Math.sin(endAngle)} ${control2X} ${control2Y}
          Z`;
    }

    function createRoundedDonutPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle, borderRadius) {
      const largeArc = (endAngle - startAngle) > Math.PI ? 1 : 0;

      // Apply border radius to both inner and outer edges
      const outerStartAngle = startAngle + (borderRadius / outerRadius);
      const outerEndAngle = endAngle - (borderRadius / outerRadius);
      const innerStartAngle = startAngle + (borderRadius / innerRadius);
      const innerEndAngle = endAngle - (borderRadius / innerRadius);

      const x1 = cx + outerRadius * Math.cos(outerStartAngle);
      const y1 = cy + outerRadius * Math.sin(outerStartAngle);
      const x2 = cx + outerRadius * Math.cos(outerEndAngle);
      const y2 = cy + outerRadius * Math.sin(outerEndAngle);
      const x3 = cx + innerRadius * Math.cos(innerEndAngle);
      const y3 = cy + innerRadius * Math.sin(innerEndAngle);
      const x4 = cx + innerRadius * Math.cos(innerStartAngle);
      const y4 = cy + innerRadius * Math.sin(innerStartAngle);

      // Control points for rounded corners
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

      return `M ${x1} ${y1}
          A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}
          Q ${cx + outerRadius * Math.cos(endAngle)} ${cy + outerRadius * Math.sin(endAngle)} ${outerControl2X} ${outerControl2Y}
          L ${innerControl2X} ${innerControl2Y}
          Q ${cx + innerRadius * Math.cos(endAngle)} ${cy + innerRadius * Math.sin(endAngle)} ${x3} ${y3}
          A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
          Q ${cx + innerRadius * Math.cos(startAngle)} ${cy + innerRadius * Math.sin(startAngle)} ${innerControl1X} ${innerControl1Y}
          L ${outerControl1X} ${outerControl1Y}
          Q ${cx + outerRadius * Math.cos(startAngle)} ${cy + outerRadius * Math.sin(startAngle)} ${x1} ${y1}
          Z`;
    }

    function renderBar(data, colors, W, H, pad, opts) {
      const cats = data.categories;
      const multi = data.series.length > 1 && !opts.stacked;
      const stacked = data.series.length > 1 && opts.stacked;
      const maxY = stacked
        ? max(cats.map((_, ci) => sum(data.series.map((s) => s.y[ci]))))
        : max(data.series.flatMap((s) => s.y));
      const x0 = pad,
        x1 = W - pad,
        y0 = H - pad,
        y1 = pad;
      const toY = scaleLinear([0, maxY], [y0, y1]);
      const band = (x1 - x0) / cats.length;
      const gap = 6;
      const barW = multi ? (band - 10) / data.series.length : band - 10;
      const rx = Math.min(opts.borderRadius, 20);

      // Padding settings
      const padding = state.globalSettings.padding || 0;
      const hasPadding = padding > 0;

      let bars = "";
      
      // FIXED: Updated drawBar function to properly apply borders
      const drawBar = (x, y, w, h, fill, index) => {
        const borderColor = colors.borders && colors.borders[index] ? colors.borders[index] : getBorderColor(fill);
        const strokeAttrs = `stroke="${borderColor}" stroke-opacity="${opts.strokeOpacity}" stroke-width="${opts.strokeWidth}"`;
        
        if (hasPadding) {
          // Draw outer rectangle (border area)
          const outerBar = `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(0, h)}" rx="${rx}" fill="transparent" ${strokeAttrs}/>`;

          // Draw inner rectangle (colored fill with padding)
          const innerX = x + padding;
          const innerY = y + padding;
          const innerW = Math.max(0, w - padding * 2);
          const innerH = Math.max(0, h - padding * 2);
          const innerRx = Math.max(0, rx - padding);
          const innerBar = `<rect x="${innerX}" y="${innerY}" width="${innerW}" height="${Math.max(0, innerH)}" rx="${innerRx}" fill="${fill}" fill-opacity="${opts.fillOpacity}"/>`;

          return outerBar + innerBar;
        } else {
          // Original bar without padding - FIXED: Added stroke attributes
          return `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(0, h)}" rx="${rx}" fill="${fill}" fill-opacity="${opts.fillOpacity}" ${strokeAttrs}/>`;
        }
      };

      cats.forEach((c, ci) => {
        if (multi) {
          data.series.forEach((s, si) => {
            const v = s.y[ci];
            const x = x0 + ci * band + 5 + si * barW;
            const y = toY(v);
            const h = y0 - y;
            const fill = colors.series?.[si];
            bars += drawBar(x, y, barW - gap, h, fill, si);
          });
        } else if (stacked) {
          let acc = 0;
          data.series.forEach((s, si) => {
            const v = s.y[ci];
            const y = toY(acc + v);
            const h = toY(acc) - y;
            const x = x0 + ci * band + 5;
            const fill = colors.series?.[si];
            bars += drawBar(x, y, barW - gap, h, fill, si);
            acc += v;
          });
        } else {
          const v = data.series[0].y[ci];
          const x = x0 + ci * band + 5;
          const y = toY(v);
          const h = y0 - y;
          const fill = colors.bars?.[ci];
          bars += drawBar(x, y, barW - gap, h, fill, ci);
        }
      });

      const catLabels = cats
        .map((c, ci) => {
          const x = x0 + ci * band + band / 2;
          return `<text x="${x}" y="${y0 + 16}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${c}</text>`;
        })
        .join("");

      return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    ${bgRect(W, H, opts)}
    ${axes(W, H, pad, opts.showAxes)}
    ${gridAndTicks(x0, x1, y0, y1, maxY, opts)}
    ${bars}
    ${catLabels}
  </svg>`;
    }

    function renderLine(data, colors, W, H, pad, opts) {
      const X = data.x.map((_, i) => i);
      const Y = data.series[0].y;
      const maxY = Math.max(...Y),
        minY = Math.min(0, ...Y);
      const x0 = pad,
        x1 = W - pad,
        y0 = H - pad,
        y1 = pad;
      const toX = scaleLinear([0, X.length - 1], [x0, x1]);
      const toY = scaleLinear([minY, maxY], [y0, y1]);

      const points = data.series[0].y
        .map((v, i) => `${toX(i)},${toY(v)}`)
        .join(" ");

      const dash = dashFor(
        opts.lineStyle || opts.strokeType,
        opts.strokeDash
      );
      
      // USE LINE WIDTH FROM NEW OPTION
      const borderColor = colors.border || getBorderColor(colors.line);
      const baseStroke = `stroke="${borderColor}" stroke-width="${Math.max(1, opts.lineWidth || 2)}" ${dash ? `stroke-dasharray="${dash}"` : ""} stroke-opacity="${opts.strokeOpacity}"`;

      let linePath = `<polyline fill="none" ${baseStroke} points="${points}"/>`;
      
      // USE SMOOTH CURVE FROM NEW OPTION - IMPROVED VERSION
      if (opts.smooth) {
        const pathPts = data.series[0].y.map((v, i) => [toX(i), toY(v)]);
        
        if (pathPts.length < 2) {
          linePath = `<polyline fill="none" ${baseStroke} points="${points}"/>`;
        } else {
          let d = `M ${pathPts[0][0]} ${pathPts[0][1]}`;
          
          // For smooth curves, use cubic Bézier with control points
          for (let i = 1; i < pathPts.length - 1; i++) {
            const [x0, y0] = pathPts[i - 1];
            const [x1, y1] = pathPts[i];
            const [x2, y2] = pathPts[i + 1];
            
            // Calculate control points for smooth curve
            const control1X = x0 + (x1 - x0) * 0.5;
            const control1Y = y0 + (y1 - y0) * 0.5;
            const control2X = x1 - (x2 - x0) * 0.1;
            const control2Y = y1 - (y2 - y0) * 0.1;
            
            d += ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${x1} ${y1}`;
          }
          
          // Add the last segment
          const lastIndex = pathPts.length - 1;
          if (lastIndex > 0) {
            const [prevX, prevY] = pathPts[lastIndex - 1];
            const [lastX, lastY] = pathPts[lastIndex];
            
            const controlX = prevX + (lastX - prevX) * 0.5;
            const controlY = prevY + (lastY - prevY) * 0.5;
            
            d += ` S ${lastX} ${lastY}, ${lastX} ${lastY}`;
          }
          
          linePath = `<path d="${d}" fill="none" ${baseStroke}/>`;
        }
      }

      // USE POINT SHAPES FROM NEW OPTION
      const dots = opts.showPoints ? X.map((i) => {
        const cx = toX(i);
        const cy = toY(Y[i]);
        const r = 3;
        
        switch (opts.pointShape) {
          case 'square':
            return `<rect x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" fill="${colors.line}" fill-opacity="${opts.fillOpacity}" ${shapeStrokeAttrs(opts)}/>`;
          case 'triangle':
            return `<polygon points="${cx},${cy - r} ${cx - r},${cy + r} ${cx + r},${cy + r}" fill="${colors.line}" fill-opacity="${opts.fillOpacity}" ${shapeStrokeAttrs(opts)}/>`;
          case 'none':
            return '';
          default: // circle
            return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colors.line}" fill-opacity="${opts.fillOpacity}" ${shapeStrokeAttrs(opts)}/>`;
        }
      }).filter(Boolean).join("") : '';

      const xlabels = data.x
        .map(
          (lbl, i) =>
            `<text x="${toX(i)}" y="${y0 + 16
            }" text-anchor="middle" style="font-family:${opts.fontFamily
            };font-size:${opts.fontSize}px;font-weight:${opts.fontWeight
            };fill:${opts.fontColor}">${lbl}</text>`
        )
        .join("");

      const ticks = 4;
      const tickEls = [];
      for (let i = 0; i <= ticks; i++) {
        const t = i / ticks;
        const y = y0 - t * (y0 - y1);
        const val = (minY + t * (maxY - minY)).toFixed(0);
        if (opts.showGrid)
          tickEls.push(
            `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`
          );
        tickEls.push(
          `<text x="${x0 - 6}" y="${y + 4
          }" text-anchor="end" style="font-family:${opts.fontFamily
          };font-size:${opts.fontSize}px;font-weight:${opts.fontWeight
          };fill:${opts.fontColor}">${val}</text>`
        );
      }

      // USE AREA FILL FROM NEW OPTION
      let area = "";
      if (opts.areaFill) {
        if (opts.smooth && pathPts && pathPts.length > 1) {
          // For smooth curves, recreate the path for area fill
          let areaD = `M ${pathPts[0][0]} ${pathPts[0][1]}`;
          
          for (let i = 1; i < pathPts.length - 1; i++) {
            const [x0, y0] = pathPts[i - 1];
            const [x1, y1] = pathPts[i];
            const [x2, y2] = pathPts[i + 1];
            
            const control1X = x0 + (x1 - x0) * 0.5;
            const control1Y = y0 + (y1 - y0) * 0.5;
            const control2X = x1 - (x2 - x0) * 0.1;
            const control2Y = y1 - (y2 - y0) * 0.1;
            
            areaD += ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${x1} ${y1}`;
          }
          
          // Close the area path
          const lastIndex = pathPts.length - 1;
          if (lastIndex > 0) {
            const [prevX, prevY] = pathPts[lastIndex - 1];
            const [lastX, lastY] = pathPts[lastIndex];
            
            const controlX = prevX + (lastX - prevX) * 0.5;
            const controlY = prevY + (lastY - prevY) * 0.5;
            
            areaD += ` S ${lastX} ${lastY}, ${lastX} ${lastY}`;
          }
          
          areaD += ` L ${toX(X.length - 1)} ${y0} L ${toX(0)} ${y0} Z`;
          area = `<path d="${areaD}" fill="${colors.line}" opacity="${opts.fillOpacity * 0.25}"/>`;
        } else {
          // For straight lines, use the original polyline approach
          area = `<polyline fill="${colors.line}" opacity="${opts.fillOpacity * 0.25}" points="${points} ${toX(X.length - 1)},${y0} ${toX(0)},${y0}"/>`;
        }
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
          ${bgRect(W, H, opts)}
          ${axes(W, H, pad, opts.showAxes)}
          ${tickEls.join("")}
          ${area}
          ${linePath}
          ${dots}
          ${xlabels}
        </svg>`;
    }

    function renderScatter(data, colors, W, H, pad, opts) {
      const xs = data.points.map((p) => p.x);
      const ys = data.points.map((p) => p.y);
      const xmin = Math.min(...xs),
        xmax = Math.max(...xs);
      const ymin = Math.min(...ys),
        ymax = Math.max(...ys);
      const x0 = pad,
        x1 = W - pad,
        y0 = H - pad,
        y1 = pad;
      const toX = scaleLinear([xmin, xmax], [x0, x1]);
      const toY = scaleLinear([ymin, ymax], [y0, y1]);
      const stroke = shapeStrokeAttrs(opts);

      const drawShape = (p) => {
        const r = opts.pointSize || p.r || 6;
        const cx = toX(p.x),
          cy = toY(p.y);
        switch (opts.pointShape) {
            case "square":
              return `<rect x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
            case "triangle":
              return `<polygon points="${cx},${cy - r} ${cx - r},${cy + r} ${cx + r},${cy + r}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
            case "diamond":
              return `<polygon points="${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
            default: // circle
              return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colors.points}" fill-opacity="${opts.fillOpacity}" ${stroke}/>`;
          }
        };

      const dots = data.points.map(drawShape).join("");

      const ticks = 4;
      const tickEls = [];
      for (let i = 0; i <= ticks; i++) {
        const tx = xmin + (i * (xmax - xmin)) / ticks;
        const x = toX(tx);
        if (opts.showGrid)
          tickEls.push(
            `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="#202635" opacity="${opts.gridOpacity}"/>`
          );
        tickEls.push(
          `<text x="${x}" y="${y0 + 16
          }" text-anchor="middle" style="font-family:${opts.fontFamily
          };font-size:${opts.fontSize}px;font-weight:${opts.fontWeight
          };fill:${opts.fontColor}">${Math.round(tx)}</text>`
        );
      }
      for (let i = 0; i <= ticks; i++) {
        const ty = ymin + (i * (ymax - ymin)) / ticks;
        const y = toY(ty);
        if (opts.showGrid)
          tickEls.push(
            `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`
          );
        tickEls.push(
          `<text x="${x0 - 6}" y="${y + 4
          }" text-anchor="end" style="font-family:${opts.fontFamily
          };font-size:${opts.fontSize}px;font-weight:${opts.fontWeight
          };fill:${opts.fontColor}">${Math.round(ty)}</text>`
        );
      }

      return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      ${bgRect(W, H, opts)}
      ${axes(W, H, pad, opts.showAxes)}
      ${tickEls.join("")}
      ${dots}
    </svg>`;
    }

    function renderHistogram(data, colors, W, H, pad, opts) {
      const vals = data.values.slice().sort((a, b) => a - b);
      const minv = data.range?.[0] ?? vals[0];
      const maxv = data.range?.[1] ?? vals[vals.length - 1];
      const bins = data.bins || opts.bins || Math.ceil(Math.sqrt(vals.length));
      const step = (maxv - minv) / bins;
      const edges = Array.from({ length: bins + 1 }, (_, i) => minv + i * step);
      const counts = new Array(bins).fill(0);
      vals.forEach((v) => {
        if (v < minv || v > maxv) return;
        let b = Math.min(bins - 1, Math.floor((v - minv) / step));
        counts[b]++;
      });
      const total = sum(counts);
      const countsOrDensity = opts.normalize
        ? counts.map((c) => c / (total * step))
        : counts;

      const x0 = pad,
        x1 = W - pad,
        y0 = H - pad,
        y1 = pad;
      const band = (x1 - x0) / bins;
      const maxC = Math.max(1, ...countsOrDensity);
      const toY = scaleLinear([0, maxC], [y0, y1]);
      const stroke = shapeStrokeAttrs(opts);
      const rx = Math.min(opts.borderRadius, 20);

      // Padding settings - same as bar chart
      const padding = state.globalSettings.padding || 0;
      const hasPadding = padding > 0;

       // Get border color for histogram
      const borderColor = colors.border || getBorderColor(colors.bins);
      const strokeAttrs = `stroke="${borderColor}" stroke-opacity="${opts.strokeOpacity}" stroke-width="${opts.strokeWidth}"`;

      const drawBar = (x, y, w, h, fill) => {
        if (hasPadding) {
          // Draw outer rectangle (border area) - same as bar chart
          const outerBar = `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(
            0,
            h
          )}" rx="${rx}" fill="transparent" ${strokeAttrs}/>`;

          // Draw inner rectangle (colored fill with padding) - same as bar chart
          const innerX = x + padding;
          const innerY = y + padding;
          const innerW = Math.max(0, w - padding * 2);
          const innerH = Math.max(0, h - padding * 2);
          const innerRx = Math.max(0, rx - padding);
          const innerBar = `<rect x="${innerX}" y="${innerY}" width="${innerW}" height="${Math.max(
            0,
            innerH
          )}" rx="${innerRx}" fill="${fill}" fill-opacity="${opts.fillOpacity}"/>`;

          return outerBar + innerBar;
        } else {
          // Original bar without padding
          return `<rect x="${x}" y="${y}" width="${w}" height="${Math.max(
            0,
            h
          )}" rx="${rx}" fill="${fill}" fill-opacity="${opts.fillOpacity}" ${strokeAttrs}/>`;
        }
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

      const xlabels = counts
        .map((_, i) => {
          const x = x0 + i * band + band / 2;
          const lbl = `${edges[i].toFixed(0)}–${edges[i + 1].toFixed(0)}`;
          return `<text x="${x}" y="${y0 + 16}" text-anchor="middle" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${lbl}</text>`;
        })
        .join("");

      const ticks = 4;
      const tickEls = [];
      for (let i = 0; i <= ticks; i++) {
        const t = i / ticks;
        const y = y0 - t * (y0 - y1);
        const val = (t * maxC).toFixed(0);
        if (opts.showGrid)
          tickEls.push(
            `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#202635" opacity="${opts.gridOpacity}"/>`
          );
        tickEls.push(
          `<text x="${x0 - 6}" y="${y + 4}" text-anchor="end" style="font-family:${opts.fontFamily};font-size:${opts.fontSize}px;font-weight:${opts.fontWeight};fill:${opts.fontColor}">${val}</text>`
        );
      }

      return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
          ${bgRect(W, H, opts)}
          ${axes(W, H, pad, opts.showAxes)}
          ${tickEls.join("")}
          ${bars}
          ${xlabels}
        </svg>`;
}

    // ========== MODIFIED UPDATE PREVIEW FUNCTION ==========

    function updatePreview() {
      const svgHost = document.getElementById("svg-host");

      if (!state.currentData) {
        svgHost.innerHTML = `<div style="color:var(--muted); text-align:center; padding:40px;">
        <p>Please configure your data to see the chart preview</p>
      </div>`;
        return;

      // Disable grid and axes for pie chart
        if (state.chartType === "pie") {
          currentOpts.showGrid = false;
          currentOpts.showAxes = false;
        } else {
          currentOpts.showGrid = state.globalSettings.showGrid;
          currentOpts.showAxes = state.globalSettings.showAxes;
        }
      }

      // Update chart options with global settings
      const currentOpts = state.opts[state.chartType];
      currentOpts.backgroundColor = state.globalSettings.backgroundColor;
      currentOpts.fontSize = state.globalSettings.fontSize;
      currentOpts.borderRadius = state.globalSettings.borderRadius;
      currentOpts.backgroundTransparent = false; // Use our global background

      // Disable grid and axes for pie chart
      if (state.chartType === "pie") {
        currentOpts.showGrid = false;
        currentOpts.showAxes = false;
      } else {
        currentOpts.showGrid = state.globalSettings.showGrid;
        currentOpts.showAxes = state.globalSettings.showAxes;
      }

      // Apply padding based on chart type
      applyChartSpecificPadding(
        state.chartType,
        state.globalSettings.padding,
        currentOpts
      );

      // Use the colors from state (or generate if not present)
      const colors =
        state.colors || generateColors(state.chartType, state.currentData);

      // Get actual preview canvas dimensions
      const previewCanvas = document.getElementById("svg-host");
      const W = previewCanvas.clientWidth;
      const H = previewCanvas.clientHeight;
      const pad = Math.min(W, H) * 0.07; // Responsive padding based on size

      try {
        let svg = "";

        switch (state.chartType) {
          case "pie":
            svg = renderPie(state.currentData, colors, W, H, currentOpts);
            break;
          case "bar":
            svg = renderBar(
              state.currentData,
              colors,
              W,
              H,
              pad,
              currentOpts
            );
            break;
          case "line":
            svg = renderLine(
              state.currentData,
              colors,
              W,
              H,
              pad,
              currentOpts
            );
            break;
          case "scatter":
            svg = renderScatter(
              state.currentData,
              colors,
              W,
              H,
              pad,
              currentOpts
            );
            break;
          case "histogram":
            svg = renderHistogram(
              state.currentData,
              colors,
              W,
              H,
              pad,
              currentOpts
            );
            break;
          default:
            svg = renderBar(
              state.currentData,
              colors,
              W,
              H,
              pad,
              currentOpts
            );
        }

        svgHost.innerHTML = svg;

        // Add click handlers to chart elements for interactive editing
        setTimeout(() => {
          addChartElementInteractivity();
        }, 100);
      } catch (error) {
        console.error("Chart rendering error:", error);
        svgHost.innerHTML = `<div style="color:var(--muted); text-align:center; padding:40px;">
        <p>Error rendering chart. Please check your data.</p>
        <p style="font-size:12px; color:var(--ink-2);">${error.message}</p>
      </div>`;
      }
    }

    function applyChartSpecificPadding(chartType, padding, opts) {
      switch (chartType) {
        case "bar":
          opts.barSpacing = padding;
          break;
        case "pie":
          // For pie chart, padding reduces the colored fill area inside the stroke
          // This is handled in renderPie function
          break;
        case "scatter":
          opts.pointSpacing = padding;
          break;
        case "histogram":
          // For histogram, padding should affect the bar spacing
          opts.barSpacing = padding;
          break;
        default:
          break;
      }
    }

    function generateColors(chartType, data, presetColors = null) {
      const colors = {};
      const colorArray = presetColors || Array.from({ length: 10 }, (_, i) => defaultColor(i));

      switch (chartType) {
        case "pie":
          colors.slices = data.labels.map(
            (_, i) => colorArray[i % colorArray.length] || defaultColor(i)
          );
          // FIXED: Generate border colors for each slice
          colors.borders = colors.slices.map(fillColor => getBorderColor(fillColor));
          break;
        case "bar":
          if (data.series.length > 1) {
            colors.series = data.series.map(
              (_, i) => colorArray[i % colorArray.length] || defaultColor(i)
            );
            // FIXED: Generate border colors for each series
            colors.borders = colors.series.map(fillColor => getBorderColor(fillColor));
          } else {
            colors.bars = data.categories.map(
              (_, i) => colorArray[i % colorArray.length] || defaultColor(i)
            );
            // FIXED: Generate border colors for each bar
            colors.borders = colors.bars.map(fillColor => getBorderColor(fillColor));
          }
          break;
        case "line":
          colors.line = colorArray[0] || defaultColor(0);
          colors.border = getBorderColor(colors.line);
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


    function addChartElementInteractivity() {
      const svg = document.querySelector("#svg-host svg");
      if (!svg) return;

      // Add click handlers to all chart elements that can be customized
      const interactiveElements = svg.querySelectorAll(
        "rect, circle, path, polygon, polyline"
      );

      interactiveElements.forEach((element, index) => {
        element.style.cursor = "pointer";
        element.setAttribute("data-element-id", index);
        element.setAttribute(
          "data-original-fill",
          element.getAttribute("fill") || "#6aa2ff"
        );

        element.addEventListener("click", (e) => {
          e.stopPropagation();
          selectChartElement(element);
        });
      });

      // Click outside to deselect
      svg.addEventListener("click", (e) => {
        if (e.target === svg) {
          hideContextToolbar();
        }
      });
    }

    // Store element-specific data
    let currentElementData = {
      type: null,
      index: null,
      originalStyles: null
    };

    function selectChartElement(element) {
      // Remove previous selection
      const previouslySelected = document.querySelector(".chart-element.selected");
      if (previouslySelected) {
        previouslySelected.classList.remove("selected");
      }

      // Select new element
      element.classList.add("selected");
      state.selectedElement = element;

      // Determine element type and index
      const elementId = element.getAttribute("data-element-id");
      currentElementData.index = parseInt(elementId);
      currentElementData.originalStyles = {
        fill: element.getAttribute("fill"),
        opacity: element.getAttribute("fill-opacity") || element.getAttribute("opacity") || "1"
      };

      // Set context toolbar mode based on chart type
      contextToolbar.className = "context-toolbar";
      if (state.chartType === "bar") {
        contextToolbar.classList.add("bar-mode");
        setupBarContextToolbar(element);
      } else if (state.chartType === "pie") {
        contextToolbar.classList.add("pie-mode");
        setupPieContextToolbar(element);
      }

      // Show context toolbar near the element
      const rect = element.getBoundingClientRect();
      const previewRect = document.getElementById("svg-host").getBoundingClientRect();

      contextToolbar.style.left = Math.max(10, rect.left - previewRect.left + rect.width / 2 - 140) + "px";
      contextToolbar.style.top = Math.max(10, rect.top - previewRect.top - 200) + "px";
      contextToolbar.classList.add("visible");

      // Set universal values
      const currentColor = element.getAttribute("fill") || element.getAttribute("stroke") || "#6aa2ff";
      toolbarColor.value = currentColor;

      const currentOpacity = Math.round(
        parseFloat(element.getAttribute("fill-opacity") || element.getAttribute("opacity") || "1") * 100
      );
      toolbarOpacity.value = currentOpacity;
      opacityValue.textContent = currentOpacity + "%";
    }

    function setupBarContextToolbar(element) {
      // Set bar-specific values
      const borderColor = element.getAttribute("stroke") || "#2b3345";
      toolbarBorderColor.value = borderColor;

      const borderWidth = parseInt(element.getAttribute("stroke-width") || "1");
      toolbarBorderWidth.value = borderWidth;
      borderWidthValue.textContent = borderWidth + "px";

      const barWidth = parseInt(element.getAttribute("data-bar-width") || "40");
      toolbarBarWidth.value = barWidth;
      barWidthValue.textContent = barWidth + "px";

      const cornerRadius = parseInt(element.getAttribute("rx") || "6");
      toolbarCornerRadius.value = cornerRadius;
      cornerRadiusValue.textContent = cornerRadius + "px";

      const showValue = element.getAttribute("data-show-value") !== "false";
      toolbarValueDisplay.classList.toggle("active", showValue);
    }

    function setupPieContextToolbar(element) {
      // Set pie-specific values
      const slicePadding = parseInt(element.getAttribute("data-slice-padding") || "0");
      toolbarSlicePadding.value = slicePadding;
      slicePaddingValue.textContent = slicePadding + "%";

      const borderColor = element.getAttribute("stroke") || "#2b3345";
      toolbarSliceBorderColor.value = borderColor;

      const borderRadius = parseInt(element.getAttribute("data-border-radius") || "0");
      toolbarSliceBorderRadius.value = borderRadius;
      sliceBorderRadiusValue.textContent = borderRadius + "px";

      const showLabel = element.getAttribute("data-show-label") !== "false";
      toolbarLabelDisplay.classList.toggle("active", showLabel);
    }

    // Event Listeners for Context Toolbar
    function setupContextToolbarListeners() {
      // Universal listeners
      toolbarColor.addEventListener("input", (e) => {
        if (state.selectedElement) {
          state.selectedElement.setAttribute("fill", e.target.value);
        }
      });

      toolbarOpacity.addEventListener("input", (e) => {
        if (state.selectedElement) {
          const opacity = e.target.value / 100;
          state.selectedElement.setAttribute("fill-opacity", opacity.toString());
          opacityValue.textContent = e.target.value + "%";
        }
      });

      // Bar chart listeners
      toolbarBorderColor.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "bar") {
          state.selectedElement.setAttribute("stroke", e.target.value);
        }
      });

      toolbarBorderWidth.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "bar") {
          state.selectedElement.setAttribute("stroke-width", e.target.value);
          borderWidthValue.textContent = e.target.value + "px";
        }
      });

      toolbarBarWidth.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "bar") {
          state.selectedElement.setAttribute("data-bar-width", e.target.value);
          state.selectedElement.setAttribute("width", e.target.value);
          barWidthValue.textContent = e.target.value + "px";
          updatePreview(); // Redraw to apply width changes
        }
      });

      toolbarCornerRadius.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "bar") {
          state.selectedElement.setAttribute("rx", e.target.value);
          state.selectedElement.setAttribute("ry", e.target.value);
          cornerRadiusValue.textContent = e.target.value + "px";
        }
      });

      toolbarValueDisplay.addEventListener("click", () => {
        if (state.selectedElement && state.chartType === "bar") {
          const isActive = toolbarValueDisplay.classList.toggle("active");
          state.selectedElement.setAttribute("data-show-value", isActive.toString());
          updatePreview(); // Redraw to show/hide values
        }
      });

      // Pie chart listeners
      toolbarSlicePadding.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "pie") {
          state.selectedElement.setAttribute("data-slice-padding", e.target.value);
          slicePaddingValue.textContent = e.target.value + "%";
          updatePreview(); // Redraw to apply padding
        }
      });

      toolbarSliceBorderColor.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "pie") {
          state.selectedElement.setAttribute("stroke", e.target.value);
        }
      });

      toolbarSliceBorderRadius.addEventListener("input", (e) => {
        if (state.selectedElement && state.chartType === "pie") {
          state.selectedElement.setAttribute("data-border-radius", e.target.value);
          sliceBorderRadiusValue.textContent = e.target.value + "px";
          updatePreview(); // Redraw to apply border radius
        }
      });

      toolbarLabelDisplay.addEventListener("click", () => {
        if (state.selectedElement && state.chartType === "pie") {
          const isActive = toolbarLabelDisplay.classList.toggle("active");
          state.selectedElement.setAttribute("data-show-label", isActive.toString());
          updatePreview(); // Redraw to show/hide labels
        }
      });

      // Action buttons
      toolbarReset.addEventListener("click", () => {
        if (state.selectedElement && currentElementData.originalStyles) {
          state.selectedElement.setAttribute("fill", currentElementData.originalStyles.fill);
          state.selectedElement.setAttribute("fill-opacity", currentElementData.originalStyles.opacity);
          // Reset other attributes to defaults
          if (state.chartType === "bar") {
            state.selectedElement.setAttribute("stroke", "#2b3345");
            state.selectedElement.setAttribute("stroke-width", "1");
            state.selectedElement.setAttribute("rx", "6");
            state.selectedElement.setAttribute("ry", "6");
            state.selectedElement.setAttribute("data-show-value", "true");
          } else if (state.chartType === "pie") {
            state.selectedElement.setAttribute("stroke", "#2b3345");
            state.selectedElement.setAttribute("data-slice-padding", "0");
            state.selectedElement.setAttribute("data-border-radius", "0");
            state.selectedElement.setAttribute("data-show-label", "true");
          }
          updatePreview();
          hideContextToolbar();
        }
      });

      toolbarApplyAll.addEventListener("click", () => {
        if (state.selectedElement) {
          // Implementation for applying styles to all similar elements
          alert("Apply to all feature will be implemented in the next phase");
        }
      });
    }

    // ========== DATA TABLE CONFIGURATION ==========

    // Update the data table configuration to remove color column for pie chart
    const dataTableConfig = {
      bar: {
        headers: ['Category', 'Value'],
        types: ['text', 'number'],
        maxRows: 15,
        maxSeries: 5,
        defaultData: [
          ['Category A', 25],
          ['Category B', 40],
          ['Category C', 30],
          ['Category D', 35]
        ]
      },
      pie: {
        headers: ['Label', 'Value'], // REMOVED 'Color' from headers
        types: ['text', 'number'],   // REMOVED 'color' from types
        maxRows: 8,
        maxSeries: 1,
        defaultData: [
          ['Slice A', 25],           // REMOVED colors from default data
          ['Slice B', 40],
          ['Slice C', 30],
          ['Slice D', 35]
        ]
      },
      line: {
        headers: ['X-Axis', 'Value'],
        types: ['text', 'number'],
        maxRows: 15,
        maxSeries: 5,
        defaultData: [
          ['Jan', 25],
          ['Feb', 40],
          ['Mar', 30],
          ['Apr', 35]
        ]
      },
      scatter: {
        headers: ['X', 'Y', 'Size', 'Label'],
        types: ['number', 'number', 'number', 'text'],
        maxRows: 20,
        maxSeries: 1,
        defaultData: [
          [10, 20, 6, 'Point A'],
          [30, 40, 8, 'Point B'],
          [50, 30, 5, 'Point C'],
          [70, 60, 7, 'Point D']
        ]
      },
      histogram: {
        headers: ['Value'],
        types: ['number'],
        maxRows: 50,
        maxSeries: 1,
        defaultData: [
          [12], [15], [18], [22], [25], [28], [30], [32], [35], [18], [22], [25]
        ]
      }
    };

    // Multi-series support
    let currentSeries = 1;

    // Initialize Modern Data Table
    function initModernDataTable() {
      const addRowBtn = document.getElementById('btn-add-row-modern');
      const addSeriesBtn = document.getElementById('btn-add-series-modern');
      
      addRowBtn.addEventListener('click', addNewRow);
      addSeriesBtn.addEventListener('click', addNewSeries);
    }

    // Update modern table structure based on chart type
    function updateModernDataTableForChartType() {
      const config = dataTableConfig[state.chartType];
      const headersContainer = document.getElementById('modern-data-table-headers');
      const bodyContainer = document.getElementById('modern-data-table-body');
      const addSeriesBtn = document.getElementById('btn-add-series-modern');
      const seriesCount = document.getElementById('modern-series-count');
      
      // Show/hide add series button and series count
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
      
      // Update headers
      headersContainer.innerHTML = generateModernTableHeaders(config);
      
      // Update body with current data or default data
      if (!state.currentData || !isValidDataForChart(state.currentData, state.chartType)) {
        state.currentData = convertTableDataToChartData(config.defaultData, state.chartType);
      }
      
      bodyContainer.innerHTML = generateModernTableRows(getTableDataFromChartData(state.currentData, state.chartType), config);
      
      updateModernRowCount();
      updateModernDataLimits();
    }

    // FIXED: Generate modern table headers with proper series columns
    function generateModernTableHeaders(config) {
      let headers = config.headers.slice();
      
      // Add series columns for multi-series charts
      if (currentSeries > 1 && state.chartType !== 'pie') {
        const baseHeaders = headers.slice(0, 1); // Keep first column (Category/X-Axis)
        for (let i = 1; i <= currentSeries; i++) {
          baseHeaders.push(`Series ${i}`);
        }
        headers = baseHeaders;
      }
      
      // Add actions column
      headers.push('Actions');
      
      return `
        <tr>
          ${headers.map((header, index) => {
            // Check if this is a series column that should have delete button
            const isSeriesColumn = currentSeries > 1 && 
                                  state.chartType !== 'pie' && 
                                  index > 0 && 
                                  index < headers.length - 1;
            
            if (isSeriesColumn) {
              // Series header with delete button
              return `
                <th>
                  <div class="series-header-modern">
                    <span>${header}</span>
                    <button class="delete-series-btn" data-series="${index}" title="Delete series">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/>
                      </svg>
                    </button>
                  </div>
                </th>
              `;
            } else {
              return `<th>${header}</th>`;
            }
          }).join('')}
        </tr>
      `;
    }

    // FIXED: Generate modern table rows with proper series inputs
    function generateModernTableRows(data, config) {
      return data.map((row, rowIndex) => {
        // For multi-series charts, we need to handle the dynamic number of columns
        let actualRowData = row;
        
        // If we have more series than data columns, pad with empty values
        if (currentSeries > 1 && state.chartType !== 'pie' && row.length < currentSeries + 1) {
          actualRowData = [row[0]]; // Keep the first column (category/x-axis)
          for (let i = 1; i <= currentSeries; i++) {
            actualRowData.push(row[i] || ''); // Use existing value or empty string
          }
        }
        
        return `
          <tr data-row="${rowIndex}">
            ${actualRowData.map((cell, cellIndex) => {
              // Determine input type based on position and chart type
              let inputType = 'text';
              
              if (state.chartType === 'pie') {
                // Pie chart: first column text, second column number
                inputType = cellIndex === 0 ? 'text' : 'number';
              } else if (currentSeries > 1 && state.chartType !== 'pie') {
                // Multi-series charts: first column text, other columns number
                inputType = cellIndex === 0 ? 'text' : 'number';
              } else {
                // Single series: use config types
                inputType = config.types[cellIndex] || 'text';
              }
              
              if (inputType === 'color') {
                return `
                  <td class="color-cell-modern">
                    <div class="color-preview-modern" style="background: ${cell}"></div>
                    <input type="color" value="${cell}" data-cell="${cellIndex}" 
                          title="Choose color">
                  </td>
                `;
              } else {
                return `
                  <td>
                    <input type="${inputType}" value="${cell}" data-cell="${cellIndex}" 
                          ${inputType === 'number' ? 'min="0" step="1"' : ''}>
                  </td>
                `;
              }
            }).join('')}
            <td class="row-actions-modern">
              <button class="delete-row-btn" data-row="${rowIndex}" title="Delete row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/>
                </svg>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    // Update modern row count display
    function updateModernRowCount() {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      document.getElementById('modern-row-count').textContent = `${currentData.length} row${currentData.length !== 1 ? 's' : ''}`;
    }

    // Update modern data limits display
    function updateModernDataLimits() {
      const config = dataTableConfig[state.chartType];
      const seriesText = config.maxSeries > 1 ? `, ${currentSeries}/${config.maxSeries} series` : '';
      document.getElementById('modern-data-limits').textContent = `Max: ${config.maxRows} rows${seriesText}`;
      
      // Update series count
      const seriesCount = document.getElementById('modern-series-count');
      if (config.maxSeries > 1) {
        seriesCount.textContent = `${currentSeries} series`;
      }
    }

    // Setup modern table event listeners
    function setupModernTableEventListeners() {
      const table = document.getElementById('modern-data-table');
      
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

    // FIXED: Add new row function to handle dynamic series
    function addNewRow() {
      const config = dataTableConfig[state.chartType];
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      if (currentData.length >= config.maxRows) {
        alert(`Maximum ${config.maxRows} rows allowed for ${state.chartType} chart`);
        return;
      }
      
      // Create empty row based on current series count and chart type
      const emptyRow = [];
      
      if (currentSeries > 1 && state.chartType !== 'pie') {
        // Multi-series chart: first column is label, rest are number values
        emptyRow.push(`New ${config.headers[0]}`);
        for (let i = 1; i <= currentSeries; i++) {
          emptyRow.push(Math.floor(Math.random() * 50) + 10);
        }
      } else {
        // Single series or pie chart: use config
        for (let i = 0; i < config.headers.length; i++) {
          if (i === 0) {
            emptyRow.push(`New ${config.headers[i]}`);
          } else if (config.types[i] === 'number') {
            emptyRow.push(Math.floor(Math.random() * 50) + 10);
          } else if (config.types[i] === 'color') {
            emptyRow.push(defaultColor(currentData.length));
          } else {
            emptyRow.push('');
          }
        }
      }
      
      currentData.push(emptyRow);
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      updateModernDataTableForChartType();
      updatePreview();
    }

    // Add new series
    function addNewSeries() {
      const config = dataTableConfig[state.chartType];
      
      if (currentSeries >= config.maxSeries) {
        alert(`Maximum ${config.maxSeries} series allowed for ${state.chartType} chart`);
        return;
      }
      
      currentSeries++;
      updateDataTableForChartType();
      updatePreview();
    }

    // Delete row
    function deleteRow(rowIndex) {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      if (currentData.length <= 1) {
        alert('Cannot delete the last row');
        return;
      }
      
      currentData.splice(rowIndex, 1);
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      updateDataTableForChartType();
      updatePreview();
    }

    // Delete series
    function deleteSeries(seriesIndex) {
      if (currentSeries <= 1) {
        alert('Cannot delete the last series');
        return;
      }
      
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      // Remove the series column from all rows
      currentData.forEach(row => {
        row.splice(seriesIndex, 1);
      });
      
      currentSeries--;
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      updateDataTableForChartType();
      updatePreview();
    }

    // Handle cell edits
    function handleCellEdit(rowIndex, cellIndex, newValue) {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      if (currentData[rowIndex]) {
        currentData[rowIndex][cellIndex] = newValue;
        state.currentData = convertTableDataToChartData(currentData, state.chartType);
        updatePreview();
      }
    }

    // Add new row - FIXED VERSION
    function addNewRow() {
      const config = dataTableConfig[state.chartType];
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      if (currentData.length >= config.maxRows) {
        alert(`Maximum ${config.maxRows} rows allowed for ${state.chartType} chart`);
        return;
      }
      
      // Create empty row based on current series count
      const emptyRow = [];
      for (let i = 0; i < config.headers.length; i++) {
        if (i === 0) {
          emptyRow.push(`New ${config.headers[i]}`);
        } else if (config.types[i] === 'number') {
          emptyRow.push(Math.floor(Math.random() * 50) + 10);
        } else if (config.types[i] === 'color') {
          emptyRow.push(defaultColor(currentData.length));
        } else {
          emptyRow.push('');
        }
      }
      
      currentData.push(emptyRow);
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      updateModernDataTableForChartType(); // CHANGED TO MODERN VERSION
      updatePreview();
    }

    // Add new series - FIXED VERSION
    function addNewSeries() {
      const config = dataTableConfig[state.chartType];
      
      if (currentSeries >= config.maxSeries) {
        alert(`Maximum ${config.maxSeries} series allowed for ${state.chartType} chart`);
        return;
      }
      
      currentSeries++;
      updateModernDataTableForChartType(); // CHANGED TO MODERN VERSION
      updatePreview();
    }

    // Delete row - FIXED VERSION
    function deleteRow(rowIndex) {
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      if (currentData.length <= 1) {
        alert('Cannot delete the last row');
        return;
      }
      
      currentData.splice(rowIndex, 1);
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      updateModernDataTableForChartType(); // CHANGED TO MODERN VERSION
      updatePreview();
    }

    // Delete series - FIXED VERSION
    function deleteSeries(seriesIndex) {
      if (currentSeries <= 1) {
        alert('Cannot delete the last series');
        return;
      }
      
      const currentData = getTableDataFromChartData(state.currentData, state.chartType);
      
      // Remove the series column from all rows
      currentData.forEach(row => {
        row.splice(seriesIndex, 1);
      });
      
      currentSeries--;
      state.currentData = convertTableDataToChartData(currentData, state.chartType);
      updateModernDataTableForChartType(); // CHANGED TO MODERN VERSION
      updatePreview();
    }

    // FIXED: Data conversion for pie chart (remove colors from data)
    function getTableDataFromChartData(chartData, chartType) {
      switch (chartType) {
        case 'bar':
          return chartData.categories.map((category, index) => {
            const row = [category];
            chartData.series.forEach(series => {
              row.push(series.y[index]);
            });
            return row;
          });
          
        case 'pie':
          // Pie chart: only labels and values, no colors
          return chartData.labels.map((label, index) => [
            label,
            chartData.values[index]
            // REMOVED colors from pie chart data
          ]);
          
        case 'line':
          return chartData.x.map((xValue, index) => {
            const row = [xValue];
            chartData.series.forEach(series => {
              row.push(series.y[index]);
            });
            return row;
          });
          
        case 'scatter':
          return chartData.points.map(point => [
            point.x,
            point.y,
            point.r || 6,
            point.label || ''
          ]);
          
        case 'histogram':
          return chartData.values.map(value => [value]);
          
        default:
          return [];
      }
    }

    // FIXED: Convert table data to chart data for pie chart
    function convertTableDataToChartData(tableData, chartType) {
      switch (chartType) {
        case 'bar':
          const categories = tableData.map(row => row[0]);
          const series = [];
          
          for (let i = 1; i < tableData[0].length; i++) {
            series.push({
              label: `Series ${i}`,
              y: tableData.map(row => parseInt(row[i]) || 0)
            });
          }
          
          return { categories, series };
          
        case 'pie':
          const labels = tableData.map(row => row[0]);
          const values = tableData.map(row => parseInt(row[1]) || 0);
          
          // REMOVED color handling for pie chart
          // Colors will be generated automatically
          
          return { labels, values };
          
        case 'line':
          const x = tableData.map(row => row[0]);
          const lineSeries = [];
          
          for (let i = 1; i < tableData[0].length; i++) {
            lineSeries.push({
              label: `Series ${i}`,
              y: tableData.map(row => parseInt(row[i]) || 0)
            });
          }
          
          return { x, series: lineSeries };
          
        case 'scatter':
          const points = tableData.map(row => ({
            x: parseInt(row[0]) || 0,
            y: parseInt(row[1]) || 0,
            r: parseInt(row[2]) || 6,
            label: row[3] || ''
          }));
          
          return { points };
          
        case 'histogram':
          const histogramValues = tableData.map(row => parseInt(row[0]) || 0);
          return { values: histogramValues };
          
        default:
          return tableData;
      }
    }

    // Helper function to validate data
    function isValidDataForChart(data, chartType) {
      if (!data) return false;
      
      switch (chartType) {
        case 'bar':
          return data.categories && data.series && data.series.length > 0;
        case 'pie':
          return data.labels && data.values && data.labels.length === data.values.length;
        case 'line':
          return data.x && data.series && data.series.length > 0;
        case 'scatter':
          return data.points && Array.isArray(data.points);
        case 'histogram':
          return data.values && Array.isArray(data.values);
        default:
          return false;
      }
    }

    // ========== REST OF THE APPLICATION CODE ==========

    // Data Management Functions
    function getDefaultData(type) {
      switch (type) {
        case "bar":
          return {
            categories: [
              "Category A",
              "Category B",
              "Category C",
              "Category D",
            ],
            series: [{ label: "Series 1", y: [25, 40, 30, 35] }],
          };
        case "pie":
          return {
            labels: ["Slice A", "Slice B", "Slice C", "Slice D"],
            values: [25, 40, 30, 35],
          };
        case "line":
          return {
            x: ["Jan", "Feb", "Mar", "Apr"],
            series: [{ label: "Series 1", y: [25, 40, 30, 35] }],
          };
        case "scatter":
          return {
            points: [
              { x: 10, y: 20, r: 6 },
              { x: 30, y: 40, r: 8 },
              { x: 50, y: 30, r: 5 },
              { x: 70, y: 60, r: 7 },
            ],
          };
        case "histogram":
          return {
            values: [
              12, 15, 18, 22, 25, 28, 30, 32, 35, 18, 22, 25, 28, 30, 32,
            ],
          };
        default:
          return getDefaultData("bar");
      }
    }

    function applyManualData() {
      try {
        const parsedData = JSON.parse(dataInput.value);
        state.currentData = parsedData;
        updatePreview();
      } catch (e) {
        alert("Invalid JSON data. Please check your input format.");
      }
    }

    // Initialize the application
    function init() {
      setupEventListeners();
      initChartTypeSelector();
      initDataSourceSelector();
      initModernDataTable();
      setupModernTableEventListeners()
     updateModernDataTableForChartType();
      updateToolbarForChartType();
      updatePreview();
      updateGlobalToolbarValues();
      setupContextToolbarListeners();
    }

    // Event Listeners Setup
    function setupEventListeners() {
      // Hamburger Menu
      hamburgerMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("visible");
      });

      document.addEventListener("click", () => {
        dropdownMenu.classList.remove("visible");
      });

      // Theme Toggle
      themeToggle.addEventListener("click", toggleTheme);

      // Info Modal
      infoBtn.addEventListener("click", () => {
        infoModal.classList.add("visible");
        dropdownMenu.classList.remove("visible");
      });

      modalClose.addEventListener("click", () => {
        infoModal.classList.remove("visible");
      });

      infoModal.addEventListener("click", (e) => {
        if (e.target === infoModal) {
          infoModal.classList.remove("visible");
        }
      });

      // Apply Manual Data
      btnApplyData.addEventListener("click", applyManualData);

      // Global Toolbar Controls
      globalBgColor.addEventListener("input", (e) => {
        state.globalSettings.backgroundColor = e.target.value;
        // Also update the chart-specific options
        state.opts[state.chartType].backgroundColor = e.target.value;
        state.opts[state.chartType].backgroundTransparent = false;
        updatePreview();
      });

      // Grid Toggle
      document.getElementById("global-grid-toggle").addEventListener("click", function() {
        // Don't allow toggling for pie charts
        if (state.chartType === 'pie') return;
        
        this.classList.toggle("active");
        state.globalSettings.showGrid = this.classList.contains("active");
        
        // Also update chart-specific options
        if (state.chartType !== "pie") {
          state.opts[state.chartType].showGrid = state.globalSettings.showGrid;
        }
        
        updatePreview();
      });

      // Axes Toggle  
      document.getElementById("global-axes-toggle").addEventListener("click", function() {
        // Don't allow toggling for pie charts
        if (state.chartType === 'pie') return;
        
        this.classList.toggle("active");
        state.globalSettings.showAxes = this.classList.contains("active");
        
        // Also update chart-specific options
        if (state.chartType !== "pie") {
          state.opts[state.chartType].showAxes = state.globalSettings.showAxes;
        }
        
        updatePreview();
      });

      resetStylesBtn.addEventListener("click", () => {
        // Reset to defaults
        state.globalSettings = {
          backgroundColor: "#111318",
          showGrid: true,
          showAxes: true,
          fontSize: 12,
          padding: 0,
          borderRadius: 6,
        };
        updateGlobalToolbarValues();
        updatePreview();
      });

      // Close all dropdowns when clicking outside
      document.addEventListener("click", (e) => {
        // Only close if the click is NOT on a dropdown button or inside a dropdown
        if (
          !e.target.closest(".has-dropdown") &&
          !e.target.closest(".dropdown-menu") &&
          !e.target.closest(".slider-popup") &&
          !e.target.closest(".color-preset-dropdown")
        ) {
          closeAllDropdowns();
        }
      });

      // Initialize context toolbar listeners
      setupContextToolbarListeners();

      // Export Buttons
      btnExportSvg.addEventListener("click", exportSVG);
      btnExportPng.addEventListener("click", exportPNG);
      btnExportFigma.addEventListener("click", exportToFigma);
    }

    // Theme Management
    function toggleTheme() {
      const isDark =
        document.documentElement.style.getPropertyValue("--bg") ===
        "#0b0c0f" ||
        !document.documentElement.style.getPropertyValue("--bg");

      if (isDark) {
        applyLightTheme();
        themeToggle.innerHTML = "<span>☀️</span><span>Light Mode</span>";
      } else {
        applyDarkTheme();
        themeToggle.innerHTML = "<span>🌙</span><span>Dark Mode</span>";
      }
      updatePreview();
    }

    function applyLightTheme() {
      document.documentElement.style.setProperty("--bg", "#f8fafc");
      document.documentElement.style.setProperty("--panel", "#ffffff");
      document.documentElement.style.setProperty("--panel-2", "#f6f7fb");
      document.documentElement.style.setProperty("--ink", "#0f172a");
      document.documentElement.style.setProperty("--ink-2", "#334155");
      document.documentElement.style.setProperty("--muted", "#64748b");
      document.documentElement.style.setProperty("--line", "#e5e7eb");
      document.documentElement.style.setProperty("--brand", "#2563eb");
      document.documentElement.style.setProperty("--brand-2", "#60a5fa");
      document.documentElement.style.setProperty("--accent", "#8b5cf6");
    }

    function applyDarkTheme() {
      document.documentElement.style.removeProperty("--bg");
      document.documentElement.style.removeProperty("--panel");
      document.documentElement.style.removeProperty("--panel-2");
      document.documentElement.style.removeProperty("--ink");
      document.documentElement.style.removeProperty("--ink-2");
      document.documentElement.style.removeProperty("--muted");
      document.documentElement.style.removeProperty("--line");
      document.documentElement.style.removeProperty("--brand");
      document.documentElement.style.removeProperty("--brand-2");
      document.documentElement.style.removeProperty("--accent");
    }

    function hideContextToolbar() {
      contextToolbar.classList.remove("visible");
      state.selectedElement = null;

      const selected = document.querySelector(".chart-element.selected");
      if (selected) {
        selected.classList.remove("selected");
      }
    }

    // Export Functions
    function exportSVG() {
      const svg = document.querySelector("#svg-host svg");
      if (!svg) {
        alert("No chart to export. Please generate a chart first.");
        return;
      }

      const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chart-${state.chartType}.svg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    function exportPNG() {
      const svg = document.querySelector("#svg-host svg");
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
        a.download = `chart-${state.chartType}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      };

      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
    }

    function exportToFigma() {
      const svg = document.querySelector("#svg-host svg");
      if (!svg) {
        alert("No chart to export. Please generate a chart first.");
        return;
      }

      // Send SVG to Figma plugin
      if (typeof parent !== "undefined" && parent.postMessage) {
        parent.postMessage(
          {
            pluginMessage: {
              type: "EXPORT_SVG",
              svg: svg.outerHTML,
            },
          },
          "*"
        );
        alert("Chart sent to Figma canvas!");
      } else {
        alert(
          "Figma export is only available when running as a Figma plugin"
        );
      }
    }

    // Initialize the application when DOM is loaded
    document.addEventListener("DOMContentLoaded", init);