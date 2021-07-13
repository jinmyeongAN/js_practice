function geoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_key = "45c667914aa585adb94240e906178df7";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    
    const myWeather = document.querySelector("#weather");
    const cityIs = myWeather.querySelector("span:first-child");
    const weatherIs = myWeather.querySelector("span:last-child");
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            cityIs.innerText = `${data.name} is `;
            weatherIs.innerText = `${data.weather[0].main} and Temperature is ${data.main.temp}`;
    })

}

function geoError(){
    alert("We can't find your position :(")
}

navigator.geolocation.getCurrentPosition(geoSuccess,geoError);