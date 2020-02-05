function getForecast(city){

    var queryURLForcast = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=aa5b71088d417c59bb0ed00cd6cfe06e"

    $.ajax({
        url:queryURLForcast,
        method: "GET"
    }).then(function(response){
        
        // DAY 1 **************************************
        // NEED TO ADD DATE 
        var str = [0,8,16,24,32]
        for (let i = 0; i < str.length; i++) {
        
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

        // var weatherImgDay1 = $("<img>")
        // $("#day1").append(weatherImgDay1)
        // var iconIDday1 = (JSON.stringify(response.list[0].weather[0].icon))
        // var iconIdSubS1 = JSON.parse(iconIDday1)
        // var imgURLDay1 = "http://openweathermap.org/img/wn/"+iconIdSubS1+"@2x.png"
        // $(weatherImgDay1).attr("src", imgURLDay1)

        // var temperatureDay1 = $("<div>")
        // $("#day1").append(temperature1)

        // function changeTemp1(){
        //     var feren = parseFloat(response.main.temp)
        //     var convertTemp1 = Math.round((feren-273.15)*1.8 +32) 
        //     temperature1.text("Temperature: "+convertTemp+"°F")
        //   }
        //   changeTemp1()

        //   var humidity = $("<div>")
        // $(".citySpecifics").append(humidity)
        // humidity.text("Humidity: " +response.main.humidity+"%")

    })
}