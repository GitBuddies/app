import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitBuddies</h1>
        <p>Connecting Coders, Powering Progress</p>
      </header>

      <hero className="Search">
        <div className="Search-bar">
          <form action="/Search" method="GET">
            {/* <label for="Search">Search:</label> */}
            <input type="text" id="Search" name="Q" placeholder="Tell me a little bit about the type of project and language you are interested in viewing..."></input>
            <button type="submit">Search</button>
          </form>
        </div>
      </hero>
    </div>
  );
}

export default App;
