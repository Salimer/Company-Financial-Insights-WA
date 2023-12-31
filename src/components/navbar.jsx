import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathNameSplit = pathname.split('/');
  const newPath = pathNameSplit[pathNameSplit.length - 2];
  return (
    <Section className="shadow-md w-full top-0 left-0 bg-navbarBg border border-white">
      <ul className="flex items-center justify-between py-4 px-10 text-white">
        <NavLink to={`/${newPath}`}>
          <ion-icon name="arrow-back-outline" />
        </NavLink>
        <li className="px-4 text-center">
          Company Financial Insights
        </li>
        <li className="flex gap-1 md:gap-6">
          <span>
            <ion-icon name="mic-outline" />
          </span>
          <span>
            <ion-icon name="settings-outline" />
          </span>
        </li>
      </ul>
    </Section>
  );
};
export default Navbar;

const Section = styled.header`
z-index: 999;
ion-icon {
  color: white;
}
`;
