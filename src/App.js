import Routes from "./routes";

import ErrorBoundary from "./error";

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
