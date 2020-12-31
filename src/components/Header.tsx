import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <br />
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h1>🥧 Bits and Pieces</h1>
      </Link>
      <br />
    </div>
  );
}

export default Header;