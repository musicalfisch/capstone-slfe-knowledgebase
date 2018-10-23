import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEnterprises, getDomains, getSolutions, getByID, getField } from '../../../actions/enterpriseActions';
import propTypes from 'prop-types';
import DataTable2 from './DataTable2';

class CheckBox extends Component{
  constructor(){
    super();
    this.state = {
      array: [],
      field: [],
      field2:[],
      reload: false
    }
  }

  componentWillMount(){
    this.props.getDomains();
    this.props.getSolutions();
    this.props.getByID("5bcf97463a50c440b9d616c8");



    // you can call the api this way too if you need to call the same route more than once. 
    // in this case getField has two fields (FieldName, n) 
    //    where fieldName is the field you want to get 
    //    and n is 0 or 1
    //    if 0, the data will be filtered so that there are no repeats, empty strings, or null
    //    if 1, the api will return every value in the db regardless of empty strings, null, or repeats
    let field2 = this.props.getField("Researcher", 0);
    field2.then((data)=>{
      this.setState({
        field2: data.payload
      })
    });

    let field = this.props.getField("Researcher", 1);
    field.then((data)=>{
      this.setState({
        field: data.payload
      })
    });

    

  }

  render(){
    const { enterprises } = this.props.enterpriseData;
    const { domains } = this.props.enterpriseData;
    const { solutions } = this.props.enterpriseData;
    const { singleSolution } = this.props.enterpriseData;
    //const { field } = this.props.enterpriseData;


    if(!domains.length || !solutions.length || !enterprises.length || !singleSolution.length){
      console.log("data loading\n");
    }
    else{
      console.log("done loading!")
    }

    const bord = {
      border: "2px solid black",
      borderRadius: "5px",
      diplay: "inline-block",
      clear: "both",
      float: "left"
    }

    return(
      <div >
        <div style= {bord}>
            <h1>Primary Domains</h1>
            {domains.map((value, index) =>
              <label key={index}>
                {value}
                <input type="checkbox" />
                <br/>
              </label>
              )}
            <h1>Solution Types</h1>
            {solutions.map((value, index) =>
              <label key={index}>
                {value}
                <input type="checkbox" />
                <br/>
              </label>
              )}
      </div>

      <img src="https://s3-us-west-1.amazonaws.com/slfe-image-storage/img.png" alt="testing this"/>
      <DataTable2 array = {enterprises}/>
      <h1>GetByID: "5b85bed93a50c440b96151f8"</h1>
      <pre>
        {JSON.stringify(singleSolution, null, "\t")}
      </pre>
      <h1>GetField: "Researcher" with n=1</h1>
      <pre>
        {this.state.field.map((r, index) => 
          <label key={index}>
            {r.Researcher}
            <br/>
          </label>
        )}
      </pre>

      <h1>GetField: "Researcher" with n=0</h1>
      <pre>
        {this.state.field2.map((value,index) => 
          <label key={index}>
            {value}
            <br/>
          </label>
        )}
      </pre>

      <h1>
        {/* fieldData is: {this.state.field[0]} */}
      </h1>
    </div>
    )
  }

}

CheckBox.propTypes = {
  getEnterprises: propTypes.func.isRequired,
  getDomains: propTypes.func.isRequired,
  getSolutions: propTypes.func.isRequired,
  getByID: propTypes.func.isRequired,
  getField: propTypes.func.isRequired,
  enterpriseData: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  enterpriseData: state.enterpriseData,
});

export default connect(
  mapStateToProps,
  {getEnterprises, getSolutions, getDomains, getByID, getField}
) (CheckBox);
