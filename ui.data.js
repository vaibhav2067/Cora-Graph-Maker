(function () {
  function getDefaultData(type) {
    const getRandomValue = (min = 10, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

    switch (type) {
      case "bar": {
        const barCount = 8;
        const categories = Array.from({ length: barCount }, (_, i) => `Category ${String.fromCharCode(65 + i)}`);
        return {
          categories,
          series: [{ label: "Series 1", y: Array.from({ length: barCount }, () => getRandomValue()) }],
        };
      }
      case "pie": {
        const pieCount = 4;
        const labels = Array.from({ length: pieCount }, (_, i) => `Slice ${String.fromCharCode(65 + i)}`);
        return {
          labels,
          values: Array.from({ length: pieCount }, () => getRandomValue(15, 50)),
        };
      }
      case "line": {
        const lineCount = 8;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
        const x = months.slice(0, lineCount);
        return {
          x,
          series: [{ label: "Series 1", y: Array.from({ length: lineCount }, () => getRandomValue()) }],
        };
      }
      case "radar": {
        const radarCount = 6;
        const categories = ["Speed", "Quality", "Reach", "Cost", "Safety", "Trust"].slice(0, radarCount);
        return {
          categories,
          series: [{ label: "Series 1", y: Array.from({ length: radarCount }, () => getRandomValue(20, 95)) }],
        };
      }
      case "scatter": {
        const scatterCount = 8;
        const x = Array.from({ length: scatterCount }, () => getRandomValue(5, 95));
        return {
          x,
          series: [{
            label: "Series 1",
            y: Array.from({ length: scatterCount }, () => getRandomValue(5, 95)),
          }],
        };
      }
      case "dot": {
        const dotCount = 8;
        const categories = Array.from({ length: dotCount }, (_, i) => `Category ${String.fromCharCode(65 + i)}`);
        return {
          categories,
          series: [
            { label: "Series 1", y: Array.from({ length: dotCount }, () => getRandomValue()) },
            { label: "Series 2", y: Array.from({ length: dotCount }, () => getRandomValue()) },
          ],
        };
      }
      case "histogram": {
        const histCount = 20;
        return {
          values: Array.from({ length: histCount }, () => getRandomValue(10, 40)),
        };
      }
      default:
        return getDefaultData("bar");
    }
  }

  const dataTableConfig = {
    bar: {
      headers: ["Category", "Value"],
      types: ["text", "number"],
      maxRows: 15,
      maxSeries: 4,
      getDefaultRowData: (index) => [`Category ${String.fromCharCode(65 + index)}`, Math.floor(Math.random() * 91) + 10],
    },
    pie: {
      headers: ["Label", "Value"],
      types: ["text", "number"],
      maxRows: 8,
      maxSeries: 1,
      getDefaultRowData: (index) => [`Slice ${String.fromCharCode(65 + index)}`, Math.floor(Math.random() * 36) + 15],
    },
    line: {
      headers: ["X-Axis", "Value"],
      types: ["text", "number"],
      maxRows: 15,
      maxSeries: 5,
      getDefaultRowData: (index) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return [months[index] || `Point ${index + 1}`, Math.floor(Math.random() * 91) + 10];
      },
    },
    radar: {
      headers: ["Axis", "Value"],
      types: ["text", "number"],
      maxRows: 12,
      maxSeries: 5,
      getDefaultRowData: (index) => {
        const axes = ["Speed", "Quality", "Reach", "Cost", "Safety", "Trust", "Support", "Fit"];
        return [axes[index] || `Axis ${index + 1}`, Math.floor(Math.random() * 76) + 20];
      },
    },
    scatter: {
      headers: ["X", "Y"],
      types: ["number", "number"],
      maxRows: 20,
      maxSeries: 5,
      getDefaultRowData: (index) => [
        Math.floor(Math.random() * 91) + 5,
        Math.floor(Math.random() * 91) + 5,
      ],
    },
    dot: {
      headers: ["Category", "Value"],
      types: ["text", "number"],
      maxRows: 15,
      maxSeries: 5,
      getDefaultRowData: (index) => [`Category ${String.fromCharCode(65 + index)}`, Math.floor(Math.random() * 91) + 10],
    },
    histogram: {
      headers: ["Value"],
      types: ["number"],
      maxRows: 50,
      maxSeries: 1,
      getDefaultRowData: () => [Math.floor(Math.random() * 31) + 10],
    },
  };

  function getTableDataFromChartData(chartData, chartType) {
    switch (chartType) {
      case "bar":
        return chartData.categories.map((category, index) => {
          const row = [category];
          chartData.series.forEach((series) => {
            row.push(series.y[index]);
          });
          return row;
        });
      case "pie":
        return chartData.labels.map((label, index) => [label, chartData.values[index]]);
      case "line":
        return chartData.x.map((xValue, index) => {
          const row = [xValue];
          chartData.series.forEach((series) => {
            row.push(series.y[index]);
          });
          return row;
        });
      case "radar":
        return chartData.categories.map((category, index) => {
          const row = [category];
          chartData.series.forEach((series) => {
            row.push(series.y[index]);
          });
          return row;
        });
      case "scatter":
        if (chartData.x && Array.isArray(chartData.series)) {
          return chartData.x.map((xValue, index) => {
            const row = [xValue];
            chartData.series.forEach((series) => {
              row.push(series.y[index]);
            });
            return row;
          });
        }
        if (Array.isArray(chartData.points)) {
          return chartData.points.map((point) => [point.x, point.y]);
        }
        return [];
      case "dot":
        return chartData.categories.map((category, index) => {
          const row = [category];
          chartData.series.forEach((series) => {
            row.push(series.y[index]);
          });
          return row;
        });
      case "histogram":
        return chartData.values.map((value) => [value]);
      default:
        return [];
    }
  }

  function convertTableDataToChartData(tableData, chartType) {
    switch (chartType) {
      case "bar": {
        const categories = tableData.map((row) => row[0]);
        const series = [];
        for (let i = 1; i < tableData[0].length; i++) {
          series.push({ label: `Series ${i}`, y: tableData.map((row) => parseInt(row[i], 10) || 0) });
        }
        return { categories, series };
      }
      case "pie": {
        const labels = tableData.map((row) => row[0]);
        const values = tableData.map((row) => parseInt(row[1], 10) || 0);
        return { labels, values };
      }
      case "line": {
        const x = tableData.map((row) => row[0]);
        const lineSeries = [];
        for (let i = 1; i < tableData[0].length; i++) {
          lineSeries.push({ label: `Series ${i}`, y: tableData.map((row) => parseInt(row[i], 10) || 0) });
        }
        return { x, series: lineSeries };
      }
      case "radar": {
        const categories = tableData.map((row) => row[0]);
        const radarSeries = [];
        for (let i = 1; i < tableData[0].length; i++) {
          radarSeries.push({ label: `Series ${i}`, y: tableData.map((row) => parseInt(row[i], 10) || 0) });
        }
        return { categories, series: radarSeries };
      }
      case "scatter": {
        const x = tableData.map((row) => parseFloat(row[0]) || 0);
        const series = [];
        for (let i = 1; i < tableData[0].length; i++) {
          series.push({ label: `Series ${i}`, y: tableData.map((row) => parseFloat(row[i]) || 0) });
        }
        return { x, series };
      }
      case "dot": {
        const categories = tableData.map((row) => row[0]);
        const series = [];
        for (let i = 1; i < tableData[0].length; i++) {
          series.push({ label: `Series ${i}`, y: tableData.map((row) => parseFloat(row[i]) || 0) });
        }
        return { categories, series };
      }
      case "histogram": {
        const histogramValues = tableData.map((row) => parseInt(row[0], 10) || 0);
        return { values: histogramValues };
      }
      default:
        return tableData;
    }
  }

  function isValidDataForChart(data, chartType) {
    if (!data) return false;
    switch (chartType) {
      case "bar":
        return data.categories && data.series && data.series.length > 0;
      case "pie":
        return data.labels && data.values && data.labels.length === data.values.length;
      case "line":
        return data.x && data.series && data.series.length > 0;
      case "radar":
        return data.categories && Array.isArray(data.categories) && data.series && Array.isArray(data.series) && data.series.length > 0;
      case "scatter":
        return (
          (data.x && Array.isArray(data.x) && data.series && Array.isArray(data.series) && data.series.length > 0)
          || (data.points && Array.isArray(data.points))
        );
      case "dot":
        return data.categories && Array.isArray(data.categories) && data.series && Array.isArray(data.series) && data.series.length > 0;
      case "histogram":
        return data.values && Array.isArray(data.values);
      default:
        return false;
    }
  }

  function getDefaultRowCountForChartType(chartType) {
    switch (chartType) {
      case "bar":
        return 8;
      case "pie":
        return 4;
      case "line":
        return 8;
      case "radar":
        return 6;
      case "scatter":
        return 8;
      case "dot":
        return 8;
      case "histogram":
        return 20;
      default:
        return 4;
    }
  }

  window.UiData = {
    getDefaultData,
    dataTableConfig,
    getTableDataFromChartData,
    convertTableDataToChartData,
    isValidDataForChart,
    getDefaultRowCountForChartType,
  };
})();
