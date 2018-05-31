
// Arrays
function arraYem(){
    //this section contains variables
var onef = parseFloat(document.getElementById("marray").value);
    
    var manarray = ["Saab", " Volvo", " BMW", " Ford", " Toyota", " Benz", " Ferrari", " Kantanka", " Acura", " Alfa Romeo", " Audi", " Aston Martin", " Bentley", " Bugatti", " Buick", " Cadillac", " Chevrolet", " Lamborghini", " McLaren", " JAGUAR", "Rolls Royce"];
    
    if (onef > 20 && onef <= 0) {
        manarray = " Sorry re-enter a number between 0 and 20"
    }
    
    document.getElementById("Otput").innerHTML = manarray[onef];
    
    
}
arraYem();

//Associative Array
function associaTive(){
    var nameOne = parseFloat(document.getElementById("Kings").value);
    var nameTwo = parseFloat(document.getElementById("Kingm").value);
    var nameThree = parseFloat(document.getElementById("Kingl").value);
    var nameAge = parseFloat(document.getElementById("Kingage").value);
    
    var valn = parseFloat(document.getElementById("myval").value);
    
    document.getElementById("Asstive").innerHTML =  person[valn] + " " + person.length;
    
    var person = [];
    person[0] = nameOne;
    person[1] = nameTwo;
    person[2] = nameThree;
    person[3] = nameAge;
}
associaTive();



//functions, variables, parameters
function computeMe(){
    var tempo = parseFloat(document.getElementById("temperature").value);
    var speed = parseFloat(document.getElementById("windspeed").value);
    
    document.getElementById("Putme").innerHTML = windChill(tempo, speed).toPrecision(3);      
}
 function windChill(tempo, speed){
        return 35.74 + 0.6215 * tempo - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempo * Math.pow(speed, 0.16);
    }

computeMe();



//condition statements

    function schoolYears() {
    var nme = document.getElementById("studentname").value;
	var crdts = parseFloat(document.getElementById("credits").value);
                           
	var ans;
        
	if (crdts >= 0 && crdts < 30) {
	     ans = nme + ", you are a freshman"
	   }
	   else if (crdts >= 30 && crdts < 60) {
	     ans = nme + ", you are a sophomore"
	   }
	   else if (crdts >= 60 && crdts < 90) {
	     ans = nme + ", you are a Junior"
    	} 
	   else if (crdts >= 90){
		 ans = nme + ", you are a Senior"
		} 
		else {
            window.alert = "Sorry, Please enter your credits correctly"
        };
             
              document.getElementById("Output").innerHTML = ans;
	}
        schoolYears();
	