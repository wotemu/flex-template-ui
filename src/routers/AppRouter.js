import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Header from '../components/header';
     


    const AppRouter = () => (
      <BrowserRouter>
        <body>
          <Header />          
            <Switch>       
              <Route path="/" component={Home} exact />
              
            </Switch>
        </body>    
      </BrowserRouter>
    )

    export default AppRouter;