import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import RegisterForm from '../PageComponents/RegisterForm'
import Footer from '../PageComponents/Footer'

class register extends Component {
  componentDidMount() {
    document.title = "Register";
  }

  render() {
    return (
      <div >
      	<RegisterForm />
      </div>
    )
  }
}

export default register;
