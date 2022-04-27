import React, {useState} from "react";
import { Input, Button } from "antd";
import { Redirect } from "react-router-dom";

function ScreenHome() {
  const [errMessage, setErrMessage] = useState("");
  const [errMessageSignIn, setErrMessageSignIn] = useState("");

  const [nameSingUP, setNameSingUp] = useState("");
  const [emailSingUP, setEmailSingUp] = useState("");
  const [passwordSingUP, setPasswordSingUp] = useState("");

  const [emailSingIN, setEmailSingIN] = useState("");
  const [passwordSingIN, setPasswordSingIN] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const submitSingUP = async() => {
    const signUp = await fetch('/sign-up', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${nameSingUP}&email=${emailSingUP}&password=${passwordSingUP}`
    })
    const signUpJSON = await signUp.json();

    if(!signUpJSON.emailMessage && !signUpJSON.nameMessage && !signUpJSON.passwordMessage){
      setIsSignUp(true);
    }else if(signUpJSON.nameMessage){
      setErrMessage(signUpJSON.nameMessage);
    }else if(signUpJSON.emailMessage){
      setErrMessage(signUpJSON.emailMessage);
    }else if(signUpJSON.passwordMessage){
      setErrMessage(signUpJSON.passwordMessage);
    }
  };

  const submitSingIN = async () => {
    const signIn = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `email=${emailSingIN}&password=${passwordSingIN}`
    })
    const signInJSON = await signIn.json();

    if(signInJSON.emailMessageSignIn){
      setErrMessageSignIn(signInJSON.emailMessageSignIn);
    }else if(signInJSON.passwordFailedMessage){
      setErrMessageSignIn(signInJSON.passwordFailedMessage);
    }else if(signInJSON.isUser){
      setIsSignIn(true);
    };
  }

  if(isSignUp || isSignIn){
    return (
      <Redirect to='/screensource' />
    );
  }else {
    return (
    <div className="Login-page">
      {/* SIGN-IN */}

      <div className="Sign">
        <Input
        className="Login-input"
        placeholder="arthur@lacapsule.com"
        onChange={(e) => setEmailSingIN(e.target.value)}
          value={emailSingIN}
        />

        <Input.Password
        className="Login-input"
        placeholder="password"
        onChange={(e) => setPasswordSingIN(e.target.value)}
          value={passwordSingIN}
        />

        <p style={{color: "red"}}>{errMessageSignIn}</p>

        <Button
        style={{ width: "80px" }}
        type="primary"
        onClick={() => submitSingIN()}
        >
          Sign-in
        </Button>
      </div>

      {/* SIGN-UP */}

      <div className="Sign">
        <Input
          className="Login-input"
          placeholder="Arthur G"
          onChange={(e) => setNameSingUp(e.target.value)}
          value={nameSingUP}
        />

        <Input
        className="Login-input"
        placeholder="arthur@lacapsule.com"
        onChange={(e) => setEmailSingUp(e.target.value)}
        value={emailSingUP}
        />

        <Input.Password
        className="Login-input"
        placeholder="password"
        onChange={(e) => setPasswordSingUp(e.target.value)}
        value={passwordSingUP}
        />

        <p style={{color: "red"}}>{errMessage}</p>

        <Button
        style={{ width: "80px" }}
        type="primary"
        onClick={() => submitSingUP()}
        >
          Sign-up
        </Button>
      </div>
    </div>
    );
  }
}

export default ScreenHome;
