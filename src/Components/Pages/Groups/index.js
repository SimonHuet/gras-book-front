import { usersFetched, fetchUsers, usersFetchError } from 'Redux/_actions/users';
import fetchBackend from 'Utils/fetchBackend';

import { connectWithLifecycle } from 'react-lifecycle-component';
import Groups from './Groups';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => {
    dispatch(fetchUsers());

    fetchBackend('http://192.168.0.239:8889', 'users/')
      .then(data => dispatch(usersFetched(data.body)))
      .catch(err => dispatch(usersFetchError(err)));
  },
});
export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Groups);
