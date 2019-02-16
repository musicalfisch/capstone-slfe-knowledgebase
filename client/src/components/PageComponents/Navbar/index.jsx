import React from 'react'

export default function Navbar()
{
  return(
    <div className="navbar">
        <div class="logo">
            <a href="/" class="logo--link">
                <img class="logo--image" alt="" src="https://i.imgur.com/L2kMZ75.png"/>
            </a>
        </div>
        <div class="nav">
            <a href="/browse">Result</a>
            <a href="/about">About</a>
            <a href="/map">Map</a>
            <a href="#"><i class="fa fa-sign-in"></i></a>
        </div>
    </div>
  )
}
