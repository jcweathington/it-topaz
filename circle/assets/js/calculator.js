function calculate(){
    /* If the form is valid, then return the calculations */
     if ($( "#CircleForm" ).valid()) {
       
       //declare the variables
         var radius;         //string radius
         var radiusfp;       //float  radius
         var diameter;       //float  diameter
         var circumference;  //float  circumference
         var area;           //float  area
         var result;         //displayable result
 
     
         /* get radius from the form */
         radius = document.getElementById("radius").value;
          
         /* convert the radius from string to floating point */
         radiusfp = parseFloat(radius);
 
       
         /* calculate and display the diameter */
         diameter = calcDiameter(radiusfp);
         document.getElementById("diameter").innerHTML = diameter.toString();
 
 
       
         /* calculate the circumference */
         circumference = calcCircumference(radiusfp);
         document.getElementById("circumference").innerHTML = circumference.toString();
 
       
         /* calculate the area */
         area = calcArea(radiusfp);
         document.getElementById("area").innerHTML = area.toString();
 
       
         // must display the calculations immediately following the calculation declaration, else it will not display.
     
 
     }
   
 }
 
 
       /* calculations */
 
 function calcDiameter (radiusvalue) {
       return radiusvalue * 2;
 }
 
 
 function calcCircumference (radiusvalue) {
       return radiusvalue * (Math.PI * 2);
 }
 
 
 function calcArea (radiusvalue) {
       return (Math.PI * radiusvalue) * radiusvalue;
 }
 
 

     /* Set all of the form values to blank or false */
 function clearform() {
     
     document.getElementById("radius").value = "";
     document.getElementById("radiuserror").innerHTML = "";
     document.getElementById("diameter").innerHTML = "";
     document.getElementById("circumference").innerHTML = "";
     document.getElementById("area").innerHTML = "";
 }
 
 
   /* Form Validation */
   $( "#CircleForm" ).validate({
 
   });
 
   
   
 