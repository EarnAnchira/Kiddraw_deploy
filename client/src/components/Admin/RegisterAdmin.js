import { NavBarAdmin } from './navAdmin';
import RegisterAdmin from './RegisCom/AdminReg';

function Home() {
    return (
        <div className='HomePage'>
            <NavBarAdmin />
            <RegisterAdmin/>
        </div>
    );
}
export default Home;