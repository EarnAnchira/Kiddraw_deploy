import { NavBarAdminLog } from './navAdminLogged';
import EditStory from './EditStory/EditOldStory';

import './StoryForm/StoryForm.css'

function EditStoryPage() {
    return (
        <div className='HomePage'>
            <NavBarAdminLog />
            <EditStory/>
        </div>
    );
}
export default EditStoryPage;