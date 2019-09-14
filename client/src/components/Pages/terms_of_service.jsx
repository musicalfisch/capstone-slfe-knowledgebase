import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import Footer from '../PageComponents/Footer'

class terms_of_service extends Component {
  componentDidMount() {
    document.title = "Terms of Service";
  }

  render() {
    return (
      <div >
        Terms of Service...
      </div>
    )
  }
}

export default terms_of_service;
