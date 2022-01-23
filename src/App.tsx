import Cover from "./components/Cover";
import speaker from "./assets/speaker.png";
import speaker1 from "./assets/speaker1.png";
import speaker2 from "./assets/speaker2.png";
import speaker3 from "./assets/speaker3.png";

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
        <Cover
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
      </div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Cover
          name="Matteo"
          surname="Collina"
          image={speaker1}
          episodeNumber={103}
          company="Nearform"
        ></Cover>
      </div>
      <div style={{ height: "60vh", width: "100vw" }}>
        <Cover
          name="Matteo"
          surname="Collina"
          image={speaker1}
          episodeNumber={103}
          company="Nearform"
        ></Cover>
      </div>
    </div>
  );
}

export default App;
