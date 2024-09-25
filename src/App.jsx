//import { Login, NavBar } from 'fwk-22-a-components';
import NavBar  from 'fwk-22-a-components/src/components/navbar/NavBar';
import Login  from 'fwk-22-a-components/src/components/Login/Login';
import {MockLoginProvider} from 'fwk-22-a-components/src/components/Login/MockLoginProvider'
import { useMockLogin } from 'fwk-22-a-components/src/components/Login/MockLoginProvider';
//import { MockLoginProvider, useMockLogin } from 'fwk-22-a-components';
import Home from 'fwk-22-a-components/src/components/HomeTest/Home';
import './App.css'

function App() {
  

  return (
    <>
      <NavBar/>
       <MockLoginProvider>
         {/* <LoginComponent/> */} // we do not need this because I add this in MockLoginProvider
        <Home/>
      </MockLoginProvider>
      

    </>
  )
}

/* const LoginComponent =() =>{
  const {loginFunction} = useMockLogin ();
  const {navToPage} =useMockLogin();
  return <Login loginFunction={loginFunction} navToPage={navToPage}/>
}  */

export default App
