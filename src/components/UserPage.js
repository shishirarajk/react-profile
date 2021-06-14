import React, { Component } from "react";
import Profile from "./dashboard/Profile";
import Posts from "./dashboard/posts";
import Todo from "./dashboard/Todo";
import Gallery from "./dashboard/Gallery";
import { USERS } from "./../data/data";
import Modal from "./Modal";
import "./UserPage.css";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: parseInt(this.props.match.params.id),
      render: "Profile",
      data: USERS,
      activeFilter: "Profile",
      count: 0,
      isModalOpen: false,
    };
  }

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
    this.filter(e, compName);
  }
  renderSubComp() {
    let userid = parseInt(this.props.match.params.id);
    userid -= 1;
    switch (this.state.render) {
      case "Posts":
        return <Posts />;
      case "ToDo":
        return <Todo />;
      case "Gallery":
        return <Gallery />;
      case "Profile":
        return <Profile id={userid} />;
      default:
        return <Profile id={userid} />;
    }
  }
  // componentDidMount() {
  //   // this.setState({ count: this.state.id + 1 });
  //   // console.log(this.state.count);
  //   // console.log(count++);
  // }
  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    // let id = this.props.match.params.id;
    let userid = parseInt(this.props.match.params.id);
    userid -= 1;

    return (
      <div className="Profile">
        <div className="navigation">
          <div className="nav_wrapper">
            <ul style={{ display: "inline" }}>
              <li
                className={`faqnav ${
                  this.state.activeFilter === "Profile" ? "active" : ""
                }`}
                onClick={this.handleClick.bind(this, "Profile")}
              >
                Profile
              </li>
              <li
                className={`faqnav ${
                  this.state.activeFilter === "Posts" ? "active" : ""
                }`}
                onClick={this.handleClick.bind(this, "Posts")}
              >
                Posts
              </li>
              <li
                className={`faqnav ${
                  this.state.activeFilter === "ToDo" ? "active" : ""
                }`}
                onClick={this.handleClick.bind(this, "ToDo")}
              >
                Todo
              </li>
              <li
                className={`faqnav ${
                  this.state.activeFilter === "Gallery" ? "active" : ""
                }`}
                onClick={this.handleClick.bind(this, "Gallery")}
              >
                Gallery
              </li>
            </ul>
          </div>
        </div>
        <div className="display">
          <div className="header">
            <div className="placeholder">
              <p>{this.state.render}</p>
            </div>
            <div className="user_info">
              <div className="circular--landscape">
                <img src={this.state.data[userid].profilepicture} />
              </div>

              <p onClick={() => this.openModal()} style={{ cursor: "pointer" }}>
                {this.state.data[userid].name}
              </p>
              <Modal
                isOpen={this.state.isModalOpen}
                onClose={() => this.closeModal()}
              >
                <div className="wrap_profile">
                  <div
                    className="circular--landscape"
                    style={{ height: "75px", width: "75px" }}
                  >
                    <img src={this.state.data[userid].profilepicture} />
                  </div>
                  <p>{this.state.data[userid].name}</p>
                  <p style={{ color: "#A9A9A9", fontSize: "14px" }}>
                    {this.state.data[userid].email}
                  </p>
                  <a href="/">
                    <button>Logout</button>
                  </a>
                </div>
              </Modal>
              {/* <img src={this.state.data[this.state.id].profilepicture} /> */}
            </div>
          </div>
          <div>{this.renderSubComp()}</div>
        </div>
      </div>
    );
  }
  filter = (e, filterId) => {
    this.setState({
      activeFilter: filterId,
    });
    // this.props.filter(e);
  };
}

export default UserPage;
