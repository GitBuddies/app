import './App.css';

function App() {

  return (
    <div className="app">
      <header className="app-header" id='app-header'>
        <h1>GitBuddies</h1>
        <p>Connecting Coders, Powering Progress</p>
      </header>

      <div className="search-container">
        <div className="search-bar-container">
          <form action="/search" method="GET">
            <input type="text" id="search-bar" name="Q" placeholder="Tell me a little bit about the type of project and language you are interested in viewing..."></input>
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>

      <div className="search-results-container">
        <div className="search-results">
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
            <li>User 5</li>
          </ul>
        </div>
      </div>

      <footer className="app-footer">
        <h1>GitBuddies</h1>
        <p>Introducing GitBuddies, a platform harnessing the power of AI to connect developers. No more scrolling and tedious searches – with GitBuddies, finding like-minded collaborators for your next project is effortless. GitBuddies sifts through GitHub, matching users with similar interests, skillsets, and ongoing projects. Whether you're a seasoned developer seeking fresh perspectives or a newcomer looking to dive into the world of open-source, GitBuddies is your ultimate companion for forging meaningful connections and driving innovation forward.</p>
        <p>&copy; 2024 GitBuddies</p>
        <p>Website created by Julia Veliquette</p>
        <a href="#app-header" className="back-to-top">Back to Top</a>

      </footer>
    </div>
  );
}

export default App;
