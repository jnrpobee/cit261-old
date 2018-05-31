//This section is based on the For statement
var cars = ["BMW", "Volvo", "Saab", "Ford"];

var i = 0;
var len = cars.length;
var text = "";

for (; i < len; ) {
    text += cars[i] + "<br>";
    i++;
}
document.getElementById("loopOne").innerHTML = text;



// this section is base on the For/In loop statement
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("loopTwo").innerHTML = txt;


//example 3
		     
			 function myInteger() {
			 var intag = parseInt(document.getElementById("integ").value);
			 var two = 2;
			 var tag;
			 var first = 0;
			 var show = 0;
			     for (first = 1; first <= intag ; first += two) {
				     show += first;
				 }
				 tag = "The sum of odd integers is " + show;
				 document.getElementById("output").innerHTML = tag;
			 }
		 myInteger();