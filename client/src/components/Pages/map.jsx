import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEnterprises } from '../../actions/enterpriseActions';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import markerImg from 'leaflet/dist/images/marker-icon.png';
// import "leaflet/plugin/Control.OSMGeocoder.js";
// import "leaflet/plugin/Control.OSMGeocoder.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/leaflet.markercluster.js";


class Map extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	width: this.props.width || '750px',
    	height: this.props.height || '750px',
      map: null,
      tileLayer: null,
      icon: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      // numEntrances: null,
      markers: [],
			reload: false
    };
  }
	

  componentWillMount() {
  	this.props.getEnterprises();
  }
  componentDidMount() {
  	const { enterprises } = this.props.enterpriseData;
		// var datatest = enterprises;
  	
		let config = {};
		config.params = {
		  center: [33.4144139,	-111.90945],
		  zoomControl: false,
		  zoom: 12,
		  maxZoom: 19,
		  minZoom: 0,
		  scrollwheel: false,
		  legends: true,
		  infoControl: false,
		  attributionControl: true
		};
		config.tileLayer = {
		  uri: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
		  labels: {
	      url: 'http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
			},
		  params: {
		    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 20,
		    minZoom: 0,
		    id: '',
		    accessToken: ''
			}
		};
  	if (!this.state.map) {
  		let map = L.map('map', config.params);//.fitBounds(maxBounds);

			// Search Bar

			// let options = {
		    // collapsed: true, /* Whether its collapsed or not */
		    // position: 'topright', /* The position of the control */
		    // text: 'Locate', /* The text of the submit button */
		    // placeholder: '', /* The text of the search input placeholder */
		    // bounds: null, /* a L.LatLngBounds object to limit the results to */
		    // email: null, /* an email string with a contact to provide to Nominatim. Useful if you are doing lots of queries */
		    // callback: function (results) {
		    // 	if (typeof results[0] !== undefined) {
						// var bbox = results[0].boundingbox,
						// 	first = new L.LatLng(bbox[0], bbox[2]),
						// 	second = new L.LatLng(bbox[1], bbox[3]),
						// 	bounds = new L.LatLngBounds([first, second]);
			// 			this._map.fitBounds(bounds, {maxZoom: 16});

		 //    	}
		 //    }
			// };
			// var osmGeocoder = new L.Control.OSMGeocoder(options);
			// map.addControl(osmGeocoder);

	    L.control.zoom({ position: "bottomleft"}).addTo(map);
	    L.control.scale({ position: "bottomleft"}).addTo(map);

	    // a TileLayer is used as the "basemap"
	    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
			this.setState({ map: map, tileLayer: tileLayer });

			this.state.icon = L.icon({
			    iconUrl: markerImg
			});
			// var latlongs = [[33.4144139,	-111.90945]];
			// for (let i = 0; i < latlongs.length; i++) {

  	// 		L.marker(latlongs[i], {icon: this.state.icon}).addTo(map);
  	// 	}
			
  	}
  }
  render() {
  	const { enterprises } = this.props.enterpriseData;
  	if (enterprises.length) {
	  	var dataArray = enterprises.map((enterprise) =>
				[enterprise.Lattitude, enterprise.Longitude, enterprise.Name]
			);
			var markers = L.markerClusterGroup({showCoverageOnHover: false});
			for (let i = 0; i < dataArray.length; i++) {
				let enterprise = dataArray[i];
				let marker = L.marker([enterprise[0], enterprise[1]], {icon: this.state.icon, title: enterprise[2], riseOnHover: true});
				marker.on('click', function(ev) {
					console.log("enterprise: " + enterprise[2]);
				});
				marker.bindPopup('<p>(Add link to solution)</p>').openPopup();
				markers.addLayer(marker);
				// L.marker(latlongs[i], {icon: this.state.icon}).addTo(this.state.map);
			}
			this.state.map.addLayer(markers)
			this.state.map.fitBounds([
		    [5.499550, -167.276413], //Southwest
		    [53.162102, -52.233040]  //Northeast
			]);
			this.state.map.setZoom(3);
		}
    return (
	    <div id="map" style={{ marginTop: '20px', height: this.state.height, width: this.state.width }}>  
      </div>
    );
  }
}

Map.propTypes = {
  getEnterprises: propTypes.func.isRequired,
  enterpriseData: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  enterpriseData: state.enterpriseData,
});

export default connect(
  mapStateToProps,
  {getEnterprises}
) (Map);