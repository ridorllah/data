
const d= new Date();
document.getElementById('date-time').innerHTML = d;

function validateForm() {
    let x =document.forms["myForm"]["surname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}



function myFunction() {
 // Get the value of the input filed with id="bvn"
let x= document.getElementById("numb").value;
//if x is not a number or greater than 11
let text;
if (isNaN(x) || x < 0 || x > 11) {
    text = "input not valid";
} else {
    text = "input OK";
}
document.getElementById("demo").innerHTML = text;
}

