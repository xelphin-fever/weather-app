const weatherData = (() => {
  // Variables
  // Fetch
  const fetchData = async (city, country = '') => {
    try {
      let response = '';
      if (country === '') {
        response = await fetch(
          ` https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2f6cc1ec688d89ab8cca0c9955d6b931`,
          { mode: 'cors' }
        );
      } else {
        console.log('entered city and country');
        response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=2f6cc1ec688d89ab8cca0c9955d6b931`,
          { mode: 'cors' }
        );
      }
      if (!response.ok) {
        throw new Error('wrong city or country');
      }
      const myJson = await response.json();
      return myJson;
    } catch (error) {
      alert('Please follow the guidelines and enter a correct city.');
      return undefined;
    }
  };

  return {
    fetchData,
  };
})();

export default weatherData;
