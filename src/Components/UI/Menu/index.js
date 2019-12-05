import fetchBackend from 'Utils/fetchBackend';
import { userFetched, fetchUser, userFetchError } from 'Redux/_actions/profile';
import { connectWithLifecycle } from 'react-lifecycle-component';

import Menu from './Menu';

const mapStateToProps = state => ({
    user: state.user,
    fetchError: state.FetchError
});

const mapDispatchToProps = dispatch => ({
    componentDidMount: () => {
        dispatch(fetchUser());
        fetchBackend(`${process.env.REACT_APP_USER_API  }`, "/users/98ff2b02-0471-4803-abc5-97ab86ea8659")
        .then(data => dispatch(userFetched(data.body)))
        .catch(err => dispatch(userFetchError(err)));
    }
});     

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Menu);
