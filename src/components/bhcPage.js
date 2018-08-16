import React from 'react';
import FooterLinks from './footerLinks';
import image1 from '../assets/image1.jpg';
import imagenew from '../assets/imagenew.jpg';

const BhcPage =() =>(
  <div className="container-fluid">
    <div className="row">
      <div className="col-12"> 
        <div className="card">
            <img className="card-img-top rounded" src={image1} alt={"Bike Hotel Concept"}/>
          </div> 
        </div>
    </div>
    <div className="row">
      <div className="col-12"> 
        <div className="card">
            <img className="card-img-top rounded" src={imagenew} alt={"Bike Hotel Concept"}/>
          </div> 
        </div>
    </div>
    <div className="row">
      <div className="col-12"> 
        <div className="card">           
            <div className="textPlaceholder">
            <p className="textPlaceholderbold">Pedal.world is your online destination for planning a cycling or biking holiday in Europe.</p><p> We offer an overview and online booking options for bike guide services, rentals and accommodation. We promote all desciplines ranging from road cycling over mountainbiking to e-biking and fat-bikes for beginners to enthusiasts alike. Read user reviews, contact professionals offering services, view booking options in a real time and Pay your holiday online in a trusted environment.</p>           
           </div>            
              
          </div> 
        </div>
    </div>
    <div className="row">
      <div className="col-12"> 
        <div className="card">            
            <div className="heroInterested">
              <div className="heroInterestedBody">
                <h1 className="heroInterestedHeader"> Interested?</h1>
                <h3 className="heroInterestedContent"> Leave us your email address and we will keep you up to date</h3>
              <div className="formCenter">
                <form >
                  <div className="form-row align-items-center">
                    <div >                     
                      <input type="text" className="form-control mb-2 backgroundBlue" id="inlineFormInput" placeholder="your email address" />
                    </div>                                     
                    <div >
                      <button type="submit" className="btn btn-default mb-2 backgroundBlueHeight">SUBSCRIBE</button>
                    </div>
                  </div>
                </form>
                </div>

             </div> 
            </div>
        </div>
    </div>
    </div>
    <div className="row">
      <div className="col-12"> 
        <div className="card">
            
            <div className="textPlaceholderContactUs">
              <h1 className="textPlaceholderContactUsHeader">Professional offerings</h1>
              <p> A professional offer services listed above and interested in featuring on pedal.world?</p> 
                
               <a className="link contactUsNow" href="https://www.facebook.com/pedalworld/">Contact Us</a>        
            </div>
          </div> 
        </div>
    </div>
    <div className="row">
      <div className="col-12"> 
        <div className="card marginMedium">            
            <FooterLinks />
          </div> 
        </div>
    </div>
  </div>
)

export default BhcPage;