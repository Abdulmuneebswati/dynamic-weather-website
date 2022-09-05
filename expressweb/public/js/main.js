const parent = document.getElementById("parent");
const child = document.getElementsByClassName("child");
const date = document.getElementById("date");
const time = document.getElementById("time");
const country = document.getElementById("country");
const city = document.getElementById("city");
const min_max = document.getElementById("min-max");
const weather = document.getElementById("weather")
let weatherstatus;
const search = document.getElementById("search");
const quick = document.querySelector(".hide");
const heading = document.getElementById("head");
const alpha = ()=>{
    
    
    const CovertFtoC = (a)=>{
        const celcius = Math.round((a - 273.15));
        return celcius;
    }
    const findTime =()=>{
        var time = new Date();
        
         return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        
    }

    const findDate = ()=>{
        const date = new Date;
        const day = date.getDay();
        const arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        const din = date.getDate();
        const abc =(din<9)? "0"+din:din;
        const mon = date.getMonth();
        const abcd =(mon<9)? "0"+mon:mon;
        const year = date.getFullYear();
        return arr[day] + "/" + abc + "/" + abcd + "/" + year;
    }
    quick.classList.add("abc");

    
findDate();
    async function func(event){

        event.preventDefault();
        try {

        let cityval = search.value;
        const fetching = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e5361b7d758ad6cc8d0ce0f5d42eefc2`);
        const data = await fetching.json();
        if (cityval==="") {
            heading.innerText = "Error plz search Valid";
            quick.classList.add("abc");
        } else {
        quick.classList.remove("abc");

            heading.innerText = "Weather Updates";
         country.innerText = `Country:${data.sys.country}`;
        city.innerText = `City:${data.name}`
        min_max.innerText =`Min-Temp: ${data.main.temp_min}ºK||Max-Temp: ${data.main.temp_min}ºK`
        weather.innerText = `${CovertFtoC(data.main.temp)}ºC `;
        time.innerText = findTime();
        date.innerText = findDate();
        weatherstatus = data.weather[0].main;
        if (weatherstatus == "Cloudy") {
            parent.style.backgroundImage = "url('abc.jpg')"
        }
        }
        } catch (error) {
            heading.innerText = "Error plz search Valid";
            quick.classList.add("abc");
        }
        
    }

const submitbtn = document.getElementById("subbtn");

submitbtn.addEventListener("click",func);
}

alpha();
