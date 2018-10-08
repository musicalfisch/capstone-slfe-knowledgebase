import React, { Component } from 'react';
//import { Container, Table, Button } from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getEnterprises} from '../../actions/enterpriseActions';
import propTypes from 'prop-types';
import CheckBox from '../PageComponents/TestData/CheckBox';

class DataTest extends Component{
  constructor(){
    super();
    this.state = {
      array: [],
      reload: false
    }
  }

  componentWillMount(){
    this.props.getEnterprises();
  }


  filterSingle(dataArray, criteria){
    return dataArray.filter(function(obj) {
      return Object.keys(criteria).every(function(i) {
        return obj[i] === criteria[i];
    });
   });
  }

  filterOp(dataArray, criteria) {
    
    if(criteria.constructor === Array){
      let filteredData = dataArray;

      for(var i = 0; i < criteria.length; i++){
        filteredData = this.filterSingle(filteredData, criteria[i]);
      }
      return filteredData;
    }
    else{
      return this.filterSingle(dataArray, criteria);
    }
  }

  changeClicked(arr, filterOpt){
    let x = this.filterOp(arr, filterOpt);
    console.log("filtered data result is: ", x);  
  }

  render(){
    const { enterprises } = this.props.enterpriseData;

    if(!enterprises.length){
      console.log("data is loading")
      return(<div><h1 style= {{position: 'absolute', top: '50%', left: '50%'}}>Data is loading</h1></div>)
    }
    else{
      //console.log("data done loading!\nEnterprise holds:", enterprises)
      this.dataHolder = enterprises;
      console.log("dataHolder holds:\n",this.dataHolder); 
    }
      
    let filtArr = [];
    var filt1 = '{"Solution_Type": "food forest"}';
    var filt2 = '{"Primary_Domain": "Services"}';
    
    var x = JSON.parse(filt1);
    var y = JSON.parse(filt2);

    filtArr.push(x);
    filtArr.push(y);

    return(
      <div>
        {/* <CheckboxFilters/> */}
        {/* <DataTable2 array = {this.dataHolder}/> */}
        <CheckBox/>
        <button onClick={() => this.changeClicked(this.dataHolder,filtArr)}>Change the data</button>
      </div>
    )
  }

}

DataTest.propTypes = {
  getEnterprises: propTypes.func.isRequired,
  enterpriseData: propTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  enterpriseData: state.enterpriseData,
});

export default connect(
  mapStateToProps,
  {getEnterprises}
) (DataTest);


/*
Have to filter by an array

category type
solution type



*/
