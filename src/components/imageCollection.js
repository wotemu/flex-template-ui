import React from 'react';


import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

import image8 from '../assets/image8.jpg';
/* 
import ImageList from './imageList';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
const imagesList = [
  {
    _id:1,
    thumbnail:image4
  },
  {
    _id:2,
    thumbnail:image5
  },
  {
    _id:3,
    thumbnail:image6
  },
  {
    _id:4,
    thumbnail:image7
  }
]
 */

const ImageCollection = () =>(
  <div className="container-fluid"> 
  <div className="row">
    {/* <ImageList imagesList={imagesList}  /> */}

    <div className="col-3 colmargin">
    <div className="card">
      <img className="card-img-top rounded" src={image4} alt={"Bike Hotel Concept"}/>
    </div> 
  </div>
  <div className="col-3 colmargin">
    <div className="card">
      <img className="card-img-top rounded" src={image5} alt={"Bike Hotel Concept"}/>
    </div> 
  </div>
    <div className="col-6 colmargin">
      <div className="card">
        <img className="card-img-top rounded" src={image8} alt={"Bike Hotel Concept"}/>
      </div>  
    </div>
  </div>
  </div>
)

export default ImageCollection;