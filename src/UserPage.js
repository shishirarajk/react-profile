import React, { Component } from "react";
import { USERS } from "./data/data";
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: USERS,
      id: this.props.match.params.id,
    };
  }

  render() {
    return this.state.isLoading ? (
      <h1>Loading page of user {this.state.id}...</h1>
    ) : (
      <div>
        <p>{this.state.data[this.state.id].name}</p>
        <p>{this.state.data[this.state.id].username}</p>
        <p>{this.state.data[this.state.id].email}</p>
        <p>{this.state.data[this.state.id].address.street}</p>
        <p>{this.state.data[this.state.id].phone}</p>
        <p>{this.state.data[this.state.id].website}</p>
      </div>
    );
  }
}

export default UserPage;
