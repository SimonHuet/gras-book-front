import fetchBackend from 'Utils/fetchBackend';
import { usersFetched, fetchUsers , usersFetchError } from 'Redux/_actions/users';
import { connectWithLifecycle } from 'react-lifecycle-component';

import ProfilePhoto from './ProfilePhoto';

const mapStateToProps = state => ({
    users: state.users,
    fetchError: state.timeline.FetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUsers());

        fetchBackend(process.env.REACT_APP_USER_API, "routes")
        .then(data => dispatch(usersFetched(data)))
        .catch(err => dispatch(
            usersFetchError(err)));
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilePhoto);
