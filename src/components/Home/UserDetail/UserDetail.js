import React from 'react';
import PropTypes from 'prop-types';
import './UserDetail.css';

class UserDetail extends React.Component {
  componentDidMount() {
    const { user, fetchUser } = this.props;

    if (!user) {
      fetchUser();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderUserInfo() {
    const { user } = this.props;

    return (
      <div className="user">
        <div>Id: {user.id}</div>
        <div>Name: {user.display_name}</div>
        <div>Email: {user.email}</div>
        <div>Country: {user.country}</div>
        <div>Some URL: {user.external_urls.spotify}</div>
        <div>Followers: {user.followers.total}</div>
        <div>Other URL: {user.href}</div>
        <img src={user.images[0].url} alt="profile" />
        <div>Product: {user.product}</div>
        <div>Type: {user.type}</div>
        <div>Other URL more: {user.uri}</div>
      </div>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div className="user-detail">
        {user ? this.renderUserInfo() : this.renderLoading()}
      </div>
    );
  }
}

UserDetail.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func
};

export default UserDetail;
