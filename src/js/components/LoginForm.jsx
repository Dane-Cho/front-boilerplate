import React, { Component } from 'react';
import store from 'store';
import swal from 'sweetalert';
import { auth } from '../api';
import { reload } from '../util';

class LoginForm extends Component {
  componentDidMount() {
    const { $ } = window;

    $(this.chkRememberMe).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%',
    });
    this.rememberMe = store.get('remember') || false;
    if (this.rememberMe) {
      this.inputEmail.value = store.get('id');
      $(this.chkRememberMe).iCheck('check');
    }
    $(this.chkRememberMe).on('ifChanged', this.rememberMeChanged.bind(this));
    $(this.btnSubmit).on('click', this.submit.bind(this));
    $(this.inputEmail).on('keydown', this.enterKeySupport.bind(this));
    $(this.inputPassword).on('keydown', this.enterKeySupport.bind(this));
  }

  enterKeySupport(evt) {
    const keyCode = evt.keyCode || evt.which;
    if (keyCode === 13) {
      this.submit();
    }
  }

  rememberMeChanged(evt) {
    this.rememberMe = evt.target.checked;
  }

  submit() {
    swal('구현 필요');
    /*
    auth.login(this.inputEmail.value, this.inputPassword.value)
      .then(() => {
        store.set('remember', this.rememberMe);
        if (this.rememberMe) {
          store.set('id', this.inputEmail.value);
        } else {
          store.clear();
        }
        reload();
      })
      .catch(err => swal(err.message));
    */
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a><b>VEAVER</b></a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg" />
          <div className="form-group has-feedback">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              ref={(input) => { this.inputEmail = input; }}
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback" />
          </div>
          <div className="form-group has-feedback">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={(input) => { this.inputPassword = input; }}
            />
            <span className="glyphicon glyphicon-lock form-control-feedback" />
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label htmlFor="chkRememberMe">
                  <input
                    ref={(input) => { this.chkRememberMe = input; }}
                    name="chkRememberMe"
                    type="checkbox"
                  /> Remember Me
                </label>
              </div>
            </div>
            <div className="col-xs-4">
              <button
                className="btn btn-primary btn-block btn-flat"
                ref={(submit) => { this.btnSubmit = submit; }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
