import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#ffffff'
  },
  bmMenuWrap: {
    position: 'fixed',
    left: '0px',
    top: '0px',
    height: '100%',
    width: '290px'
  },
  bmMenu: {
    background: '#323330',
    display: 'flex',
    padding: '2.5em 1.5em 0',
    fontSize: '1.5em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItem: {
    textDecoration: 'none',
    marginBottom: '30px',
    color: '#d1d1d1'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


const Burger = () => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  return (
    <Menu styles={styles}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}>

      <NavLink to="/" onClick={closeSideBar}>Main Page</NavLink>
      <NavLink to="/constructor" onClick={closeSideBar}>Cup Constructor</NavLink>
      <NavLink to="/historical" onClick={closeSideBar}>Historical weather</NavLink>
    </Menu>
  );
}


export default Burger; 