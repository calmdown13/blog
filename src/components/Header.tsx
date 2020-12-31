import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <h1 style={{}}>🥧 Bits and Pieces 🥧</h1>
        </Link>
        <a href="https://github.com/calmdown13" style={{ marginLeft: "auto" }}>
          <img src="/githubLogo.png" width="32px" height="32px" alt="" ></img>
        </a>
      </div>
      <br style={{ clear: "both" }} />
      <hr style={{ borderTop: "dashed 5px" }} />
    </div>
  );
}

export default Header;