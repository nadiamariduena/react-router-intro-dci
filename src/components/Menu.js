import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      {/*
      
      -Whenever you are using router, 
      you need to wrap things in such way.
      
      - You will wrap in between the <Link> </Link> what you 
      want to be converted in LINKS  */}
      <Link className="style-link-nav" to="/Home">
        <h3>logo</h3>
      </Link>
      <div className="text">
        {/* --------  FORM related 2 -------- */}
        <form className="form-searchfield">
          <input className="input-text" type="text"  placeholder="hellos"/>

          {/* --- */}

          <input className="input-search" type="submit" value="search" />
        </form>

        {/* --------  FORM -------- */}
      </div>

      <nav>
        <Link className="style-link-nav" to="/product">
          <li>Product</li>
        </Link>

        <Link className="style-link-nav" to="/about">
          <li>About</li>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
