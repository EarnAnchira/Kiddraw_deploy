import { NavBarAdminLog } from './navAdminLogged';
import HomeAdminPage from './HomeAdminCom/AdminHome';

function Home() {
    return (
        <div className='HomePage'>
            <NavBarAdminLog />
            <HomeAdminPage/>
        </div>
    );
}
export default Home;