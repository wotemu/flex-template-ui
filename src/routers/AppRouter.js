import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Rentals from '../components/rentals';
import GuidedTours from '../components/guidedTours';
import Events from '../components/events';
import About from '../components/about';
import Blog from '../components/blog';
import ContactUs from '../components/about';
import SearchPage from '../components/searchPage';
import LogOut from '../components/logout';
import PageNotFound from '../components/pageNotFound';
import Header from '../components/header';
     


    const AppRouter = () => (
      <BrowserRouter>
        <body>
          <Header />          
            <Switch>       
              <Route path="/" component={Home} exact />
              <Route path="/rentals" component={Rentals} />        
              <Route path="/guided" component={GuidedTours} /> 
              <Route path="/events" component={Events} />        
              <Route path="/about" component={About} /> 
              <Route path="/blog" component={Blog} />        
              <Route path="/search" component={SearchPage} /> 
              <Route path="/contactUs" component={ContactUs} /> 
              <Route path="/logout" component={LogOut} />
              <Route component={PageNotFound} />       
            </Switch>
        </body>    
      </BrowserRouter>
    )

    export default AppRouter;