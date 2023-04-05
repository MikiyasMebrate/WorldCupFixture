# World Cup Fixture

---

In this project I focus on JavaScript Charts which provides randomly selects 16 countries and input their pointes after that all   it can visualize through different types of charts like Line Chart, and  Bar Charts. 

### How do we integrate Charts to our website

---

**Here are some free chart libraries** 

1. **High Chart**: [Interactive javascript charts library (highcharts.com)](https://www.highcharts.com/)

Highcharts is a JavaScript charting library based on SVG rendering. This project includes Stock, the financial charting package, the Maps package for geo maps and the Gantt package.

This package is intended for supporting client-side JavaScript charting through bundlers like Parcel or Webpack and environments like Babel or TypeScript. If you intend to generate static charts on the server side, use the **[Highcharts node.js Export Server](https://www.npmjs.com/package/highcharts-export-server)** instead.

1. **Chart JS**: [Chart.js | Open source HTML5 Charts for your website (chartjs.org)](https://www.chartjs.org/)

Chart.js is a free, open-source JavaScript library for data visualization, which supports eight chart types: bar , line , area , pie (doughnut), bubble, radar , polar, and scatter . Created by London -based web developer Nick Downie in 2013, now it is maintained by the community and is the second most popular JavaScript charting library on GitHub by the number of stars after D3.js , considered significantly easier to use though less customizable than the latter. Chart.js renders in HTML5 canvas and is widely covered as one of the best data visualization libraries. It is available under the MIT license.

Lets some example of Highcharts (Pie Chart) 

first we should have to include js src in our html document the source should be in the header and create a div in body then we should give  id  for now let give id (”container”) 

```html
<!-- Include Highcharts library -->
<script src="https://code.highcharts.com/highcharts.js"></script>

<div id="container"></div>
```

Then copy the js code to your Script tag 

```jsx
// Define initial chart options

    // Create the initial chart
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Fruit Consumption'
        },
        series: [{
            name: 'Fruit',
            data: [
                ['Apples', 29],
                ['Bananas', 42],
                ['Oranges', 27]
            ]
        }]
    });
```

It has many attributes like Chart: to define type of chart, title: your chart title, and last one series: about your data.

To update your chart data, it's best to use a function or edit manually. After creating a function, assign the index of the chart to identify which graph to edit. If we have two charts, Highcharts sees them as an array, with the first chart being index 0 and the second being index 1. For now, we have only one chart, so it is index 0. Finally, assign the new data using the .series function to set the new data, and setData to change the data.

```jsx
function updateChartData() {

        var chart = Highcharts.charts[0];

        var newData = [
            ['Apples', Math.random() * 5],
            ['Bananas', Math.random() * 2],
            ['Oranges', Math.random() * 3]
        ];

        chart.series[0].setData(newData);

    }

    // Call function to update chart data every 5 seconds
    setInterval(updateChartData, 1000);
```

# Conclusion

---

This document discusses using JavaScript chart libraries to visualize data. It provides an overview of two free chart libraries, High Chart and Chart JS, and includes an example of creating a pie chart using High Chart. It also explains how to update chart data using a function and the setData method.
