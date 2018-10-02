import React, { Component } from 'react';
//import { Container, Table, Button } from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getEnterprises} from '../../actions/enterpriseActions';
import PropTypes from 'prop-types';

class enterpriseDataTest extends Component{

  componentDidMount(){
    this.props.getEnterprises();
  }

  render(){
    const {enterprises} = this.props.enterprise;

    return(
      <div>
          <h2>Enterprises Data</h2>
          <table>
            <thead>
              <tr>
                <th ><strong>Name</strong></th>
                <th><strong>Organization</strong></th>
                <th><strong>Basic Description</strong></th>
                <th><strong>Solution Type</strong></th>
              </tr>
            </thead>
            <tbody >
              {enterprises.map(({Name, Organization, Basic_Description_, Solution_Type}) => (
              <tr>
                <td>{Name}</td>
                <td>{Organization}</td>
                <td>{Basic_Description_}</td>
                <td>{Solution_Type}</td>
              </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  }
}

enterpriseDataTest.PropTypes = {
  getEnterprises: PropTypes.func.isRequired,
  enterprise: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  enterprise: state.enterprise
});


export default connect(
  mapStateToProps,
  {getEnterprises}
) (enterpriseDataTest);