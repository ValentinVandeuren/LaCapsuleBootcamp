import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {
  const [isLogin, setIsLogin] = useState(true)

  var handleClick = () => {
    setIsLogin(!isLogin);
  }

  return (
    <nav style={{ backgroundColor: "#182C61" }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link style={{ color: "#FFFFFF" }} to="/">Home</Link>
        </li>
        <li>
          <Link style={{ color: "#FFFFFF" }} to="/about">About</Link>
        </li>
        <li style={{ color: "#FFF" }}>
          {isLogin ? 'Hello John ' : null}
          <button style={{ padding: '6px', border: '0px', backgroundColor: "#25CCF7" }} onClick={() => handleClick()}> <Link to={isLogin ? "/": ""}> {isLogin ? 'Logout' : 'Login'}</Link></button>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;