import React from 'react';
import { Link } from 'react-router-dom';

const News = ({news}) =>(
  <div>
    <div className="news">
      <p className="news-date"> {news.date} </p>
      <h5 className="news-heder">{news.header}</h5>
      <p className="news-body">{news.content}</p>
      <Link className="readmore" to="/">{news.readmore}</Link><hr />
    </div> 
  </div>
)

export default News;