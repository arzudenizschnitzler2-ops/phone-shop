import { useShop } from "../context/ShopContext";

function Warenkorb() {
  const { warenkorb } = useShop();

  const gesamtpreis = warenkorb.reduce(
    (summe, produkt) => summe + produkt.preis,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          fontSize: "52px",
          marginTop: 0,
          marginBottom: "24px",
        }}
      >
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
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "20px",
                color: "#1e3a8a",
              }}
            >
              Gesamtpreis: {gesamtpreis.toFixed(2)} €
            </h3>

            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "14px 24px",
                background:
                  "linear-gradient(90deg, #ef4444 0%, #f97316 100%)",
                color: "white",
                border: "none",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 8px 18px rgba(239,68,68,0.3)",
                transition: "0.3s",
              }}
            >
              🗑️ Warenkorb leeren
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Warenkorb;