import React, { Component } from "react";
import Navbar from "../PageComponents/Navbar";
import Footer from "../PageComponents/Footer";
import Summary from "../PageComponents/SolutionSummary";
import Tabs from "../PageComponents/SolutionTab";
import Radar from "react-d3-radar";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { connect } from "react-redux";
import { getByID } from "../../actions/enterpriseActions";
import PropTypes from "prop-types";
import { Slide } from "react-slideshow-image";

class solution extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Component will mount");
    const { match } = this.props;
    this.props.getByID(match.params.id);
  }

  generateSlideShow = () => {
    const { singleSolution } = this.props.enterpriseData;
    var images = [];
    if (typeof singleSolution !== "undefined") {
      if (typeof singleSolution["otherImages"] !== "undefined") {
        const imageArray = singleSolution["otherImages"];

        if(singleSolution["mainImage"] !== ''){
          images.push(
            <div className="each-slide" style={{ maxWidth: "700px" }}>
              <div
                style={{
                  minHeight: "400px",
                  maxHeight: "500px",
                  maxWidth: "700px",
                  backgroundImage: `url(${singleSolution["mainImage"]})`
                }}
              />
            </div>
          );
        }
        for (var i = 0; i < imageArray.length; i++) {
          images.push(
            <div className="each-slide">
              <h4 style={{ marginBottom: "10px" }}> {`${singleSolution["otherImages"][i]['caption']}`}</h4>
              <div
                style={{
                  minHeight: "400px",
                  maxHeight: "500px",
                  maxWidth: "700px",
                  backgroundImage: `url(${singleSolution["otherImages"][i]['img']})`
                }}
              />
            </div>
          );
        }
        return images;
      }
    }
  };

  render() {
    const { singleSolution } = this.props.enterpriseData;
    const images = this.generateSlideShow();

    document.title = "Solution: " + singleSolution.Name;

    //  console.log("HERE!: ", singleSolution['otherImages'][0]);

    return (
      <div class="solution-page">
        <Navbar />
        <div className="content">
          <Summary img={images} id={this.props.match.params.id} />
          <Tabs>
            <div label="Overview">
              <h4>Product Description</h4>
              <p>{singleSolution["General Description"]}</p>
              <h4>Economic Networks</h4>
              <p>{singleSolution["Economic Networks"]}</p>
              <h4>Associations</h4>
              <p>{singleSolution.Associations}</p>
              <h4>References</h4>
              <p>{singleSolution.References}</p>
              <h4>Last Updated</h4>
              <p>{singleSolution["Last Updated"]}</p>
            </div>
            <div label="Details">
              <h4>Customer Description</h4>
              <p>{singleSolution["Customer Description"]}</p>
              <h4>Workforce Description</h4>
              <p>{singleSolution["Workforce Description"]}</p>
              <h4>Production Description</h4>
              <p>{singleSolution["Production Description"]}</p>
              <h4>Sourcing Description</h4>
              <p>{singleSolution["Sourcing Description"]}</p>
              <h4>Supporting Services Description</h4>
              <p>{singleSolution["Supporting Services Description"]}</p>
              <h4>Distributing Description</h4>
              <p>{singleSolution["Distributing Description"]}</p>
              <h4>Re-Cyling Description</h4>
              <p>{singleSolution["Re-Cyling Description"]}</p>
              <h4>Managing Description</h4>
              <p>{singleSolution["Managing Description"]}</p>
              <h4>Decision Making Description</h4>
              <p>{singleSolution["Decision Making Description"]}</p>
              <h4>Steering Description</h4>
              <p>{singleSolution["Steering Description"]}</p>
              <h4>Ownership Description</h4>
              <p>{singleSolution["Ownership Description"]}</p>
              <h4>Business Model Description</h4>
              <p>{singleSolution["Business Model Description"]}</p>
            </div>
            <div label="Evaluation">
              <div className="container">
                <div class="evaluation-info">
                  <Accordion atomic={true}>
                    <AccordionItem title="Product" />
                    <AccordionItem title="Environmental" />
                    <AccordionItem title="Social" />
                    <AccordionItem title="Management" />
                    <AccordionItem title="Economics" />
                    <AccordionItem title="Ownership" />
                  </Accordion>
                </div>
                <div class="evaluation-radar-chart">
                  <Radar
                    width={500}
                    height={500}
                    padding={70}
                    domainMax={10}
                    highlighted={null}
                    data={{
                      variables: [
                        { key: "resilience", label: "Product" },
                        { key: "strength", label: "Environmental" },
                        { key: "adaptability", label: "Social" },
                        { key: "creativity", label: "Management" },
                        { key: "openness", label: "Economics" },
                        { key: "confidence", label: "Ownership" }
                      ],
                      sets: [
                        {
                          key: "me",
                          label: "My Scores",
                          values: {
                            resilience: 4,
                            strength: 6,
                            adaptability: 7,
                            creativity: 2,
                            openness: 8,
                            confidence: 1
                          }
                        }
                      ]
                    }}
                  />
                </div>
              </div>
            </div>
          </Tabs>
        </div>

        {/*
                  typeof singleSolution["otherImages"] !== 'undefined' &&
                  <div style={{ marginLeft: '25%',width: '500px'}}>
                  <Slide {...properties} style={{height: '500px'}}>
          <div className="each-slide">
            <div style={{minHeight: '400px',  maxHeight:'500px', width: '750px','backgroundImage': `url(${singleSolution["otherImages"][0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{minHeight: '400px', maxHeight:'500px', 'backgroundImage': `url(${singleSolution["otherImages"][1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{minHeight: '400px', maxHeight:'500px','backgroundImage': `url(${singleSolution["otherImages"][2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>*/}
        <Footer />
      </div>
    );
  }
}

solution.PropTypes = {
  getByID: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  enterpriseData: state.enterpriseData
});

export default connect(
  mapStateToProps,
  { getByID }
)(solution);
