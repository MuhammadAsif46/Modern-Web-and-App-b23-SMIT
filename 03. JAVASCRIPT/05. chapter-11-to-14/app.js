// var food = prompt("Enter your Fav Food?")

// if (food == "Biryani") {
//     console.log("2 Kg lekay ajaoo....");
// } else if (food == "Pulao") {
//     console.log("1 Kg lekay ajaoo....");
// } else if (food == "Nihari") {
//     console.log("1 Kg lekay ajaoo....");
// } else {
//     console.log("Anday wala burger lekay ajao..");
// }


// ||
// &&


// true || true = true
// true || false = true
// false || true = true
// false || false = false


// true && true = true
// false && true = false
// true && false = false
// false && false = false

// var a = 5

// if(a == 5 && a > 5){
//     console.log("a is true");
// } else {
//     console.log("a is false");
// }



var food = prompt("Enter your Fav Food?")

if (food == "Biryani") {
    var moreItem = prompt("Enter item?")
    if(moreItem == "Raita"){
        console.log("2 Kg biryani or 50 ka raita bhi lekay ajaoo....");
    } else {
        console.log("2 Kg biryani he lekay ajaoo....");
    }
} else if (food == "Pulao") {
    console.log("1 Kg lekay ajaoo....");
} else if (food == "Nihari") {
    console.log("1 Kg lekay ajaoo....");
} else {
    console.log("Anday wala burger lekay ajao..");
}


