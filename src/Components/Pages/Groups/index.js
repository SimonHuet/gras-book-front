import { usersFetched, fetchUsers, usersFetchError } from 'Redux/_actions/users';
import fetchBackend from 'Utils/fetchBackend';

import { connectWithLifecycle } from 'react-lifecycle-component';
import { fetchGroups, groupsFetched, groupsFetchError } from 'Redux/_actions/groups';
import Groups from './Groups';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
  groups: state.groups,
  groupUsers: state.groupUsers,
  posts: state.posts,
  messages: state.messages,
});

const mapDispatchToProps = Dispatch => ({
  componentDidMount: () => {
    Dispatch(fetchUsers());
    Dispatch(fetchGroups());
    fetchBackend(process.env.REACT_APP_USER_API, 'users?limit=50')
      .then(data => Dispatch(usersFetched(data.body)))
      .catch(err => Dispatch(usersFetchError(err)));

    fetchBackend(
      process.env.REACT_APP_USER_API,
      'users/2e2a5ab9-9f63-418f-969f-fa6b65363a5f/Groups'
    ) // WARINING CURRENT USER UUID
      .then(data => Dispatch(groupsFetched(data.body)))
      .catch(err => Dispatch(groupsFetchError(err)));
  },
});
export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Groups);
