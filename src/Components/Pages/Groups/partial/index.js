import form from './form';
import { usersFetched, fetchUsers ,usersFetchError } from 'Redux/_actions/users';
import { connectWithLifecycle } from 'react-lifecycle-component';

const mapStateToProps = state =>({
    users: state.group.users,
    fetchError: state.group.FetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUsers());

        fetchBackend(process.env.REACT_APP_USER_API, "routes")
        .then(data => dispatch(usersFetched(data)))
        .catch( err  => dispatch(
            usersFetchError(err))
        );
    }
});

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(form);
