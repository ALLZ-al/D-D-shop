import {CartWidget} from './CartWidget'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>D&D</h1>
      <ul className='sectionList'>
        <li>Dados</li>
        <li>Figuras</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
