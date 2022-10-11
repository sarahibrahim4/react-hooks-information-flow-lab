import React from "react";

function Header({onChange, mode}){
  return  <div>
  <header>
  <h2>Shopster</h2>
  <button onClick={onChange}>{mode ? "Dark" : "Light"} Mode</button>
  </header>
</div>
}

export default Header;