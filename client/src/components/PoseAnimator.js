import { NavBarUser } from './navUser';
import ImageComponent from './PoseAnimator_components/imageMove';
import './PoseAnimator_components/imageMove.css'

function PosePage() {
    return (
        <div className='HomeUserPage'>
            <NavBarUser/>
            <ImageComponent/>
        </div>
    );
}
export default PosePage;