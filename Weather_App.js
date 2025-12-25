const place = document.getElementById("place");
const description = document.getElementById("des");
const tem = document.getElementById("temp");
const cloud = document.getElementById("cloud");
const feel = document.getElementById("feel");
const hum = document.getElementById("humidity");
const press = document.getElementById("press");
const curDated = document.getElementById("curDated");

// image id
const img1 = document.getElementById("im1");
const img2 = document.getElementById("im2");
const img3 = document.getElementById("im3");
const img4 = document.getElementById("im4");
const img5 = document.getElementById("im5");
const img6 = document.getElementById("im6");
const img7 = document.getElementById("im7");
const img8 = document.getElementById("im8");
const img9 = document.getElementById("im9");
const img0 = document.getElementById("im0");
img0.style.visibility = "visible";

// more page
const cot = document.getElementById("country");
const sp = document.getElementById("speed");
const de = document.getElementById("deg");
const gu = document.getElementById("gust");
const vi = document.getElementById("vis");
const ss = document.getElementById("sunSet");
const sr = document.getElementById("sunRise");
const la = document.getElementById("lat");
const lo = document.getElementById("log");

function display()
{
    let city = document.getElementById("city").value;
    
    // unit = metric for celsius
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=25a61937cd7ebc50a32c6d08124969f8&units=metric')
    .then(res => res.json())
    .then((resp)=>
    {
        let weather = Object.entries(resp)
        // console.log(weather)

        // description, Icon
        let des = weather[1][1][0].main;
        let icon = weather[1][1][0].icon
                    

        // country, sun set, sunrise
        let country = weather[8][1].country;
        // console.log(country)
                    
        // sun set
        let sunset = weather[8][1].sunset;
        let setTime = new Date(sunset*1000);
        var sethours = setTime.getHours();
        var setminutes = "0"+setTime.getMinutes();
        var setseconds = "0"+setTime.getSeconds();
        var cursetTime = sethours+':'+setminutes.substr(-2)+':'+setseconds.substr(-2);
        
        // sunrise
        let sunrise = weather[8][1].sunrise;
        let riseTime = new Date(sunrise*1000);
        var risehours = riseTime.getHours();
        var riseminutes = "0"+riseTime.getMinutes();
        var riseseconds = "0"+riseTime.getSeconds();
        var curriseTime = risehours+':'+riseminutes.substr(-2)+':'+riseseconds.substr(-2);            
        
        // clouds %, speed, deg, gust
        let cloudPercent = weather[6][1].all+" %"
        
        let speed = weather[5][1].speed
        let deg = weather[5][1].deg
        let gust = weather[5][1].gust
                    

        // lat & lon
        let latitude = weather[0][1].lat;
        let longitude = weather[0][1].lon;
                    

        // humidity, pressure, feel_like, temperature & visibility
        let feel_like = Math.round(weather[3][1].feels_like) +"\u00B0c"
        
        let humidity = weather[3][1].humidity+"%"
        
        let pressure = weather[3][1].pressure+" hPa"
        
        let temperature = Math.round(weather[3][1].temp) +"\u00B0"+"c ||"
        
        let visibility = weather[4][1]
            

        // time, date, day
        let unixTime = weather[7][1];
        var data = new Date(unixTime*1000);
        var day = data.getDay();  // days represent in numbers(0 - 6)
        var year = data.getFullYear();
        var curDate = data.getDate();
        var hours = data.getHours();
        var minutes = "0"+data.getMinutes();
        var seconds = "0"+data.getSeconds();
        var curTime = hours+':'+minutes.substr(-2)+':'+seconds.substr(-2);
                    
        // month
        var month = data.getMonth();   // months represent in numbers(0 - 11)
        var curMonth = 'Jan'
        if(month == 1)
        {curMonth='Feb'}
        if(month == 2)
        {curMonth='Mar'}
        if(month == 3)
        {curMonth='Apr'}
        if(month == 4)
        {curMonth='May'}
        if(month == 5)
        {curMonth='Jun'}
        if(month == 6)
        {curMonth='Jul'}
        if(month == 7)
        {curMonth='Aug'}
        if(month == 8)
        {curMonth='Sep'}
        if(month == 9)
        {curMonth='Oct'}
        if(month == 10)
        {curMonth='Nov'}
        if(month == 11)
        {curMonth='Dec'}
        
        // today
        var delday = curDate+" "+curMonth+" "+year
        
        function displayIcon()
        {
    if(icon == '01d')
    {
        img1.style.visibility = "visible";
        img2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "hidden";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }
    if(icon == '01n')
    {
        img1.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "visible";
        img8.style.visibility = "hidden";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }

    if(icon == '02n')
    {
        img1.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "visible";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }
    if(icon == '02d')
    {
        img1.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        img5.style.visibility = "visible";
        img5.style.width = "150px";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "hidden";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }

    if(icon == '03n' || icon == '03d' || icon == '04n' || icon == '04d')
    {
        img1.style.visibility = "hidden";
        img2.style.visibility = "visible";
        img3.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "hidden";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }
    if(icon == '09n' || icon == '09d' || icon == '10d' || icon == '10n')
    {
        img1.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        img3.style.visibility = "visible";
        img4.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "hidden";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }
    if(icon == '11n' || icon =='11d')
        {
            img1.style.visibility = "hidden";
            img2.style.visibility = "hidden";
            img3.style.visibility = "hidden";
            img4.style.visibility = "hidden";
            img5.style.visibility = "hidden";
            img6.style.visibility = "visible";
            img7.style.visibility = "hidden";
            img8.style.visibility = "hidden";
            img9.style.visibility = "hidden";
            img0.style.visibility = "hidden";
        }
    if(icon == '13n' || icon == '13d')
    {
        img1.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        img4.style.visibility = "visible";
        img4.style.width = "250px";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "hidden";
        img9.style.visibility = "hidden";
        img0.style.visibility = "hidden";
    }
    if(icon == '50n' || icon == '50d')
        {
            img1.style.visibility = "hidden";
            img2.style.visibility = "hidden";
            img3.style.visibility = "hidden";
            img4.style.visibility = "hidden";
            img5.style.visibility = "hidden";
            img6.style.visibility = "hidden";
            img7.style.visibility = "hidden";
            img8.style.visibility = "hidden";
            img9.style.visibility = "visible";
            img0.style.visibility = "hidden";
        }
}

        displayIcon();
        place.innerHTML = city[0].toUpperCase()+city.substr(1);
        description.innerHTML = des;
        cloud.innerHTML = "Clouds: "+cloudPercent
        feel.innerHTML="Feels_like: "+feel_like
        hum.innerHTML="Humidity: "+humidity
        press.innerHTML = "Pressure: "+pressure
        tem.innerHTML = temperature
        curDated.innerHTML = delday

        // console.log(gust)
        if(typeof(country) == 'undefined')
        {
            country = '??'
        }
        if(typeof(speed) == 'undefined')
        {
            speed = '??'
        }
        if(typeof(deg) == 'undefined')
        {
            deg = '??'
        }
        if(typeof(gust) == 'undefined')
        {
            gust = '??'
        }
        if(typeof(visibility) == 'undefined')
        {
            visibility = '??'
        }
        if(typeof(curriseTime) == 'undefined')
        {
            curriseTime = '??'
        }
        if(typeof(cursetTime) == 'undefined')
        {
            cursetTime = '??'
        }
        if(typeof(latitude) == 'undefined')
        {
            latitude = '??'
        }
        if(typeof(longitude) == 'undefined')
        {
            longitude = '??'
        }
        // more
        cot.innerHTML = "Country: " + country
        sp.innerHTML = "Speed: "+speed+" m/s"
        de.innerHTML = "Degree: "+deg
        gu.innerHTML = "Gust: "+gust+" m/s"
        vi.innerHTML = "Visible: "+ visibility
        ss.innerHTML = "-set: "+cursetTime
        sr.innerHTML = "-rise: "+curriseTime
        la.innerHTML = "Lat: "+latitude
        lo.innerHTML = "Long: "+ longitude
    })
}

const more = document.getElementById("more");
const container = document.getElementById("container")

function next()
{
    more.style.visibility = 'visible';
    container.style.visibility = 'hidden';
}
function back()
{
    // display();
    more.style.visibility = 'hidden';
    container.style.visibility = 'visible';
}