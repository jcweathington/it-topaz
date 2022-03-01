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
            FromUnit = document.getElementById("cm").value;
        }
        if (document.getElementById("m").checked) {
            FromUnit = document.getElementById("m").value;
        }
        if (document.getElementById("km").checked) {
            FromUnit = document.getElementById("km").value;
        }
        if (document.getElementById("in").checked) {
            FromUnit = document.getElementById("in").value;
        }
        if (document.getElementById("ft").checked) {
            FromUnit = document.getElementById("ft").value;
        }
        if (document.getElementById("yd").checked) {
            FromUnit = document.getElementById("yd").value;
        }
        if (document.getElementById("mi").checked) {
            FromUnit = document.getElementById("mi").value;
        }
        
        // To Units
        // Get converstion method that was checked (cm, m, km, in, ft, yd, mi)
        var ToUnit;
        if (document.getElementById("cm2").checked) {
            ToUnit = document.getElementById("cm2").value;
        }
        if (document.getElementById("m2").checked) {
            ToUnit = document.getElementById("m2").value;
        }
        if (document.getElementById("km2").checked) {
            ToUnit = document.getElementById("km2").value;
        }
        if (document.getElementById("in2").checked) {
            ToUnit = document.getElementById("in2").value;
        }
        if (document.getElementById("ft2").checked) {
            ToUnit = document.getElementById("ft2").value;
        }
        if (document.getElementById("yd2").checked) {
            ToUnit = document.getElementById("yd2").value;
        }
        if (document.getElementById("mi2").checked) {
            ToUNit = document.getElementById("mi2").value;
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
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yd").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("cm2").checked = false;
    document.getElementById("m2").checked = false;
    document.getElementById("km2").checked = false;
    document.getElementById("in2").checked = false;
    document.getElementById("ft2").checked = false;
    document.getElementById("yd2").checked = false;
    document.getElementById("mi2").checked = false;
    document.getElementById("Operator2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});