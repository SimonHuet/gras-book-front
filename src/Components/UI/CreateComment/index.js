import { connectWithLifecycle } from 'react-lifecycle-component';
import CreateComment from './CreateComment';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
  posts: state.posts,
});

export default connectWithLifecycle(mapStateToProps)(CreateComment);
