import React from 'react';
import ReactDOM from 'react-dom';
import 'sweetalert/dist/sweetalert.css';
import LoginForm from './components/LoginForm';
import '../less/login.less';

ReactDOM.render(
  <div>
    <LoginForm />
  </div>,
  document.getElementById('root'),
);
