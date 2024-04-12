import React, { useState } from 'react';

const GithubUsers = () => {
  const [language, setLanguage] = useState('');
  const [users, setUsers] = useState([]);

  const username = 'jveliquette'; // Replace with your GitHub username
  const token = process.env.github_token; // Replace with your personal access token

  const fetchGithubUsers = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=language:${language}`, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${token}`)}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGithubUsers();
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit} className="search-bar-container" action="/search" method="GET">
        <input type="text" id="search-bar" value={language} name="Q" placeholder="Tell me a little bit about the type of project and language you are interested in viewing..." onChange={handleChange}></input>
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
