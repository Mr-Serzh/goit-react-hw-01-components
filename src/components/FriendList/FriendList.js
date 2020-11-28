import PropTypes from 'prop-types';
import Friend from './Friend'

export default function FriendList({friends}) {
    
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id} className="item">
                <Friend
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

