import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

const startProdukte = [
  {
    id: 1,
    name: "iPhone Case",
    preis: 19.99,
    beschreibung: "Schutz für dein Smartphone.",
    farbe: "#dbeafe",
  },
  {
    id: 2,
    name: "USB-C Kabel",
    preis: 14.99,
    beschreibung: "Schnelles Laden.",
    farbe: "#dcfce7",
  },
  {
    id: 3,
    name: "Panzerglas",
    preis: 9.99,
    beschreibung: "Extra Schutz fürs Display.",
    farbe: "#fef3c7",
  },
  {
    id: 4,
    name: "Smart Ring Charger",
    preis: 39.99,
    beschreibung: "Kabelloses Ladegerät für Smart Rings.",
    farbe: "#d8e8ff",
  },
  {
    id: 5,
    name: "Magnetic Phone Grip",
    preis: 19.99,
    beschreibung: "Magnetischer Handyhalter für besseren Halt.",
    farbe: "#dff7df",
  },
  {
    id: 6,
    name: "Privacy Camera Cover Set",
    preis: 12.99,
    beschreibung: "Schützt die Smartphone-Kamera vor Kratzern.",
    farbe: "#fff0c9",
  },
];

export function ShopProvider({ children }) {
  const [produkte, setProdukte] = useState(startProdukte);
  const [warenkorb, setWarenkorb] = useState([]);

  function addToCart(produkt) {
  setWarenkorb((prev) => [...prev, produkt]);
}

function produktInWarenkorb(produkt) {
  addToCart(produkt);
}

function removeFromCart(id) {
  setWarenkorb((prev) => prev.filter((item) => item.id !== id));
}

  return (
    <ShopContext.Provider
     value={{
  produkte,
  setProdukte,
  warenkorb,
  setWarenkorb,
  addToCart,
  produktInWarenkorb,
  removeFromCart,
}}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}