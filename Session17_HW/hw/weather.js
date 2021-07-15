const input = document.querySelector("#city");
const button = document.querySelector("#submit");
const weatherBox = document.querySelector("#weatherBox");

const API_KEY = "042253f2e9bc748baf5005de6ec930a0";

button.addEventListener("click", async () => {
  //input의 값을 가져와서 도시이름으로 url에 넣는다.
  const city = input.value;

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(res);

    const geo_res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    );
    console.log(geo_res);

    const lat = geo_res.data[0]["lat"];
    const lon = geo_res.data[0]["lon"];

    const res_01 = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alert&appid=${API_KEY}`
    );
    console.log(res_01);
    
    // 시간
    const time_0 = new Date(res_01.data.hourly[0].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_1 = new Date(res_01.data.hourly[1].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_2 = new Date(res_01.data.hourly[2].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_3 = new Date(res_01.data.hourly[3].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_4 = new Date(res_01.data.hourly[4].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_5 = new Date(res_01.data.hourly[5].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_6 = new Date(res_01.data.hourly[6].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_7 = new Date(res_01.data.hourly[7].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_8 = new Date(res_01.data.hourly[8].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_9 = new Date(res_01.data.hourly[9].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_10 = new Date(res_01.data.hourly[10].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_11 = new Date(res_01.data.hourly[11].dt * 1000).toLocaleString("en-US", {hour: "numeric"});
    const time_12 = new Date(res_01.data.hourly[12].dt * 1000).toLocaleString("en-US", {hour: "numeric"});

    // 날씨 아이콘
    const icon_0 = res_01.data.hourly[0].weather[0].icon;
    const icon_1 = res_01.data.hourly[1].weather[0].icon;
    const icon_2 = res_01.data.hourly[2].weather[0].icon;
    const icon_3 = res_01.data.hourly[3].weather[0].icon;
    const icon_4 = res_01.data.hourly[4].weather[0].icon;
    const icon_5 = res_01.data.hourly[5].weather[0].icon;
    const icon_6 = res_01.data.hourly[6].weather[0].icon;
    const icon_7 = res_01.data.hourly[7].weather[0].icon;
    const icon_8 = res_01.data.hourly[8].weather[0].icon;
    const icon_9 = res_01.data.hourly[9].weather[0].icon;
    const icon_10 = res_01.data.hourly[10].weather[0].icon;
    const icon_11 = res_01.data.hourly[11].weather[0].icon;
    const icon_12 = res_01.data.hourly[12].weather[0].icon;

    // 습도
    const humidity_0 = res_01.data.hourly[0].humidity;
    const humidity_1 = res_01.data.hourly[1].humidity;
    const humidity_2 = res_01.data.hourly[2].humidity;
    const humidity_3 = res_01.data.hourly[3].humidity;
    const humidity_4 = res_01.data.hourly[4].humidity;
    const humidity_5 = res_01.data.hourly[5].humidity;
    const humidity_6 = res_01.data.hourly[6].humidity;
    const humidity_7 = res_01.data.hourly[7].humidity;
    const humidity_8 = res_01.data.hourly[8].humidity;
    const humidity_9 = res_01.data.hourly[9].humidity;
    const humidity_10 = res_01.data.hourly[10].humidity;
    const humidity_11 = res_01.data.hourly[11].humidity;
    const humidity_12 = res_01.data.hourly[12].humidity;

    // 기온
    const temp_0 = Math.round(res_01.data.hourly[0].temp - 273.15);
    const temp_1 = Math.round(res_01.data.hourly[1].temp - 273.15);
    const temp_2 = Math.round(res_01.data.hourly[2].temp - 273.15);
    const temp_3 = Math.round(res_01.data.hourly[3].temp - 273.15);
    const temp_4 = Math.round(res_01.data.hourly[4].temp - 273.15);
    const temp_5 = Math.round(res_01.data.hourly[5].temp - 273.15);
    const temp_6 = Math.round(res_01.data.hourly[6].temp - 273.15);
    const temp_7 = Math.round(res_01.data.hourly[7].temp - 273.15);
    const temp_8 = Math.round(res_01.data.hourly[8].temp - 273.15);
    const temp_9 = Math.round(res_01.data.hourly[9].temp - 273.15);
    const temp_10 = Math.round(res_01.data.hourly[10].temp - 273.15);
    const temp_11 = Math.round(res_01.data.hourly[11].temp - 273.15);
    const temp_12 = Math.round(res_01.data.hourly[12].temp - 273.15);

    //res에서 원하는 값 가져오기
    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const temp_max = Math.round(res.data.main.temp_max - 273.15);
    const temp_min = Math.round(res.data.main.temp_min - 273.15);
    const name = res.data.name;
    const humidity = res.data.main.humidity;
    const feels_like = Math.round(res.data.main.feels_like - 273.15);

    // 주간날씨 날짜
    const day_0 = new Date(res_01.data.daily[0].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_1 = new Date(res_01.data.daily[1].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_2 = new Date(res_01.data.daily[2].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_3 = new Date(res_01.data.daily[3].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_4 = new Date(res_01.data.daily[4].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_5 = new Date(res_01.data.daily[5].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_6 = new Date(res_01.data.daily[6].dt * 1000).toLocaleString("en-US", {weekday: "long"});
    const day_7 = new Date(res_01.data.daily[7].dt * 1000).toLocaleString("en-US", {weekday: "long"});

    // 주간날씨 습도
    const day_humidity_0 = res_01.data.daily[0].humidity;
    const day_humidity_1 = res_01.data.daily[1].humidity;
    const day_humidity_2 = res_01.data.daily[2].humidity;
    const day_humidity_3 = res_01.data.daily[3].humidity;
    const day_humidity_4 = res_01.data.daily[4].humidity;
    const day_humidity_5 = res_01.data.daily[5].humidity;
    const day_humidity_6 = res_01.data.daily[6].humidity;
    const day_humidity_7 = res_01.data.daily[7].humidity;

    // 주간날씨 아이콘
    const day_icon_0 = res_01.data.daily[0].weather[0].icon;
    const day_icon_1 = res_01.data.daily[1].weather[0].icon;
    const day_icon_2 = res_01.data.daily[2].weather[0].icon;
    const day_icon_3 = res_01.data.daily[3].weather[0].icon;
    const day_icon_4 = res_01.data.daily[4].weather[0].icon;
    const day_icon_5 = res_01.data.daily[5].weather[0].icon;
    const day_icon_6 = res_01.data.daily[6].weather[0].icon;
    const day_icon_7 = res_01.data.daily[7].weather[0].icon;

    // 주간날씨 최고기온
    const day_max_0 = Math.round(res_01.data.daily[0].temp.max - 273.15);
    const day_max_1 = Math.round(res_01.data.daily[1].temp.max - 273.15);
    const day_max_2 = Math.round(res_01.data.daily[2].temp.max - 273.15);
    const day_max_3 = Math.round(res_01.data.daily[3].temp.max - 273.15);
    const day_max_4 = Math.round(res_01.data.daily[4].temp.max - 273.15);
    const day_max_5 = Math.round(res_01.data.daily[5].temp.max - 273.15);
    const day_max_6 = Math.round(res_01.data.daily[6].temp.max - 273.15);
    const day_max_7 = Math.round(res_01.data.daily[7].temp.max - 273.15);

    // 주간날씨 최저기온
    const day_min_0 = Math.round(res_01.data.daily[0].temp.min - 273.15);
    const day_min_1 = Math.round(res_01.data.daily[1].temp.min - 273.15);
    const day_min_2 = Math.round(res_01.data.daily[2].temp.min - 273.15);
    const day_min_3 = Math.round(res_01.data.daily[3].temp.min - 273.15);
    const day_min_4 = Math.round(res_01.data.daily[4].temp.min - 273.15);
    const day_min_5 = Math.round(res_01.data.daily[5].temp.min - 273.15);
    const day_min_6 = Math.round(res_01.data.daily[6].temp.min - 273.15);
    const day_min_7 = Math.round(res_01.data.daily[7].temp.min - 273.15);


    //사용자에게 보여주기
    weatherBox.innerHTML = `
      <div class="name">도시: ${name}</div>
      <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
      <div class="main">날씨: ${main}</div>
      <div class="description">설명: ${description}</div>
      <div class="temp_min_to_max">최저/최고 온도: ${temp_min}°C / ${temp_max}°C</div>
      <div class="temp">현재 온도: ${temp}°C</div>
      <div class="temp">체감 온도: ${feels_like}%</div>
      <div class="temp">습도: ${humidity}%</div>
      <div class="time-box">
        <h4>시간대별 날씨</h4>
        <div class="times">
          <div class="time">
            <p>지금</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_0}.png">
            <p>${humidity_0}%</p>
            <p>${temp_0}°C</p>
          </div>
          <div class="time">
            <p>${time_1}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_1}.png">
            <p>${humidity_1}%</p>
            <p>${temp_1}°C</p>
          </div>
          <div class="time">
            <p>${time_2}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_2}.png">
            <p>${humidity_2}%</p>
            <p>${temp_2}°C</p>
          </div>
          <div class="time">
            <p>${time_3}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_3}.png">
            <p>${humidity_3}%</p>
            <p>${temp_3}°C</p>
          </div>
          <div class="time">
            <p>${time_4}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_4}.png">
            <p>${humidity_4}%</p>
            <p>${temp_4}°C</p>
          </div>
          <div class="time">
            <p>${time_5}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_5}.png">
            <p>${humidity_5}%</p>
            <p>${temp_5}°C</p>
          </div>
          <div class="time">
            <p>${time_6}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_6}.png">
            <p>${humidity_6}%</p>
            <p>${temp_6}°C</p>
          </div>
          <div class="time">
            <p>${time_7}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_7}.png">
            <p>${humidity_7}%</p>
            <p>${temp_7}°C</p>
          </div>
          <div class="time">
            <p>${time_8}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_8}.png">
            <p>${humidity_8}%</p>
            <p>${temp_8}°C</p>
          </div>
          <div class="time">
            <p>${time_9}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_9}.png">
            <p>${humidity_9}%</p>
            <p>${temp_9}°C</p>
          </div>
          <div class="time">
            <p>${time_10}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_10}.png">
            <p>${humidity_10}%</p>
            <p>${temp_10}°C</p>
          </div>
          <div class="time">
            <p>${time_11}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_11}.png">
            <p>${humidity_11}%</p>
            <p>${temp_11}°C</p>
          </div>
          <div class="time">
            <p>${time_12}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${icon_12}.png">
            <p>${humidity_12}%</p>
            <p>${temp_12}°C</p>
          </div>
        </div>
      </div>

      <div class="day-box">
        <h4>주간날씨</h4>
        <div class="days">
          <div class="day">
            <p>오늘</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_0}.png">
            <p>${day_humidity_0}%</p>
            <p>최고: ${day_max_0}°C</p>
            <p>최저: ${day_min_0}°C</p>
          </div>
          <div class="day">
            <p>${day_1}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_1}.png">
            <p>${day_humidity_1}%</p>
            <p>최고: ${day_max_1}°C</p>
            <p>최저: ${day_min_1}°C</p>
          </div>
          <div class="day">
            <p>${day_2}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_2}.png">
            <p>${day_humidity_2}%</p>
            <p>최고: ${day_max_2}°C</p>
            <p>최저: ${day_min_2}°C</p>
          </div>
          <div class="day">
            <p>${day_3}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_3}.png">
            <p>${day_humidity_3}%</p>
            <p>최고: ${day_max_3}°C</p>
            <p>최저: ${day_min_3}°C</p>
          </div>
          <div class="day">
            <p>${day_4}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_4}.png">
            <p>${day_humidity_4}%</p>
            <p>최고: ${day_max_4}°C</p>
            <p>최저: ${day_min_4}°C</p>
          </div>
          <div class="day">
            <p>${day_5}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_5}.png">
            <p>${day_humidity_5}%</p>
            <p>최고: ${day_max_5}°C</p>
            <p>최저: ${day_min_5}°C</p>
          </div>
          <div class="day">
            <p>${day_6}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_6}.png">
            <p>${day_humidity_6}%</p>
            <p>최고: ${day_max_6}°C</p>
            <p>최저: ${day_min_6}°C</p>
          </div>
          <div class="day">
            <p>${day_7}</p>
            <img class="icon" src="http://openweathermap.org/img/w/${day_icon_7}.png">
            <p>${day_humidity_7}%</p>
            <p>최고: ${day_max_7}°C</p>
            <p>최저: ${day_min_7}°C</p>
          </div>
        </div>
      </div>

      `;
  } catch (error) {
    console.log(error);
  }
});
