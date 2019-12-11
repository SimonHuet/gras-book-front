import { connectWithLifecycle } from 'react-lifecycle-component';
import fetchBackend from 'Utils/fetchBackend';
import { fetchUserPosts, userPostsFetched, userPostsFetchError, userFetched, userFetchError, fetchUser } from 'Redux/_actions/profile';
import { userService } from 'Utils/User.service';
import Profile from './Profile';

const mapStateToProps = state => ({
    posts: state.profile.userPosts,
    isFetchingPosts: state.profile.isFetchingUserPosts,
    postsFetchError: state.profile.userPost,
    user: state.profile.user,
    userFetchError: state.profile.userFetchError,
    isFetchingUser: state.profile.isFetchingUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    componentDidMount: () => {
        dispatch(fetchUserPosts());

        let id = localStorage.userID;
        if (ownProps.match.params.id) {
            id = ownProps.match.params.id;
        }

        fetchBackend(process.env.REACT_APP_POST_API, `users/${id}/posts?limit=10`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            method: 'GET'
        })
            .then(({ body }) => dispatch(userPostsFetched(body)))
            .catch(err => dispatch(userPostsFetchError(err)));

        dispatch(fetchUser());

        if (!ownProps.match.params.id) {
            userService.getConnectedUser()
                .then(user => dispatch(userFetched(user)))
                .catch(err => dispatch(userFetchError(err)));
        } else {
            fetchBackend(process.env.REACT_APP_USER_API, `users/${id}`)
                .then(user => dispatch(userFetched(user)))
                .catch(err => dispatch(userFetchError(err)));
        }
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
