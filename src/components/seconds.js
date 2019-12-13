import React, { useState, useEffect } from 'react';


function Seconds({ setAppSeconds, stopProcess }){

    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
      if(stopProcess){
      setTimeout(() =>{
        if(seconds === 0){
          setSeconds(59);
          setAppSeconds(59);
        }else{
          setSeconds(seconds - 1);
          setAppSeconds(seconds - 1);
        }
      },1000);
      }else{
        setSeconds(0)
      }
    }, [seconds]);

    return(
      <div className="card h-50 text-center">
        <div className="card-body">
          <h5 className="card-title">{ seconds }</h5>
          <h6 className="card-subtitle mb-2 text-muted">Seconds</h6>
        </div>
      </div>
    );

}


export default Seconds;
