import Cover from "./components/Cover";
import bg from "./assets/bg.jpg";
import sp from "./assets/speaker1.png";
let COVER = window?.__COVER__ || {
  name: "Flavio",
  surname: "Castelli",
  company: "Microsoft",
  episodeNumber: 1,
  image:
    "https://res.cloudinary.com/brainrepo/image/upload/v1683300525/qz1elsotmcsu9umfhhkm.png",
};

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        flexShrink: 1,
      }}
    >
      <div style={{ height: "50vh", width: "50vw" }}>
        {/* <Cover
          name="Matteo"
          surname="Collina"
          image={speaker1}
          episodeNumber={103}
          company="Nearform"
          variant="TL"
        ></Cover>
      </div>
      <div style={{ height: "50vh", width: "50vw" }}>
        <Cover
          name="Luca"
          surname="Mezzalira"
          image={speaker}
          episodeNumber={104}
          company="AWS"
          variant="TR"
        ></Cover>
      </div>
      <div style={{ height: "50vh", width: "50vw" }}>
        <Cover
          name="Edoardo"
          surname="Dusi"
          image={speaker2}
          episodeNumber={104}
          company="SPARK FABRIK"
          variant="BL"
        ></Cover>
      </div>
      <div style={{ height: "50vh", width: "50vw" }}>
        <Cover
          name="Gabriele"
          surname="Santomaggio"
          image={speaker3}
          episodeNumber={103}
          company="VMware - rabbitmq"
          variant="BR"
        ></Cover>
      </div> */}
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={COVER.image}
            alt=""
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              height: "100vh",

              filter:
                "grayscale(100%), drop-shadow(10px 10px 5px rgba(0, 0, 0, 1)) ",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "4vh",
              left: "2vh",
            }}
          >
            <div
              style={{
                color: "#FFC901",
                fontSize: "4vh",
                display: "inline",

                zIndex: 300,
              }}
              className="message-text"
            >
              EP. {COVER.episodeNumber}
            </div>

            <div
              style={{
                color: "white",
                fontSize: "10vh",
              }}
              className="message-text"
            >
              {COVER.name} &nbsp;
              {COVER.surname}
            </div>

            <div
              style={{
                color: "#FFC901",
                fontSize: "6vh",
                display: "inline",
              }}
              className="message-text"
            >
              {COVER.company}
            </div>
          </div>

          {/* <Cover
            name={COVER.name}
            surname={COVER.surname}
            image={COVER.image}
            episodeNumber={COVER.episodeNumber}
            company={COVER.company}
            variant={COVER.variant}
            theme={COVER.theme}
          ></Cover> */}
        </div>
      </div>
    </div>
  );
}

export default App;
