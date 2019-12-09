<<<<<<< HEAD
import Menu from './Menu';

export default Menu;
=======
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
        fetchBackend('http://localhost:8888', 'users/2ab170a3-e9b0-4ac6-ae21-700600e63f28')
        .then(data => dispatch(userFetched(data.body)))
        .catch(err => dispatch(userFetchError(err)));
    }
});     

export default connectWithLifecycle(
    mapStateToProps,
    mapDispatchToProps,
)(Menu);
>>>>>>> de1e291b8b510140d31db06456698debf57ecb1f
