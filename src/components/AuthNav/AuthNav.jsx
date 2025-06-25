// src/components/AuthNav.jsx
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <nav style={{ display: 'flex', gap: '15px' }}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
}
