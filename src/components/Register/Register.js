import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      error: 'Invalid Details'
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => { 
    fetch('https://limitless-dawn-52760.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
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
    return (
      <div className="grid pa3">
        <article className="mw6 animate__animated animate__fadeInLeft">
          <h1 className="f2">
            New Here? No Problem, <span className="blue">Register</span> yourself quickly to get started.
          </h1>
          <p className="f3 para-font">
            This app is easy to use. Have a look what we have inside for you.
          </p>
        </article>
        <article className="br3 ba b--black-10 mv3 w-100 mw6 shadow-5 center">
          <main className="pa4">
            <div className="f4">
              <fieldset id="register" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw5 ph0 mh0 app-font">Register</legend>
                <div className="mt3">
                <p className="error red f7"></p>
                  <label className="db lh-copy f5" htmlFor="name">Name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db lh-copy f5" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="off"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db lh-copy f5" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitRegister}
                  className="ph3 pv2 input-reset ba b--blue blue br2 bg-transparent grow pointer f5 dib"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </div>  
    );
  }
}

export default Register;