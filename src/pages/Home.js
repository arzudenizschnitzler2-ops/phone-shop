import { useEffect } from "react";
import InfoKarte from "../components/InfoKarte";

function Home() {
  useEffect(() => {
    console.log("Startseite geladen");
  }, []);

  return (
    <div className="px-5 py-5">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50 p-8 shadow-lg">
        <h2 className="mb-3 text-5xl font-bold text-slate-900">
          Willkommen bei Phone Shop
        </h2>

        

        <p className="text-xl text-slate-600">
          Hier findest du modernes Handy-Zubehör.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-5">
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