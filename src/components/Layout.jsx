import { Outlet } from 'react-dom/client';
import AppBar from './AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
