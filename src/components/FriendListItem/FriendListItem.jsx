import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.friendListItem}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <span className="name">{name}</span>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
