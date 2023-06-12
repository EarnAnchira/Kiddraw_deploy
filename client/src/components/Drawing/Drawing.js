import './Canvas.css'
import { NavBarUser } from '../navUser';
import Canvas from './Canvas';

function DrawCanvas() {
    return (
        <div className='DrawPage' >
            <NavBarUser/>
            <Canvas/>
        </div>
    );
}
export default DrawCanvas;