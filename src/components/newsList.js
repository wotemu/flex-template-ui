import React from 'react';
import News from './news';

const NewsList = ({newsList}) =>(
  <div className="col-5 colmargin6">
    {newsList.map(news => <News news={news} key={news._id} />)}
  </div>
)

export default NewsList;