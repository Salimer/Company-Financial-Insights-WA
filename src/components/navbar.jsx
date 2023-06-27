import styled from 'styled-components';

const Navbar = () => (
  <Section className="shadow-md w-full top-0 left-0 bg-navbarBg">
    <ul className="flex items-center justify-between py-4 px-10 text-white">
      <li>
        <ion-icon name="arrow-back-outline" />
      </li>
      <li>
        home
      </li>
      <li>
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
export default Navbar;

const Section = styled.header`
z-index: 999;
ion-icon {
  color: white;
}
`;
