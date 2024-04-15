// import React, { useEffect, useState } from 'react';
const OpenAI = require('openai')

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: ''
});

const chatCompletion = openai.chat.completions.create({
  messages: [{ role: "user", content: "Say this is a test" }],
  model: "gpt-3.5-turbo",
});

console.log(chatCompletion)

// const [searchResults, setSearchResults] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchData();
//   });

//     // FUNCTION TO REQUEST OPENAI API //
//     const fetchData = async (retryCount = 0) => {
//       try {
//         const response = await fetchOpenAI(searchQuery);

//         // CHECK FOR RATE LIMIT ERROR //
//         if (response.status === 429) {
//           // RATE LIMIT EXCEEDED, PARSE RETRY-AFTER HEADER //
//           const retryAfter = parseInt(response.headers.get('Retry-After')) || 5; // DEFAULT TO 5 SECONDS //
//           console.log(`Rate limit exceeded. Retrying after ${retryAfter} seconds...`);
//           await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
//           // RETRY THE REQUEST (MAXIMUM OF 5 TIMES) //
//           if (retryCount < 5) {
//             return fetchData(retryCount + 1);
//           } else {
//             console.error('Maximum retry limit reached.');
//             return;
//           }
//         }

//         if (!response.ok) {
//           // HANDLE OTHER HTTP ERRORS //
//           console.error('HTTP error:', response.status);
//         }

//         const data = await response.json();

//         // CHECK IF DATA.CHOICES IS DEFINED BEFORE MAPPING //
//         if (data.choices) {
//           setSearchResults(data.choices.map(choice => choice.message.content));
//         } else {
//           setSearchResults([]); // RESET SEARCH RESULTS IF DATA.CHOICES IS UNDEFINED
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//   // FUNCTION TO FETCH DATA FROM OPENAI API //
//   const fetchOpenAI = async (query) => {
//     const apiUrl = 'https://api.openai.com/v1/chat/completions';

//     return fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: query }],
//         temperature: 0.7,
//         max_tokens: 50,
//       }),
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // PREVENTS DEFAULT FORM SUBMISSION BEHAVIOR
//     fetchData(); // TRIGGER API REQUEST WHEN FORM IS SUBMITTED
//   };

//   const handleChange = (event) => {
//     setSearchQuery(event.target.value); // UPDATES SEARCH QUERY STATE AS USER TYPES
//   }


  // HTML ADD ONS
{/* <form action="/search" method="GET"> Add onSubmit={handleSubmit} */}
{/* <input type="text" id="search-bar" name="Q" placeholder="Tell me a little bit about the type of project and language you are interested in viewing..."></input> Add onChange={handleChange} */}
// {/* <div className="search-results">
//     <ul>
//   {/* Add {searchResults.map((result, index) => (
//     <li key={index}>{result}</li>
//   ))} */}
// </ul> */}

// gitHubApi.js
// import React, { useState, useEffect } from 'react';

const GithubUsers = () => {
    const [language, setLanguage] = useState('');
    const [users, setUsers] = useState([]);

    const username = 'jveliquette'; // Replace with your GitHub username
    const token = process.env.github_token; // Replace with your personal access token

    useEffect(() => {
        fetchGithubUsers();
    }); // Fetch users on initial render

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

    const fetchTopProjects = async (users) => {
        const projectsPromise = users.map(user => fetchTopProject(user));
        const projects = await Promise.all(projectsPromise);
        return projects;
    };

    const fetchTopProject = async (user) => {
        try {
            const response = await fetch(`https://api.github.com/users/${user.login}/repos`, {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${token}`)}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user repositiories');
            }
            const repositiories = await response.json();
            const topProject = findTopProject(repositiories);
            return topProject;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    const findTopProject = (repositiories) => {
        return repositiories[0];
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchGithubUsers();
    };

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    useEffect(() => {
        if (users.length > 0) {
            fetchTopProjects(users).then(projects => {
                setUsers(users.map((user, index) => ({ ...user, topProject: projects[index] })));
            });
        }
    });


    return (
        <div className='search-container'>
            <form onSubmit={handleSubmit} className="search-bar-container" action="/search" method="GET">
                <input type="text" id="search-bar" value={language} name="Q" placeholder="Tell me a little bit about the type of project and language you are interested in viewing..." onChange={handleChange}></input>
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div className='search-results-container'>
                {/* <h3>Search Results:</h3> */}
                <ul className='search-results'>
                    {users.map(user => (
                            <li key={user.id}>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                    {user.login}
                                </a>
                                {user.topProject && (
                                    <p>Top Project: <a href={user.topProject.html_url} target='_blank' rel='noopener noreferrer'>{user.topProject.name}</a></p>
                                )}
                            </li>
                    ))}
                </ul>
            </div>
        </div>
  );
};

// export default GithubUsers;
