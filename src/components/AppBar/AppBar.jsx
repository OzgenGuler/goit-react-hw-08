import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '50px',
        alignItems: 'center',
        padding: '20px 40px',
        border: '1px solid #f0f0f0',
        hover: {
          boxShadow: '0 20px 10px #f0f0f0',
          transition: 'box-shadow 0.3s ease-in-out',
        },
      }}
    >
      <Navigation
        style={{
          hover: {
            boxShadow: '0 20px 10px #f0f0f0',
            transition: 'box-shadow 0.3s ease-in-out',
            transform: 'scale(1.05)',
          },
        }}
      />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
