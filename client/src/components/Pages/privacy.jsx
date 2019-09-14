import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import Footer from '../PageComponents/Footer'

class privacy extends Component {
  componentDidMount() {
    document.title = "Privacy Policy";
  }

  render() {
    return (
      <div >
        Privacy Policy
      </div>
    )
  }
}

export default privacy;
