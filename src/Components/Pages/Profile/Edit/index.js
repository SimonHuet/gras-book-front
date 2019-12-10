import { connectWithLifecycle } from 'react-lifecycle-component';
import { userFetched, userFetchError, fetchUser } from 'Redux/_actions/profile';
import { userService } from 'Utils/User.service';
import Edit from './Edit';

const mapStateToProps = state => ({
  posts: state.profile.userPosts,
  isFetchingPosts: state.profile.isFetchingUserPosts,
  postsFetchError: state.profile.userPost,
  user: state.profile.user,
  userFetchError: state.profile.userFetchError,
  isFetchingUser: state.profile.isFetchingUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  componentDidMount: () => {
    dispatch(fetchUser());
    userService
      .getConnectedUser()
      .then(user => dispatch(userFetched(user)))
      .catch(err => dispatch(userFetchError(err)));
  },
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Edit);
