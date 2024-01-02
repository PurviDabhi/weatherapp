
import { useState } from 'react';
import './App.css';
import Hour from './Component/Hour';
import Nav from './Component/Nav';
import Weeek from './Component/Weeek';
// import { LinearGradient } from 'react-text-gradients'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Icon } from '@iconify/react';

function App() {
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [view, setView] = useState()
  const handleChange = (e) => {
    setCity(e.target.value)
  }
  // const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`
  // const newdate = current.setDate(date + 7)
  

  const getWeather = async () => {
    // console.log("hello");
    const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=7R3QRL9WVH9RG7XYAMJ34458J`)
    console.log(data);
    if (data.status === 200) {
      const parseData = await data.json()
      console.log(parseData);
      setWeather(parseData)
      toast.success("Data Found")
      
    }
    else {
      console.log("invalid ");
      toast.error("Invalid cityName")
    }

    
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container mt-2 mb-2 rounded-5 text-dark" style={{ background: "rgba(235, 238, 247, 0.5)" ,width:'95vw'}}>
        <Nav getWeather={getWeather} handleChange={handleChange} />
        {weather && <>
          <div className="d-flex flex-md-row flex-column justify-content-between pt-2 px-2 mt-3 mt-md-0">
            <div className='ms-2'>
              <h6><i className='bi bi-geo-alt-fill'></i> {weather.resolvedAddress}</h6>
              <h4 className='fw-bold'>
              
                  Today's Weather Forecast
                
              </h4>
              <h6>Last Updated : {weather.currentConditions.datetime} </h6>

              <h1 className='bolder'>{((weather.currentConditions.temp - 32) / 1.8).toString().slice(0, 5)}℃
              
              </h1>
              <h6>Feels {((weather.currentConditions.feelslike - 32) / 1.8).toString().slice(0, 5)}<sup>°c</sup></h6>
            </div>
            <div className='d-flex gap-3 mx-auto mx-md-0'>
              <div className='display-1'>
                <img src={`icons/${weather.currentConditions.icon}.png`} alt='' />
              </div>
              <div>
                <h3>
                  {weather.currentConditions.conditions
}
                </h3>
                <h6><i className='bi bi-cloud-snow'></i>Precipition : {weather.currentConditions.precip
                }%</h6>
                <h6><i className='bi bi-droplet'></i>Humidity : {weather.currentConditions.humidity
                }%</h6>
                <h6><i className='bi bi-wind'></i>Wind : {weather.currentConditions.windspeed
                }km/h</h6>
                <h6><i class="bi bi-sunrise" ></i>  Sunrise : {weather.currentConditions.sunrise}</h6>
                <h6><i class="bi bi-sunset" ></i> Sunset : {weather.currentConditions.sunset}</h6>
              </div>

            </div>
          </div>
          <div className='mt-3 ms-2 mb-0 rounded-3'>
            <div className="d-flex overflow-x-auto justify-content-md-center justify-content-start gap-4 ms-4">
              <h6 className='flex-shrink-0' onClick={()=>{setView("temp")}}><i className='bi bi-thermometer-half'></i> Temperature</h6>
              <h6 className='flex-shrink-0' onClick={()=>{setView("windspeed")}}><i className='bi bi-wind'></i> Wind</h6>
              <h6 className='flex-shrink-0' onClick={()=>{setView("precip")}}><i className='bi bi-cloud-snow'></i> Precipition</h6>
              <h6 className='flex-shrink-0' onClick={()=>{setView("humidity")}}><i className='bi bi-droplet'></i> Humidity</h6>
            </div>
            <div className="d-flex ms-3 gap-3 justify-content-start overflow-x-auto mx-auto mt-3">
              {
                weather.days[0].hours.map((element, index) => {

                  return <Hour view={view} hours={element} key={index} />
                })
              }


            </div>
          </div>
          <div className="pt-3" >
            <h3 className='ms-3 fw-bold'>Weekly Forecast</h3>
            <div className="d-flex gap-3 mt-4 overflow-x-auto justify-content-start ms-0 ms-md-5 " >
              {
                weather.days.map((element, index) => {
                  if (index > 6) {
                    return ""
                  }
                  return <Weeek data={element} />

                })
              }


            </div>
          </div>
        </>}
      </div>
    </>
  );
}

export default App;

// {(weather.main.temp - 273.15).toString().slice(0,5)}°C<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt=''/>