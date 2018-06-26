import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../../domains';
import UserDetail from './UserDetail';

const mapStateToProps = (state) => ({
  user: selectors.user(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUser: actions.fetchUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
