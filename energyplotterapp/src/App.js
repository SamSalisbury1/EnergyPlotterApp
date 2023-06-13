import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="Title-Container">
          <h1>Good Morning</h1>
          <h2>Would you like to...</h2>
        </div>

        <div id="Button-Container">
          <button type="button" class="btn btn-primary">Log Energy Usage</button>
          <button type="button" class="btn btn-primary">View Energy Usage</button>
        </div>
      </header>
    </div>
  );
}

export default App;
