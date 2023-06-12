import { NavBarAdminLog } from './navAdminLogged';
import StoryForm from './StoryForm/UploadStory';

function UploadNewStory() {
    return (
        <div className='NewStrory'>
            <NavBarAdminLog />
            <StoryForm/>
        </div>
    );
}
export default UploadNewStory;