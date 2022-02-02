function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("PlusOperator").checked) {
            operator = document.getElementById("PlusOperator").value;
        }
        if (document.getElementById("MinusOperator").checked) {
            operator = document.getElementById("MinusOperator").value;
        }
        if (document.getElementById("MultiOperator").checked) {
            operator = document.getElementById("MultiOperator").value;
        }
        if (document.getElementById("DivOperator").checked) {
            operator = document.getElementById("DivOperator").value;
        }
        var result;
        
        /* if the operator was "Plus" then calculate the addition of the 2 operands */
        if (operator == "Plus") {
            
                result = operand1fp + operand2fp;

        }
 
      
        /* if the operator was "Minus" then calculate the subtration of the 2 operands */
        if (operator == "Minus") {
          
                result = operand1fp - operand2fp;

        }
      

        /* if operator was "Multi" then calculate the multiplication of the 2 operands */
        if (operator == "Multi") {
          
                result = operand1fp * operand2fp;
        }
        
      
         /* if operator was "Div" then calculute the division of the 2 operands */
        if (operator == "Div") {
          
                result = operand1fp / operand2fp;
        }
      
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("PlusOperator").checked = false;
    document.getElementById("MinusOperator").checked = false;
    document.getElementById("MultiOperator").checked = false;
    document.getElementById("DivOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});