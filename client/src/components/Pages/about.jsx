import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import Footer from '../PageComponents/Footer'

class about extends Component {
  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <div >
        About
      </div>
    )
  }
}

export default about;
