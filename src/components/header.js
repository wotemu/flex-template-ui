import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/log.jpg';

const Header = () =>(         
  <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">         
    <NavLink to="/" className="navbar-brand" activeClassName="is-active" exact={true}>
      <img src={logo} alt={"Logo"}/>
    </NavLink>
      <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
    </nav>  
)

export default Header;