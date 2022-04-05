async function GetLevels() {
    "use strict";
        
       
        /* URL for AJAX Call */
        var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055780,07055680&period=P7D&parameterCd=00065&siteStatus=active";
        /* Make the AJAX call */
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);

            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message 
                var forexdate = [];
                var forexvalue = [];
                var numdays = msg2.results.length;
           
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
                        
                }
            );                      
        }
        else {
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
        */
    
}

/*
function ClearForm() {


    Ugly Code to Erase Canvas 
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
