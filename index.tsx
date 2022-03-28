import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const App = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleClick = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  const handleChange = (event) => {
    // setEmail(event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <img
            src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
            alt="new"
          />
          <div>
            <h3 className="login-title">Hello there, Sign in to continue</h3>

            <div>
              <form>
                <div>
                  <label className="input-label">Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    type="text"
                    className="input-box"
                  />
                  <div></div>
                </div>
                <div>
                  <label className="input-label">Password</label>
                  <input
                    name="password"
                    onChange={handleChange}
                    className="input-box"
                  />
                  <div></div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    By creating or logging into an account,You are agreeing with
                    our <strong>Terms & Conditions</strong> and{' '}
                    <strong>Privacy Policys.</strong>
                  </label>
                </div>

                <button onClick={handleClick} className="button">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
