import React, { Component } from 'react';
import Navbar from '../PageComponents/Navbar';
import Footer from '../PageComponents/Footer';
import Summary from '../PageComponents/SolutionSummary';
import Details from '../PageComponents/SolutionDetail';

export default function result() {
    return (
      <div class="result-page">
        <Navbar />
        <Summary />
        <Details />
        <Footer />
      </div>
    );
}
