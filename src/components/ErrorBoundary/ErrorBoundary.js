import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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

  getFallbackUI = () => {
    const availUIComponents = {
      NotFound: <NotFound />,
      default: <Unknown />,
    };
    const fallbackUI = availUIComponents[this.state.errorType];
    return fallbackUI ? fallbackUI : availUIComponents.default;
  };

  componentDidUpdate(prevProps) {
    const locationChanged =
      prevProps.location.pathname !== this.props.location.pathname;
    if (locationChanged) this.setState({ errorType: null });
  }

  render() {
    return (
      <>{this.state.errorType ? this.getFallbackUI() : this.props.children}</>
    );
  }
}

export default withRouter(ErrorBoundary);
