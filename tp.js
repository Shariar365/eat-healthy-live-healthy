/*
      Assignment : Term project
      Name: Asm Shariar Chowdhury
      Date: 7/11/2022 
*/
var subtotal=0;
var tax;
var total;
var gap="&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
var gap2="&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
var gap3="&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
var a;
var b;
var c;
var d;


        document.getElementById("entername").onclick =function(){
        var namestr;
        var psw;
        var form = document.getElementById("form").value;
        namestr=document.getElementById("name").value;
        psw=document.getElementById("psw").value;
        if (namestr.length>0 && psw.length>0) {
       document.getElementById("display").innerHTML="welcome,"+" "+namestr+"!";
       document.getElementById("form").innerHTML="";
    }
}

         document.getElementById("hummas").onclick =function(){
         a=document.getElementById("Hummas").value;
         var q = document.getElementById("Hummas").value;
         subtotal=subtotal+(q*10);
         if(q>0){
         document.getElementById("dis").innerHTML="Hummas Bowl"+" ("+q +") -------> $" +(q*10);
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+ total;
         document.getElementById("hummas").disabled = true;
         document.getElementById("Hummas").disabled = true;
         document.getElementById("hummas2").disabled = false;
         document.getElementById("add").style.display = "inline"
       }
         else {
          alert("you have to select at least one item");
         }
  
    }
  
         
         document.getElementById("hummas2").onclick =function(){
         a=0;
         var q = document.getElementById("Hummas").value; 
         subtotal=subtotal-(q*10); 
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis").innerHTML="";
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+total;
         document.getElementById("hummas").disabled = false;
         document.getElementById("Hummas").disabled = false;
         document.getElementById("hummas2").disabled = true;
         document.getElementById("add").style.display = "inline"
         if(subtotal<1){
         document.getElementById("dis5").innerHTML="";
         document.getElementById("dis6").innerHTML="";
         document.getElementById("dis7").innerHTML="";
         document.getElementById("add").style.display = "none"

    }
  }
         document.getElementById("chickpea").onclick =function(){
         b=document.getElementById("Chickpea").value;
         var q = document.getElementById("Chickpea").value;
         subtotal=subtotal+(q*8);
         if(q>0){
         document.getElementById("dis2").innerHTML="Chickpea salad"+" ("+q +") ------> $" +(q*8);
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+ total;
         document.getElementById("chickpea").disabled = true;
         document.getElementById("Chickpea").disabled = true;
         document.getElementById("chickpea2").disabled = false;
         document.getElementById("add").style.display = "inline"
       }
         else {
          alert("you have to select at least one item");
         }
  
    }
         document.getElementById("chickpea2").onclick =function(){
         b=0;   
         var q = document.getElementById("Chickpea").value; 
         subtotal=subtotal-(q*8); 
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+total;
         document.getElementById("chickpea").disabled = false;
         document.getElementById("Chickpea").disabled = false;
         document.getElementById("chickpea2").disabled = true;
         document.getElementById("dis2").innerHTML="";
         document.getElementById("add").style.display = "inline"
         if(subtotal<1){
         document.getElementById("dis5").innerHTML="";
         document.getElementById("dis6").innerHTML="";
         document.getElementById("dis7").innerHTML="";
         document.getElementById("add").style.display = "none"
    }
  }
         document.getElementById("tuna").onclick =function(){
         c=document.getElementById("Tuna").value;   
         var q = document.getElementById("Tuna").value;
         subtotal=subtotal+(q*6);
         if(q>0){
         document.getElementById("dis3").innerHTML="Tuna salad"+" ("+q +") -----------> $"+(q*6);
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+total;
         document.getElementById("tuna").disabled = true;
         document.getElementById("Tuna").disabled = true;
         document.getElementById("tuna2").disabled = false;
         document.getElementById("add").style.display = "inline"
       }
        else {
          alert("you have to select at least one item");
         }
    }
    document.getElementById("tuna2").onclick =function(){
         c=0;
         var q = document.getElementById("Tuna").value; 
         subtotal=subtotal-(q*6);
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+total;
         document.getElementById("tuna").disabled = false;
         document.getElementById("Tuna").disabled = false;
         document.getElementById("tuna2").disabled = true;
         document.getElementById("dis3").innerHTML="";
         document.getElementById("add").style.display = "inline"
         if(subtotal<1){
         document.getElementById("dis5").innerHTML="";
         document.getElementById("dis6").innerHTML="";
         document.getElementById("dis7").innerHTML="";
         document.getElementById("add").style.display = "none"
    }
  }
  
         document.getElementById("salmon").onclick =function(){
         d=document.getElementById("Salmon").value;   
         var q = document.getElementById("Salmon").value;
         subtotal=subtotal+(q*8);
         if(q>0){
         document.getElementById("dis4").innerHTML="Salmon salad"+" ("+q +") --------> $" +(q*8);
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+total;
         document.getElementById("salmon").disabled = true;
         document.getElementById("Salmon").disabled = true;
         document.getElementById("salmon2").disabled = false;
         document.getElementById("add").style.display = "inline"
       }
          else {
          alert("you have to select at least one item");
         }
       }

    document.getElementById("salmon2").onclick =function(){
         d=0;
         var q = document.getElementById("Salmon").value; 
         subtotal=subtotal-(q*8); 
         tax=(subtotal*8)/100;
         total=subtotal+tax;
         document.getElementById("dis5").innerHTML="Subtotal "+gap+subtotal;
         document.getElementById("dis6").innerHTML="Tax "+gap2+tax;
         document.getElementById("dis7").innerHTML="Total "+gap3+total;
         document.getElementById("salmon").disabled = false;
         document.getElementById("Salmon").disabled = false;
         document.getElementById("salmon2").disabled = true;
         document.getElementById("dis4").innerHTML="";
         document.getElementById("add").style.display = "inline"
         if(subtotal<1){
         document.getElementById("dis5").innerHTML="";
         document.getElementById("dis6").innerHTML="";
         document.getElementById("dis7").innerHTML="";
         document.getElementById("add").style.display = "none"
    }
  }
     document.getElementById("add").onclick = function set(){

        document.getElementById("order").style.display = "inline"

        var e=subtotal;
        var f=tax;
        var g=total;
        
        sessionStorage.setItem("a",a);
        sessionStorage.setItem("b",b);
        sessionStorage.setItem("c",c);
        sessionStorage.setItem("d",d);
        sessionStorage.setItem("e",e);
        sessionStorage.setItem("f",f);
        sessionStorage.setItem("g",g);
        return;
   }

   