import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

function ProduktKarte({ produkt }) {
  const navigate = useNavigate();
  const { produktInWarenkorb } = useShop();

  return (
    <div
      style={{
        backgroundColor: produkt.farbe,
        padding: '26px',
        borderRadius: '22px',
        width: '270px',
        boxShadow: '0 12px 24px rgba(15, 23, 42, 0.10)',
        transition: '0.3s',
        border: '1px solid rgba(255,255,255,0.5)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      onClick={() => navigate(`/detail/${produkt.id}`)}
    >
      <div
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '14px',
          backgroundColor: 'rgba(255,255,255,0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          marginBottom: '18px',
        }}
      >
        📱
      </div>

      <h3 style={{ marginTop: 0, marginBottom: '10px', fontSize: '30px', lineHeight: '1.2' }}>
        {produkt.name}
      </h3>

      <p style={{ margin: 0, color: '#475569', minHeight: '48px' }}>
        {produkt.beschreibung}
      </p>

      <p
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          marginTop: '14px',
          marginBottom: '18px',
          color: '#1e293b',
        }}
      >
        Preis: {produkt.preis.toFixed(2)}€
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          produktInWarenkorb(produkt);
        }}
        style={{
          marginTop: '10px',
          padding: '11px 16px',
          background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        In den Warenkorb
      </button>
    </div>
  );
}

export default ProduktKarte;