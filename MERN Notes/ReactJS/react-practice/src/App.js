import './App.css';
import FunctionalComponent from './components/Component Types/functionalComponent'
import ClassComponent from './components/Component Types/classComponent'
import MountComponent from './components/Component LifeCycle/Mounting/mounting'
import UpdateComponent from './components/Component LifeCycle/Updating/Updating'
import UnmountComponent from './components/Component LifeCycle/Unmounting/Unmounting'
import ListComponent from './components/Lists'
import Keys from './components/Keys'
import FragmentComponent from './components/Fragment'

function App() {
  return (
    <>
      <FunctionalComponent/><hr/>
      <ClassComponent/><hr/>
      <MountComponent/><hr/>
      <UpdateComponent/><hr/>
      <UnmountComponent/><hr/>
      <ListComponent/><hr/>
      <Keys/><hr/>
      <FragmentComponent/><hr/>
    </>
  );
}

export default App;
