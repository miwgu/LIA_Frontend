//import { Login, NavBar } from 'fwk-22-a-components';
// import NavBar  from 'fwk-22-a-components/src/components/navbar/NavBar';
import Login  from 'fwk-22-a-components/src/components/Login/Login';
import {MockLoginProvider} from 'fwk-22-a-components/src/components/Login/MockLoginProvider'
import { useMockLogin } from 'fwk-22-a-components/src/components/Login/MockLoginProvider';
//import { MockLoginProvider, useMockLogin } from 'fwk-22-a-components';
import Home from 'fwk-22-a-components/src/components/HomeTest/Home';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Login from './Components/Login';
import Registration from './Components/Registration';

function App() {
  return (
    <>
      {/* <NavBar/> */}
       <MockLoginProvider>
         {/* <LoginComponent/> */} // we do not need this because I add this in MockLoginProvider
        <Home/>
      </MockLoginProvider>

      <BrowserRouter>
        <nav>
          {/* <Link to="/Login">Logga in</Link> */}
          <br />
          <Link to="/Registration">Registrera</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Välkommen till startsidan</h1>} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

/* const LoginComponent =() =>{
const LoginComponent =() =>{
  const {loginFunction} = useMockLogin ();
  const {navToPage} =useMockLogin();
  return <Login loginFunction={loginFunction} navToPage={navToPage}/>
}  */


export default App
