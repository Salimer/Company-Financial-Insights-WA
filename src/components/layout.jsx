import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

const Layout = () => (
  <>
    <NavBar />
    <div className="container">
      <Outlet />
    </div>
  </>
);

export default Layout;
