
// Get location from user
document.getElementById("submit").addEventListener("click",async function(e){
    e.preventDefault()
    const display = document.getElementById("display")
    const location = document.getElementById("location").value;
    // console.log(location)
    const apiKey = "a7f799ab2b02523e67c3bc7e0540c305"
    // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    // .then(response => response.json())
    // console.log(response)
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    const response = await request.json()
   const zero = 0
    const weather = response.weather
    console.log(weather)
    const city = document.getElementById("city")
    const humidity=document.getElementById("humidity")
    const feel = document.getElementById("feel")
    const temp = document.getElementById("temp")
    const temp_max = document.getElementById("temp_max")
    const temp_min = document.getElementById("temp_min")
    const pressure = document.getElementById("pressure")
    const speed = document.getElementById("speed")
    city.textContent=location;
    humidity.textContent =`Humidity: ${response.main.humidity}`
    feel.textContent = `How it feels: ${response.main.feels_like} C`;
    temp.textContent=`Temp: ${response.main.temp} C`;
    temp_max.textContent=`Max-temp: ${response.main.temp_max} C`;
    temp_min.textContent=`Min-temp: ${response.main.temp_min} C`;
    pressure.textContent=`Pressure: ${response.main.pressure} bars`;
    speed.textContent=`Wind-speed: ${response.wind.speed} m/s`;
})