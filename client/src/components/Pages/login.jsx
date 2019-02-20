import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import Footer from '../PageComponents/Footer'

class login extends Component {
  componentDidMount() {
    document.title = "Login";
  }

  render() {
    return (
      <div >
        <Navbar />
        Start of login page
      <Footer />
      </div>
    )
  }
}

export default login;
