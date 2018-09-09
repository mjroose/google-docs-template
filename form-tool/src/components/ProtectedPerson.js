import React, { Component } from 'react';
import axios from 'axios';

import { Person } from './Person';

export class ProtectedPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      protectedPerson: {},
      guardian: {}
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.updateProtectedPerson = this.updateProtectedPerson.bind(this);
    this.updateGuardian = this.updateGuardian.bind(this);
  }

  updateProtectedPerson(person) {
    this.setState({
      protectedPerson: person
    });
  }

  updateGuardian(person) {
    this.setState({
      guardian: person
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const postURL = "https://script.google.com/macros/s/AKfycby0mX1PKL_iAjply_D_DPP8nrKd30QuzjzaPX9CITZM8XsNfgw/exec";
    axios.post(postURL, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(this.state);
  }

  render() {
    return(
      <form onSubmit={(e) => this.onSubmit(e)}>
        <Person roleInCase="Protected Person" update={this.updateProtectedPerson} />
        <br />
        <Person roleInCase="Guardian" update={this.updateGuardian} />
        <input type="submit" />
      </form>

    );
  };
}