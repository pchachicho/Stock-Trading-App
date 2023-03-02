import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
       <div className="container">
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
              <li>Portfolio</li>
            </ui>
          </div>
        </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} INVESITRE | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
  );
}


export default Footer
