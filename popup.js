document.getElementById("getWeather").addEventListener("click",function(){

 const resDiv = document.getElementById("result")
const loading= document.getElementById("loading")
const toggle = document.getElementById("tempToggle")
resDiv.innerHTML=""
 loading.classList.remove("hidden")
if( !navigator.geolocation ){
resDiv.innerText = "Geolocation not supported."
  loading.classList.add("hidden")
return
}
navigator.geolocation.getCurrentPosition(success , error)
function success(pos){
 let lat = pos.coords.latitude
 let lon=pos.coords.longitude
 let key="fa6bed64b00d42879ee110318250907"
 fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}`)
 .then(res=>res.json())
 .then(data=>{
  let city = data.location.name
let cTemp=data.current.temp_c
     let fTemp = data.current.temp_f
   let cond= data.current.condition.text
let icon = data.current.condition.icon
  let isF=toggle.checked
  let temp= isF ? fTemp + " °F" : cTemp+" °C"
  resDiv.innerHTML = `
  <p><strong>${city}</strong></p>
  <p>${temp}</p>
  <p>${cond}</p>
  <img src="https:${icon}" alt="icon">
  `
 localStorage.setItem("weather", JSON.stringify({
 city,cTemp,fTemp,cond,icon
 }))

 loading.classList.add("hidden")
 })
 .catch(()=>{
  resDiv.innerText="Failed to load weather."
    loading.classList.add("hidden")
 })
}

function error(){
resDiv.innerText="Location access denied."
 loading.classList.add("hidden")
}
})

document.getElementById("tempToggle").addEventListener("change",function(){
 let saved = localStorage.getItem("weather")
if(saved){
 let d=JSON.parse(saved)
 let temp= this.checked ? d.fTemp+" °F" : d.cTemp+" °C"

 document.getElementById("result").innerHTML=`
 <p><strong>${d.city}</strong></p>
 <p>${temp}</p>
 <p>${d.cond}</p>
 <img src="https:${d.icon}" alt="icon">
 `
}
})
