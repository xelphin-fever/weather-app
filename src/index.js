import './styles/style.css';
import './styles/toggle.css';
import weatherData from './modules/weather';
import displayController from './modules/displayController';

const city = 'London';
console.log('Updated');
const promiseWeather = weatherData.fetchData(city);
promiseWeather.then((result) => {
  console.log('console JSON: ', result);
  displayController.updateDisplayAgree(result);
});
