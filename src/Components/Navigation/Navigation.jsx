import * as React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import Burger from "./Burger/Burger";

import GoogleAPI from "../GoogleAPI/GoogleAPI";



let Navigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.burger}>
        <Burger />
      </div>
      <div className={style.api}>
        <GoogleAPI />
      </div>
      <ul className={style.list}>
        <NavLink to="/" className={style.item}>Main Page</NavLink>
        <NavLink to="/constructor" className={style.item}>Cup Constructor</NavLink>
        <NavLink to="/historical" className={style.item}>Historical weather</NavLink>
      </ul>
    </nav>
  );
}


export default Navigation;