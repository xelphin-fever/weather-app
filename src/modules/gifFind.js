const gifData = (() => {
  // Variables
  // Fetch
  const fetchData = async (description) => {
    try {
      let response = '';
      response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=VV2ZktXnKvbr0LCFPwSwybxfb12cPYz5&s=${description}`,
        { mode: 'cors' }
      );
      if (!response.ok) {
        throw new Error('wrong city or country');
      }
      const myJson = await response.json();
      return myJson;
    } catch {
      alert('Please follow the guidelines and enter a correct city.');
      return undefined;
    }
  };

  return {
    fetchData,
  };
})();

export default gifData;
