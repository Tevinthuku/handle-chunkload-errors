import React from "react";

const CHUNKERROR_PAGE_RELOAD_KEY = "did-chunk-error-make-page-reload";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    this.resetPageReloadTimeout = setTimeout(
      () => this.resetPageReloadError(),
      1000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.resetPageReloadTimeout);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  didPageAlreadyReload() {
    const item = localStorage.getItem(CHUNKERROR_PAGE_RELOAD_KEY);
    return item === "yes";
  }

  saveChunkErrorReloadAction() {
    localStorage.setItem(CHUNKERROR_PAGE_RELOAD_KEY, "yes");
  }

  resetPageReloadError() {
    localStorage.removeItem(CHUNKERROR_PAGE_RELOAD_KEY);
  }

  isThisAValidChunkLoadError(error) {
    return (
      error.name.indexOf("ChunkLoadError") > -1 && !this.didPageAlreadyReload()
    );
  }

  componentDidCatch(error, errorInfo) {
    if (this.isThisAValidChunkLoadError(error)) {
      this.saveChunkErrorReloadAction();
      window.location.reload(true);
      return;
    }
    // report the error
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
