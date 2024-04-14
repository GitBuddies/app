import User from './User';
import GithubUsers from './Hooks/gitHubApi';

function Users({accounts}) {
// console.log(accounts)
    return (
        <div>
                {/* {accounts.map((account)=> (
                    <User account={account} />
                ))} */}
                <GithubUsers />

        </div>
    )
}
export default Users;
