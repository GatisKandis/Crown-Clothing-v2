// import { Fragment } from "react";

import {
  signInWithGooglePopup,
  signInWithGithubPopup,
  selectAuthenticate
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {

    const response = await selectAuthenticate('google');

    console.log(response);
    // const user = response.user;
    // const datas = {
    //   accessToken: user.accessToken,
    //   name: user.displayName,
    //   email: user.email,
    // };
  }  

  const logGithubUser = async () => {

    const response = await selectAuthenticate('github');

    console.log(response);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <form action="">
          
          <input type="text" id="username" name="username" placeholder="Username"/>
          <input type="password" id="password" name="password" placeholder="Password"/>
          <input type="submit" value="login" />
        </form>
        <br></br>
      </div>
      <h2>- or - </h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGithubUser}>Sign in with GitHub Popup</button>
    </div>
  );
};

export default SignIn;
