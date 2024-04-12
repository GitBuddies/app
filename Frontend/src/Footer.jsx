function Footer({title}) {
   return (
    <footer className="app-footer">
        <h1>{title}</h1>
        <p>Introducing GitBuddies, a platform harnessing the power of AI to connect developers. No more scrolling and tedious searches – with GitBuddies, finding like-minded collaborators for your next project is effortless. GitBuddies sifts through GitHub, matching users with similar interests, skillsets, and ongoing projects. Whether you're a seasoned developer seeking fresh perspectives or a newcomer looking to dive into the world of open-source, GitBuddies is your ultimate companion for forging meaningful connections and driving innovation forward.</p>
        <p>&copy; 2024 GitBuddies</p>
        <p>Website created by Julia Veliquette</p>
        <a href="#app-header" className="back-to-top">Back to Top</a>
      </footer>
   )
}

export default Footer;
