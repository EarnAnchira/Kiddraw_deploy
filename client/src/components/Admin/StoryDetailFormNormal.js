import { NavBarAdminLog } from './navAdminLogged';
import StoryDetailFormNormal from './StoryDetail/DetailNormal';

import './StoryForm/StoryForm.css'

function DetailNormalPage() {
    return (
        <div className='HomePage'>
            <NavBarAdminLog />
            <StoryDetailFormNormal/>
        </div>
    );
}
export default DetailNormalPage;