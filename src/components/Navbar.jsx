import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header>
        <navbar>
          <ul className="nav navBar d-flex flex-row justify-content-between md-2 align-items-center bg-danger">
            <ul className="nav d-flex flex-row align-items-center">
              <li>
              <img src="LogoMain.png" className="responsive" alt="logo"></img>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html"><h1 className="text-dark">White Horse comics</h1></a>
              </li>
            </ul>
            <ul className="nav d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link text-dark" href="index.html"><h3>Comics</h3></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="index.html"><h3>Manga</h3></a>
              </li>
              <CartWidget />
            </ul>
          </ul>
        </navbar>
    </header>
  )
}

export default Navbar;
