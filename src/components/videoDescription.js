import React from 'react';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';


const VideoDescription = () =>(
  <div className="row">      
    <div className="col-3 colmargin">
      <div className="card">
        <img className="card-img-top rounded" src={image6} alt={"Bike Hotel Concept"}/>
      </div>      
    </div>
    <div className="col-3 colmargin">
      <div className="card">
        <img className="card-img-top rounded" src={image7} alt={"Bike Hotel Concept"}/>
      </div>      
    </div>
    <div className="col-6 colmargin"> 
      <div >
        <h5 > Video description </h5>
        <p >Mountain bike week program in syöte national park.</p> 
        <p >Mountain bike week program in syöte national park.</p>        
      </div>       
      <div className="about">
        <h5 className="about-title">  About </h5>
        <p className="about-text"> Mountain bike week program in syöte national park. </p>
        <p className="about-text"> Mountain bike week program in syöte national park. </p>
      </div>
    </div>
  </div>
)

export default VideoDescription;