import fetchBackend from 'Utils/fetchBackend';
import { postsFetched, fetchPosts, postsFetchError } from 'Redux/_actions/posts';
import { connectWithLifecycle } from 'react-lifecycle-component';
import Home from './Home';


const mapStateToProps = state =>({
    posts: state.posts.posts,
    fetchError: state.posts.fetchError
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => {
    dispatch(fetchPosts());

    fetchBackend(process.env.REACT_APP_POST_API, `posts?limit=15`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        method: 'GET'
    })
        .then(({ body }) => dispatch(postsFetched(body)))
        .catch(err => dispatch(postsFetchError(err)));

    }
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Home);
