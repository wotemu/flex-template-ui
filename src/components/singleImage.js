import React from 'react';

const SingleImage = ({singleImage}) => (
  <div className="col-3-md colmargin3">
    <div className="card">
      <img className="card-img-top rounded" src={singleImage.thumbnail} alt={"Bike Hotel Concept"}/>
    </div> 
  </div> 
)

export default SingleImage;