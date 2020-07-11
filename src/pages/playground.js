import React, { Component } from "react";
import Layout from "../components/layout";
import Pop from "../../content/assets/heros/error-pop.svg";

class Grounds extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 5000); //runs after 5sec
  }
  render() {
    return (
      <Layout>
        <h1>Playground</h1>
        <section>{this.state.show && <Pop />}</section>
      </Layout>
    );
  }
}

export default Grounds;
