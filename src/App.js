import sharingan from "./sharingan.png"; // Make sure the image file is in the 'src' directory
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-left">
          <img src={sharingan} className="App-logo" alt="logo" />
        </div>
        {/* Main content area */}
        <div className="App-content">
          <h1>Welcome to My React App</h1>
          <p>Doa Programmer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum..
          </p>
        </div>
        <div className="App-logo-right">
          <img src={sharingan} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
