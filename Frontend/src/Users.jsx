import User from './User'

function Users({accounts}) {
// console.log(accounts)
    return (
        <div className="search-results-container">
            <div className="search-results">
                {accounts.map((account)=> (
                    <User account={account} />
                ))}
            </div>
        </div>
    )
}
export default Users;
