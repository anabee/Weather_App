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
        var iconID = (JSON.stringify(response.weather[0].icon))
        var iconIdSubS = JSON.parse(iconID)
        var imgURL = "http://openweathermap.org/img/wn/"+iconIdSubS+"@2x.png"
        $(weatherImg).attr("src", imgURL)

        var temperature = $("<div>")
        $(".citySpecifics").append(temperature)

        function changeTemp(){
            var feren = parseFloat(response.main.temp)
            var convertTemp = Math.round((feren-273.15)*1.8 +32) 
            temperature.text("Temperature: "+convertTemp+"°F")
          }
          changeTemp()

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