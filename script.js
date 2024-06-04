const toggleBtnChangeAbout = document.querySelector(".toggle_btnAbout");
const toggleBtnChangeResume = document.querySelector(".toggle_btnResume");
const toggleBtnChangePortfolio = document.querySelector(".toggle_btnPortfolio");
const toggleBtnChangeBlogs = document.querySelector(".toggle_btnBlogs");
const toggleBtnChangeContact = document.querySelector(".toggle_btnContact");


const dropdownItemAbout = document.querySelector(".infoabout")
const dropdownItemResume = document.querySelector(".inforesume")
const dropdownItemPortfolio = document.querySelector(".infoportfolio")
const dropdownItemBlogs = document.querySelector(".infoblogs")
const dropdownItemContact = document.querySelector(".infocontact")

function removeOpendropdown() {
    dropdownItemAbout.classList.remove('open');
    dropdownItemResume.classList.remove('open');
    dropdownItemPortfolio.classList.remove('open');
    dropdownItemBlogs.classList.remove('open');
    dropdownItemContact.classList.remove('open');
   
}

dropdownItemAbout.classList.toggle('open')

toggleBtnChangeAbout.onclick = function () {
    removeOpendropdown();
    dropdownItemAbout.classList.toggle('open')
}

toggleBtnChangeResume.onclick = function (){
    removeOpendropdown();
    dropdownItemResume.classList.toggle('open')
}


toggleBtnChangePortfolio.onclick = function () {
    removeOpendropdown();
    dropdownItemPortfolio.classList.toggle('open')
}

toggleBtnChangeBlogs.onclick = function () {
    removeOpendropdown();
   
    dropdownItemBlogs.classList.toggle('open')

}

toggleBtnChangeContact.onclick = function () {
    removeOpendropdown();
    dropdownItemContact.classList.toggle('open')
}


// for wheather app


const apiKey = 'cff2975236a64d6cb5733ccd0aff3f3c';
let temp = document.querySelector('#temperature');
let weather = document.querySelector('#weather');
let weatherDiv = document.querySelector('.weatherDiv');
let weatherImg = document.querySelector('#weatherImg')




let mainWeather ;
const getWeather = async () =>{
    const city = document.getElementById("weatherInput").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch (apiUrl);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error ('city not found')
            }else if (response.status === 401) {
                throw new Error('invalid API key')
            }else{
                throw new Error('error occured')
            }
        }
        const data = await response.json();
        mainWeather = data.weather[0].main;
        temp.innerHTML ="Temperature: " +  data.main.temp + "*C";
        
        console.log(data.main.temp)
        console.log(data.weather[0].main)
        weather.innerHTML = 'Weather: '+ data.weather[0].main;
        mainWeather = data.weather[0].main;
        console.log(typeof mainWeather)
     
        if (mainWeather === "Clouds") {
            weatherImg.src = 'https://img.freepik.com/premium-vector/cloudy-weather-cartoon_543090-877.jpg'
        } else if (mainWeather === "Clear") {
            weatherImg.src = 'https://t3.ftcdn.net/jpg/02/50/08/68/360_F_250086872_srlXRqANYR2IbNfIylRDc3eMO9MinjnV.jpg'
        } else if (mainWeather === "drizzle") {
            weatherImg.src = 'https://thumbs.dreamstime.com/z/drizzle-rgb-color-icon-rainy-season-summer-rain-meteorology-weather-forecast-atmospheric-precipitation-sun-behind-raining-cloud-180835795.jpg'
        }else if (mainWeather === "Haze") {
            weatherImg.src = 'https://c8.alamy.com/comp/2K2K88W/cloud-and-fog-symbols-isolated-on-white-background-3d-illustration-2K2K88W.jpg'
        }else if (mainWeather === "Rain") {
            weatherImg.src = 'https://img.freepik.com/premium-vector/happy-rainy-weather-cartoon_543090-883.jpg'
        }
        
        
    } catch (error) {
        alert(error.message.main);
    }
}
















// ---------------------------------------------- end weather

