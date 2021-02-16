import PropTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  if (friends.lenght === 0) return null;
  return <ul className={s.friendList}>{friends.map(Friend)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
