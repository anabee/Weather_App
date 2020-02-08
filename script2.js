function getForecast(city){

    var queryURLForcast = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=aa5b71088d417c59bb0ed00cd6cfe06e"

    $.ajax({
        url:queryURLForcast,
        method: "GET"
    }).then(function(response){
        
        // NEED TO ADD DATE 
        var str = [0,8,16,24,32]
        for (let i = 0; i < str.length; i++) {

        var forecastDate = $("<div>")
        forecastDate.text(moment(). add(i+1,'days'). format("MMM Do YY"))
        $("#"+str[i]).append(forecastDate)
        
        var weatherImgForecast = $("<img>")
        $("#"+str[i]).append(weatherImgForecast)
        var iconIDForecast = (JSON.stringify(response.list[i].weather[0].icon))
        var iconIdSubSForecast = JSON.parse(iconIDForecast)
        var imgURLForecast = "http://openweathermap.org/img/wn/"+iconIdSubSForecast+"@2x.png"
        $(weatherImgForecast).attr("src", imgURLForecast)

        var temperatureForecast = $("<div>")
        $("#"+str[i]).append(temperatureForecast)

        function changeTempForecast(){
            var ferenH = parseFloat(response.list[i].main.temp)
            var convertTempForecast = Math.round((ferenH-273.15)*1.8 +32) 
            temperatureForecast.text("Temp: "+convertTempForecast+"°F")
          }
        changeTempForecast()

        var humidityForecast = $("<div>")
        $("#"+str[i]).append(humidityForecast)
        humidityForecast.text("Humidity: " +response.list[i].main.humidity+"%")
            
        }

    })
}