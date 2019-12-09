/* eslint-disable no-console */
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
        console.log(ownProps.match.params.id);
        const id = ownProps.match.params.id ? ownProps.match.params.id : localStorage.userId;

        fetchBackend(process.env.REACT_APP_POSTS_API, `users/${id}/posts`)
            .then(posts => dispatch(userPostsFetched(posts)))
            .catch(err => dispatch(
                userPostsFetchError(err))
            );

        dispatch(fetchUser());

        if (!ownProps.match.params.id) {
            userService.getConnectedUser()
                .then(user => dispatch(userFetched(user)))
                .catch(err => dispatch(userFetchError(err)));
        }else{
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
