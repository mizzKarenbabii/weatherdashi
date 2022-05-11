// Global Variables
var APIkey =""
var searchInput = document.querySelector('.search-input')
var searchBtn = document.querySelector('.search-btn')


// Click listener on the search button
    //get value of search input

    // use value to call first API
    currentWeather(searchInputValue)


// current weather API to get Lat Lon
function currentWeather(city){

    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    fetch(apiUrl)
    .then(function(res){
        return res.json();
    })
    .then(function (data){
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        oneCall(lat, lon)
    })
}



// one call API to get all waeather info
function oneCall (lat, lon) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`
    fetch(apiUrl)
    .then(function(res){
        return res.json();
    })
    .then(function (data){
        console.log(data)
        // FILL IN WEATHER CONTENT PULLED FROM API IN THIS .THEN
        // GET ONE DAY INFO FROM CURRENT

        // GET FIVE DAY INFO FROM DAILY
    })
}