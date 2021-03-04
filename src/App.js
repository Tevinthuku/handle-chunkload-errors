import Routes from "./routes";

import ErrorBoundary from "./errorboundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
