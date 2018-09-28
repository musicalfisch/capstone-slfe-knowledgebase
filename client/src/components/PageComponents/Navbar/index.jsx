import React from 'react';
import image from '../Navbar/slfe-logo.png';

export default function Navbar()
{
  return(
    <div className="navbar">
        <div class="logo">
            <a href="#" class="logo--link">
                <img class="logo--image" src="https://i.imgur.com/L2kMZ75.png" />
            </a>
        </div>
        <div class="nav">
            <a href="/Explore">Explore</a>
            <a href="/About">About</a>
            <a href="/Partners">Partners</a>
            <a href="#"><i class="fa fa-sign-in"></i></a>
        </div>
    </div>
  )
};
