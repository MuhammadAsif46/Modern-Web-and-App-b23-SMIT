// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


var weather = document.getElementById("weather")
var city = document.getElementById("city")

function getWeather() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=392fc470c1ac8b42b2f40951a9a96cc4&q=${city.value}&units=metric`)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            weather.innerHTML = `
            <h1 class="head">${data.name}</h1>
            <h4>${Math.floor(data.main.temp)}°C</h4>
            <h4>${data.main.humidity}%</h4>
            <p>${data.weather[0].description}</p>
        `

            city.value = ""
        })
        .catch(function (err) {
            console.log(err);
        })

}


// function weather() {

//     fetch(`https://api.openweathermap.org/data/2.5/weather?appid=392fc470c1ac8b42b2f40951a9a96cc4&q=karachi&units=metric`)
//         .then(function (data) {
//             return data.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             weather.innerHTML = `
//             <h1 class="head">${data.name}</h1>
//             <h4>${Math.floor(data.main.temp)}°C</h4>
//             <h4>${data.main.humidity}%</h4>
//             <p>${data.weather[0].description}</p>
//         `

//             city.value = ""
//         })
//         .catch(function (err) {
//             console.log(err);
//         })

// }


// weather()

















// var firstName = "Zain"
// var lastName = "ahmed"
// var city = "Lahore"

// console.log(`Welcome ${firstName} ${lastName} from ${city}`);
