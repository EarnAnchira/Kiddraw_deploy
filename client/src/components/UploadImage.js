import { NavBar } from './nav';
import UploadImage from './UploadImage_components/upload'
import './UploadImage_components/upload.css'

function UploadCharacter() {
    return (
        <div className='UploadPage'>
            <NavBar />
            <UploadImage />
        </div>
    );
}
export default UploadCharacter;