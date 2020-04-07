$(document).ready(function () {

    $("#button-addon2").on("click", function () {
        var cityName = $("#cityInput").val();
        apicallFunction(cityName);
    })

    function apicallFunction(cityName) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=c4054486704fd93a795570310c9ddbb7";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var today = new Date();
            var date = today.getMonth()+'/'+(today.getDate()+1)+'/'+today.getFullYear();
            console.log(date);
            // $(".weather-div").text(cityName + "(" + date +")");

            var tempC = response.main.temp;
            var tempF = (((tempC- 273.15) * 1.80) + 32).toFixed(2);
            console.log(tempF);
            // $(".weather-div").appendtext("Temperature: " + tempF);

        });
    }
});