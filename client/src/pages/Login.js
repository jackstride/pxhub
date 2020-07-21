import React, { useEffect } from 'react';
import Logo from '../images/logo.svg';
import useForm from '../Hooks/useForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { user_login } from '../Actions/authActions';

const Login = ({ isAuth, login }) => {
  const history = useHistory();
  const [values, handleChange] = useForm();

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };
  return (
    <div className="login_container">
      <div className="form_container">
        <div className="image_container">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <h2> Sign in</h2>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="email">Login</label>
          <input
            onChange={handleChange}
            placeholder="your@email.com"
            type="text"
            name="inputEmail"
            value={values.inputEmail || ''}
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            placeholder="*************"
            type="password"
            name="inputPassword"
            value={values.inputPassword || ''}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    login: (values) => dispatch(user_login(values)),
  };
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
