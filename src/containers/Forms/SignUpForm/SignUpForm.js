import React, { Component } from 'react';
import classes from './SignUpForm.module.css';

class SignUpForm extends Component {

  render(){
    return(
      <div>
        <div className={classes.formWrapper}>
          <div className={classes.firstHalf}>
            <h2 className={classes.SignUpFormTitle}>Sign Up</h2>
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
              <label>REPEAT PASSWORD</label><br/>
              <input type="password"/><br/><br/>
              <button className={classes.btnSignUp} type="submit">Sign Up</button> or
              <a href="#" onClick={this.props.showSignInModal} className={classes.logInLink}> Log In</a>
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



export default SignUpForm;
