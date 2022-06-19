const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

var city = "";
form.addEventListener("submit",(e) =>
{
    e.preventDefault();
    city = search.value;
    console.log(city);
    searchweather(city);
    search.value = ""
    main.innerHTML = ""
   
})

async function searchweather(city)
{
     resp = await fetch(url(city))
     respdata =await resp.json();
     console.log(respdata);
     temp = respdata.main.temp-273.5 ;
     createmain(respdata);
}

function createmain(respdata)
{
    const weather = document.createElement("div")
    weather.classList.add("weather")
    weather.innerHTML = `
   <h3> 
    ${Math.floor(respdata.main.temp-273.5)}°C
    </h3>
    <h6>    
        description: ${ respdata.weather[0].main}
   </h6>
   <h6>    
        feels like: ${Math.floor(respdata.main.feels_like-273.5)}°C maximum: ${Math.floor(respdata.main.temp_max-273.5)}°C  minimum: ${Math.floor(respdata.main.temp_min-273.5)}°C 
   </h6>
   <h6>    
        wind speed: ${ respdata.wind.speed}
   </h6>
   
  
    `
    main.appendChild(weather)
}