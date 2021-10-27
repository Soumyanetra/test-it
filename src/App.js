import './App.css';
import axios from 'axios'
import DateTime from './DateTime';
import firebase from './util/firebase';
import Auth from './util/auth';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {useState} from 'react'
 function App(props) {
  //const SEND_PDF_URL = "http://127.0.0.1:5000/sendPDF"
   const pro = "https://soumyanetra.github.io/test-it/:5000";
  const[progressing, setProgress] = useState(false)
  async function check() {
    const latitude = 22.5083392;
    const longitude = 88.3851264;
    const loc = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=ce0ccefc35026462800861cfe427e2e0")
    console.log(loc)
    const con = await axios.get("https://api.first.org/data/v1/countries")//https://api.countrylayer.com/v2/all?access_key=b0a1d21eb0fd82c5314a0942f09e3c2d
    console.log(con)
    const trial = await axios.get(pro)//'http://localhost:5000/'
    console.log(trial)
  }
   function loginSuccess(response) {
     console.log(response)
   }
   function loginFailure(response) {
     console.log(response)
   }
   function responseFacebook(response) {
     console.log(response)
   }
   async function convert() {
     check();
     const doc = document.getElementById("doc").files[0];
     if (doc) {
       setProgress(true);
       const SECRET_KEY = '8Ym4Cmnazv6EV6AO'
      const result = await window.convert_PDF2JPG(doc,SECRET_KEY)
       console.log(result.dto.Files)
       //await axios.post("http://localhost:5000/sendPDF",result.dto.Files)
       setProgress(false);
     }
     else
       alert("No files to convert")
     
   }
  return (
    <div className="App">
      <header className="App-header">
         
          
      <input type="file" id="doc" accept="application/pdf"></input>
        <button id="smbt" onClick={convert} >DO It</button>
        {progressing && <div>
        
          <h3>Wait for process to get over</h3>
        </div>}
        <div>OK</div>
        <DateTime></DateTime>
        <GoogleLogin
          clientId='11409264584-5ibkuddovsved5j7gsv3689dubpp5pju.apps.googleusercontent.com'
          buttonText="Sign in with Google"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          cookiePolicy={'single_host_origin'} />
        <FacebookLogin
          appId='460427998637578'
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook} />
        {}
        
      </header>
    </div>
  );
}

export default App;
