import React, { Component } from 'react'
import Navbar from '../PageComponents/Navbar'
import Footer from '../PageComponents/Footer'
import Summary from '../PageComponents/SolutionSummary'
import Tabs from '../PageComponents/SolutionTab'
import Radar from 'react-d3-radar'
import { Accordion, AccordionItem } from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css'
import { connect } from 'react-redux'
import { getByID } from '../../actions/enterpriseActions'
import PropTypes from 'prop-types'

class solution extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log("Component will mount")
        const { match } = this.props
        this.props.getByID(match.params.id)
    }

    render() {

        const { singleSolution } = this.props.enterpriseData

        return (
            <div class="solution-page">
                <Navbar />
                <div className="content">
                    <Summary id={this.props.match.params.id} />
                    <Tabs>
                        <div label="Overview">
                            <h4>Product Description</h4>
                            <p>
                                { singleSolution["Product Description"] }
                            </p>
                            <h4>Economic Networks</h4>
                            <p>
                                { singleSolution["Economic Networks"] }
                            </p>
                            <h4>Associations</h4>
                            <p>
                                { singleSolution.Associations }
                            </p>
                            <h4>References</h4>
                            <p>
                                { singleSolution.References }
                            </p>
                            <h4>Last Updated</h4>
                            <p>
                                { singleSolution["Last Updated"] }
                            </p>
                        </div>
                        <div label="Details">
                            <h4>Customer Description</h4>
                            <p>
                                { singleSolution["Customer Description"] }
                            </p>
                            <h4>Workforce Description</h4>
                            <p>
                                { singleSolution["Workforce Description"] }
                            </p>
                            <h4>Production Description</h4>
                            <p>
                                { singleSolution["Production Description"] }
                            </p>
                            <h4>Sourcing Description</h4>
                            <p>
                                { singleSolution["Sourcing Description"] }
                            </p>
                            <h4>Supporting Services Description</h4>
                            <p>
                                { singleSolution["Supporting Services Description"] }
                            </p>
                            <h4>Distributing Description</h4>
                            <p>
                                { singleSolution["Distributing Description"] }
                            </p>
                            <h4>Re-Cyling Description</h4>
                            <p>
                                { singleSolution["Re-Cyling Description"] }
                            </p>
                            <h4>Managing Description</h4>
                            <p>
                                { singleSolution["Managing Description"] }
                            </p>
                            <h4>Decision Making Description</h4>
                            <p>
                                { singleSolution["Decision Making Description"] }
                            </p>
                            <h4>Steering Description</h4>
                            <p>
                                { singleSolution["Steering Description"] }
                            </p>
                            <h4>Ownership Description</h4>
                            <p>
                                { singleSolution["Ownership Description"] }
                            </p>
                            <h4>Business Model Description</h4>
                            <p>
                                { singleSolution["Business Model Description"] }
                            </p>
                        </div>
                        <div label="Evaluation">
                            <div className="container">
                                <div class="evaluation-info">
                                    <Accordion atomic={true}>
                                        <AccordionItem title="Product">
                                            
                                        </AccordionItem>
                                        <AccordionItem title="Environmental">
                                            
                                        </AccordionItem>
                                        <AccordionItem title="Social">
                                            
                                        </AccordionItem>
                                        <AccordionItem title="Management">
                                            
                                        </AccordionItem>
                                        <AccordionItem title="Economics">
                                            
                                        </AccordionItem>
                                        <AccordionItem title="Ownership">
                                            
                                        </AccordionItem>
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
                                                { key: 'resilience', label: 'Product' },
                                                { key: 'strength', label: 'Environmental' },
                                                { key: 'adaptability', label: 'Social' },
                                                { key: 'creativity', label: 'Management' },
                                                { key: 'openness', label: 'Economics' },
                                                { key: 'confidence', label: 'Ownership' },
                                            ],
                                            sets: [
                                                {
                                                    key: 'me',
                                                    label: 'My Scores',
                                                    values: {
                                                        resilience: 4,
                                                        strength: 6,
                                                        adaptability: 7,
                                                        creativity: 2,
                                                        openness: 8,
                                                        confidence: 1,
                                                    },
                                                }
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
                <Footer />
            </div>
        )
    }
}

solution.PropTypes = {
    getByID: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    enterpriseData: state.enterpriseData,
})

export default connect(
    mapStateToProps,
    { getByID }
) (solution)
