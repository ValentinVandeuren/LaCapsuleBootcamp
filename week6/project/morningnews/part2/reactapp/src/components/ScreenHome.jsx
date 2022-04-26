import React, {useState} from "react";
import { Input, Button } from "antd";
import { Redirect } from "react-router-dom";

function ScreenHome() {
  const [nameSingUP, setNameSingUp] = useState("");
  const [emailSingUP, setEmailSingUp] = useState("");
  const [passwordSingUP, setPasswordSingUp] = useState("");

  const [emailSingIN, setEmailSingIN] = useState("");
  const [passwordSingIN, setPasswordSingIN] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const submitSingUP = async() => {
    await fetch('/sign-up', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${nameSingUP}&email=${emailSingUP}&password=${passwordSingUP}`
    })
    setIsSignUp(true);
  }

  const submitSingIN = async () => {
    const signIn = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `email=${emailSingIN}&password=${passwordSingIN}`
    })
    const signInJSON = await signIn.json();
    if(signInJSON.email != null) setIsSignIn(true);
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
