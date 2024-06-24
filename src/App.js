import {GoogleLogin} from '@react-oauth/google';
import './App.css'


function App() {
  const successMessage = (response) => {
    console.log('Sucess Message : '+JSON.stringify(response));
  };
  const errorMessage = (response) => {
    console.log('ERROR-RESPONSE : '+response);
  }

  return (
    <div className='app-container'>
    <h1 className='title'>SIGN IN WITH GOOGLE ACCOUNT</h1>
    <GoogleLogin onSuccess={successMessage} onError={errorMessage}></GoogleLogin>
    </div>
  )
}

export default App;
