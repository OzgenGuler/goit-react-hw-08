import { Navigate } from 'react-dom/client';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../components/redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
