import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"

// import Header from './components/Header';
import Navbar from './components/nav';
import Home from './components/Home';
import StoryForm from './components/Admin/StoryForm';
import PoseAnimator from './components/PoseAnimator';
import SpeakingGame from './components/SpeakingGame';
import LoginAdmin from './components/Admin/LoginAdmin';
import RegisterAdmin from './components/Admin/RegisterAdmin';
import LoginMember from './components/LoginMember';
import RegisterMember from './components/RegisterMember';
import Portfolio from './components/Portfolio';
import UploadImage from './components/UploadImage';
import HomeAdmin from './components/Admin/HomeAdmin';
import EditStory from './components/Admin/EditStory';
import SelectCreateAvatar from './components/SelectCreateAvatar';
import Drawing from './components/Drawing/Drawing';
import Details from './components/Admin/Details';
import StoryDetailForm from './components/Admin/StoryDetailForm';
import HomeUser from './components/HomeUser';
import PoseAnimatorAnswer1 from './components/PoseAnimatorAnswer1';
import PoseAnimatorAnswer2 from './components/PoseAnimatorAnswer2';
import PoseAnimatorNormal from './components/PoseAnimatorNormal';
import UploadDressing from './components/Admin/UploadDressing';
import Dressing from './components/Dressing/Dressing';
import CharacterForm from './components/Admin/CharacterForm';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/registeradmin' element={<RegisterAdmin />} />
        <Route path='/loginadmin' element={<LoginAdmin />} />
        <Route path='/registermember' element={<RegisterMember />} />
        <Route path='/loginmember' element={<LoginMember />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/speakinggame' element={<SpeakingGame />} />

        {/* PATH ADMIN */}
        <Route path='/homeadmin/:AdminName' element={<HomeAdmin />} />
        <Route path='/homeadmin/:AdminName/editstory/:StoryID' element={<EditStory />} />
        <Route path='/homeadmin/:AdminName/view/:StoryID' element={<Details />} />
        <Route path='/homeadmin/:AdminName/storydetailform/:StoryID' element={<StoryDetailForm />} />
        <Route path='/homeadmin/:AdminName/characterform/:StoryID' element={<CharacterForm />} />
        <Route path='/homeadmin/:AdminName/storyform' element={<StoryForm />} />
        <Route path='/homeadmin/:AdminName/uploaddressing' element={<UploadDressing />} />


        {/* PATH USER */}
        <Route path='/homeuser/:UserName' element={<HomeUser />} />
        {/* DRAWING */}
        <Route path='/homeuser/:UserName/characterlist/:StoryID' element={<CharacterList />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/selectcreateavatar/:CharacterID' element={<SelectCreateAvatar />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/selectcreateavatar/:CharacterID/drawing' element={<Drawing />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID' element={<CharacterList />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/selectcreateavatar/:CharacterID' element={<SelectCreateAvatar />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/selectcreateavatar/:CharacterID/drawing' element={<Drawing />} />

        {/* UPLOAD IMAGE */}
        <Route path='/homeuser/:UserName/characterlist/:StoryID/selectcreateavatar/:CharacterID/uploadimage' element={<UploadImage />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/selectcreateavatar/:CharacterID/uploadimage' element={<UploadImage />} />

        {/* DRESSING */}
        <Route path='/homeuser/:UserName/characterlist/:StoryID/selectcreateavatar/:CharacterID/dressing' element={<Dressing />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/selectcreateavatar/:CharacterID/dressing' element={<Dressing />} />

        {/* POSEANIMATOR */}
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/poseanimator' element={<PoseAnimator />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/poseanimator/:PageNoAnswer1' element={<PoseAnimatorAnswer1 />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/poseanimator/:PageNoAnswer2' element={<PoseAnimatorAnswer2 />} />
        <Route path='/homeuser/:UserName/characterlist/:StoryID/:CustomID/poseanimator/:PageNoNext' element={<PoseAnimatorNormal />} />

      </Routes>
    </>
  );
}

export default App;
