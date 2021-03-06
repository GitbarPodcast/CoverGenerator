import Cover from "./components/Cover";

let COVER = window?.__COVER__ || {
  name: "Test",
  surname: "Test",
  company: "Test",
  episodeNumber: 1,
  image:
    "https://res.cloudinary.com/brainrepo/image/upload/v1643752139/lytp0sdklrfzuhntk3iz.png",
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
        <div style={{ height: "100vh", width: "100vw" }}>
          <Cover
            name={COVER.name}
            surname={COVER.surname}
            image={COVER.image}
            episodeNumber={COVER.episodeNumber}
            company={COVER.company}
            variant={COVER.variant}
            theme={COVER.theme}
          ></Cover>
        </div>
        {/* <div style={{ height: "60vh", width: "100vw" }}>
        <Cover
          name="Matteo"
          surname="Collina"
          image={speaker1}
          episodeNumber={103}
          company="Nearform"
        ></Cover> */}
      </div>
    </div>
  );
}

export default App;
