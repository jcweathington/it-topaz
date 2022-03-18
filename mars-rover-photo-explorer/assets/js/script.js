async function GetPics() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var apiKey = "5HXizXfkzOxxUmN1iglAWI6DKSE2IftCPZN0FYWv";
        var PicDate = document.getElementById("PicDate").value;
        
        // From Units
        // Get the value associated with the operator that was checked (cm, m, km, in, ft, yd, mi)
        var rover;
        if (document.getElementById("curiosity").checked) {
            rover = document.getElementById("curiosity").value;
        }
        if (document.getElementById("opportunity").checked) {
            rover = document.getElementById("opportunity").value;
        }
        if (document.getElementById("spirit").checked) {
            rover = document.getElementById("spirit").value;
        }

 
        /* URL for AJAX Call */
        var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + PicDate + "&api_key=" + apiKey;
        /* Make the AJAX call */
        var msgObject = await fetch(myURL2);
        /* Check the status */
        
        if (msgObject.status >= 200 && msgObject.status <= 299) {            
            var msgJSONText = await msgObject.text();
            // Parse the JSON string into an object
            var msg = JSON.parse(msgJSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                    for (i = 0; i < 25; i++) {
                        // Note how we construct the name for image1, image2, etc...this sets the image source
                        document.getElementById("image" + i).src = msg.photos[i].img_src;
                       // do something to set the tool tip = msg.photos[i].camera.full_name;
                    }
            
        }
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Photos Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    document.getElementById("curiosity").checked = false;
    document.getElementById("opportunity").checked = false;
    document.getElementById("spirit").value = false;
    document.getElementById("PicDate").value = false;
    document.getElementById("RoverError").innerHTML = "";
    document.getElementById("DateError").innerHTML = "";

    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}