import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import Home from './Home';

function getHashParams({ hash }) {
  const hashParams = {};
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = hash.substring(1);
  let e;
  // eslint-disable-next-line no-cond-assign
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

const mapStateToProps = (state, props) => {
  const params = getHashParams(props.location);
  const { access_token: accessToken, refresh_token: refreshToken, error } = params;

  return ({
    redirectParams: { accessToken, refreshToken, error },
    isLoggedIn: selectors.isLoggedIn(state),
    context: selectors.context(state)
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setContext: actions.setContext
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
