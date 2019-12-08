import { connectWithLifecycle } from 'react-lifecycle-component';
import fetchBackend from 'Utils/fetchBackend';
import { fetchUserPosts, userPostsFetched, userPostsFetchError, userFetched, userFetchError, fetchUser } from 'Redux/_actions/profile';
import { userService } from 'Utils/User.service';
import Profile from './Profile';

const mapStateToProps = state =>({
    posts: state.profile.userPosts,
    isFetchingPosts: state.profile.isFetchingUserPosts,
    postsFetchError: state.profile.userPost,
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUserPosts());

        fetchBackend(process.env.REACT_APP_POSTS_API, `posts/1`)
        .then(posts => dispatch(userPostsFetched(posts)))
        .catch( err  => dispatch(
            userPostsFetchError(err))
        );

        dispatch(fetchUser());

        userService.getConnectedUser()
        .then(user => dispatch(userFetched(user[0])))
        .catch(err => dispatch(userFetchError(err)));
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
