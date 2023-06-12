import { NavBarAdminLog } from './navAdminLogged';
import StoryDetailFormAlternative from './StoryDetail/DetailAlternative';

import './StoryForm/StoryForm.css'

function DetailAlterPage() {
    return (
        <div className='HomePage'>
            <NavBarAdminLog />
            <StoryDetailFormAlternative/>
        </div>
    );
}
export default DetailAlterPage;