# weatherEats

* This project is all about creating an application, weatherEats, which accepts city name as the user input and based on the temperature it suggest a meal recipe.weatherEats will help users from around the world get some new ideas for recipes that are suited to their climate. This app provides the Youtube link and a recipe guide for the suggested menu.

APIs 
        * Openweather API [https://openweathermap.org/api]
        * TheMealDB API [https://www.themealdb.com/api.php]

CSS framework
        * Materialize [https://materializecss.com/]
    
How it works?
        * Once User inputs the CIty name
        * It shows up the current Temperature in degree Fahrenheit
        * Also with a random recipe appropriate for the temperature (Recipe name, meal picture)
        * When user clicks on more options, weatherEats shows up a small description about the recipe, a link to open corresponding youtube video and a link for recipe guide.

Javascript Rundowm

    1. Initially,  hide the weather and food details, so that they wont show up until user clicks on search button after entering City name.
    2. When user inputs city name and press enter/search button, an event listener is created to call a  function, for calling the OpenWeather API. 
    3. Once response is recieved from the API, it takes the date and temp values from the response.
    4. Temperature value should be converted to degree Fahrenheit.
    5. A function is created to find the corresponding food. Temperatures are grouped into 5 (below 20F, 20F to 39F, 40F to 59F, 60F to 79F and above 80F).
    6. Each category contains an array of 5 food IDs and another array for food description.
    7. Also the background of the application is changed based on the temperature range.
    7. Each time user inputs a temperature, it finds the category and take a random food ID, and corresponding description
    8. It calls a function to call TheMealDB API, to search with food ID.
    9. Once response is recieved, it takes Meal name, Image, youtube link and recipe link. These are then linked to the Eats card, taken from Materialize.
    10. If youtube link or recipe link is unavailable, then the corresponding button is hidden.

RealWorld Application
        * Anyone having internet connection, can use this application
 
Link
     weatherEats live link: [https://cbruder1292.github.io/Project1/]

weatherEats demo (./images/weatherEats-03.png , ./images/weatherEats-04.png)
