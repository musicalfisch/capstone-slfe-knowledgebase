import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getByID } from '../../../actions/enterpriseActions'
import PropTypes from 'prop-types'

class SolutionSummary extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getByID(this.props.id)
    }

    render() {

        const { singleSolution } = this.props.enterpriseData

        return (
            <div class="solution-summary">
                <div className="title">
                    <h1>{ singleSolution.Name }</h1>

                </div>
                <div className="images">
                    <img src="http://chooseweb.s3.amazonaws.com/raw/kublai5.jpg" alt="peace of land image" />
                </div>
                <div className="summary">
                    <table >
                        <tbody>
                            <tr>
                                <th colspan="2" class="title">Summary</th>
                            </tr>
                            <tr>
                                <td class="item">Type</td>
                                <td>{ singleSolution["Solution Type"] }</td>
                            </tr>
                            <tr>
                                <td class="item">Domain</td>
                                <td>{ singleSolution["Primary Domain"] }</td>
                            </tr>
                            <tr>
                                <td class="item">Entity</td>
                                <td>{ singleSolution["Organizational Entity Type"] }</td>
                            </tr>
                            <tr>
                                <td class="item">Area</td>
                                <td>Very small</td>
                            </tr>
                            <tr>
                                <td class="item">Climate</td>
                                <td>Temperature</td>
                            </tr>
                            <tr>
                                <td class="item">City</td>
                                <td>{ singleSolution["City Type"] }</td>
                            </tr>
                            <tr>
                                <td class="item">Founded</td>
                                <td>{ singleSolution["Date Founded"] }</td>
                            </tr>
                            <tr>
                                <td class="item">Economic</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td class="item">Other</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td class="item">Description</td>
                                <td>{ singleSolution["General Description"] }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

SolutionSummary.PropTypes = {
    getByID: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    enterpriseData: state.enterpriseData,
})

export default connect(
    mapStateToProps,
    { getByID }
) (SolutionSummary)
