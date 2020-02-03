function searchWeather(city){


    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=aa5b71088d417c59bb0ed00cd6cfe06e"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

        var cityNameDiv = $("<div>")
        $(".citySpecifics").append(cityNameDiv)
        cityNameDiv.text(response.name +" "+ moment().format("MMM Do YY"))

        var weatherImg = $("<img>")
        $(".citySpecifics").append(weatherImg)
        var imgURL = "http://openweathermap.org/img/wn/"+iconID+"@2x.png"
        var iconID = (response.weather[0].icon)
        console.log(response.weather.icon)
        $(weatherImg).attr("src", imgURL)

        var temperature = $("<div>")
        $(".citySpecifics").append(temperature)
        temperature.text("Temperature: " +response.main.temp)

        var humidity = $("<div>")
        $(".citySpecifics").append(humidity)
        humidity.text("Humidity: " +response.main.humidity+"%")

        var windSpeed = $("<div>")
        $(".citySpecifics").append(windSpeed)
        windSpeed.text("Wind Speed: " +response.wind.speed+" MPH")

        // need UV Index
        })
}
$(".searchBtn").on("click", function(event){
    event.preventDefault();

    var city = $("#cityInput").val().trim();

    searchWeather(city);
})