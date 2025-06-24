import { NavLink } from 'react-dom/client';

const AuthNav = () => {
  return (
    <nav style={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default AuthNav;
