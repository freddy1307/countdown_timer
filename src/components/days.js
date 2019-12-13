import React from 'react';


function Days({days}){
    return(
      <div className="card text-center ml-5">
        <div className="card-body">
          <h5 className="card-title">{days}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Days</h6>
        </div>
      </div>
    );

}


export default Days;
