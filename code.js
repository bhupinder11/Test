const apikey = "dd85864dcbef7d59b088106fe06081f0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
//we need the input where city name will be filled and a button where we will click to search
//and when people click on this button then this info should send to this checkweather function and this function will start
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const res = await fetch(apiurl + city + `&appid=${apikey}`); //this means url then city name which we added by innerhtml and then the apikey 
    
    if(res.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        //this for the wrong city name i.e. whenever we add awrong city name and a 404 is displayed that is this in not found then this if statement shpuld run else the remaining code
}
else{
    let data = await res.json();  

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;   //we select the city class and insert it with innerhtml which should be equal to the data shown in console where city is mentioned and write the keyword by which city name is received
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";  //because we need only the rounded temp value like 26°C not the 26.16°C
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drozzle.png";
    }
    else if (data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    
    document.querySelector(".error").style.display = "block";

}
}

  

searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value); // this will call the checkweather function when click event will happen and checkweather function will give its value to the api and will fetch all the info related to that.
})

