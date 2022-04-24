
async function displayLevels() {
  "use strict";
  /* URL for AJAX Call */
  var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055780,07055680&period=P7D&parameterCd=00065&siteStatus=active"
  /* Make the AJAX call */
  var msg1Object = await fetch(myURL1);
  /* Check the status */
  if (msg1Object.status >= 200 && msg1Object.status <= 299) {
      var msg1JSONText = await msg1Object.text();
      // Parse the JSON string into an object
      var msg1 = JSON.parse(msg1JSONText);
      /* Your code to process the result goes here - 
         display the returned message */
      console.log(msg1);
  }


  else {
      alert("Data Not Found - Status: " + msg1Object.status)
      return;
  }

  var dates = [];
  var values = [];

  /* BOXLEY */
  /* fLen contains the length of the array (number of values) */
  var fLen = msg1.value.timeSeries[0].values[0].value.length
  for (var i = 0; i < fLen; i++) {
      values[i] = msg1.value.timeSeries[0].values[0].value[i].value
      dates[i] = msg1.value.timeSeries[0].values[0].value[i].dateTime
  };
  var sitename = msg1.value.timeSeries[0].sourceInfo.siteName
  var sitecode = msg1.value.timeSeries[0].sourceInfo.siteCode[0].value
  var siteDescription = msg1.value.timeSeries[0].variable.variableDescription

  /* Put your code here to display a graph of values and dates for BOXLEY*/

  var ctx = document.getElementById("chartjs-0");


  var myChart = new Chart(ctx, {
      "type": "line",
      "data": {
          "labels": dates,
          "datasets": [{
              "data": values,
              "label": sitecode,
              "fill": false,
            borderColor:"#2C7366",
            family: "Arial",
            lineTension:0.1,
            pointRadius: 0
          }]
      },
      "options":{ 
          maintainAspectRatio: false,
          title: {
              display: true,
              text: sitename,
              fontSize : 18
          },
        
         layout: {
          padding: 10
         },

          legend: {
              display: false,
           },
           
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                          displayFormats: {
                          day: 'MMM D'
                      }
                  }
              }],
              
      yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: siteDescription        
  }
  }]
      }
      }
  });


  var dates = [];
  var values = [];

  /* PONCA */
  /* fLen contains the length of the array (number of values) */
  var fLen = msg1.value.timeSeries[1].values[0].value.length
  for (var i = 0; i < fLen; i++) {
      values[i] = msg1.value.timeSeries[1].values[0].value[i].value
      dates[i] = msg1.value.timeSeries[1].values[0].value[i].dateTime
  };
  var sitename = msg1.value.timeSeries[1].sourceInfo.siteName
  var sitecode = msg1.value.timeSeries[1].sourceInfo.siteCode[0].value
  var siteDescription = msg1.value.timeSeries[1].variable.variableDescription

  /* Put your code here to display a graph of values and dates for PONCA*/

  var ctx = document.getElementById("chartjs-1");

  var myChart = new Chart(ctx, {
      "type": "line",
      "data": {
          "labels": dates,
          "datasets": [{
              "data": values,
              fill: false,
            borderColor: "#BF382C",
            pointRadius: 0
          }]
      },
      "options":{ 
          maintainAspectRatio: false,
          title: {
              display: true,
              text: sitename,
              fontSize : 18
          },
        
          layout: {
          padding: 10
         },

          legend: {
              display: false
           },
          
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                          displayFormats: {
                          day: 'MMM D'
                      }
                  }
              }],
              
      yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: siteDescription        
  }
  }]
      }
      }
  });

  var dates = [];
  var values = [];

/* PRUITT */
  /* fLen contains the length of the array (number of values) */
  var fLen = msg1.value.timeSeries[2].values[0].value.length
  for (var i = 0; i < fLen; i++) {
      values[i] = msg1.value.timeSeries[2].values[0].value[i].value
      dates[i] = msg1.value.timeSeries[2].values[0].value[i].dateTime
  };
  var sitename = msg1.value.timeSeries[2].sourceInfo.siteName
  var sitecode = msg1.value.timeSeries[2].sourceInfo.siteCode[0].value
  var siteDescription = msg1.value.timeSeries[2].variable.variableDescription

  /* Put your code here to display a graph of values and dates for PRUITT*/

  var ctx = document.getElementById("chartjs-2");

  var myChart = new Chart(ctx, {
      "type": "line",
      "data": {
          "labels": dates,
          "datasets": [{
              "data": values,
              fill: false,
            borderColor: "#3591AF",
              pointRadius: 0
          }]
      },
      "options":{ 
          maintainAspectRatio: false,
          title: {
              display: true,
              text: sitename,
              fontSize : 18
          },
        
          layout: {
          padding: 10
         },

          legend: {
              display: false
           },
           
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                          displayFormats: {
                          day: 'MMM D'
                      }
                  }
              }],
              
      yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: siteDescription        
  }
  }]
      }
      }
  });

  var dates = [];
  var values = [];

/* CARVER */
  /* fLen contains the length of the array (number of values) */
  var fLen = msg1.value.timeSeries[3].values[0].value.length
  for (var i = 0; i < fLen; i++) {
      values[i] = msg1.value.timeSeries[3].values[0].value[i].value
      dates[i] = msg1.value.timeSeries[3].values[0].value[i].dateTime
  };
  var sitename = msg1.value.timeSeries[3].sourceInfo.siteName
  var sitecode = msg1.value.timeSeries[3].sourceInfo.siteCode[0].value
  var siteDescription = msg1.value.timeSeries[3].variable.variableDescription

  /* Put your code here to display a graph of values and dates for CARVER*/

  var ctx = document.getElementById("chartjs-3");

  var myChart = new Chart(ctx, {
      "type": "line",
      "data": {
          "labels": dates,
          "datasets": [{
              "data": values,
              fill: false,
              borderColor: "#BFAB4A",
              pointRadius: 0
          }]
      },
      "options":{ 
          maintainAspectRatio: false,
          title: {
              display: true,
              text: sitename ,
              fontSize : 18
          },
        
          layout: {
          padding: 10
         },

          legend: {
              display: false
           },
           
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                          displayFormats: {
                          day: 'MMM D'
                      }
                  }
              }],
              
      yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: siteDescription        
  }
  }]
      }
      }
  });

  

}