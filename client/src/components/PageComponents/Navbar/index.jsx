import React from 'react';

export default function Navbar()
{
  return(
    <div className="navbar">
        <div class="logo">
            <a href="#" class="logo--link">
                <img class="logo--image" src="https://via.placeholder.com/150x50/eeeeee/333333/?text=Logo" />
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
