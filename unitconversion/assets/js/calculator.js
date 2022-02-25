function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // From Value
        var FromValue = document.getElementById("FromValue").value;

        // From Units
        // Get the value associated with the operator that was checked (cm, m, km, in, ft, yd, mi)
        var FromUnit;
        if (document.getElementById("cm").checked) {
            operator = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            operator = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            operator = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            operator = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            operator = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            operator = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            operator = document.getElementById("mi").value;
        }
        
        // To Units
        // Get converstion method that was checked (cm, m, km, in, ft, yd, mi)
        var ToUnit;
        if (document.getElementById("cm").checked) {
            operator = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            operator = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            operator = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            operator = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            operator = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            operator = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            operator = document.getElementById("mi").value;
        }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires FromValue FromUnits & ToUnits */
        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yd").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("FromUnit").value = "";
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("ToUnit").value = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});