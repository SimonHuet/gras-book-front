import fetchBackend from 'Utils/fetchBackend';
import { postsFetched, fetchPosts , postsFetchError } from 'Redux/_actions/posts';
import { fetchUser, userFetched, userFetchError } from 'Redux/_actions/profile';
import { connectWithLifecycle } from 'react-lifecycle-component';
import { userService } from 'Utils/User.service';
import Profile from './Profile';

const mapStateToProps = state =>({
    posts: state.timeline.posts,
    postsFetchError: state.timeline.fetchError,
    user: state.profile.user,
    userFetchError: state.profile.fetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUser);

        fetchBackend(process.env.REACT_APP_USER_API, `user/${userService.getConnectedUser()}`)
        .then( user => dispatch(userFetched(user)))
        .catch(err => dispatch(userFetchError(err)));

        dispatch(fetchPosts());

        fetchBackend(process.env.REACT_APP_TIMELINE_API, "routes")
        .then(data => dispatch(postsFetched(data)))
        .catch( err  => dispatch(
            postsFetchError(err))
        );
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
