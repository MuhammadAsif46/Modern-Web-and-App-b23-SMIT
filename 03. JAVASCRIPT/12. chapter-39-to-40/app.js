// alert("hello")

// var a = "hello"

// a = ""

// function submit() {
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")

//     if (name.value.trim() && email.value.trim()) {
//         console.log(name.value);
//         console.log(email.value);
//         name.value = "";
//         email.value = "";
//         // Swal.fire({
//         //     title: "Details Submitted Successfully!",
//         //     icon: "success",
//         //     draggable: true
//         // });
//     } else {
//         console.log("Please Enter Values");
//     }


// }


// var heading = document.getElementById("heading")
// console.log(heading.innerText);


// function submit(a){
//     console.log(a);
// }

// submit(1) // 1
// submit(2) // 2
// submit(3)
// submit(4)
// submit(5)
// submit(6)
// submit(7)

// alert("hello")

// Swal.fire({
//   title: "Drag me!",
//   icon: "error",
//   draggable: true
// });


var day = "sat"
var month = "jan"

if (day === "sun" || month == "jan") {
    console.log("It's fun day");
} else if (day === "sat") {
    console.log("Today is Saturday day");
} else {
    console.log("It's Working day");
}

// switch (day) {
//     case "sun":
//         console.log("It's fun day");
//         break;
//     case "sat":
//         console.log("Today is Saturday day");
//         break;
//     default:
//         console.log("It's Working day");
// }


// switch (day) {
//     case "sun":
//         console.log("helllo");
//         break;
//     case "sun":
//         console.log("helllo");
//         break;
//     case "sun":
//         console.log("helllo");
//         break;

//     default:
//         break;
// }
var result = document.getElementById("result")

function number(a){
    result.value += a
}


function clearBtn(){
    result.value = ""
    // console.log("run");
    
}

