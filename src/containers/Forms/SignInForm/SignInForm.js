import React, { Component } from 'react';
import classes from './SignInForm.module.css';

class SignInForm extends Component {

  render(){
    return(
      <div>
        <div className={classes.formWrapper}>
          <div className={classes.firstHalf}>
            <h2 className={classes.SignInFormTitle}>Sign In</h2>
            <p className={classes.description}>With your account you can save your work time.</p>
            <p className={classes.description}>Get yourself one.</p>
            <span className={classes.logo}>LOGO</span>
          </div>
          <div className={classes.secondHalf}>
            <form>
              <label>E-MAIL</label><br/>
              <input type="text"/><br/>
              <label>PASSWORD</label><br/>
              <input type="password"/><br/>
              <button className={classes.btnSignIn} type="submit">Log In</button> or
              <a href="#" onClick={this.props.showSignUpModal} className={classes.signUpLink}> Sign Up</a>
            </form>
          </div>
        </div>
        <div 
          id='formCover'
          className={classes.formCover}
          onClick={this.props.hideModal}>
        </div>
      </div>
      )
  }

}



export default SignInForm;
