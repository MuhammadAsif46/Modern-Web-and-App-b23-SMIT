

// var std1 = {
//     firstname: "Ali",
//     lastname: "Ahmed",
//     age: 21,
//     fullname: function(){
//         console.log("Welcome " + this.firstname + " " + this.lastname);
//     }
// }

// var std2 = {
//     firstname: "Faraz",
//     lastname: "Ahmed",
//     age: 12,
//     fullname: function(){
//         console.log("Welcome " + this.firstname + " " + this.lastname);
//     }
// }
// var std3 = {
//     firstname: "Farhan",
//     lastname: "Ahmed",
//     age: 12,
//     fullname: function(){
//         console.log("Welcome " + this.firstname + " " + this.lastname);
//     }
// }

// std1.fullname()
// std2.fullname()
// std3.fullname()


// var std1 = {
//     name: "zeeshan",
//     fname: "ahmed",
//     class: "2nd",
//     age: 12,
//     course: "techno kids"
// }

// var std2 = {
//     name: "mustafa",
//     fname: "ahmed",
//     class: "12th",
//     age: 20,
//     course: "web and app",
//     cnic: 4358234563988,
// }


function Student(a, b, c, d) {
    this.name = a,
    this.fname = b,
    this.age = c,
    this.stdClass = d
}

Student.prototype.fullname = function(){
    return  this.name + " " + this.fname
}



var data = new Student("Faraz", "Ahmed", 12, "2nd")
console.log(data.fullname());
// var std2 = new Student("Ali","Ahmed", 23, "12th")
// var std2 = new Student("Ali","Ahmed", 23, "12th")
// console.log(std1);
// console.log(data.fullname());


// var std1 = {
//     name: "zeeshan",
//     fname: "ahmed",
// }

// std1.prototype.fullname = function(){
//     console.log(this.name);
// }


// console.log(std1)