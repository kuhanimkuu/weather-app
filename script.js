
// Get location from user
async function getWeather(e){

    const display = document.getElementById("display")
    const location = document.getElementById("location").value;
    const loader = document.getElementById("loader")
    loader.style.display = "block"
    const apiKey = "a7f799ab2b02523e67c3bc7e0540c305"
   
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    
    const response = await request.json()
    const city = document.getElementById("city")
    const humidity=document.getElementById("humidity")
    const feel = document.getElementById("feel")
    const temp = document.getElementById("temp")
    const temp_max = document.getElementById("temp_max")
    const temp_min = document.getElementById("temp_min")
    const pressure = document.getElementById("pressure")
    const speed = document.getElementById("speed")
    const displays =document.getElementById("display-elements")
    city.textContent=location;
    console.log(response.name)
    if(response.name!= location){
        const invalid = document.createElement("div")
        invalid.textContent=`doesn't exist in our database try again`
        displays.appendChild(invalid)
        
    }
    humidity.textContent =`Humidity: ${response.main.humidity}`
    feel.textContent = `How it feels: ${response.main.feels_like} C`;
    temp.textContent=`Temp: ${response.main.temp} C`;
    temp_max.textContent=`Max-temp: ${response.main.temp_max} C`;
    temp_min.textContent=`Min-temp: ${response.main.temp_min} C`;
    pressure.textContent=`Pressure: ${response.main.pressure} bars`;
    speed.textContent=`Wind-speed: ${response.wind.speed} m/s`;
}
document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather()
    .catch(error => console.log('Catch error'+ error.message))
    .finally(()=>{
        loader.style.display = "none";
    })
})