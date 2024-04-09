import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>GitBuddies</h1>
        <p>Connecting Coders, Powering Progress</p>
      </header>

      <div className="search-container">
        <div className="search-bar-container">
          <form action="/search" method="GET">
            {/* <label for="Search">Search:</label> */}
            <input type="text" id="search-bar" name="Q" placeholder="Tell me a little bit about the type of project and language you are interested in viewing..."></input>
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <div id="search-results">

        </div>
      </div>

    </div>
  );
}

export default App;
