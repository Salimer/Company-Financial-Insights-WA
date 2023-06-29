import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
