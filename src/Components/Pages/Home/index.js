import fetchBackend from 'Utils/fetchBackend';
import { postsFetched, fetchPosts, postsFetchError } from 'Redux/_actions/posts';
import { connectWithLifecycle } from 'react-lifecycle-component';

import Home from './Home';

const mapStateToProps = state => ({
  posts: state.posts,
  fetchError: state.fetchError,
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => {
    dispatch(fetchPosts());

    fetchBackend(process.env.REACT_APP_POST_API, 'posts?limit=30')
      .then(data => console.log(data)) //dispatch(postsFetched(data.body)))
      .catch(err => dispatch(postsFetchError(err)));
  },
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Home);
