import React, { Component } from 'react';
import SectionTitle from '../PageComponents/SectionTitle';
import Header from '../PageComponents/Header';
import SearchBar from '../PageComponents/SearchBar';
import styled from 'styled-components';
import Footer from '../PageComponents/Footer';
import CategoryType from '../PageComponents/CategoryType';
import sampleImage from './production.png';
import PropTypes from 'prop-types';
import Search from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { getEnterprises, getField } from '../../actions/enterpriseActions';
import { getDomains } from '../../actions/enterpriseActions';
import ReactTable from "react-table";


const Page = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: fit-content;
  height: 100%;
  width: 100%;
  background-color: #F3F3F3;
`;
const PageSection = styled.span`
  margin-left: 24px;
  width: 95%
`;

class explore extends Component {
  constructor(props){

    super(props)
    console.log(this);
     this.state =
     {
       textChange: null,
       keyWordSearchText: '',
       dataArray: [],
       solutionTypes: null
     };

    this.onSubmitClick = this.onSubmitClick.bind(this)
  }

onSubmitClick(al){
    this.props.history.push(`/browse?keyWordSearch=${al}`);
}


 getCategoryItems = () => {
   var categoryTypes = [];
if(this.state.domains)
{
  for (var i = 0; i < this.state.domains.length; i++) {
  categoryTypes.push(

    <div
      style={{ cursor: 'pointer'}}>
     <CategoryType
       history={this.props.history}
      // styleObject={{ display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'200px', height:'120px', backgroundColor: '#ffff'}}
      styleObject={{ display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center',width:'120px', height:'120px', backgroundColor: '#ffff'}}
       image={sampleImage} label={this.state.domains[i]}
       type="primaryDomain"
   />

     </div>
 );
   }
}



   return categoryTypes;

}

getSolutionItems = () => {
  var solutionTypes = [];
 if(this.state.solutionTypes){
   for (var i = 0; i < this.state.solutionTypes.length; i++) {
     const lab = this.state.solutionTypes[i]["Name"];
   solutionTypes.push(
    <div style={{ cursor: 'pointer', marginRight: '24px'}}>
      <CategoryType
        history={this.props.history}
        styleObject={{ display:'flex', flexDirection:'row', justifyContent:'center', textAlign: 'center',alignItems:'center',width:'120px', height:'120px', backgroundColor: '#ffff'}}
      //  styleObject={{ display:'flex', flexDirection:'column',alignItems:'center',width:'120px', height:'120px', backgroundColor: '#ffff'}}
        type="solutionType"
        image=''
        label={this.state.solutionTypes[i]}/>
    </div>
  );
    }
 }

  return solutionTypes;
}

  getPopularItems = () => {
    var popularItems = [];
    if(this.state.popularSolutions){
      for (var i = 0; i < this.state.popularSolutions.length; i++) {
        const lab = this.state.popularSolutions[i].Name;
      popularItems.push(
       <div style={{ padding: '5px'}}>
         <a
           style={{color:'blue'}}
           href={`/Item?itemName=${this.state.popularSolutions[i].Name}&itemKey=${this.state.popularSolutions[i]._id}`}
           //onClick= { () => { this.props.history.push(`/Item?itemName=${dataMock[i].itemName}&itemKey=${dataMock[i].itemKey}`)}}


         //  styleObject={{ display:'flex', flexDirection:'column',alignItems:'center',width:'120px', height:'120px', backgroundColor: '#ffff'}}
       >{this.state.popularSolutions[i].Name}
     </a>
       </div>
     );
       }
    }


  return popularItems;

}
  componentWillMount(){
    const domains = this.props.getDomains();
    domains.then((data) => {
      console.log('WILL MOUNT!!!!', data);
      this.setState({
        domains: data.payload,
      });
    })
    const poulars = this.props.getEnterprises();
    poulars.then((data) => {
      console.log("POPUYLARS !!!!", data);
      this.setState({
        popularSolutions: data.payload,
      });
    })
    const fields = this.props.getField('Solution Type', '0');
    fields.then((data) => {
      this.setState({
        solutionTypes: data.payload,
      });
    })
  //  console.log('bo w', x);
    // .then((result)=> {
    //   console.log('LOGGIN DOMAINS IN ASYNC', result)
    // });
    /*this.setState({
      domains: this.props.getDomains(),
      dataArray: this.props.getEnterprises()
    });*/
    while(this.state.dataArray.loading == false){
      console.log("Data loading")
      if(this.state.dataArray.loading == true){
        console.log("data done loading...breaking");
        break;
      }
    }
    console.log("DATA ARRAY IS: ", this.state.dataArray);
  }

  mapData(array){

  }

render(){
  console.log("IN RENDER ******", this.state);
  const enterprises = this.props.enterprise;

  /*if(!enterprises.length){
    console.log("data is loading")
    return(<div><h1 style= {{position: 'absolute', top: '50%', left: '50%'}}>Data is loading</h1></div>)
  }*/

  /*if(this.props.getEnterprises.loading === true){
    console.log('????HERE!');
  }*/
  console.log('xxxxx');
  console.log(this.state.domains);
  console.log(this.state.dataArray);
  console.log(enterprises);

  const categoryList = this.getCategoryItems();
  const solutionList = this.getSolutionItems();
  const popularList = this.getPopularItems();

  return (
    <Page>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <Header subTitle='EXPLORE'/>
    <PageSection>
    <div style={{width:'75%',marginTop: '20px'}}  >
      <div>
        <SectionTitle label='Keyword Search' />
      <MuiThemeProvider>
      <Search
        value={this.state.keyWordSearchText}
        onChange={(value) => {this.setState({keyWordSearchText: value})}}
        onRequestSearch={() => { this.props.history.push(`/browse?keyWordSearch=${this.state.keyWordSearchText}`)}}
      />
    </MuiThemeProvider>
  </div>
    </div>
  </PageSection>
    <PageSection>
      <div style={{marginTop: '50px'}}>
        <SectionTitle label="Primary Domains: " />
      </div>
      <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-around',marginRight:'10px', width:'100%'}}>
        {categoryList}
      </div>
  </PageSection>
  <PageSection>
    <div style={{marginTop: '50px' }}>
      <SectionTitle label="Solution Types: " />
    </div>
    <div style={{ width:'100%', alignItems:'center', display: 'grid', gridRowGap: '10px', gridTemplateColumns: 'repeat(6, 1fr)'}}>
      {solutionList}
    </div>
</PageSection>
<span style={{width:'100%', marginLeft:'24px'}}>
  <div style={{marginTop: '50px' }}>
    <SectionTitle label="Featured Solutions" />
  </div>
    <div style={{ width:'100%', alignItems:'center', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {popularList}
    </div>
  </span>


    <Footer> </Footer>
  </Page>

  );
}

}
explore.propTypes = {
  getDomains: PropTypes.func.isRequired,
  getEnterprises: PropTypes.func.isRequired,
  categoryTypes: PropTypes.object,
  enterprise: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  enterprise: state.enterprise,
});

export default connect(
  mapStateToProps,
  {getEnterprises, getDomains, getField}
) (explore);

//export default explore;
