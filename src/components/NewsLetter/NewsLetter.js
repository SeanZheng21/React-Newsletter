import React, { Component } from 'react';
import FormButton from '../FormButton/FormButton';
import FormTextInput from '../FormTextInput/FormTextInput';

import './NewsLetter.css';

class NewsLetter extends Component {

  constructor(props) {
    super(props);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.state = {
      name: "",
      company: "",
      email: "",
      agree: false,
      nameErr: "",
      companyErr: "",
      emailErr: ""
    };
  }

  handleAgreeCheckboxChange = (event) => {
    this.setState({
      ...this.state,
      agree: event.target.checked
    });
  }

  handleNameInputChange = (textContent) => {
    // Clear the error field when the name field changes
    this.setState({
      ...this.state,
      name: textContent,
      nameErr: ""
    });
  }

  handleCompanyInputChange = (textContent) => {
    // Clear the error field when the company field changes
    this.setState({
      ...this.state,
      company: textContent,
      companyErr: ""
    });
  }

  handleEmailInputChange = (textContent) => {
    // Clear the error field when the email field changes
    this.setState({
      ...this.state,
      email: textContent,
      emailErr: ""
    });
  }

  handleResetClick = (e) => {
    this.setState({
      ...this.state,
      name: "", 
      company: "",
      email: "",
      agree: false,
      nameErr: "",
      companyErr: "",
      emailErr: ""
    });
  }

  handleSubmitClick(event) {
    event.preventDefault();
    if (this.verifyFields()) {
      this.props.history.push('/sub-succeed')
    }
  }

  verifyFields = () => {
    // The email field is an input field with type "email"
    // So when submiting the form it is auto validated
    // The submit button is only active when the agree checkbox is checked
    // So here we don't have to check the checkbox or the email format
    let isValid = true;
    let nameErr = "";
    let companyErr = "";
    let emailErr = "";
    if (this.state.name.trim() === "") {
        nameErr = "Name field can't be empty."
        isValid = false;
    }
    if (this.state.company.trim() === "") {
      companyErr = "Company field can't be empty."
      isValid = false;
    } 
    if (this.state.email.trim() === "") {
      emailErr = "Email field can't be empty."
      isValid = false;
    } 
    this.setState({
      ...this.state,
      nameErr,
      companyErr,
      emailErr
    });
    return isValid;
  }

  render() {
    const name = this.state.name;
    const company = this.state.company;
    const email = this.state.email;
    const agree = this.state.agree;
    const nameErr = this.state.nameErr;
    const companyErr = this.state.companyErr;
    const emailErr = this.state.emailErr;

    return (
      <div className="wrapper">
        <form className="card-content" onSubmit={this.handleSubmitClick}>
          <h1>Subscribe</h1>
          <h2>Subscribe to our newsletter to keep in touch.</h2>
          <div className="form-input">
          <FormTextInput className="text-input"
            labelText="Name"
            textContent={name}
            type="text"
            errorMsg={nameErr}
            placeholder="Please enter your name"
            onTextInputChange={this.handleNameInputChange}
          />
          <FormTextInput className="text-input"
            labelText="Company"
            textContent={company}
            type="text"
            errorMsg={companyErr}
            placeholder="Please enter your company"
            onTextInputChange={this.handleCompanyInputChange}
          />
          <FormTextInput className="text-input"
            labelText="Email"
            type="email"
            textContent={email}
            errorMsg={emailErr}
            placeholder="Please enter your email"
            onTextInputChange={this.handleEmailInputChange}
          />
          <div className="terms-check">
            <label>
              <input 
                name="agree"
                type="checkbox"
                checked={this.state.agree}
                onChange={this.handleAgreeCheckboxChange} />
              <span className="horizontal-text">
                Agree to our service terms of the newsletter subscription.
              </span>
            </label>
          </div>
          <div className="form-btn">
            <FormButton 
              text="reset"
              isSubmit={false}
              disabled={false}
              onClick={this.handleResetClick}
            />
            <FormButton
              text="submit"
              isSubmit={true}
              disabled={!agree}
              onClick={this.handleSubmitClick}
            />
          </div>
          </div>
          
          
        </form>
      </div>
    );
  }
}

export default NewsLetter;
