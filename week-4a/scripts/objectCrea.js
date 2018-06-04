function missionYear() {
 var yr = parseFloat(document.getElementById("input").value);   
 var mName = parseFloat(document.getElementById("mission").value);
 var favC = parseFloat(document.getElementById("favcol").value);
     var numOnM = parseFloat(document.getElementById("numM").value);   

var person = {
    name:mName, year:yr,
    favColor:favC, numberOfMiss:numOnM
};
    document.getElementById("output").innerHTML = person.year;

}
missionYear();



//Example based on method
function myAge(){
    var yourName = parseFloat(document.getElementById("uName").value);
    var yourAge = parseFloat(document.getElementById("ega").value);
    
    function person(yourName, yourAge) {
        this.name = yourName;
        this.age = yourAge;
        this.yearOfBirth = bornYear;
    }
    
    function bornYear(){
        return 2018 - this.age;
    }
    
    var newAge = new person(yourName, yourAge);
    document.getElementById("result").innerHTML = newAge.yearOfBirth();
}
myAge();