const countriesList = `https://restcountries.com/v2/all`;
function generateCountries() {
  fetch(countriesList)
    .then((response) => response.json())
    .then((countriesData) => {
      for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * countriesData.length);
        let countriesName = countriesData[random].name;
        let countriesFlag = countriesData[random].flags.png;

        if (i < 4) {
          document.getElementById(`a${i + 1}`).innerHTML = countriesName;
          document.getElementById(`imga${i + 1}`).src = countriesFlag;
        } else if (i > 3 && i < 8) {
          document.getElementById(`b${i + 1}`).innerHTML = countriesName;
          document.getElementById(`imgb${i + 1}`).src = countriesFlag;
        } else if (i > 7 && i < 12) {
          document.getElementById(`c${i + 1}`).innerHTML = countriesName;
          document.getElementById(`imgc${i + 1}`).src = countriesFlag;
        } else {
          document.getElementById(`d${i + 1}`).innerHTML = countriesName;
          document.getElementById(`imgd${i + 1}`).src = countriesFlag;
        }
      }
    })
    .catch((err) => console.log(err));
}

function createChart(group) {
  let groupName = group.toUpperCase();
  let input1 = (input2 = input3 = input4 = "");
  let name1 = (name2 = name3 = name4 = "");
  if (group == "a") {
    input1 = Number(document.getElementById(`i${group}1`).value);
    input2 = Number(document.getElementById(`i${group}2`).value);
    input3 = Number(document.getElementById(`i${group}3`).value);
    input4 = Number(document.getElementById(`i${group}4`).value);

    name1 = document.getElementById(`${group}1`).innerHTML;
    name2 = document.getElementById(`${group}2`).innerHTML;
    name3 = document.getElementById(`${group}3`).innerHTML;
    name4 = document.getElementById(`${group}4`).innerHTML;
  } else if (group == "b") {
    input1 = Number(document.getElementById(`i${group}5`).value);
    input2 = Number(document.getElementById(`i${group}6`).value);
    input3 = Number(document.getElementById(`i${group}7`).value);
    input4 = Number(document.getElementById(`i${group}8`).value);

    name1 = document.getElementById(`${group}5`).innerHTML;
    name2 = document.getElementById(`${group}6`).innerHTML;
    name3 = document.getElementById(`${group}7`).innerHTML;
    name4 = document.getElementById(`${group}8`).innerHTML;
  } else if (group == "c") {
    input1 = Number(document.getElementById(`i${group}9`).value);
    input2 = Number(document.getElementById(`i${group}10`).value);
    input3 = Number(document.getElementById(`i${group}11`).value);
    input4 = Number(document.getElementById(`i${group}12`).value);

    name1 = document.getElementById(`${group}9`).innerHTML;
    name2 = document.getElementById(`${group}10`).innerHTML;
    name3 = document.getElementById(`${group}11`).innerHTML;
    name4 = document.getElementById(`${group}12`).innerHTML;
  } else if (group == "d") {
    input1 = Number(document.getElementById(`i${group}13`).value);
    input2 = Number(document.getElementById(`i${group}14`).value);
    input3 = Number(document.getElementById(`i${group}15`).value);
    input4 = Number(document.getElementById(`i${group}16`).value);

    name1 = document.getElementById(`${group}13`).innerHTML;
    name2 = document.getElementById(`${group}14`).innerHTML;
    name3 = document.getElementById(`${group}15`).innerHTML;
    name4 = document.getElementById(`${group}16`).innerHTML;
  }

  let chartDiv = `
  <div class="col-md-5 shadow-lg">
  <figure class="highcharts-figure">
  <div id="chart1"></div>
  <p class="highcharts-description">
  </p>
  </figure>
  </div>
  
  <div class="col-md-5 shadow-lg">
  <figure class="highcharts-figure">
    <div id="chart2"></div>
    <p class="highcharts-description">
    </p>
</figure>
</div>`;

  document.getElementById("chart").innerHTML = chartDiv;
  // Create the chart
  Highcharts.chart("chart1", {
    chart: {
      type: "column",
    },
    title: {
      align: "left",
      text: `World Cup Group ${groupName}`,
    },
    subtitle: {
      align: "left",
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Points",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "Countries",
        colorByPoint: true,
        data: [
          {
            name: name1,
            y: input1,
            drilldown: name1,
          },
          {
            name: name2,
            y: input2,
            drilldown: name2,
          },
          {
            name: name3,
            y: input3,
            drilldown: name3,
          },
          {
            name: name4,
            y: input4,
            drilldown: name4,
          },
        ],
      },
    ],
  });

  // Data retrieved from https://netmarketshare.com
  Highcharts.chart("chart2", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `World Cup Group ${groupName}`,
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: name1,
            y: input1,
            sliced: true,
            selected: true,
          },
          {
            name: name2,
            y: input2,
          },
          {
            name: name3,
            y: input3,
          },
          {
            name: name4,
            y: input4,
          },
        ],
      },
    ],
  });
}
