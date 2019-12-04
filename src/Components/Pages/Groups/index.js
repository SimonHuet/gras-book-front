import { usersFetched, fetchUsers, usersFetchError } from 'Redux/_actions/users';
import fetchBackend from 'Utils/fetchBackend';

import { connectWithLifecycle } from 'react-lifecycle-component';
import { fetchGroups, groupsFetched, groupsFetchError } from 'Redux/_actions/groups';
import Groups from './Groups';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
});

const mapDispatchToProps = Dispatch => ({
  componentDidMount: () => {
    Dispatch(fetchUsers());
    Dispatch(fetchGroups());
    fetchBackend('http://localhost:8888', 'users/')
      .then(data => Dispatch(usersFetched(data.body)))
      .catch(err => Dispatch(usersFetchError(err)));

    fetchBackend('http://localhost:8888', 'groups/')
      .then(data => Dispatch(groupsFetched(data.body)))
      .catch(err => Dispatch(groupsFetchError(err)));
  },
});
export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Groups);
