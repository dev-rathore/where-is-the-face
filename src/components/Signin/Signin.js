import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      error: 'Wrong Credentials'
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://limitless-dawn-52760.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    }).then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        } else {
          const err = document.querySelector('.error');
          err.innerHTML = this.state.error;
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="grid pa3">
        <article className="animate__animated animate__fadeInLeft">
          <h1 className="f2">
            Welcome to <span className="blue">Where is the face?</span> App
          </h1>
          <p className="f3 para-font">
            Sign In, to get started.
          </p>
        </article>
        <article className="br3 ba b--black-10 mv3 w-100 mw6 shadow-5 center">
          <main className="pa4">
            <div className="f4">
              <fieldset id="signin" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw5 ph0 mh0 app-font">Sign In</legend>
                <div className="mt3">
                  <p className="error red f7"></p>
                  <label className="db lh-copy f5" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db lh-copy f5" htmlFor="password">Password</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitSignIn}
                  className="ph3 pv2 input-reset ba b--blue blue br2 bg-transparent grow pointer f5 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p  onClick={() => onRouteChange('register')} className="f6 link dim blue db pointer underline">New User?</p>
              </div>
            </div>
          </main>
        </article>
      </div> 
    );
  }
}

export default Signin;