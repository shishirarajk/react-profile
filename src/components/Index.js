import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import User from "./User";
import UserPage from "./UserPage";
import { USERS } from "./../data/data";
import "./Index.css";
class Index extends Component {
  constructor() {
    super();
    this.state = {
      users: USERS,
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((findresponse) => {
        this.setState({
          users: findresponse,
          isLoading: false,
        });
      });
  }
  render() {
    let content;
    content = this.state.users.map((u) => (
      <Link
        to={`/users/${u.id}`}
        style={{ width: "100%", textDecoration: "none" }}
      >
        <User key={u.id} user={u} />
      </Link>
    ));
    return (
      <Router>
        <div>
          <Route path="/users/:id" component={UserPage} />
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="main">
                <div id="wave"></div>
                <div className="card">
                  <div className="heading">
                    <p>Select an Account</p>
                  </div>
                  <div className="content">{content}</div>
                </div>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}
export default Index;
