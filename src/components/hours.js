import React from 'react';


function Hours({hours}){
    return(
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{hours}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Hours</h6>
        </div>
      </div>
    );

}


export default Hours;
