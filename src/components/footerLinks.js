import React from 'react';

const FooterLinks = () => (
  <div>
    <div className="row ">
        <div className="col-6 colfooter">      
          <ul className="float-left">
            <li className="left-link">Pedal.world is developed by Dataridoo Oy</li>
            <li className="left-link">We are based in Helsinki, Finland </li>
           </ul>
        </div>

        <div className="col-6 colfooter social">
          <ul className="float-right">  
            <li className="left-link">
              <a className="link"  href="https://www.instagram.com/pedal.world.europe/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="left-link">           
                <a className="link" href="https://twitter.com/pedalworld/"> 
                  <i className="fa fa-twitter"></i>
                </a>        
            </li>
            <li className="left-link">
            <a className="link" href="https://www.facebook.com/pedalworld/">
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
            <li className="left-link">
              <a className="link" href="https://www.facebook.com/pedalworld/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>      
    </div>
    
  </div>
)

export default FooterLinks;