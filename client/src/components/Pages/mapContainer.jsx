import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import SectionTitle from '../PageComponents/SectionTitle';
import Header from '../PageComponents/Header';
import styled from 'styled-components';
import Map from './map.jsx'

const Page = styled.div`
  display: inline-flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  background-color: #CCCCCC;
`;

class mapContainer extends Component {

	constructor() {
		super()
	}
	render() {
    return (
    	<div style={{display: 'flex', width:'100%'}} >
	      <Page>
	      <Header subTitle='MAP'/>
		    <Map width={'1000px'} height={'300px'}/>
	      <div style={{padding:'250px'}}/>
		    </Page>
		  </div>

    );
  }
}

export default mapContainer;