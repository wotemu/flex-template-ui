import React from 'react';
import PromotionList from './promotionList';
import Ratings from './ratings';

import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';


const promItems = [
  {
    _id:1,
    thumbnail: image2,
    title:"Special weekpackage",
    detail:"Mountain bike week program in syöte national park.",
    price:"€1350 p.p",
    ratings:<Ratings />
  },
  {
    _id:2,
    thumbnail: image3,
    title:"BeNeLux package",
    detail:"Mountain bike week program in syöte national park.",
    price:"€1350 p.p",
    ratings:<Ratings />
  }
]

const PromotionsPage = () => (
  <div className=" container-fluid ">
  <div className="promotions"> 
    <h1 className="promotion-title">Promotions title</h1>          
      <PromotionList promItems={promItems} />  
      </div>  
  </div>  
)

export default PromotionsPage;