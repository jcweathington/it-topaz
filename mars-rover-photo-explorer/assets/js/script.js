function getCuriosity() {
    document.getElementById("PicDate").value = "2012-08-06";
}


function getOpportunity() {
    document.getElementById("PicDate").value = "2004-01-26";
}


function getSpirit() {
    document.getElementById("PicDate").value = "2004-01-05";
}


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
      

        // Get the value associated with the Rover that was checked (curiosity, oportunity, spirit)
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
        var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + PicDate + "&page=1&api_key=" + apiKey;
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
                    var totalpics = msg.photos.length;
                    if (totalpics > 0){
                        for (var i = 0; i < 25; i++) {
                            if (i < totalpics){
                        // Note how we construct the name for image1, image2, etc...this sets the image source
                            document.getElementById("image" + i).src = msg.photos[i].img_src;
                            document.getElementById("display" + i).href = msg.photos[i].img_src;
                            document.getElementById("found").innerHTML = msg.photos.length + " photos found";
                        /*do something to set the tool tip = msg.photos[i].camera.full_name;*/
                            document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
                            document.getElementById("fulldisplay").innerHTML = "Click a photo to display full size";
                            }
                            
                            else {
                            document.getElementById("image" + i).src = "#";
						    document.getElementById("display" + i).href = "#";
						    document.getElementById("image" + i).style.display = "none";
                            }      
                        }               
                    }          
        }

        else {
            /* AJAX completed with error - probably not photos found */
            alert("Rover Not Found - Status: " + msgObject.status)
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

}