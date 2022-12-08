import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                <Link className="nav-link active" aria-current="page" to={"/"}><h1 className="text-dark">White Horse comics</h1></Link>
              </li>
            </ul>
            <ul className="nav d-flex flex-row">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="page" to={"/category/Marvel"}><h3>Marvel</h3></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="page" to={"/category/DcComics"}><h3>DcComics</h3></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="page" to={"/category/Manga"}><h3>Manga</h3></NavLink>
              </li>
              <CartWidget />
            </ul>
          </ul>
        </navbar>
    </header>
  )
}

export default Navbar;
