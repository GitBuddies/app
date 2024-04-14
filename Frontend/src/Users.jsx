import User from './User';
import GithubUsers from './Hooks/gitHubApi';

function Users() {
    return (
        <div>
            <GithubUsers />
        </div>
    )
}
export default Users;
