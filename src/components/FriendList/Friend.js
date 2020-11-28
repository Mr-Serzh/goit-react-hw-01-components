import PropTypes from 'prop-types';

export default function Friend(props) {
    const { avatar, name, isOnline, id } = props
    
    return (
        <div>
            <li key={id} className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
        </div>
    )
    
}

Friend.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};