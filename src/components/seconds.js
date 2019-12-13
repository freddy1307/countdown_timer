import React, { useState, useEffect } from 'react';


function Seconds(){

    const [minute, setMinute] = useState(59);

    useEffect(() => {
      setTimeout(() =>{
        if(minute === 0){
          setMinute(59)
        }else{
          setMinute(minute - 1)
        }

      },100);
    }, [minute]);

    return(
      <div className="card w-50 text-center" style={{width: "10rem;"}}>
        <div className="card-body">
          <h5 className="card-title">{ minute }</h5>
          <h6 className="card-subtitle mb-2 text-muted">Seconds</h6>
        </div>
      </div>
    );

}


export default Seconds;
