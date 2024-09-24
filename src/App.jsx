// import { Login, NavBar } from 'fwk-22-a-components';
// import { MockLoginProvider, useMockLogin } from 'fwk-22-a-components';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';

function App() {
  

  return (
    <>
      {/* <NavBar/>
      <MockLoginProvider>
        <LoginComponent/>
      </MockLoginProvider> */}
      
      <BrowserRouter>
        <nav>
          <Link to="/Login">Logga in</Link>
          <br />
          <Link to="/Registration">Registrera</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Välkommen till startsidan</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

// const LoginComponent =() =>{
//   const {loginFunction} = useMockLogin ();
//   const {navToPage} =useMockLogin();
//   return <Login loginFunction={loginFunction} navToPage={navToPage}/>
// } 

export default App
