import './App.css';
import Header from './Header';
import GithubUsers from './Hooks/gitHubApi'
import Users from './Users'
import Footer from './Footer.jsx'

function App() {

  const accounts = [
      {
        username: "codeMaster42",
        name: "John Smith",
        email: "john.smith@example.com",
        // "location": "San Francisco, CA",
        top_projects: [
          {
            name: "Awesome-WebApp",
            link: "https://github.com/codeMaster42/Awesome-WebApp"
          },
          {
            name: "DataAnalyzer",
            link: "https://github.com/codeMaster42/DataAnalyzer"
          },
          {
            name: "PythonUtils",
            link: "https://github.com/codeMaster42/PythonUtils"
          }
        ]
      },
      {
        "username": "devGuru",
        "name": "Emily Johnson",
        "email": "emily.johnson@example.com",
        "location": "New York, NY",
        "top_projects": [
          {
            "name": "Reactify",
            "link": "https://github.com/devGuru/Reactify"
          },
          {
            "name": "NodeExpress",
            "link": "https://github.com/devGuru/NodeExpress"
          },
          {
            "name": "AwesomeProject",
            "link": "https://github.com/devGuru/AwesomeProject"
          }
        ]
      },
      {
        "username": "codingWizard",
        "name": "Alex Chen",
        "email": "alex.chen@example.com",
        "location": "Seattle, WA",
        "top_projects": [
          {
            "name": "MachineLearning101",
            "link": "https://github.com/codingWizard/MachineLearning101"
          },
          {
            "name": "DataViz",
            "link": "https://github.com/codingWizard/DataViz"
          },
          {
            "name": "JavaUtils",
            "link": "https://github.com/codingWizard/JavaUtils"
          }
        ]
      },
      {
        "username": "codeNinja",
        "name": "Sarah Patel",
        "email": "sarah.patel@example.com",
        "location": "Chicago, IL",
        "top_projects": [
          {
            "name": "CodeSnippets",
            "link": "https://github.com/codeNinja/CodeSnippets"
          },
          {
            "name": "PythonProjects",
            "link": "https://github.com/codeNinja/PythonProjects"
          },
          {
            "name": "WebScraper",
            "link": "https://github.com/codeNinja/WebScraper"
          }
        ]
      },
      {
        "username": "codingEnthusiast",
        "name": "Michael Davis",
        "email": "michael.davis@example.com",
        "location": "Austin, TX",
        "top_projects": [
          {
            "name": "ReactNativeApp",
            "link": "https://github.com/codingEnthusiast/ReactNativeApp"
          },
          {
            "name": "DataAnalysisTools",
            "link": "https://github.com/codingEnthusiast/DataAnalysisTools"
          },
          {
            "name": "PythonScripts",
            "link": "https://github.com/codingEnthusiast/PythonScripts"
          }
        ]
      }
    ]

  return (
    <div className="app">

      <Header />

      <GithubUsers />

      <Users accounts={accounts} />

      <Footer title={"GitBuddies"}/>

    </div>
  );
}

export default App;
