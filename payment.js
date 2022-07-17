/*
      Assignment : Term project
      Name: Asm Shariar Chowdhury
      Date: 7/11/2022
*/
window.addEventListener("load", () => {

    /*  */
    var today = new Date();
    var date=today.getDate();
    var month=today.getMonth()+1;
    var year=today.getFullYear();

    var a = sessionStorage.getItem("a");
    var b = sessionStorage.getItem("b");
    var c = sessionStorage.getItem("c");
    var d = sessionStorage.getItem("d");
    var e = sessionStorage.getItem("e");
    var f = sessionStorage.getItem("f");
    var g = sessionStorage.getItem("g");

    document.getElementById("date").innerHTML = "Date: "+month+"/"+date+"/"+year;

    if(a>=1){
    document.getElementById("i1").innerHTML ="Hummas Bowl"+" ("+a +") ------> $" +(a*10);
} 
    if(b>=1){ 
    document.getElementById("i2").innerHTML ="Chickpea salad"+" ("+b +") ------> $" +(b*8);
}
    
     if(c>=1){
    document.getElementById("i3").innerHTML ="Tuna salad"+" ("+c +") ------> $" +(c*6);
}
     
     if(d>=1){
    document.getElementById("i4").innerHTML ="Salmon salad"+" ("+d +") -------> $" +(d*8);
}
    
    document.getElementById("o1").innerHTML ="Subtotal "+"------> "+ e;
    document.getElementById("o2").innerHTML ="Tax "+"------> "+ f;
    document.getElementById("o3").innerHTML ="Total "+"------> $"+g;

}    )


window.addEventListener("load",function () {
    document.getElementById("nameBox").oninput = validateName;
    document.getElementById("credit").oninput = validateNumber;
    document.getElementById("cvc").oninput - validateCvc;

});

function validateName() {
   var cardName = document.getElementById("nameBox");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter the card holder");
   } else {
      cardName.setCustomValidity("");
   }
}

function validateNumber() {
   var cardNumber = document.getElementById("credit");
   if (cardNumber.validity.valueMissing) {
      cardNumber.setCustomValidity("Enter your card number");
   } else if (cardNumber.validity.patternMismatch) {
      cardNumber.setCustomValidity("Please enter a valid card number");
   } else {
      cardNumber.setCustomValidity("");
   }
}
function validateCvc() {
   var cvcNumber = document.getElementById("cvc");
   if (cvcNumber.validity.valueMissing) {
      cvcNumber.setCustomValidity("Enter your cvc number");
   } else if (cvcNumber.validity.patternMismatch) {
      cvcNumber.setCustomValidity("Please enter a valid cvc number");
   } else {
      cvcNumber.setCustomValidity("");
   }
}


