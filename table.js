"use strict";

/*
      Assignment : Term project
      Name: Asm Shariar Chowdhury
      Date: 7/11/2022  	
*/  

var dt = new Date();

var year = dt.getFullYear();

var month = dt.getMonth();

var date = dt.getDate();

var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var monthName = ["January", "February", "March", "April","May","June", "July", "August", "September", "October", "November", "December"];

var firstDay = new Date(year, month, 1);

var day = dayName.indexOf(firstDay);

var days = new Date(year, month+1, 0).getDate();



var Calendar = function(days) {
  var htable ="<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";   
  var table = document.getElementById("calendar"); 
  table.innerHTML = htable;

  var weekdays = firstDay.getDay();

  var row = table.insertRow(-1);

  for(var i=0; i < weekdays; i++) {
    row.insertCell(-1);
  } 

  weekdays--;

  for(var cl = 1; cl <= days; cl++) {

    if(weekdays == 6){
      weekdays = 0;     
      row = table.insertRow(-1);

    } else {
      weekdays++;
    }

    var cell = row.insertCell(-1);
    cell.innerHTML = cl;
    cell.style.backgroundColor = "lightblue";
    if (cl==date) {
    cell.style.backgroundColor = "red";
    cell.style.color = "green";
  }

    if (cl==2) {
      cell.innerHTML +="<br>"+eventDescriptions[2];
      cell.innerHTML +="<br>"+time[6];

    }  
    if (cl==5) {
      cell.innerHTML +="<br>"+eventDescriptions[0];
      cell.innerHTML +="<br>"+time[0];

    }
    if (cl==9) {
      cell.innerHTML +="<br>"+eventDescriptions[1];
      cell.innerHTML +="<br>"+time[1];

    }
    if (cl==12) {
      cell.innerHTML +="<br>"+eventDescriptions[2];
      cell.innerHTML +="<br>"+time[2];

    }
    if (cl==15) {
      cell.innerHTML +="<br>"+eventDescriptions[3];
      cell.innerHTML +="<br>"+time[3];

    }
    if (cl==19) {
      cell.innerHTML +="<br>"+eventDescriptions[4];
      cell.innerHTML +="<br>"+time[4];

    }
    if (cl==27) {
      cell.innerHTML +="<br>"+eventDescriptions[1];
      cell.innerHTML +="<br>"+time[3];

    }
    if (cl==31) {
      cell.innerHTML +="<br>"+eventDescriptions[7];
      cell.innerHTML +="<br>"+time[7];

    }
 }

};
    var displayMonYr = function() {

    document.getElementById("mon_yr").innerHTML = monthName[dt.getMonth()] + " " + year;

};

 displayMonYr();

 Calendar(days);

