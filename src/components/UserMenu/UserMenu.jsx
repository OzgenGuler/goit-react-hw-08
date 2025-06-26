import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logOut } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        hover: {
          boxShadow: '0 20px 10px #f0f0f0',
          transition: 'box-shadow 0.3s ease-in-out',
          transform: 'scale(1.05)',
        },
      }}
    >
      <p style={{ margin: '10px', color: 'white' }}>Welcome, {user.name}</p>
      <button style={{ color: '##f0f0f0' }} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
