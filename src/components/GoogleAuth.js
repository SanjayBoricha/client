import React, { Component } from "react";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "182122807736-8iiq7aol8rhqmjh3gphptjtr7mbqls8i.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return (
      <div>
        <h1>GoogleAuth</h1>
      </div>
    );
  }
}

export default GoogleAuth;
