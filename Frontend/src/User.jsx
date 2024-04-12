function User({account}) {

    const {username, name, email, top_projects} = account // Destructuring


console.log(top_projects)
    return (
        <div>
            <p>{username}</p>
            <p>{name}</p>
            <p>{email}</p>
            <div>
                {top_projects.map(({name, link, index}) => (
                <div key={index}>
                    <p>{name}</p>
                    <p>{link}</p>
                </div>

            ))}
            </div>
        </div>
    )
}

export default User
