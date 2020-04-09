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
            var menuDescription = ["An American classic! Crispy fried chicken on a chilly day is the perfect meal to lift your spirits. Serve it up with some mashed potatoes and green beans to get everyone in the house excited.",
                "Lasagna is an Italian dish made of stacked layers of flat noodles filled with a sauce like ragu and other vegetables, cheese and seasonings. Pair this with a bottle of red wine for a perfect dinner.",
                "The honey-balsamic glaze is truly the star of this dish that will elevate the chicken to a whole new level. Generously brush it over some grilled chicken breasts or thighs and serve with fresh veggies for a meal to leave everyone satisfied.",
                "Biryani is a staple of Indian cuisine and for good reason! This dish is highly versatile and can be made with beef, chicken, vegetables, or like this preparation, with lamb. Be sure to generously season the meat and rice with nutmeg, coriander and cumin.",
                "Ossobuco Milanese is an Italian specialty made by braising veal shanks with vegetables and white wine. Depending on the region of Italy, it is most often served with a risotto or polenta and will be sure to leave the whole family wanting more."];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }

        else if (tempF >= 40 && tempF < 60) {
            var array = ["52959", "52773", "52803", "52796", "52807"];
            var menuDescription = ["Who doesn’t love some Atlantic salmon with some fresh fennel and tomatoes? Pop this dish in the oven for 20 minutes and you’ll have a delicious dinner on the table in no time.",
                "The honey-teriyaki glaze is truly the star of this dish and will bring the salmon to peak culinary bliss. Be sure to garnish the salmon and roasted veggies with sesame seeds and some soy sauce for a great finish.",
                "Beef Wellington is arguably the best thing to come out of England since William Shakespeare. Who does’t love beef wrapped in a flaky puff pastry served with potatoes and mushrooms on a chilly winter day?",
                "Classic and easy to make, this chicken Alfredo dish is perfect comfort food. The fettuccine noodles and a generous helping of Parmesan will leave everyone asking for the recipe.",
                "Hailing from the Punjab region of India, Baingan bharta is a vegetarian dish prepared by mincing eggplant that is grilled over charcoal or directly over a flame. The smoked eggplant is then mixed with tomato, onion, ginger, garlic and cilantro."];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }

        else if (tempF >= 60 && tempF < 80) {
            var array = ["52994", "53010", "52997", "52832", "52816"];
            var menuDescription = ["If skillet fried apple pork chops with sweet potatoes doesn’t say comfort food then we don’t know what does.  A little brown sugar and a fresh squeezed lemon to finish this dish will make any dinner party or family gathering a hit.",
                "This fun spinoff on a classic is the perfect way to spend a sunny afternoon grilling outside. The bright flavor of the Tzatziki really brings this burger to the next level.",
                "Bahn Mi is a world famous dish hailing from Vietnam that is usually served as a sandwich, but today we are losing the bread and making a bowl. The tender beef along with pickled cucumbers and carrots pairs perfectly with the spicy sriracha mayo. A big handful of cilantro is the perfect final touch for this dish.",
                "Coq a Vin is a French dish prepared by braising chicken with red wine, mushrooms and garlic that is perfect for any occasion. Although this dish requires some skill and patience in the kitchen, the rewards are sure to pay off.",
                "This dish is perfect as the weather starts to warm up and flowers begin to bloom as spring turns into summer. Fresh and bright, the roasted eggplant with some seasoned lentils and pine nuts will be sure to impress your guests."];
            var indexValue = Math.floor(Math.random() * (5));
            var recipeChoice = array[indexValue];
        }

        else if (tempF >= 80) {
            var array = ["52819", "52777", "52960", "52937", "52852"];
            var menuDescription = ["Cooking with cajun spices and a cayenne pepper marinade makes these fish tacos incredibly succulent and full of flavor. Top with a zesty dressing and serve in warm tortillas for a quick main-course that is perfect for summer.",
                "As the weather warms up, this Mediterranean pasta salad is the perfect dish for a picnic or the beach. All you have to do is cook the noodles, add the veggies and toss in olive oil for a tasty main course.",
                "Everyone knows that salads are the perfect light-fare for summer and this salmon and avocado salad will hit the spot. Spinach, kale or arugula will all suffice as the base green and then the rest is up to you. A nice pan sear on the salmon will keep you coming back to this recipe time after time.",
                "Coming from the island of Jamaica, jerk chicken with rice is loved all around the world. The marinade, featuring red chilis, brown sugar and other spices is the key to elevating this dish to the next level for everyone to enjoy.",
                "A tuna Nicoise salad is a quintessential summer dish. Incorporating hard-boiled eggs, spinach, onion and potatoes, it is the perfect blend of light and filling for a lunch on the go or a family dinner."];
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
