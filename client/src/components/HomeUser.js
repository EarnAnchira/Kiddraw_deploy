import './Home_components/Home.css'
import { NavBarUser } from './navUser';
import RecentsUser from './HomeUser_components/RecentsUser';
import AllStoriesUser from './HomeUser_components/AllStoriesUser';
import Howto from './Home_components/Howto';

function HomeUser() {
    return (
        <div className='HomeUserPage'>
            <NavBarUser/>
            <RecentsUser />
            <AllStoriesUser />
            <Howto />
        </div>
    );
}
export default HomeUser;