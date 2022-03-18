async function GetStock() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var apiKey = "iKgRiCkO2Yx3vF8xHcU3XtzxG2FK1Kz8"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;
        var baseCurrency = document.getElementById("baseCurrency").value;
        var convertCurrency = document.getElementById("convertCurrency").value;
 
       
       
        /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/C:" + baseCurrency + convertCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=32&apiKey=" + apiKey;
        /* Make the AJAX call */
        var msg2Object = await fetch(myURL2);
        /* Check the status */
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
            var msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            var msg2 = JSON.parse(msg2JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                var forexdate = [];
                var forexvalue = [];
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        forexvalue[i] = msg2.results[i].c;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        forexdate[i] = tempdate.toLocaleDateString();
                    }
                }

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
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    document.getElementById("baseCurrency").value = "";
    document.getElementById("baseError").innerHTML = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("FromDateError").innerHTML = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("ToDateError").innerHTML = "";
    document.getElementById("convertError").innerHTML = "";
    document.getElementById("convertCurrency").value = "";
    document.getElementById("convertError").innerHTML = "";
    document.getElementById("USD").checked = false;
    document.getElementById("MXN").checked = false;
    document.getElementById("CAD").checked = false;
    document.getElementById("EUR").checked = false;
    document.getElementById("CNY").checked = false;
    document.getElementById("USD2").checked = false;
    document.getElementById("MXN2").checked = false;
    document.getElementById("CAD2").checked = false;
    document.getElementById("EUR2").checked = false;
    document.getElementById("CNY2").checked = false;

    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
}