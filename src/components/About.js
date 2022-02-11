import React from "react";
import { NavLink } from "react-router-dom"
const About = () => {
    return (
        <>
          <div className="container mt-5">
              <div className="row">
                  <div className="col-sm-6">
                      <h2>About us</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <NavLink to='/contact' className="btn btn-outline-primary">Contact us</NavLink>
                  </div>
             <div className="col-sm-6">
                 <img src="./images/about.jfif" className="aboutimg"/>
             </div>
              </div>
          </div>  
        </>
    )
}

export default About