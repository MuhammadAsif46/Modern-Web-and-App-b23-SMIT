// Q1
// var date = new Date()
// console.log(date);
// document.write("<h1>" + date + "</h1>")

// Q2

// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert(months[date.getMonth()])

// Q3

// var date = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var res = days[date.getDay()]

// alert(res.slice(0, 3));

// Q4
// var date = new Date();
// console.log(date);

// var days = ["Monday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = days[date.getDay()]

// if (today == "Saturday" || today == "Sunday") {
//     console.log("Its Fun Day");
// } else {
//     console.log("Its working day");
// }

// Q5
// var date = new Date();
// var today = date.getDate()

// if(today <= 15) {
//     console.log("First Fifteen Days of the month");
// } else {
//     console.log("Last Fifteen Days of the month");
// }

//Q6
// var date = new Date();
// console.log("Current Date: " + date);
// console.log("miliseconds: " + date.getTime());
// console.log("minutes: " + date.getTime() / (1000 * 60 * 60));

//Q7
// var date = new Date();
// var hours = date.getHours()

// if(hours < 12){
//     console.log("Its AM");
// } else {
//     console.log("Its PM");
// }

//Q8

// var laterDate = new Date("Dec 31, 2026")
// console.log(laterDate);

//Q9 

// var referenceDate = new Date("Jan 1, 2026 12:10:05")
// var refDiffTime = referenceDate.getTime();
// var today = new Date().getTime();
// var diff = today - refDiffTime;

// console.log("On reference date: " + referenceDate);
// console.log(Math.floor(diff / 1000) + " Seconds had passed since begining of 2026");
