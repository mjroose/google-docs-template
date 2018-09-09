import React, { Component } from 'react';

export class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        middleInitial: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  async onChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    await this.setState({
      [name]: value
    });

    await this.props.update(this.state);
  }

  render() {
    return(
      <div>
        <h2>{this.props.roleInCase}</h2>
        <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.onChange} />
        <input type="text" name="middleInitial" placeholder="Middle Initial" value={this.state.middleInitial} onChange={this.onChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.onChange} />
        <h4>Contact Information</h4>
        <input type="text" name="street" placeholder="Street" value={this.state.street} onChange={this.onChange} />
        <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.onChange} />
        <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.onChange} />
        <input type="text" name="zip" placeholder="Zip" value={this.state.zip} onChange={this.onChange} />
        <input type="text" name="phone" placeholder="Telephone" value={this.state.phone} onChange={this.onChange} />
      </div>
    );
  };
}