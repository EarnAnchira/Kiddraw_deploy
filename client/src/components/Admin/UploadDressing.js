import { NavBarAdminLog } from './navAdminLogged';
import UploadDressing from './DressingUpload/UploadDress';
import './StoryForm/StoryForm.css'

function DressPage() {
    return (
        <div className='HomePage'>
            <NavBarAdminLog />
            <UploadDressing/>
        </div>
    );
}
export default DressPage;