import React from 'react'

export default function Navbar()
{
  return(
    <div className="navbar">
        <div class="logo">
            <a href="/" class="logo--link">
                <img class="logo--image" src="https://i.imgur.com/L2kMZ75.png" />
            </a>
        </div>
        <div class="nav">
            <a href="/">Explore</a>
            <a href="/browse">Browse</a>
            <a href="/about">About</a>
            <a href="/partners">Partners</a>
            <a href="#"><i class="fa fa-sign-in"></i></a>
        </div>
    </div>
  )
}
