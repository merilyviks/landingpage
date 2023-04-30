export default function Support() {
  const supporters = [
    "Jaan Tamm",
    "Kristo Sepp",
    "Kati Mägi",
    "Marek Lepik",
    "Kerli Kask",
    "Andres Luik",
    "Eva Saar",
    "Tõnis Kala",
    "Liisa Paju",
    "Jüri Koppel",
    "Elina Oja",
    "Kaarel Laas",
    "Anu Must",
    "Johannes Linde",
    "Anneli Veski",
    "Peeter Kütt",
    "Mari Ratas",
    "Taavi Kivi",
    "Merle Murumets",
    "Raimond Kallas",
    "Tiina Järve",
    "Andrus Vaher",
    "Airi Kask",
    "Priit Pärn",
    "Kadri Kruus",
    "Sander Kukk",
    "Mall Kõvamees",
    "Margus Leppik",
    "Ingrid Randla",
    "Rene Puusepp",
    "Kaisa Kangur",
    "Hans Laid",
    "Erki Pärnpuu",
    "Maire Tomingas",
    "Rain Tamm",
    "Lea Pihel",
    "Toomas Teder",
    "Triinu Väli",
    "Arno Tamme",
    "Ave Kalmus",
    "Margo Tiiman",
    "Liina Vainumetsa",
    "Erik Jürisson",
    "Villem Ilves",
  ];

  return (
    <div className="support" id="toetajad">
      <div className="supporters-container">
        {supporters.map((supporter, index) => (
          <p key={index}>{supporter}</p>
        ))}
      </div>
      <h1 className="title">Toetajad</h1>
    </div>
  );
}
