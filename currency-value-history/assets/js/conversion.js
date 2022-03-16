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


        // Base Currency
        // Get the value associated with the operator that was checked (USD, MXN, CAD, EUR, CNY)
        var baseCurrency;
        if (document.getElementById("USD").checked) {
            baseCurrency = document.getElementById("USD").value;
        }
        if (document.getElementById("MXN").checked) {
            baseCurrency = document.getElementById("MXN").value;
        }
        if (document.getElementById("CAD").checked) {
            baseCurrency = document.getElementById("CAD").value;
        }
        if (document.getElementById("EUR").checked) {
            baseCurrency = document.getElementById("EUR").value;
        }
        if (document.getElementById("CNY").checked) {
            baseCurrency = document.getElementById("CNY").value;
        }
        

        // Convert Currency
        // Get the value associated with the operator that was checked (USD, MXN, CAD, EUR, CNY)
        var baseUnit;
        if (document.getElementById("USD2").checked) {
            convertCurrency = document.getElementById("USD2").value;
        }
        if (document.getElementById("MXN2").checked) {
            convertCurrency = document.getElementById("MXN2").value;
        }
        if (document.getElementById("CAD2").checked) {
            convertCurrency = document.getElementById("CAD2").value;
        }
        if (document.getElementById("EUR2").checked) {
            convertCurrency = document.getElementById("EUR2").value;
        }
        if (document.getElementById("CNY2").checked) {
            convertCurrency = document.getElementById("CNY2").value;
        }

        CalculateResult(baseCurrency, convertCurrency);
    }
       
       
        /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/" + "C:" + baseCurrency + convertCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
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
                var stockdate = [];
                var stockvalue = [];
                var stockvolume = [];
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        stockvalue[i] = msg2.results[i].c;
                        /* stock volume */
                        stockvolume[i] = msg2.results[i].v;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        stockdate[i] = tempdate.toLocaleDateString();
                    }
                }

           
              

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Stock Close",
                        "data": stockvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
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
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}