# Weather_App

<img width="971" alt="Screen Shot 2020-02-11 at 5 24 34 PM" src="https://user-images.githubusercontent.com/42880531/74294639-61cfe580-4cf3-11ea-83da-190b0323a7d1.png">


For this weataher app, I decided to start with getting my ajax calls together. I first went to the open weather api and got the url for the current weather (https://openweathermap.org/current). This ajax call function can be found on the script.js file. 

Once I got the correct url I set up an ajax function to call the following information:
-City Name 
- Weather icon 
- Humidity 
-Wind Speed 
-Latitude and Longitute 

In order to get the weather icon to show up, I had to extract the image id, set to each city wetaher. I would then have to add the code to a url used by the site in order to use the pre-made images made by the site. I woud then add that url as my image source. (https://openweathermap.org/weather-conditions)

In order to get the UV index for the current city being searched for by the user, I had to create another ajax call which called only for the UV index based on the Latitude and Longtitude of the location being searched for. (url: https://openweathermap.org/api/uvi)

I would extract the Lat & Lon from the "Current Weather" api and then add that to the ajax call for the UV Index. 

SEE LINE 45 from the script.js file. 

Once I extracted the UV index I went ahead and made an if/else statement that would take the UV index and depending on the level it would change the background of the div. I chose the colors based on other basic color codes used by any UV scales found on the internet (https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/200/2018/08/03014643/UV-Index.png).

Every time I collected a piece of data, I would append it to a div that is then appended to the "citySpecifics" div. 

In order to collect the 5 day forecast, I used a different API url (https://openweathermap.org/forecast5). This ajax all can be found on the script2.js file. 

For the 5 day forecast I went ahead and made a for loop that would go through the different keys I wanted to pull information from the API. I went through the API and looked at the index for everyday at 12:00PM and used that information for the forecast. I ensured that my for loop went through the data and showed the weather for each day at 12:00PM. 

I then collected the following information for each day at 12:00PM:
- Weather Icon 
- Temp 
- Humidity 

I made 5 seperate divs for each day of the week and gave each div a specific ID that would match the day of the would that I would search for. 

Every time I went through my loop I would add each piece of data I needed to each date. 

For the dates in my application, I used moment.js. I went ahead used the current date for the current weather section. Then for my 5 day forecast, I went ahead and used the following function:
moment(). add(i+1,'days'). format("MMM Do YY") 
This function allows for each day listed to have a day added based on the current date. 

Every time the user seaches for a specific city, the city they seached for is saved as a button. This information is saved using localStorage. When the user clicks on any of the buttons, the same ajax calls will be amde again and the curre3nt werather data and forecast will be shown for the city selected. 

When the user refreshes the page they will see the buttons on their screen of past searches. They will also see the current weather for the last city they seached for along with the 5 day forecast for that location. 
