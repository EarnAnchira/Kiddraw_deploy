import './Home_components/Home.css'
import { NavBar } from './nav';
import Recents from './Home_components/Recents';
import AllStories from './Home_components/AllStories';
import Howto from './Home_components/Howto';

function Home() {
    return (
        <div className='HomePage'>
            <NavBar />
            <Recents />
            <AllStories />
            <Howto />
        </div>
    );
}
export default Home;