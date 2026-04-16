import { createContext, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ShopContext = createContext();

const startProdukte = [
  {
    id: 1,
    name: 'iPhone Case',
    preis: 19.99,
    beschreibung: 'Schutz für dein Smartphone.',
    farbe: '#dbeafe',
  },
  {
    id: 2,
    name: 'USB-C Kabel',
    preis: 14.99,
    beschreibung: 'Schnelles Laden.',
    farbe: '#dcfce7',
  },
  {
    id: 3,
    name: 'Panzerglas',
    preis: 9.99,
    beschreibung: 'Extra Schutz fürs Display.',
    farbe: '#fef3c7',
  },
];

export function ShopProvider({ children }) {
  const [produkte, setProdukte] = useLocalStorage('produkte', startProdukte);
  const [warenkorb, setWarenkorb] = useLocalStorage('warenkorb', []);

  const produktSpeichern = (produkt) => {
    const neuesProdukt = {
      id: Date.now(),
      ...produkt,
      farbe: '#e0f2fe',
    };
    setProdukte([...produkte, neuesProdukt]);
  };

  const produktInWarenkorb = (produkt) => {
    setWarenkorb([...warenkorb, produkt]);
  };

  const warenkorbLeeren = () => {
    setWarenkorb([]);
  };

  const gesamtpreis = useMemo(() => {
    return warenkorb.reduce((sum, p) => sum + p.preis, 0);
  }, [warenkorb]);

  return (
    <ShopContext.Provider
      value={{
        produkte,
        warenkorb,
        gesamtpreis,
        produktSpeichern,
        produktInWarenkorb,
        warenkorbLeeren,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}