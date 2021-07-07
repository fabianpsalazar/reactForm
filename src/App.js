import React, {useState} from 'react';

function App(){
  
  const [city, setCity] = useState('London');

  const [data, setData] = useState(null);

  const handleDefault = (e) => {    
    e.preventDefault();
    api(city);
  }

  const api = async function (city) {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=079b76b390ad70c628a14a9a141e5992`);
      const json = await res.json();
      console.log(json.weather)
      setData(json);
    } catch (err) {
      console.error('err', err);
    }
  
  }

  const handleStatus = (e) => setCity(e.target.value);

  return(
    <>
    <form method='GET' >
      <input type='text' onChange={handleStatus} ></input>
      <button type='submit' onClick={handleDefault}>Submit</button>
    </form>

    <h1>{data.weather[0].main}</h1>
    </>
  )


}


export default App;
