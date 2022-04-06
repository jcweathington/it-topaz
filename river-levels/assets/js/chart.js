async function GetLevels() {
    "use strict";
    
        /* URL for AJAX Call */
        var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055780,07055680&period=P7D&parameterCd=00065&siteStatus=active";
        /* Make the AJAX call */
        var msgObject = await fetch(myURL1);
        /* Check the status */
        if (msgObject.status >= 200 && msgObject.status <= 299) {            
            var msgJSONText = await msgObject.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msgJSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
        }

  }
                
/*
                var ctx = document.getElementById("chartjs-0");

                var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": forexdate,
                        "datasets":[{
                            "label": baseCurrency + " to " + convertCurrency,
                            "data": forexvalue,
                            "fill": false,
                            "borderColor":"rgb(75, 192, 192)",
                            "lineTension":0.1}]
                        },
                    "options":{ 
                        responsive: false,
                        maintainAspectRatio: true
                        },
                    "title:": {
                            display: true,
                            "label": baseCurrency + " to " + convertCurrency
                          }
                        
                } */
                               
        
   


