import React from "react";
import { Auth } from "../auth";
import "./login.css"
function LogIn() {
  return (
    <div>
      <Auth />

      {/* make sure to add redirect page after logging out */}
    </div>
  );
}

export default LogIn;
