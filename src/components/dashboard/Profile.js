import React, { Component } from "react";
import { USERS } from "./../../data/data";

import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: USERS,
      id: this.props.id,
      visibility: false,
    };
  }

  render() {
    return (
      <div className="profile_wrap">
        <div className="profile-left">
          <div className="profile-image">
            <img src={this.state.data[this.state.id].profilepicture} />
          </div>
          <div className="info" style={{ borderBottom: "1px solid #DCDCDC" }}>
            <p style={{ textAlign: "center" }}>
              {this.state.data[this.state.id].name}
            </p>
            <p>
              Username : <b>{this.state.data[this.state.id].username}</b>
            </p>
            <p>
              e-mail : <b>{this.state.data[this.state.id].email}</b>
            </p>
            <p>
              Phone : <b>{this.state.data[this.state.id].phone}</b>
            </p>
            <p>
              Website : <b>{this.state.data[this.state.id].website}</b>
            </p>
          </div>
          <div className="info">
            <p style={{ textAlign: "center" }}>Company</p>
            <p>
              Name: <b>{this.state.data[this.state.id].company.name}</b>
            </p>
            <p>
              catchphrase:
              <b>{this.state.data[this.state.id].company.catchPhrase}</b>
            </p>
            <p>
              bs: <b>{this.state.data[this.state.id].company.bs}</b>
            </p>
          </div>
        </div>
        <div className="profile-right">
          <div className="address">
            <h3>Address</h3>
            <p>
              Street : <b>{this.state.data[this.state.id].address.street}</b>
            </p>
            <p>
              Suite : <b>{this.state.data[this.state.id].address.suite}</b>
            </p>
            <p>
              City : <b>{this.state.data[this.state.id].address.city}</b>
            </p>
            <p>
              Zipcode : <b>{this.state.data[this.state.id].address.zipcode}</b>
            </p>
          </div>
          <div className="map"></div>
        </div>
      </div>
    );
  }
}
export default Profile;
