import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import Tabs from "../PageComponents/SolutionTab";
import Footer from '../PageComponents/Footer'
import { connect } from "react-redux";
import { getDomainEntries } from "../../actions/domainActions";
import { addSolutionFunc } from "../../actions/enterpriseActions";
import { withRouter } from 'react-router-dom'

class addSolution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      ResponsibleOrganization: "",
      ShortDescription: "",
      GeneralDescription: "",
      SolutionType: "",
      PrimaryDomain: "",
      SecondaryDomain: "",
      OrganizationalEntityType: "",
      KeywordDescriptors: "",
      Location: "",
      Country: "United States",
      State: "AZ",
      City: "Tempe",
      ScopeOfActivities: "",
      OperationalArea: "",
      ClimateZone: "",
      CityType: "",
      DateFounded: "0",
      EconomicNetworks: "0",
      Associations: "",
      NumberOfEmployees: "",
      References: "",
      AnnualRevenue: "",
      NumberOfWorkers: "",
      ProductDescription: "",
      SourcingDescription: "",
      SupportingServicesDescription: "",
      OtherOutputsDescription: "",
      DistributingDescription: "",
      RecyclingDescription: "",
      ManagingDescription: "",
      DecisionMakingDescription: "",
      SteeringDescription: "",
      OwnershipDescription: "",
      BusinessModelDescription: "",
      History: "",
      Recognition: "",
      FutureOutlook: "",
      Researcher: "",
      LastUpdated: ""
    };

    // TRY
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    
    this.setState({
      [name]: target.value
    });
  }

  handleFormSubmit() {
    if (this.state.Name !== "") {
      const apiCall = this.props.addSolutionFunc(this.state);
      apiCall.then(data => {
        console.log(data.payload._id);
        this.props.history.push('/solution/' + data.payload._id);
      });
    } else {
      alert("Name is required.");
    }
  }

  componentWillMount() {
    const domains = this.props.getDomainEntries();
    domains.then(data => {
      this.setState({
        domains: data.payload
      });

      this.setState({
        PrimaryDomain: data.payload[0].name
      })
    });
  }

  componentDidMount() {
    document.title = "Add Solution";
  }

  getCategoryItems() {
    var categoryTypes = [];
    if (this.state.domains) {
      for (var i = 0; i < this.state.domains.length; i++) {
        categoryTypes.push(
          <option value={this.state.domains[i].name}>
            {this.state.domains[i].name}
          </option>
        );
      }
    }

    return categoryTypes;
  }

  render() {
    const categoryList = this.getCategoryItems();

    return (
      <div >
        <Navbar />
        <h1>Add New Solution</h1> 
        <br />
        <Tabs showCancelBtn={true} showSaveBtn={true} onSave={this.handleFormSubmit}>
          <div label="General">
            <label>Name</label> <br />
            <input name="Name" type="text" value={this.state.Name} onChange={this.handleInputChange}></input>
            <br /><br />
            <label>Responsible Organization</label> <br />
            <input name="ResponsibleOrganization" type="text" value={this.state.ResponsibleOrganization} onChange={this.handleInputChange}></input>
            <br /><br />
            <label>Short Description</label> <br />
            <input name="ShortDescription" type="text" value={this.state.ShortDescription} onChange={this.handleInputChange}></input>
            <br /><br />
            <label>Primary Domain</label> <br />
            <select name="PrimaryDomain" onChange={this.handleInputChange}>
              {categoryList}
            </select>
            <br /><br />
            <label>Secondary Domain</label> <br />
            <select name="SecondaryDomain" onChange={this.handleInputChange}>
              <option value="">None</option>
              {categoryList}
            </select>
            <br /><br />
            <label>Solution Type</label> <br />
            <input name="SolutionType" type="text" value={this.state.SolutionType} onChange={this.handleInputChange}></input>
            <br /><br />
            <label>Keyword Descriptors</label> <br />
            <input name="KeywordDescriptors" type="text" value={this.state.KeywordDescriptors} onChange={this.handleInputChange}></input>
            <br /><br />
          </div>
          <div label="Images">
            <p>Image form goes here</p>
          </div>
          <div label="References">
            <p>Add list of references here</p>
          </div>            
        </Tabs>
      <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  enterprise: state.enterprise
});

export default withRouter(connect(
  mapStateToProps,
  { getDomainEntries, addSolutionFunc }
)(addSolution));
