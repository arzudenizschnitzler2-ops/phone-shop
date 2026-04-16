import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Detail() {
  const { id } = useParams();
  const { produkte, produktInWarenkorb } = useShop();

  const produkt = produkte.find((p) => String(p.id) === id);

  if (!produkt) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Produkt nicht gefunden</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* Linke Seite – Produktdarstellung */}
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "30px",
            background: produkt.farbe,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "80px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          📱
        </div>

        {/* Rechte Seite – Produktinformationen */}
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ marginTop: 0, fontSize: "42px" }}>
            {produkt.name}
          </h1>

          <p style={{ color: "#475569", fontSize: "18px", lineHeight: "1.6" }}>
            {produkt.beschreibung}
          </p>

          {/* Zusätzliche Infos */}
          <ul style={{ marginTop: "20px", color: "#334155" }}>
            <li>✔ Hochwertiges Material</li>
            <li>✔ Modernes Design</li>
            <li>✔ Perfekt für dein Smartphone</li>
          </ul>

          <h2 style={{ marginTop: "20px", fontSize: "28px" }}>
            Preis: {produkt.preis.toFixed(2)} €
          </h2>

          <button
            onClick={() => produktInWarenkorb(produkt)}
            style={{
              marginTop: "20px",
              padding: "14px 20px",
              background: "linear-gradient(90deg, #2563eb, #3b82f6)",
              color: "white",
              border: "none",
              borderRadius: "14px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;