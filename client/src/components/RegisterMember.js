import { NavBar } from './nav';
import RegisterMember from './RegisMember_components/regisMem';

function Home() {
    return (
        <div className='HomePage'>
            <NavBar />
            <RegisterMember/>
        </div>
    );
}
export default Home;