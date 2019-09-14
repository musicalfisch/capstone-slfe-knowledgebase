import React, { Component } from 'react';
import Navbar from '../PageComponents/Navbar';
import Footer from '../PageComponents/Footer';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getCurrentProfile} from '../../actions/profileActions';

class dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default connect(null, { getCurrentProfile }) (dashboard);