import './App.css';
import RouterComponent from './components/React Router/Main'
import FunctionalComponent from './components/Component Types/functionalComponent'
import ClassComponent from './components/Component Types/classComponent'
import MountComponent from './components/Component LifeCycle/Mounting/mounting'
import UpdateComponent from './components/Component LifeCycle/Updating/Updating'
import UnmountComponent from './components/Component LifeCycle/Unmounting/Unmounting'
import ListComponent from './components/List,Key&Fragment/Lists'
import Keys from './components/List,Key&Fragment/Keys'
import FragmentComponent from './components/List,Key&Fragment/Fragment'
import StyleSheetComponent from './components/Stylings/StyleSheet'
import InlineStyleComponent from './components/Stylings/InlineStyles'
import CSSmoduleComponent from './components/Stylings/CSSmodule'
import StyledComponent from './components/Stylings/StyledComponent'
import FunctionalPropsComponent from './components/Props/FunctionalProps'
import ClassPropsComponent from './components/Props/ClassProps'
import StateComponent from './components/State/State'
import UseStateComponent from './components/Hooks/useState/useState'
import UseEffectComponent from './components/Hooks/useEffect/useEffect'
import UseContextComponent from './components/Hooks/useContext/useContext'
import UseRefComponent from './components/Hooks/useRef/useRef'
import UseReducerComponent from './components/Hooks/useReducer/useReducer'
import UseMemoComponent from './components/Hooks/useMemo/useMemo'
import UseCallbackComponent from './components/Hooks/useCallback/useCallback'
import CustomHookComponent from './components/Hooks/customHooks/customHook'
import HigherOrderComponent from './components/HigherOrderComponents/ClickCounter'
import FormComponent from './components/Forms/Forms'
import GetRequestComponent from './components/HTTP Request/getRequest'
import PostRequestComponent from './components/HTTP Request/postRequest'


function App() {
  return (
    <>
      <RouterComponent /><hr/>
      <FunctionalComponent/><hr/>
      <ClassComponent/><hr/>
      <MountComponent/><hr/>
      <UpdateComponent/><hr/>
      <UnmountComponent/><hr/>
      <ListComponent/><hr/>
      <Keys/><hr/>
      <FragmentComponent/><hr/>
      <StyleSheetComponent/><hr/>
      <InlineStyleComponent/><hr/>
      <CSSmoduleComponent/><hr/>
      <StyledComponent/><hr/>
      <FunctionalPropsComponent/><hr/>
      <ClassPropsComponent/><hr/>
      <StateComponent/><hr/>
      <UseStateComponent/><hr/>
      <UseEffectComponent/><hr/>
      <UseContextComponent /><hr/>
      <UseRefComponent /><hr/>
      <UseReducerComponent /><hr/>
      <UseMemoComponent /><hr/>
      <UseCallbackComponent /><hr/>
      <CustomHookComponent /><hr/>
      <HigherOrderComponent /><hr/>
      <FormComponent /><hr/>
      
    </>
  );
}

export default App;
