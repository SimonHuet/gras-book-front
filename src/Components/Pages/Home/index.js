import fetchBackend from 'Utils/fetchBackend';
import { postsFetched, fetchPosts , postsFetchError } from 'Redux/_actions/posts';
import { connectWithLifecycle } from 'react-lifecycle-component';

import Home from './Home';

const mapStateToProps = state =>({
    posts: state.timeline.posts,
    fetchError: state.timeline.FetchError
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    componentDidMount: () => {
        dispatch(fetchPosts());

        fetchBackend(process.env.REACT_APP_TIMELINE_API, "routes")
        .then(data => dispatch(postsFetched(data)))
        .catch( err  => dispatch(
            postsFetchError(err))
        );
    }
})

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
