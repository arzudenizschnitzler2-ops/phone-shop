import { useEffect } from "react";
import InfoKarte from "../components/InfoKarte";

function Home() {
  useEffect(() => {
  console.log("Startseite geladen");
}, []);
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
          padding: "30px",
          borderRadius: "24px",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          marginBottom: "30px",
          border: "1px solid #e5eefc"
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "52px", marginBottom: "12px", color: "#0f172a" }}>
          Willkommen bei Phone Shop
        </h2>
        <p style={{ margin: 0, fontSize: "26px", color: "#475569" }}>
          Hier findest du modernes Handy-Zubehör.
        </p>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        <InfoKarte
          titel="Moderne Produkte"
          text="Cases, Kabel und Panzerglas für dein Smartphone."
        />
        <InfoKarte
          titel="Einfacher Einkauf"
          text="Produkte auswählen und schnell in den Warenkorb legen."
        />
        <InfoKarte
          titel="Praktisches Design"
          text="Ein übersichtlicher Shop mit schöner Darstellung."
        />
      </div>
    </div>
  );
}

export default Home;