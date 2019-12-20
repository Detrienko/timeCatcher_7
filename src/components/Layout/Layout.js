import React, {useState} from 'react';
import classes from './Layout.module.css';

import SignInForm from '../../containers/Forms/SignInForm/SignInForm';
import SignUpForm from '../../containers/Forms/SignUpForm/SignUpForm';

function Layout(props) {

	const [ isModalShown, setIsModalShown ] = useState({
		isSignUpModalShown: false,
		isSignInModalShown: false
	})

	// const [ isSignInModalShown, setIsSignInModalShown ] 

	const showSignUpModal = () => {
		setIsModalShown({
			isSignUpModalShown: true,
			isSignInModalShown: false
		})
	}

	const showSignInModal = () => {
		setIsModalShown({
			isSignUpModalShown: false,
			isSignInModalShown: true
		})
	}

	const hideModal = () => {
		setIsModalShown({
			isSignUpModalShown: false,
			isSignInModalShown: false
		})
	}

	let modal = null;

	if(isModalShown.isSignUpModalShown){
		modal = <SignUpForm  showSignInModal={showSignInModal} hideModal={hideModal}/>
	}

	if(isModalShown.isSignInModalShown){
		modal = <SignInForm showSignUpModal={showSignUpModal} hideModal={hideModal}/>
	}

  return (
  	<div>
	    <div className={classes.layoutWrapper}>
	    	<ul className={classes.topMenu}>
	    	<li className={classes.logIn} onClick={showSignUpModal}><a href="#">Sign Up</a></li>
	    	<li className={classes.signUp} onClick={showSignInModal}><a href="#">Sign In</a></li>
	    	</ul>
	    </div>
	    {modal}
    	{props.children}
    	<div id="formCover2"></div>
    </div>	
  );
}

export default Layout;
