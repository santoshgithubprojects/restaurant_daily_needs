import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { Button, FormGroup, FormControl, Checkbox } from "react-bootstrap";
import * as loginUserAction from '../redux/actions/LoginActions';
import "./css/login.css";


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      keepSignIn: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    // console.log(this.state.username);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    console.log('handlesubmit... #$$');
    // event.preventDefault();
    this.props.loginActions.login(this.state.username, this.state.password, this.state.keepSignIn);
    this.props.history.push('/recentorders');
  }

  render() {
    return (
      <div className="Login">
        <center> <h2> Sign In </h2> </center> 
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormControl
              autoFocus
              type="username"
              placeholder="username"
              value={this.props.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              placeholder="password"
              value={this.props.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Checkbox
            label={'keepSignedIn'}
            handleCheckboxChange={this.toggleCheckbox}
            key={'keepSignedIn'}>
              Keep me signed in
           </Checkbox>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
              Sign in
          </Button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  keepSignedIn: PropTypes.bool,
  loginUserAction:PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginUserAction, dispatch)
  };
};

export default connect(null, mapDispatchToProps) (LoginPage);