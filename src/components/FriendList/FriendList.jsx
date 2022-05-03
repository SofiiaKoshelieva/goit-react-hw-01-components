import PropTypes from 'prop-types';
import s from './FriendList.module.css';
function Friends({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={s.item}>
            <span
              className={s.status}
              style={{
                backgroundColor: isOnline ? '#3cb371' : '#ff0000',
              }}
            ></span>
            <img
              className={s.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};
export default Friends;
