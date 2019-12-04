import fetchBackend from 'Utils/fetchBackend';
import { userFetched, fetchUser , userFetchError } from 'Redux/_actions/profile';
import { connectWithLifecycle } from 'react-lifecycle-component';

import ProfilePhoto from './ProfilePhoto';

const mapStateToProps = state => ({
    users: state.users,
    fetchError: state.FetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUser());

<<<<<<< HEAD
        fetchBackend(`${process.env.REACT_APP_USER_API  }`, "users/")
        .then(data => dispatch(userFetched(data.body)))
=======
        fetchBackend(`${process.env.REACT_APP_USER_API  }?{uuid}`, "routes")
        .then(data => dispatch(userFetched(data)))
>>>>>>> feat: add users reducers
        .catch(err => dispatch(
            userFetchError(err)));
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilePhoto);
