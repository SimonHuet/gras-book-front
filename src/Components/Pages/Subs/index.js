import { connectWithLifecycle } from 'react-lifecycle-component';
import { followsFetched, followsFetchError, fetchFollows } from 'Redux/_actions/follows';
import fetchBackend from 'Utils/fetchBackend';
import subs from './subs';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
  groups: state.groups,
  groupUsers: state.groupUsers,
  posts: state.posts,
  messages: state.messages,
  follows: state.follows,
});

const mapDispatchToProps = Dispatch => ({
  componentDidMount: () => {
    Dispatch(fetchFollows());
    fetchBackend(process.env.REACT_APP_USER_API, `users/${localStorage.userID}/following`, {})
      .then(data => Dispatch(followsFetched(data.body)))
      .catch(err => Dispatch(followsFetchError(err)));
  },
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(subs);
