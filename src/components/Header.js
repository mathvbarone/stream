import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <header className="ui sendary pointing menu">
      <Link to="/" className="item">
        Stream
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </header>
  );
};

export default Header;
