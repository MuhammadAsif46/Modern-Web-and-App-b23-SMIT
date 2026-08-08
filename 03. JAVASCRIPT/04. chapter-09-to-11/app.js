// ======= Chapter no : 9 -> Prompt ======== //

// var username = prompt("Enter your Name?", "ali")
// console.log(username);

// var fav = +prompt("Enter your fav no?")
// console.log(fav + 5);

// console.log("10" + 5);

// alert ()  // wrong syntax
// alert()  // right syntax


// ======= Chapter no : 10 -> If Statements ======== //

    // condition check krna only true

// if (true) {
//     console.log("test");
// }


// ======= Chapter no : 11 -> Comparison operators ======== //


// > greater than
// < less than
// >= greater than equal
// <= less than equal
// == equal         --> only check values
// != not equal     --> only check values
// === equal        --> both check values & Data type
// !== not equal    --> only check value & Data type

5 > 5  // false
5 < 6  // true
4 == 4  // true
5 != 4  // true
6 >= 6  // true
7 <= 10  // true

// if(5 == 6 ){ // true
//     console.log("Condition is true");
// }

// var a = "hello"
// var b = "hell0"

// if(6 == "9" ){ // true
//     console.log("Condition is true");
// } else {
//     console.log("Condition is false");
// }


// 2 x 1 = 2


// Task 5: Take 3 subjects names & marks from user, calculate total & percentage
var subject1 = prompt("Enter subject 1 name:");
var marks1 = Number(prompt("Enter marks obtained in " + subject1 + ":"));

var subject2 = prompt("Enter subject 2 name:");
var marks2 = Number(prompt("Enter marks obtained in " + subject2 + ":"));

var subject3 = prompt("Enter subject 3 name:");
var marks3 = Number(prompt("Enter marks obtained in " + subject3 + ":"));

var totalMarks = marks1 + marks2 + marks3;
var totalMaxMarks = 300;  // assuming each subject is out of 100
var percentage = (totalMarks / totalMaxMarks) * 100;

document.write("<h2>Subject Total Marks Obtained Marks Percentage</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + ((marks1/100)*100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + ((marks2/100)*100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + ((marks3/100)*100) + "%</td></tr>");
document.write("</table>");
document.write("<br>");
document.write("Total Marks: " + totalMarks + " / " + totalMaxMarks);
document.write("<br>");
document.write("Overall Percentage: " + percentage + "%");