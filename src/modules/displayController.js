import weatherData from './weather';

const tempConverter = (() => {
  // Update to Current Unit
  const updateUnits = (temp, currentUnit) => {
    if (currentUnit === 1) {
      return ((temp - 32) * (5 / 9)).toFixed(2); // return celsius
    }
    return (temp * (9 / 5) + 32).toFixed(2); // return fahrenheit
  };

  const kelToFar = (temp) => ((temp - 273.15) * (9 / 5) + 32).toFixed(2);

  return {
    updateUnits,
    kelToFar,
  };
})();

const displayController = (() => {
  // Display Variables
  const mainTemp = document.querySelector('#span-main-temp');
  const maxTemp = document.querySelector('#span-max-temp');
  const minTemp = document.querySelector('#span-min-temp');
  const cityDate = document.querySelector('#span-date');
  const humidity = document.querySelector('#span-humidity');
  const wind = document.querySelector('#span-wind');
  const cloud = document.querySelector('#span-cloud');
  const feelTemp = document.querySelector('#span-feels');
  const unitTitle = document.querySelector('#span-temp-unit');
  const units = [...document.querySelectorAll('.chosen-unit')];
  const description = document.querySelector('#span-weather-desc');
  const icon = document.querySelector('#img-icon');
  // Input Variables
  const location = document.querySelector('#input-location');
  const unitSelector = document.querySelector('#unit-selector');
  // Module Variables
  let currentUnit = 0; // 0 = F , 1 = C

  // Calculate Date
  const findDate = (utcDate) => {
    const fullDate = new Date(Date(utcDate));
    const day = String(fullDate.getDate());
    const month = String(fullDate.getMonth() + 1);
    const year = String(fullDate.getFullYear());
    return `${day} / ${month} / ${year}`;
  };
  // // //
  // // //

  // Flip Display Unit
  const flipDisplayUnits = () => {
    mainTemp.textContent = tempConverter.updateUnits(mainTemp.textContent, currentUnit);
    maxTemp.textContent = tempConverter.updateUnits(maxTemp.textContent, currentUnit);
    minTemp.textContent = tempConverter.updateUnits(minTemp.textContent, currentUnit);
    feelTemp.textContent = tempConverter.updateUnits(feelTemp.textContent, currentUnit);
  };
  // Flip Unit
  const flipUnit = () => {
    currentUnit = currentUnit === 0 ? (currentUnit = 1) : (currentUnit = 0); // flip
    flipDisplayUnits();
    if (currentUnit === 0) {
      unitTitle.textContent = 'Farenheit';
      units.forEach((unit) => {
        const myUnit = unit;
        myUnit.innerHTML = '&#8457;';
      });
    } else {
      unitTitle.textContent = 'Celsius';
      units.forEach((unit) => {
        const myUnit = unit;
        myUnit.innerHTML = '&#8451;';
      });
    }
  };
  // Update Display
  const updateDisplay = (file) => {
    mainTemp.textContent = tempConverter.kelToFar(file.main.temp);
    maxTemp.textContent = tempConverter.kelToFar(file.main.temp_max);
    minTemp.textContent = tempConverter.kelToFar(file.main.temp_min);
    cityDate.textContent = findDate(file.dt);
    humidity.textContent = file.main.humidity;
    wind.textContent = file.wind.speed;
    cloud.textContent = file.clouds.all;
    feelTemp.textContent = tempConverter.kelToFar(file.main.feels_like);
    icon.src = `http://openweathermap.org/img/wn/${file.weather[0].icon}@2x.png`;
    description.textContent = file.weather[0].description;
    if (currentUnit === 1) {
      flipDisplayUnits();
    }
  };
  // Proof Check Update Request
  const updateDisplayAgree = (file) => {
    if (file !== undefined) {
      updateDisplay(file);
    }
  };

  // CHANGE LOCATION
  const changeLocation = () => {
    let newLocation = location.value;
    newLocation = newLocation.split(',');
    const city = newLocation[0].trim();
    let country = '';
    if (newLocation.length === 2) {
      country = newLocation[1].trim();
    }
    const promiseWeather = weatherData.fetchData(city, country);
    promiseWeather.then((result) => {
      updateDisplayAgree(result);
    });
  };

  // EVENT LISTENERS
  unitSelector.addEventListener('click', flipUnit);
  location.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      changeLocation();
    }
  });

  return {
    updateDisplayAgree,
  };
})();

export default displayController;
