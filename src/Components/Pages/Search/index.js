import { connectWithLifecycle } from 'react-lifecycle-component';
import { postsFetched, postsFetchError, fetchPosts } from 'Redux/_actions/posts';
import fetchBackend from 'Utils/fetchBackend';
import search from './search';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
  groups: state.groups,
  groupUsers: state.groupUsers,
  posts: state.postReducer,
  messages: state.messages,
});

const mapDispatchToProps = (Dispatch, ownProps) => ({
  componentDidMount: () => {
    Dispatch(fetchPosts());
    fetchBackend(process.env.REACT_APP_USER_API, `users`, {})
      .then(data => Dispatch(postsFetched(data.body)))
      .catch(err => Dispatch(postsFetchError(err)));
  },
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(search);
