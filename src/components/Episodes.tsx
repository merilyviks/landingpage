import { FaSpotify, FaYoutube } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

export default function Episodes() {
  const episodes = [
    {
      id: 1,
      name: "edu võti on...",
      url: "/guest1.jpg",
      description:
        "...enesedisipliinist, selle tähendusest ning selle saavutamisest",
    },
    {
      id: 2,
      name: "ettevõtlus vs startup",
      url: "/guest2.jpg",
      description:
        "Mis vahet on klassikalisel ettevõtlusel ja startup-il. Ettevõtte perspektiivist on rääkimas täna Mari Tamm ja startupist Laura Põldmaa. Kumba oleks lihtsam alustada?",
    },
    {
      id: 3,
      name: "hea une saladus",
      url: "/guest3.jpg",
      description:
        "Mis vahet on klahuhiuhuihssikalisel ettevõtlusel ja startup-il. Ettevõtte perspektiivist on rääkimas täna Mari Tamm ja startupist Laura Põldmaa. Kumba oleks lihtsam alustada?",
    },
    {
      id: 4,
      name: "kas Ameerikas on päriselt hea elada?",
      url: "/guest4.jpg",
      description:
        "Mis vahet on klassikalisel ettevõtlusel ja startup-il. Ettevõtte perspektiivist on rääkimas täna Mari Tamm ja startupist Laura Põldmaa. Kumba oleks lihtsam alustada?",
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
