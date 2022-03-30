import * as React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import { slide as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

let Navigation = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <NavLink  to = "/" className={style.item}>Main Page</NavLink>
                <NavLink  to = "/constructor" className={style.item}>Cup Constructor</NavLink>
                <NavLink  to = "/historical" className={style.item}>Historical weather</NavLink>
            </ul>
        </nav>
    );
}


export default Navigation;