import styled from 'styled-components';

const Navbar = () => {
  const Links = [
    { name: 'HOME', link: '#headline' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'ABOUT', link: '#about-me' },
    { name: 'CONTACT', link: '#contact' },
  ];

  return (
    <Section className="shadow-md w-full top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2" />
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {
          Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
            </li>
          ))
        }
        </ul>
      </div>
    </Section>
  );
};

export default Navbar;

const Section = styled.header`
z-index: 999;
ion-icon {
  color: #6936f5;
}
`;
