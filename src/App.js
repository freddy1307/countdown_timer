import React, { useState, useEffect } from 'react';
import Seconds from './components/seconds.js';
import Minutes from './components/minutes.js';
import Hours from './components/hours.js';
import Days from './components/days.js';
import './App.css';

function App() {
  //Aqui se inicializan los valores para los minutos, horas, dias.
  const [stopProcess, setstopProcess] = useState(true);
  const [seconds, setAppSeconds] = useState();
  const [minutes, setMinutes] = useState(10);
  const [hours, setHours] = useState(1);
  const [days, setDays] = useState(0);

  useEffect(() => {
      if(seconds === 59){
        if(minutes === 0){
          setMinutes(59)
          if(hours === 0){
            setHours(23)
            if(days === 0){
              setstopProcess(false)
              setMinutes(0)
              setHours(0)
              setDays(0)
            }else{
              setDays(days-1)
            }
          }else{
            setHours(hours-1)
          }
        }else{
          setMinutes(minutes-1)
        }
      }


  }, [seconds]);

  return (
    <div className="container App-header">
     
          <div className="col-md-12">
            <div className="card-deck ">
            <Days days={days} />

            <Hours hours={hours} />
          
            <Minutes minutes={minutes}/>

            <Seconds setAppSeconds = {setAppSeconds}
                     stopProcess = {stopProcess}
            />
            </div>
            </div>
    </div>
  );
}

export default App;
