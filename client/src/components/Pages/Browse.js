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
  };

  }
  componentWillMount(){

    const fields = this.props.getField('Primary Domain', '0');
    fields.then((data) => {
      console.log("???????!");
      console.log('GET FIELD: ', data);
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


  }
  handleCheckBox = (event, checked) => {
    console.log("EVENT: ", event)
    console.log("CHECKED: ", checked)
    //console.log("name: ", name)
    if(event.target.checked){

    this.props.history.push(`/browse?${event.target.filterType}=${event.target.name}`);
    window.location.reload();
    }
    else{
      this.props.history.push('/browse');
      window.location.reload();
    }
  }
  getCheckBoxs = () => {

    if(this.state.domains){
      var checkboxes = [];
      const x = QueryString.parse(this.props.location.search);
      for(var i = 0; i < this.state.domains.length; i++){
        checkboxes.push(
          <div style={{marginLeft: '15px'}}>
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
      return(
        <div>
        <h4> Primary Domains </h4>
        {checkboxes}
        </div>
      )
      console.log('&&&HERE&&&', this.state.domains);

    }

  }
  getItems2 = () => {

    const x = QueryString.parse(this.props.location.search);
    var filteredData = [];
    if(x.primaryDomain){
      console.log(x);
      console.log(this.props.enterprise);
      if(this.state.solutions){
        for(var i = 0; i < this.state.solutions.length; i++){
          if(this.state.solutions[i]['Primary Domain'] === x.primaryDomain){
            console.log(this.state.solutions[i]['Primary Domain']);
            filteredData.push(this.state.solutions[i])
          }

        }
      }
      console.log(filteredData);
      return this.getItems(filteredData);
    }
    else if(x.solutionType){
      if(this.state.solutions){
        for(var i = 0; i < this.state.solutions.length; i++){
          if(this.state.solutions[i]['Solution Type'] === x.solutionType){
            console.log(this.state.solutions[i]['Solution Type']);
            filteredData.push(this.state.solutions[i])
          }

        }
      }
      console.log(filteredData);
      return this.getItems(filteredData);
    }
    else{
      return this.getItems(this.state.solutions);
    }
  }

  getItems = (filteredData) => {
    const items = [];
    if(filteredData){
      for (var i = 0; i < filteredData.length; i++) {
        console.log(filteredData[i]);
       const lab = filteredData[i]["Name"];
      items.push(
        <div style={{ marginBottom: '50px', cursor: 'pointer'}}>
         <ResultItem
           text={filteredData[i]["General Description"]}
           label={filteredData[i]["Name"]}
           img=''
           location={filteredData[i]["Location"]}
          />
   </div>
     );
       }
    }

    console.log("HERE", items);
    return items;

  }

  render()
  {
    const checkboxes = this.getCheckBoxs();
    console.log("IN RENDER");

    return (
      <Page >
      <Header subTitle='RESULTS' />
      <div>
        {checkboxes}
      </div>
    { this.state.filteredSolutions &&
       <Paginate todos={this.state.filteredSolutions} />
     }

      <div style={{padding: '250px'}}/>
      <div style={{display: 'flex', flexDirection: 'row'}} >
    </div>
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
