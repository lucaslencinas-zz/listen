import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import UserDetail from './UserDetail';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const { redirectParams, isLoggedIn, setContext } = this.props;
    if (!isLoggedIn && redirectParams.accessToken) {
      setContext(redirectParams);
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="home">
        <h1>Listen</h1>
        {isLoggedIn ? <UserDetail /> : <Login />}
      </div>
    );
  }
}

Home.propTypes = {
  redirectParams: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  setContext: PropTypes.func
};

export default Home;
