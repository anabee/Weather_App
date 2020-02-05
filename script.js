function searchWeather(city){


    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=aa5b71088d417c59bb0ed00cd6cfe06e"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

        // CITY NAME 
        var cityNameDiv = $("<div>")
        $(".citySpecifics").append(cityNameDiv)
        cityNameDiv.text(response.name +" "+ moment().format("MMM Do YY"))

        // WEATHER ICON
        var weatherImg = $("<img>")
        $(".citySpecifics").append(weatherImg)
        var iconID = (JSON.stringify(response.weather[0].icon))
        var iconIdSubS = JSON.parse(iconID)
        var imgURL = "http://openweathermap.org/img/wn/"+iconIdSubS+"@2x.png"
        $(weatherImg).attr("src", imgURL)

        // TEMPERATURE AND CONVERSION FORMULA
        var temperature = $("<div>")
        $(".citySpecifics").append(temperature)

        function changeTemp(){
            var feren = parseFloat(response.main.temp)
            var convertTemp = Math.round((feren-273.15)*1.8 +32) 
            temperature.text("Temperature: "+convertTemp+"°F")
          }
          changeTemp()

        // HUMIDITY 
        var humidity = $("<div>")
        $(".citySpecifics").append(humidity)
        humidity.text("Humidity: " +response.main.humidity+"%")

        // WIND SPEED 
        var windSpeed = $("<div>")
        $(".citySpecifics").append(windSpeed)
        windSpeed.text("Wind Speed: " +response.wind.speed+" MPH")

        //UV INDEX
        var latOut = response.coord.lat
        var lonOut = response.coord.lon
        function getUV(lat,lon){
           var lat = latOut
           var lon = lonOut

            var queryURLuv = "http://api.openweathermap.org/data/2.5/uvi?appid=aa5b71088d417c59bb0ed00cd6cfe06e&lat="+lat+"&lon="+lon

            $.ajax({
                url: queryURLuv,
                method: "GET"
              }).then(function(response){

                var uvInd = $("<div>")
                $(".citySpecifics").append(uvInd)
                uvInd.text("UV Index: "+response.value)

                if (response.value <=2){
                    uvInd.css({"background-color": "green"})
                } else if ( response.value <=5){
                    uvInd.css({"background-color": "yellow"})
                } else if (response.value <=7){
                    uvInd.css({"background-color": "orange"})
                } else if (response.value <=10){
                    uvInd.css({"background-color": "red"})
                } else if (response.value >= 11){
                    uvInd.css({"background-color": "purple"})
                }
              })
        }
        getUV()

        })
}


$(".searchBtn").on("click", function(event){
    event.preventDefault();

    var city = $("#cityInput").val().trim();

    // Gets the current weather for the city 
    searchWeather(city);
    // Gets the 5 day forecast 
    getForecast(city);
    // Adds a button with the city name
    addCityBtn();
})

function addCityBtn (){
     
    var newCityBtn = $("<button>")
    $(".storedWeather").append(newCityBtn)
    $(newCityBtn).text($("#cityInput").val().trim())

}