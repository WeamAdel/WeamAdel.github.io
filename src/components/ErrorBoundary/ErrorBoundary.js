import React, { Component } from "react";
import NotFound from "./ErrorFallbackUIs/NotFound";
import Unknown from "./ErrorFallbackUIs/Unknown";

class ErrorBoundary extends Component {
  state = {
    errorType: null,
  };

  static getDerivedStateFromError(e) {
    if (e.code === 404) {
      return {
        errorType: "NotFound",
      };
    } else {
      return {
        errorType: "unknown",
      };
    }
  }

  goBack = () => {
    console.log(this.props);
    this.props.history.goBack();
  };

  refresh = () => {
    window.location.reload(false);
  };

  getFallbackUI = () => {
    const availUIComponents = {
      NotFound: <NotFound goBack={this.goBack} />,
      default: <Unknown goBack={this.goBack} refresh={this.refresh} />,
    };
    const fallbackUI = availUIComponents[this.state.errorType];
    return fallbackUI ? fallbackUI : availUIComponents.default;
  };

  render() {
    return this.state.errorType ? this.getFallbackUI() : this.props.children;
  }
}

export default ErrorBoundary;
