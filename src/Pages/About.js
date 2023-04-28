import arduinoBoard from "../Assets/arduinoBoard.png";
import smartRoom from "../Assets/smartRoom.jpeg";

const About = () => {
  return (
    <div className="App">
      <div
        style={{
          marginTop: "10vh",
          backgroundColor: "#2E93B7",
          borderRadius: "125px",
          width: "120vh",
          height: "40vh",
          textAlign: "center",
          marginLeft: "6vh",
        }}
      >
        <h2 style={{ marginTop: "4vh" }}>About Our Project</h2>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "26px",
            marginTop: "4vh",
          }}
        >
          The solution proposed, SmartROOM, is a system implemented with the
          main objective of monitoring
          <br /> and managing comfort and convenience focused devices within the
          user’s living space <br />
          (For the purpose of a testing prototype, the target area will be
          limited to one specific area of one room).
          <br /> It’s basic functionalities would be to sense and analyze the
          environmental conditions of this target area <br />
          (i.e. Temperature, Humidity, Light Intensity), then provide necessary
          instructions to the respective
          <br /> devices in order to achieve the user’s comfort while ensuring
          minimum evergy consumption. SmartROOM
          <br /> will also target on monitoring the presence and activity of the
          user, in order to ensure no unnecessary
          <br /> devices remain turned on during periods of the user’s absence
          or inactivity.
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "5vh"}}>
        <div style={{marginLeft: "10vh"}}>
          <img src={arduinoBoard} width={440}/>
        </div>
        <div style={{paddingLeft: "15vh"}}>
        <img src={smartRoom} width={440}/>
        </div>
      </div>
    </div>
  );
};

export default About;
