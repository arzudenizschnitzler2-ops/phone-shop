import { useShop } from "../context/ShopContext";

function Warenkorb() {
  const { warenkorb, gesamtpreis, warenkorbLeeren } = useShop();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "52px", marginTop: 0, marginBottom: "24px" }}>
        Mein Warenkorb
      </h2>

      {warenkorb.length === 0 ? (
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
            maxWidth: "430px",
            border: "1px solid #e5eefc"
          }}
        >
          <p style={{ margin: 0, fontSize: "18px", color: "#475569" }}>
            Warenkorb ist leer.
          </p>
        </div>
      ) : (
        <div>
          {warenkorb.map((produkt, index) => (
            <div
              key={`${produkt.id}-${index}`}
              style={{
                backgroundColor: "white",
                padding: "18px",
                borderRadius: "16px",
                marginBottom: "12px",
                boxShadow: "0 10px 22px rgba(15,23,42,0.08)",
                maxWidth: "430px",
                border: "1px solid #e5eefc"
              }}
            >
              <h3 style={{ margin: "0 0 8px 0" }}>{produkt.name}</h3>
              <p style={{ margin: 0, color: "#475569" }}>
                Preis: {produkt.preis.toFixed(2)} €
              </p>
            </div>
          ))}

          <div
            style={{
              background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)",
              padding: "20px",
              borderRadius: "18px",
              maxWidth: "430px",
              marginTop: "18px",
              boxShadow: "0 10px 22px rgba(15,23,42,0.08)",
              border: "1px solid #dbeafe"
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "14px", color: "#1e3a8a" }}>
              Gesamtpreis: {gesamtpreis.toFixed(2)} €
            </h3>

            <button
              onClick={warenkorbLeeren}
              style={{
                padding: "11px 16px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(90deg, #ef4444 0%, #f97316 100%)",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Warenkorb leeren
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Warenkorb;