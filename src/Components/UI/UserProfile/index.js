import fetchBackend from 'Utils/fetchBackend';
import { fetchUser, userFetched, userFetchError } from 'Redux/_actions/profile';
import { connectWithLifecycle } from 'react-lifecycle-component';
import UserProfile from './UserProfile';

const mapStateToProps = state =>({
    user: state.profile.user,
    userFetchError: state.profile.fetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUser);

        fetchBackend(process.env.REACT_APP_USER_API, `users/1`)
        .then( user => dispatch(userFetched(user)))
        .catch(err => dispatch(userFetchError(err)));
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile);
