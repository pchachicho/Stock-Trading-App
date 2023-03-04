import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
       <div className="container2 fixed-bottom  bg-black" style={{height:"278.9px"}}>
        <div className="row">
          {/* Column1 */}
          <div className="col-left">
            <h1>INVESITRE</h1>
            <ui className="list-unstyled">
              <li>New York, New York</li>
              <li>555 5th Ave </li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col-right">
            <h2>HELPFUL LINKS</h2>
            <ui className="list-unstyled">
              <li>Login</li>
              <li>About</li>
              <li>Account</li>
              <li>Stocks</li>
            </ui>
          </div>
        </div>
        </div>
            <div className="row fixed-bottom ">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} INVESITRE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
        
        {/* <div className="row fixed">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} INVESITRE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div> */}
      </div>
  );
}


export default Footer
