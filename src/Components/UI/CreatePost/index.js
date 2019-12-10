import {
    connectWithLifecycle
} from 'react-lifecycle-component';
import CreatePost from './CreatePost';

const mapStateToProps = state => ({
    users: state.users,
    fetchError: state.FetchError,
    posts: state.posts,
});

export default connectWithLifecycle(mapStateToProps)(CreatePost);
