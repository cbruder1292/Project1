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
            var date = today.getMonth()+'/'+(today.getDate())+'/'+today.getFullYear();
            console.log(date);
            $("#cityName").text(cityName + "(" + date +")");

            var tempC = response.main.temp;
            var tempF = (((tempC- 273.15) * 1.80) + 32).toFixed(2);
            console.log(tempF);
            $("#temp").text("Temperature: " + tempF +"F");
            foodapicall(tempF);

        });
    }
    
     function foodapicall(tempF){
         if(tempF < 20){
            var array =["52846", "52814", "52867", "52812", "52806"];
            var indexValue = Math.floor(Math.random() *(5));  
            var recipeChoice = array[indexValue];     
            //  console.log("index value: " +recipeChoice); 
             recipeapifunction(recipeChoice);   
         }

         else  if(tempF >= 20 && tempF < 40){
            var array =["52813", "52844", "52993", "52805", "52810"];
            var indexValue = Math.floor(Math.random() *(5));
            var recipeChoice = array[indexValue];   
            // console.log("index value: " +recipeChoice);   
            recipeapifunction(recipeChoice);   
         }

         else  if(tempF >= 40 && tempF < 60){
            var array =["52959", "52773", "52803", "52796", "52807"];
            var indexValue = Math.floor(Math.random() *(5));
            var recipeChoice = array[indexValue];     
            //  console.log("index value: " +recipeChoice); 
             recipeapifunction(recipeChoice);       
         }

         else  if(tempF >= 60 && tempF < 80){
            var array =["52994", "53010", "52997", "52832", "52816"];
            var indexValue = Math.floor(Math.random() *(5));
            var recipeChoice = array[indexValue];    
            //  console.log("index value: " +recipeChoice);
             recipeapifunction(recipeChoice);        
         }

         else if(tempF >= 80){
            var array =["52819", "52777", "52960", "52937", "52852"];
            var indexValue = Math.floor(Math.random() *(5));
            var recipeChoice = array[indexValue];    
            // console.log("index value: " +recipeChoice);  
            recipeapifunction(recipeChoice);      
         }
     }

     function recipeapifunction(recipeChoice){
      var queryURL= "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeChoice;   
      $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function (response) {
           console.log(response);
           var foodName = response.meals[0].strMeal;
           console.log(foodName); 
           var foodImage = response.meals[0].strMealThumb;
           console.log(foodImage);
           var foodRecipe = response.meals[0].strSource;
           console.log(foodRecipe)
           var foodVideo = response.meals[0].strYoutube;
           console.log(foodVideo);
        
        });

     }
    });
    