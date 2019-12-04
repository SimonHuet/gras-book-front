import fetchBackend from 'Utils/fetchBackend';
import { userFetched, fetchUser , userFetchError } from 'Redux/_actions/profile';
import { connectWithLifecycle } from 'react-lifecycle-component';

import ProfilePhoto from './ProfilePhoto';

const mapStateToProps = state => ({
    users: state.users,
    fetchError: state.timeline.FetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUser());

        fetchBackend(`${process.env.REACT_APP_USER_API  }?{uuid}`, "routes")
        .then(data => dispatch(userFetched(data)))
        .catch(err => dispatch(
            userFetchError(err)));
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilePhoto);
