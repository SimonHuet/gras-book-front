import { usersFetched, fetchUsers, usersFetchError } from 'Redux/_actions/users';
import fetchBackend from 'Utils/fetchBackend';

import { connectWithLifecycle } from 'react-lifecycle-component';
import Messaging from './messaging';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
});

const mapDispatchToProps = (Dispatch, ownProps) => ({
  componentDidMount: () => {
    Dispatch(fetchUsers());
    fetchBackend('http://192.168.0.239:8889', `groups/${ownProps.match.params.id}/Users`)
      .then(data => Dispatch(usersFetched(data.body)))
      .catch(err => Dispatch(usersFetchError(err)));
  },
});
export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Messaging);
