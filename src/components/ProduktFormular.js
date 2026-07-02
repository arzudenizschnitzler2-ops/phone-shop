import { useState } from "react";

function ProduktFormular({ onProduktHinzufuegen }) {
  const [produktname, setProduktname] = useState("");
  const [preis, setPreis] = useState("");
  const [fehler, setFehler] = useState("");

  const formularAbsenden = (e) => {
    e.preventDefault();

    if (produktname.trim() === "" || preis.trim() === "") {
      setFehler("Bitte alle Felder ausfüllen.");
      return;
    }

    if (isNaN(preis) || Number(preis) <= 0) {
      setFehler("Bitte einen gültigen Preis eingeben.");
      return;
    }

    onProduktHinzufuegen({
      name: produktname,
      preis: parseFloat(preis),
      beschreibung: "Neues Produkt vom Benutzer",
    });

    setProduktname("");
    setPreis("");
    setFehler("");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "28px",
        borderRadius: "22px",
        boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
        border: "1px solid #e5eefc",
        maxWidth: "430px",
        marginBottom: "30px",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "18px",
          fontSize: "28px",
          color: "#1e3a8a",
        }}
      >
        Neues Produkt hinzufügen
      </h3>

      <p
        style={{
          marginTop: 0,
          marginBottom: "18px",
          color: "#64748b",
          lineHeight: "1.5",
        }}
      >
        Füge ein neues Produkt mit Name und Preis hinzu.
      </p>

      <form onSubmit={formularAbsenden}>
        <div style={{ marginBottom: "14px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "bold",
              color: "#334155",
            }}
          >
            Produktname
          </label>

          <input
            type="text"
            placeholder="z. B. AirPods Hülle"
            value={produktname}
            onChange={(e) => setProduktname(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "15px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "bold",
              color: "#334155",
            }}
          >
            Preis
          </label>

          <input
            type="text"
            placeholder="z. B. 29.99"
            value={preis}
            onChange={(e) => setPreis(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "15px",
              boxSizing: "border-box",
            }}
          />
        </div>

        {fehler && (
          <div
            style={{
              marginBottom: "14px",
              padding: "10px 12px",
              borderRadius: "10px",
              backgroundColor: "#fee2e2",
              color: "#b91c1c",
              fontWeight: "bold",
            }}
          >
            {fehler}
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px 16px",
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: "0 8px 18px rgba(37,99,235,0.22)",
          }}
        >
          Produkt speichern
        </button>
      </form>
    </div>
  );
}

export default ProduktFormular;