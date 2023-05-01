import { FaSpotify, FaYoutube } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

export default function Episodes() {
  const episodes = [
    {
      id: 1,
      name: "1. Edu võti on...",
      url: "/guest1.jpg",
      description:
        "...enesedisipliinist, selle tähendusest ning selle saavutamisest",
    },
    {
      id: 2,
      name: "2. Ettevõtlus vs startup",
      url: "/guest2.jpg",
      description:
        "Mis vahet on klassikalisel ettevõtlusel ja startup-il. Ettevõtte perspektiivist on rääkimas täna Mari Tamm ja startupist Laura Põldmaa. Kumba oleks lihtsam alustada?",
    },
    {
      id: 3,
      name: "3. Hea une saladus",
      url: "/guest3.jpg",
      description:
        "Uneta me ei saa, kuid kas magamine on nii keeruline kui tundub. Kas tead, kuidas head unekvaliteeti tagada?",
    },
    {
      id: 4,
      name: "4. Kas Ameerikas on päriselt hea elada?",
      url: "/guest4.jpg",
      description:
        "Külas on meil Ameerikalne, kellega arutame plussidest ja miinustest välismaal. Kas pärastel ka käivad lapsed kuulikindla seljakotiga koolis?",
    },
  ];
  return (
    <div className="episodes" id="episoodid">
      <div className="episodes-container">
        {episodes.map((episode, index) => {
          return (
            <div
              className="episode"
              key={index}
              /* style={{
                backgroundImage: `url(${episode.url})`,
                objectFit: "cover",
              }} */
            >
              <div className="episode-info">
                <h2>{episode.name}</h2>
                <p>{episode.description}</p>
              </div>
              <div className="listen">
                <FaYoutube />
                <SiApplepodcasts />
                <FaSpotify />
              </div>
              <div
                className="episode-image"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%), url(${episode.url})`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
