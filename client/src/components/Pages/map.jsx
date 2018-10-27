import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SectionTitle from '../PageComponents/SectionTitle';
import Header from '../PageComponents/Header';
import SearchBar from '../PageComponents/SearchBar';
import styled from 'styled-components';
import Search from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet/plugin/Control.OSMGeocoder.js";
import "leaflet/plugin/Control.OSMGeocoder.css";


const Page = styled.div`
  display: inline-flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  background-color: #CCCCCC;
`;

// class SearchBox extends Component {
//   static propTypes = {
//     placeholder: PropTypes.string,
//     onPlacesChanged: PropTypes.func
//   }
//   render() {
//     return <input ref="input" {...this.props} type="text"/>;
//   }
//   onPlacesChanged = () => {
//     if (this.props.onPlacesChanged) {
//       this.props.onPlacesChanged(this.searchBox.getPlaces());
//     }
//   }
//   componentDidMount() {
//     var input = ReactDOM.findDOMNode(this.refs.input);
//     this.searchBox = new google.maps.places.SearchBox(input);
//     this.searchBox.addListener('places_changed', this.onPlacesChanged);
//   }
//   componentWillUnmount() {
//     // https://developers.google.com/maps/documentation/javascript/events#removing
//     google.maps.event.clearInstanceListeners(this.searchBox);
//   }
// }

class MapsInput extends Component {
  constructor(props) {
    super(props)
    this.state = {userInput: ""}
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    })
    console.log("YOOO: " + e.target.value)
  }
  render() {
    return (
      <div>
        <h1>{this.state.userInput}</h1>
      	<MuiThemeProvider>
        <Search onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')} />
        </MuiThemeProvider>
      </div>
    );
  }
}

class Map extends Component {
	static defaultProps = {
		center: {lat: 33.33, lng: -111.9},
		zoom: 11
	}

	constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      numEntrances: null
    };
  }
	
  render() {
    return (

    	<div style={{display: 'flex', width:'100%'}} >
	      <Page>
	      <Header subTitle='MAP'/>
		    <div id="map" style={{ marginTop: '20px', height: '750px', width: '750px' }}>
	        
	      </div>
	      <div style={{padding:'250px'}}/>
		    </Page>
		  </div>

    );
  }
  componentDidMount() {

  	
  	function long2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }
		 function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }

		let config = {};
		config.params = {
		  center: [33.4278, -111.9577],
		  zoomControl: false,
		  zoom: 15,
		  maxZoom: 19,
		  minZoom: 11,
		  scrollwheel: false,
		  legends: true,
		  infoControl: false,
		  attributionControl: true
		};
		config.tileLayer = {
		  // uri: 'https://api.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.jpg?style=mapbox://styles/mapbox/light-v9@00&access_token=pk.eyJ1IjoiZXdwZXRlcnMiLCJhIjoiY2puYXp5b3RpMDIxejNzbzAyOGp0YjF6biJ9.0Idp7yuJ13dGqWO5YavpXg',
		  uri: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
		  labels: {
	      url: 'http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
			},
		  params: {
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 20,
		    id: '',
		    accessToken: ''
		    // id: 'mapbox.streets',
		    // accessToken: 'pk.eyJ1IjoiZXdwZXRlcnMiLCJhIjoiY2puYXp5b3RpMDIxejNzbzAyOGp0YjF6biJ9.0Idp7yuJ13dGqWO5YavpXg'
			}
		};
  	if (!this.state.map) {
  		let map = L.map('map', config.params);
			let options = {
		    collapsed: true, /* Whether its collapsed or not */
		    position: 'topright', /* The position of the control */
		    text: 'Locate', /* The text of the submit button */
		    placeholder: '', /* The text of the search input placeholder */
		    bounds: null, /* a L.LatLngBounds object to limit the results to */
		    email: null, /* an email string with a contact to provide to Nominatim. Useful if you are doing lots of queries */
		    callback: function (results) {
		    	if (typeof results[0] !== undefined) {
						var bbox = results[0].boundingbox,
							first = new L.LatLng(bbox[0], bbox[2]),
							second = new L.LatLng(bbox[1], bbox[3]),
							bounds = new L.LatLngBounds([first, second]);
						this._map.fitBounds(bounds, {maxZoom: 16});

		    	}
		    }
			};

			var osmGeocoder = new L.Control.OSMGeocoder(options);
			map.addControl(osmGeocoder);


	    L.control.zoom({ position: "bottomleft"}).addTo(map);
	    L.control.scale({ position: "bottomleft"}).addTo(map);

	    // a TileLayer is used as the "basemap"
	    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

	    // set our state to include the tile layer
			this.setState({ map, tileLayer });



			// mapboxgl.accessToken = 'pk.eyJ1IjoiZXdwZXRlcnMiLCJhIjoiY2puYXp5b3RpMDIxejNzbzAyOGp0YjF6biJ9.0Idp7yuJ13dGqWO5YavpXg';
			// var map = new mapboxgl.Map({
			//     container: 'map', // container id
			//     style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
			//     center: [-111.9, 33.33], // starting position [lng, lat]
			//     zoom: 9 // starting zoom
			// });
  	}
  // 	L.tileLayer('https://api.mapbox.com/v4/mapbox.mapbox-streets-v7/13/' + long2tile(-111.9, 13) + '/' + lat2tile(33.33, 13) + '.png?access_token=pk.eyJ1IjoiZXdwZXRlcnMiLCJhIjoiY2puYXp5b3RpMDIxejNzbzAyOGp0YjF6biJ9.0Idp7yuJ13dGqWO5YavpXg', {
		//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		//     maxZoom: 18,
		//     id: 'mapbox.streets',
		//     accessToken: 'pk.eyJ1IjoiZXdwZXRlcnMiLCJhIjoiY2puYXp5b3RpMDIxejNzbzAyOGp0YjF6biJ9.0Idp7yuJ13dGqWO5YavpXg'
		// }).addTo(mymap);
  	// var map = L.map('map').setView([51.505, -0.09], 13);
  }
}

export default Map;
