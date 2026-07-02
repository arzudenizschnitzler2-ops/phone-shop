import { NavLink } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

function Navbar() {
  const { warenkorb } = useShop();

  const linkStyle = ({ isActive }) => ({
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 16px',
    borderRadius: '12px',
    backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
    transition: '0.3s',
  });

  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)',
        color: 'white',
        padding: '26px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        boxShadow: '0 10px 30px rgba(37, 99, 235, 0.25)',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '36px' }}>Phone Shop</h1>
        <p style={{ margin: '8px 0 0 0', opacity: 0.95 }}>
          Moderner Shop für Handy-Zubehör
        </p>
      </div>

      <nav
        style={{
          display: 'flex',
          gap: '14px',
          flexWrap: 'wrap',
        }}
      >
        <NavLink to="/" end style={linkStyle}>
          Startseite
        </NavLink>

        <NavLink to="/produkte" style={linkStyle}>
          Produkte
        </NavLink>

        <NavLink to="/warenkorb" style={linkStyle}>
          Warenkorb ({warenkorb.length})
        </NavLink>
      <NavLink to="/login" style={linkStyle}>
  Login
</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;