import React, { Component } from "react";
import ErrorIndcator from "../ErrorIndicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndcator></ErrorIndcator>;
    }
    return this.props.children;
  }
}
