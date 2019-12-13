import React from 'react';


function Minutes({minutes}){
    return(
      <div className="card text-center">
        <div className="card-body">
        <h5 className="card-title">{minutes}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Minutes</h6>
        </div>
      </div>
    );

}


export default Minutes;
