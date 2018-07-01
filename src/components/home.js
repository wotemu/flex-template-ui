
import React from 'react';
import BhcPage from './bhcPage';
import FooterLinks from './footerLinks';
import NewsFeed from './newsFeed';
import PromotionsPage from './promotionsPage';
import VideoDescription from './videoDescription';
import ImageCollection from './imageCollection';


const Home = (props) => (      
  <div role="main" class="container-fluid">
    <BhcPage />
    <PromotionsPage />
    <ImageCollection />
    <VideoDescription />
    <NewsFeed />
    <FooterLinks /> 
  </div>            
  )

  export default Home;