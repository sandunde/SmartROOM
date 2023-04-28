import BarC from "../Components/BarC";
import BarI from "../Components/BarI";
import Data from "../Dummy/dummyData2.json";

const Report = () => {
  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "left" }}>
        <div>
          <div
            style={{
              backgroundColor: "white",
              width: "65vh",
              height: "40vh",
              marginTop: "5vh",
              marginLeft: "-2vh",
              boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginLeft: "25px", paddingTop: "2vh" }}>Summary (Temperature)</h3>
            <BarC />
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "65vh",
              height: "40vh",
              marginTop: "5vh",
              marginLeft: "-2vh",
              boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginLeft: "25px", paddingTop: "2vh" }}>Summary (Intensity)</h3>
            <BarI />
          </div>
        </div>
        <div>
          <div
            style={{
              width: "65vh",
              height: "88vh",
              backgroundColor: "white",
              marginLeft: "10vh",
              marginTop: "4.5vh",
            }}
          >
            <h3 style={{ marginLeft: "25px", paddingTop: "2vh" }}>
              Activity Overview
            </h3>
            <ul className="round">
              {Data.map((post) => {
                return (
                  <>
                    <li>{post.module}</li>
                    <p>{post.date}</p>
                    <div className="vertical-line"></div>
                  </>
                );
              })}
              <li>A/C OFF</li>
              <p>06 JUL 10:50 PM</p>
              <div className="vertical-line2"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
