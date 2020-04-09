$(document).ready(function () {

    function showRow2 () {
        $("#row2").show();
        $("#row2").show();
    }
    
    function hideRow2 () {
        $("#row2").hide();
    }
    hideRow2();

    $("#button-addon2").on("click", function () {
        var cityName = $("#cityInput").val();
        apicallFunction(cityName);
        showRow2();
    })

    function apicallFunction(cityName) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=c4054486704fd93a795570310c9ddbb7";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var today = new Date();
            var date = today.getMonth() + '/' + (today.getDate()) + '/' + today.getFullYear();
            console.log(date);
            $("#cityName").text(cityName + "(" + date + ")");

            var tempC = response.main.temp;
            var tempF = (((tempC - 273.15) * 1.80) + 32).toFixed(2);
            console.log(tempF);
            $("#temp").text("Temperature: " + tempF + "F");
            foodapicall(tempF);

        });
    }

    function foodapicall(tempF) {
        if (tempF < 20) {
            var array = ["52846", "52814", "52867", "52812", "52806"];
            var menuDescription = ["This Chicken and mushroom hot pot is the perfect dish to warm you up on a chilly day! It’s filled with potatoes, corn, mushrooms, peas, carrots and savory pieces of chicken in a delicious broth.",
                "A classic Thai green curry with jasmine rice or noodles is a great dish to lift anyone’s spirit on a cold winter day. Chicken, beef, shrimp or tofu will all work wonderfully for this meal and be sure not to forget a big piece of basil to get the house smelling like heaven.",
                "Who doesn’t love chili on a cold day? This dish is filled with beans, chopped tomatoes, corn and any other vegetables you like. Be sure to season your chili with some paprika and cumin to warm it up and garnish with some cheese or cilantro.",
                "Is there anything better on a winter day than a sitting by a fireplace and a beef pot roast cooking on the stove? The meat will be fall-off-the-bone tender and is sure to fill up the whole family with some leftovers to spare", 
                "Chicken Tandoori is one of the most famous dishes from India. Marinading in a creamy yogurt and lime sauce is the perfect way to balance out the spicy chicken. Serve with some fresh nann and seasoned rice"];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
            var description = menuDescription[indexValue];
        }

        else if (tempF >= 20 && tempF < 40) {
            var array = ["52813", "52844", "52993", "52805", "52810"];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }

        else if (tempF >= 40 && tempF < 60) {
            var array = ["52959", "52773", "52803", "52796", "52807"];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }

        else if (tempF >= 60 && tempF < 80) {
            var array = ["52994", "53010", "52997", "52832", "52816"];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }

        else if (tempF >= 80) {
            var array = ["52819", "52777", "52960", "52937", "52852"];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }
        recipeapifunction(recipeChoice);
        foodescription(description);
    }

    function recipeapifunction(recipeChoice) {
        var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeChoice;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var foodName = response.meals[0].strMeal;
            $("#foodName").text(foodName);

            var foodImage = response.meals[0].strMealThumb;
             $("#foodPic").attr("src", foodImage);
            console.log(foodImage);

            var foodRecipe = response.meals[0].strSource;
            var aTagRecipe = $("<a>");
            aTagRecipe.attr("href", foodRecipe);
            aTagRecipe.attr("target", "_blank");
            aTagRecipe.text("Recipe");
            $("#recipelink").append(aTagRecipe);
           
            var foodVideo = response.meals[0].strYoutube;
            var aTag = $("<a>");
            aTag.attr("href", foodVideo);
            aTag.attr("target", "_blank");
            aTag.text("YouTube Video");
            $("#youtubelink").append(aTag);
        });

    }
    function foodescription(description) {
        console.log(description);
        $("#foodDescription").text(description);
    }

    

});
