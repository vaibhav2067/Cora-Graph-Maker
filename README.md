# Cora Graph Maker - Customizable Dashboard Graphs

A powerful Figma plugin for creating beautiful, customizable charts and graphs directly within your design workflow.

## Features

### 📊 Multiple Chart Types
- **Bar Charts** - Vertical/horizontal, stacked or grouped
- **Pie/Donut Charts** - With slice separation and adjustable hole size
- **Line Charts** - Smooth curves, area fills, and customizable line styles
- **Scatter Plots** - Various point shapes and sizes
- **Histograms** - Adjustable bins and normalization options

### 🎨 Extensive Customization
- **Color Control** - Individual color selection for each data element
- **Stroke Options** - Width, color, opacity, and dash patterns
- **Shadow Effects** - Drop shadows and inner shadows with full control
- **Typography** - Font family, size, weight, and color customization
- **Background & Grid** - Transparent/solid backgrounds, grid visibility and opacity
- **Border Radius** - Rounded corners for bars and elements

### 📈 Data Input Methods
- **Random Generation** - Quick data generation for prototyping
- **Custom Input** - Manual data entry with validation
- **CSV-style Input** - Comma-separated values for easy data entry

### 💾 Export Options
- **SVG Export** - Vector format for high-quality scaling
- **PNG Export** - Raster format for quick sharing
- **Direct to Figma** - Seamless integration with your design files

## Installation

1. Open Figma
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Select the plugin manifest file
4. The plugin will appear in your plugins menu

## Usage

### Step 1: Select Graph Type
Choose from 5 different chart types using the intuitive icon-based selector.

### Step 2: Input Data
- **Random Mode**: Generate sample data with one click
- **Custom Mode**: Enter your specific data values
  - Pie: Label-value pairs
  - Line: X-Y coordinates with optional series labels
  - Bar: Categories and values with multi-series support
  - Scatter: X, Y coordinates with optional size values
  - Histogram: Raw values with bin customization

### Step 3: Customize Colors
Select colors for each data element with the color picker interface.

### Step 4: Advanced Styling
Access comprehensive styling options including:
- Stroke properties and effects
- Shadow settings (drop and inner shadows)
- Text formatting
- Background and grid customization
- Chart-specific options (donut size, smooth curves, etc.)

### Step 5: Preview & Export
- Review your chart in the preview panel
- Export as SVG, PNG, or directly to Figma
- Make final adjustments before committing

## Technical Details

### Supported Data Formats
- **Pie**: `{ labels: string[], values: number[] }`
- **Line**: `{ x: string[], series: { label: string, y: number[] }[] }`
- **Bar**: `{ categories: string[], series: { label: string, y: number[] }[] }`
- **Scatter**: `{ points: { x: number, y: number, r: number }[] }`
- **Histogram**: `{ values: number[], bins?: number, range?: [number, number] }`

### Styling Options
The plugin supports extensive CSS-like styling including:
- Stroke width, color, opacity, and dash patterns
- Fill opacity and border radius
- Drop shadows (offset, blur, color, opacity)
- Inner shadows (offset, blur, color, opacity)
- Font family, size, weight, and color
- Grid and axes visibility with opacity control

## Browser Support

This plugin works with modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- SVG rendering
- Canvas API (for PNG export)

## Development

The plugin is built with:
- **HTML5** for structure
- **CSS3** with CSS variables for theming
- **Vanilla JavaScript** (no frameworks)
- **SVG** for chart rendering

### File Structure
plugin/
├── ui.html # Main interface
├── code.js # Figma plugin API integration
├── manifest.json # Plugin configuration
└── README.md # This file


## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and feature requests, please:
1. Check the existing issues
2. Create a new issue with detailed description
3. Include screenshots if applicable

## Version History

- **v1.0.0** (Current)
  - Initial release with 5 chart types
  - Comprehensive styling options
  - Multiple export formats
  - Light/dark theme support

---

**Note**: This plugin requires Figma desktop app or Figma in supported browsers. Some advanced features may have performance considerations with very large datasets.