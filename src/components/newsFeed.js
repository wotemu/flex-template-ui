import React from 'react';
import NewsList from './newsList';

import mapImage from '../assets/mapImage.jpg';

const newsList = [
  {
    _id:1,
    date:"June 30, 2018",
    header:"News Header",
    content: "News content News content News content",
    readmore: "Read more->"
  },
  {
    _id:1,
    date:"June 31, 2018",
    header:"News Header goes here",
    content: "News content goes here. News content goes here.",
    readmore: "Read more->"
  }
]

const NewsFeed = () => (
  <div className="container-fluid "> 
  <div className="row">
      <div className="col-6 colmargin">
          <h5 className="news-title">News</h5>
          <NewsList newsList={newsList} />                   
      </div>
      <div className="col-6 colmargin">            
        <img src={mapImage} alt={"mapImage"}/>
      </div>
    </div>
    </div>
)

export default NewsFeed;