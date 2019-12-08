import { connectWithLifecycle } from 'react-lifecycle-component';
import form from './form';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
  groups: state.groups,
  groupUsers: state.groupUsers,
  posts: state.posts,
  messages: state.messages,
});

export default connectWithLifecycle(mapStateToProps)(form);
