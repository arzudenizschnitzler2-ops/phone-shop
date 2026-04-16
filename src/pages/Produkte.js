import ProduktKarte from "../components/ProduktKarte";
import ProduktFormular from "../components/ProduktFormular";
import { useShop } from "../context/ShopContext";

function Produkte() {
  const { produkte, produktSpeichern } = useShop();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "52px", marginTop: 0, marginBottom: "24px" }}>
        Produkte
      </h2>

      <ProduktFormular onProduktHinzufuegen={produktSpeichern} />

      <div style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
        {produkte.map((produkt) => (
          <ProduktKarte
            key={produkt.id}
            produkt={produkt}
          />
        ))}
      </div>
    </div>
  );
}

export default Produkte;