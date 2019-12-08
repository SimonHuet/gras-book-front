import {
  groupUsersFetched,
  fetchGroupUsers,
  groupUsersFetchError,
} from 'Redux/_actions/groupUsers';
import fetchBackend from 'Utils/fetchBackend';

import { connectWithLifecycle } from 'react-lifecycle-component';
import { messagesFetched, messagesFetchError, fetchMessages } from 'Redux/_actions/messages';
import Messaging from './messaging';

const mapStateToProps = state => ({
  users: state.users,
  fetchError: state.FetchError,
  groups: state.groups,
  groupUsers: state.groupUsers,
  posts: state.posts,
  messages: state.messages,
});

const mapDispatchToProps = (Dispatch, ownProps) => ({
  componentDidMount: () => {
    Dispatch(fetchGroupUsers());
    Dispatch(fetchMessages());
    fetchBackend(process.env.REACT_APP_USER_API, `groups/${ownProps.match.params.id}/Users`, {
      'Access-Control-Allow-Origin': '*',
    })
      .then(data => Dispatch(groupUsersFetched(data.body)))
      .catch(err => Dispatch(groupUsersFetchError(err)));
    fetchBackend(
      process.env.REACT_APP_MESSAGE_API,
      `messages/?objectUUID=${ownProps.match.params.id}&objectType=group`,
      { 'Access-Control-Allow-Origin': '*' }
    )
      .then(data => Dispatch(messagesFetched(data.body)))
      .catch(err => Dispatch(messagesFetchError(err)));
  },
});
export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Messaging);
