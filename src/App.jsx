import { Login, NavBar } from 'fwk-22-a-components';
import { MockLoginProvider, useMockLogin } from 'fwk-22-a-components';
import './App.css'

function App() {
  

  return (
    <>
      <NavBar/>
      <MockLoginProvider>
        <LoginComponent/>
      </MockLoginProvider>
      

    </>
  )
}

const LoginComponent =() =>{
  const {loginFunction} = useMockLogin ();
  return <Login loginFunction={loginFunction} />
} 

export default App
