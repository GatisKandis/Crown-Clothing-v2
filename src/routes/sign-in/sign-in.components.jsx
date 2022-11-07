// import { Fragment } from "react";
import mainLogo from '../../assets/google.png';
import './sign-in.style.scss';

import {
  signInWithGooglePopup,
  signInWithGithubPopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    const user = response.user;
    const datas = {
      accessToken: user.accessToken,
      name: user.displayName,
      email: user.email,
    };

    console.log(datas);
  };

  const logGitHub = async () => {
    const response2 = await signInWithGithubPopup();

    console.log(response2);
  };

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
      <button onClick={logGoogleUser}><span><p>Sign in with</p>  <img src={mainLogo} alt='google'/></span></button>
    </div>
  );
};

export default SignIn;
