import React from 'react';
import { Link } from "react-router-dom";
import ModalAbout from './ModalAbout'
const Header = () => {
 
  return (
    <header className="App-header">
      <h5>Interval Training Timer</h5>
      <ModalAbout className="App-link"/>
    </header>
  );
};



export default Header;