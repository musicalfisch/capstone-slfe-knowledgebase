import React, {Component} from 'react'
import { connect } from "react-redux";
import { addUserFunc } from "../../../actions/userActions";

class RegisterForm extends Component
{
	constructor(props) {
		super(props);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
		this.onChangeUserName = this.onChangeUserName.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			first_name: '',
			last_name: '',
			email_address: '',
			user_name: '',
			password: '',
		}
	}

	onChangeFirstName(e) {
		this.setState({
			first_name: e.target.value
		});
	}

	onChangeLastName(e) {
		this.setState({
			last_name: e.target.value
		});
	}

	onChangeEmailAddress(e) {
		this.setState({
			email_address: e.target.value
		});
	}

	onChangeUserName(e) {
		this.setState({
			user_name: e.target.value
		});
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const apiCall = this.props.addUserFunc(this.state);
		apiCall.then(data => {
			console.log(data.payload);
		});
		/*
		apiCall.then(data => {
			console.log(data.payload);
		});*/
	}

	render() {
		return(
			<div id="register_container" className="form_input">
				<form onSubmit={this.onSubmit}>
					<label htmlFor="firstname">First Name:</label>
					<input type="text" id="first_name" value={this.state.first_name} onChange={this.onChangeFirstName} name="first_name"/>

					<label htmlFor="lastname">Last Name:</label>
					<input type="text" id="last_name" value={this.state.last_name} onChange={this.onChangeLastName} name="last_name"/>

					<label htmlFor="email">Email Address:</label>
					<input type="text" id="email" value={this.state.email_address} onChange={this.onChangeEmailAddress} name="email"/>

					<label htmlFor="user">User:</label>
					<input type="text" id="user" value={this.state.user_name} onChange={this.onChangeUserName} name="user"/>

					<label htmlFor="password">Password:</label>
					<input type="password" id="password" value={this.state.password} onChange={this.onChangePassword} name="password"/>

					<div id="register_bottom">
						<input type="submit" value="register"/>
					</div>
				</form>
			</div>

		);
	}
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {addUserFunc})(RegisterForm)
