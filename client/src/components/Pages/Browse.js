import React, { Component } from 'react';
import SectionTitle from '../PageComponents/SectionTitle';
import Header from '../PageComponents/Header';
import QueryString from 'query-string';
import styled from 'styled-components';
import ResultItem from '../PageComponents/ResultItem';
import Paginate from '../PageComponents/Paginate';
import PropTypes from 'prop-types';
import { getEnterprises, getField } from '../../actions/enterpriseActions';
import { connect } from 'react-redux';
import CheckBox from 'rc-checkbox';

const Page = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: fit-content;
  height: 100%;
  width: 100%;
`;

const InnerPage = styled.div`
  display: flex;
  align-items: space-around;
  flex-direction: row;
  min-width: fit-content;
  height: 100%;
  width: 100%;
`;

const Section = styled.div `
  display: inline-flex;
  justify-content: space-betwen;
  flex-direction: row;
  margin-top: 24px;
  height: 50px;
`;



 class Browse extends Component {

constructor(props){
  super(props);
  this.state =
  {
    queryParams: null,
    itemList: null,
    solutions: null,
    filteredSolutions: null,
    solutionTypes: null,
    locations: null,
  };

  }
  componentWillMount(){

    const fields = this.props.getField('Primary Domain', '0');
    fields.then((data) => {
      this.setState({
        domains: data.payload,
      });
    })

    const poulars = this.props.getEnterprises();
    poulars.then((data) => {
      this.setState({
        solutions: data.payload,
      });
    }).then(() => {
      this.setState({
        filteredSolutions: this.getItems2()
      })
    })
    const solutionTypes = this.props.getField('Solution Type', '0');
    solutionTypes.then((data) => {
      this.setState({
        solutionTypes: data.payload,
      });
    })
    const locations = this.props.getField('Location', '0');
    locations.then((data) => {
      this.setState({
        locations: data.payload,
      });
    })



  }
  handleCheckBox = (event, checked) => {
    //console.log("name: ", name)
    const x = QueryString.parse(this.props.location.search);
    if(event.target.checked){
      if(this.props.location.search){
        this.props.history.push(`/browse${this.props.location.search}&${event.target.filterType}=${event.target.name}`);
      }
      else{
        this.props.history.push(`/browse?${event.target.filterType}=${event.target.name}`);
      }
    window.location.reload();
    }
    else{
      if(x.length === 1){
        this.props.history.push('/browse');
      }
      else{
        var result = [];

        for (var param in x) {
            console.log(x);
            if(x[param] === event.target.name){
              console.log('excluding: ', x[param]);
            }
            else{
              result[param]= x[param];
            }

        }
        this.props.history.push(`/browse?${QueryString.stringify(result)}`);
      }
      window.location.reload();
    }
  }
  getCheckBoxs = () => {

    if(this.state.domains){
      var checkboxes = [];
      const x = QueryString.parse(this.props.location.search);
      for(var i = 0; i < this.state.domains.length; i++){
        checkboxes.push(
          <div style={{marginBottom: '10px', marginLeft: '15px'}}>
          <CheckBox
            name={this.state.domains[i]}
            onChange={this.handleCheckBox}
            filterType={"primaryDomain"}
            checked={x.primaryDomain === this.state.domains[i] }
            enabled={true}
            >

          </CheckBox>
          {this.state.domains[i]}
        </div>
        );
      }
    }
    if(this.state.solutionTypes){
      var checkboxes2 = [];
      const x = QueryString.parse(this.props.location.search);
      for(var i = 0; i < this.state.solutionTypes.length; i++){
        checkboxes2.push(
          <div style={{marginBottom: '10px', marginLeft: '10px'}}>
          <CheckBox
            name={this.state.solutionTypes[i]}
            onChange={this.handleCheckBox}
            filterType={"solutionType"}
            checked={x.solutionType === this.state.solutionTypes[i] }
            enabled={true}
            >
          </CheckBox>
          <div style={{display: 'block', marginTop: '-20px', marginLeft: '20px'}}>
          {this.state.solutionTypes[i]}
        </div>
        </div>
        );
      }
    }
    if(this.state.solutionTypes){
      var checkboxes2 = [];
      const x = QueryString.parse(this.props.location.search);
      for(var i = 0; i < this.state.solutionTypes.length; i++){
        checkboxes2.push(
          <div style={{marginBottom: '10px', marginLeft: '10px'}}>
          <CheckBox
            name={this.state.solutionTypes[i]}
            onChange={this.handleCheckBox}
            filterType={"solutionType"}
            checked={x.solutionType === this.state.solutionTypes[i] }
            enabled={true}
            >
          </CheckBox>
          <div style={{display: 'block', marginTop: '-20px', marginLeft: '20px'}}>
          {this.state.solutionTypes[i]}
        </div>
        </div>
        );
      }
    }
    if(this.state.locations){
      var checkboxes3 = [];
      const x = QueryString.parse(this.props.location.search);
      for(var i = 0; i < this.state.locations.length; i++){
        checkboxes3.push(
          <div style={{marginBottom: '10px', marginLeft: '10px'}}>
          <CheckBox
            name={this.state.locations[i]}
            onChange={this.handleCheckBox}
            filterType={"location"}
            checked={x.location === this.state.locations[i] }
            enabled={true}
            >
          </CheckBox>
          <div style={{display: 'block', marginTop: '-20px', marginLeft: '20px'}}>
          {this.state.locations[i]}
        </div>
        </div>
        );
      }
    }

    return(
      <div style = {{marginLeft: '5px'}}>
        <div style={{ borderStyle: 'double', overflow:'scroll', height: '250px'}}>
      <h4> Primary Domains </h4>
      {checkboxes}
    </div>

      <div style={{display: 'grid', borderStyle: 'double', overflow:'scroll', height: '250px'}}>
      <h4> Solution Types </h4>
      {checkboxes2}
  </div>
      <div style={{ borderStyle: 'double',  overflow:'scroll', height: '250px'}}>
      <h4> Locations </h4>
      {checkboxes3}
    </div>
    </div>
    )

  }
  getItems2 = () => {

    var multipleFilters = false;

    const x = QueryString.parse(this.props.location.search);

    var filteredData = this.state.solutions;

    if(x.primaryDomain){
      multipleFilters = true;
      if(this.state.solutions){
        for(var i = 0; i < filteredData.length; i++){
          if(filteredData[i]['Primary Domain'] != x.primaryDomain){
            filteredData.splice(i,1);
            i = i-1;
          }
        }
      }
    }
     if(x.solutionType){
       if(multipleFilters){
         if(this.state.solutions){
           for(var i = 0; i < filteredData.length; i++){
             if(filteredData[i]['Solution Type'] != x.solutionType){
               filteredData.splice(i, 1);
               i = i -1;
             }
           }
         }
       }
       else{
         if(this.state.solutions){
           for(var i = 0; i < filteredData.length; i++){
             if(filteredData[i]['Solution Type'] !== x.solutionType){
               filteredData.splice(i, 1);
               i = i -1;
             }
           }
         }
       }
       multipleFilters = true;

    }
     if(x.location){
       if(multipleFilters){
         if(this.state.solutions){
           for(var i = 0; i < filteredData.length; i++){
             if(filteredData[i]['Location'] !== x.location){
               filteredData.splice(i, 1);
               i = i -1;
             }
           }

           console.log("THIRD FILTER: ", filteredData);
         }
       }
       else{
         if(this.state.solutions){
           for(var i = 0; i < filteredData.length; i++){
             if(filteredData[i]['Location'] !== x.location){
               filteredData.splice(i, 1);
               i = i -1;
             }

           }
         }
       }
    }
     if(x.keyWordSearch){
      if(this.state.solutions){
        for(var i = 0; i < this.state.solutions.length; i++){
          console.log( x.keyWordSearch)
          console.log( this.state.solutions[i]['Keyword Descriptors']);
          console.log(this.state.solutions[i]['Keyword Descriptors'].indexOf(x.keyWordSearch));
          if(!this.state.solutions[i]['Keyword Descriptors'].toLowerCase().match(x.keyWordSearch.toLowerCase())  ){
            filteredData.splice(i, 1);
            i = i - 1;
          }

        }
      }
    }

    return this.getItems(filteredData);
  }

  getItems = (filteredData) => {
    const items = [];
    if(filteredData){
      for (var i = 0; i < filteredData.length; i++) {
       const lab = filteredData[i]["Name"];

       let s = filteredData[i]._id;
       console.log("111111111111111111111111111111");
       console.log("???!!!: ", s);
       console.log(filteredData[i]);
      items.push(
        <div
          onClick = { () => { this.props.history.push(`/solution/${s}`)}}
          style={{ marginBottom: '50px', cursor: 'pointer'}}>
         <ResultItem
           text={filteredData[i]["General Description"]}
           label={filteredData[i]["Name"]}
           img={filteredData[i]["mainImage"]}
           location={filteredData[i]["Location"]}
          />
   </div>
     );
       }
    }

    return items;

  }

  render()
  {
    const checkboxes = this.getCheckBoxs();

    return (
      <Page >
      <Header subTitle='RESULTS' />
      <InnerPage>
      <div style={{minWidth: '200px'}}>
        {checkboxes}
      </div>
    { this.state.filteredSolutions &&
       <Paginate todos={this.state.filteredSolutions} />
     }
      <div style={{padding: '250px'}}/>
      <div style={{display: 'flex', flexDirection: 'row'}} >
    </div>
  </InnerPage>
      </Page>
    );
  }
}

Browse.propTypes = {
  getField: PropTypes.func.isRequired,
  getEnterprises: PropTypes.func.isRequired,
  categoryTypes: PropTypes.object,
  enterprise: PropTypes.object.isRequired,
  data: PropTypes.object
};
const mapStateToProps = (state) => ({
  enterprise: state.enterprise,
});
export default connect(
  mapStateToProps,
  {getEnterprises, getField}
) (Browse);
