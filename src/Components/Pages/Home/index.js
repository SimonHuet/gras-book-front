/* eslint-disable import/no-unresolved */
// import fetchBackend from 'Utils/fetchBackend';
// import { postsFetched, fetchPosts, postsFetchError } from 'Redux/_actions/posts';
import { connectWithLifecycle } from 'react-lifecycle-component';

import Home from './Home';

const mapStateToProps = state =>({
    posts: state.posts,
    fetchError: state.fetchError
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => {
    // dispatch(fetchPosts());

        /* fetchBackend(process.env.REACT_APP_POST_API, "routes")
        .then(data => dispatch(postsFetched(data)))
        .catch( err  => dispatch(
            postsFetchError(err))
        ); */
    }
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Home);
