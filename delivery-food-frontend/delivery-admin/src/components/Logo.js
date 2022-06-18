import React from 'react';
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <> 
      <img src={logo} alt="logo" style={{maxWidth: '75%'}} />
    </>
  )
}