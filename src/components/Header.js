import React from "react";

function Header({onDarkModeClick, mode}){
  return  <div>
  <header>
  <h2>Shopster</h2>
  <button onClick={onDarkModeClick}>{mode ? "Dark" : "Light"} Mode</button>
  </header>
</div>
}

export default Header;