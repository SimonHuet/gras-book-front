import { connectWithLifecycle } from 'react-lifecycle-component';
import form from './form';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
});

// erreur
export default connectWithLifecycle(mapStateToProps)(form);
// export default form;
