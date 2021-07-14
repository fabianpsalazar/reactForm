import React, {useState} from 'react';

function App(){

  const [city, setCity] = useState('London');

  const [weather, setWeather] = useState({
    main : '',
    description : '',
  });

  const api = function(e) {
    e.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=756e1ed2fe991872de14ad51f17caea1`)
    .then(data => data.json())
    .then(data => setWeather({
      main : data.weather[0].main,
      description : data.weather[0].description,
    }))
    console.log(weather)
  }

  return(
    <>
      <h1>Hello World</h1>
      <form method='GET' onSubmit={api}>
        <input type='text' value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>

      <table>
        <tr>{weather.main}</tr>
        <tr>{weather.description}</tr>
      </table>

    </>
  )
}

export default App;