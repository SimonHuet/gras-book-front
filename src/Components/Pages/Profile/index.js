import { connectWithLifecycle } from 'react-lifecycle-component';
import fetchBackend from 'Utils/fetchBackend';
import { fetchUserPosts, userPostsFetched, userPostsFetchError } from 'Redux/_actions/profile';
import Profile from './Profile';


const mapStateToProps = state =>({
    posts: state.profile.userPosts,
    isFetchingPosts: state.profile.isFetchingUserPosts,
    postsFetchError: state.profile.userPost,
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUserPosts());

        fetchBackend(process.env.REACT_APP_POSTS_API, `/posts/1`)
        .then(data => dispatch(userPostsFetched(data)))
        .catch( err  => dispatch(
            userPostsFetchError(err))
        );
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
