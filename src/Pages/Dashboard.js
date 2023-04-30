import bulbImg from "../Assets/lightbulb.png";
import humanD from "../Assets/search.png";
import BarC from "../Components/BarC";
import Data from "../Dummy/dummyData1.json";

const Dashboard = () => {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #0048b2 , #0048b2, #3a88fd, #2370e0 )",
          width: "157vh",
          height: "15vh",
          borderBottomLeftRadius: "25px",
        }}
      >
        <h1 style={{ marginLeft: "40px", marginTop: "10px", color: "White" }}>
          Hello Dilan!
        </h1>
        <h3 style={{ marginLeft: "40px", marginTop: "-20px", color: "White" }}>
          We are on a mission to help you better manage your room.
        </h3>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div>
          <div
            style={{
              backgroundColor: "white",
              width: "75vh",
              height: "auto",
              marginTop: "5vh",
              marginLeft: "3vh",
              boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ marginLeft: "25px" }}>Summary (Temperature)</h3>
            <BarC />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginLeft: "2vh",
              marginTop: "3vh",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "36.5vh",
                height: "10vh",
                margin: "1vh",
                boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
                borderRadius: "8px",
                display: "flex",
              }}
            >
              <svg
                style={{ marginLeft: "50px", marginTop: "10px" }}
                width="72"
                height="73"
                viewBox="0 0 72 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="36"
                  cy="36.5"
                  r="34"
                  stroke="#E9ECEF"
                  stroke-width="2"
                />
                <path
                  d="M36 2.5C44.3437 2.5 52.3962 5.56812 58.6245 11.1203C64.8528 16.6725 68.8221 24.3211 69.7767 32.6101C70.7313 40.899 68.6046 49.2497 63.8014 56.0723C58.9983 62.8949 51.854 67.7132 43.7287 69.6098C35.6033 71.5065 27.0642 70.3492 19.7369 66.3581C12.4095 62.3671 6.80555 55.821 3.99173 47.966C1.1779 40.111 1.35069 31.4956 4.47722 23.7597"
                  stroke="#08B1BA"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M27.1904 44.784C26.8209 45.1944 26.854 45.8267 27.2645 46.1963C27.6749 46.5658 28.3072 46.5327 28.6767 46.1223L27.1904 44.784ZM44.7763 27.8042C44.7474 27.2527 44.2768 26.829 43.7253 26.8579L34.7376 27.3289C34.1861 27.3578 33.7624 27.8284 33.7913 28.3799C33.8202 28.9314 34.2908 29.3551 34.8423 29.3262L42.8313 28.9075L43.25 36.8965C43.2789 37.4481 43.7495 37.8717 44.301 37.8428C44.8525 37.8139 45.2762 37.3434 45.2473 36.7919L44.7763 27.8042ZM28.6767 46.1223L44.5208 28.5257L43.0345 27.1874L27.1904 44.784L28.6767 46.1223Z"
                  fill="#ADB5BD"
                />
              </svg>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  marginLeft: "5vh",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#8A92A6",
                  }}
                >
                  Temperature
                </p>
                <p style={{ marginTop: "-10px" }}>29.8°C</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "36.5vh",
                height: "10vh",
                margin: "1vh",
                boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
                borderRadius: "8px",
                display: "flex",
              }}
            >
              <svg
                style={{ marginLeft: "50px", marginTop: "10px" }}
                width="72"
                height="73"
                viewBox="0 0 72 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="35.5"
                  cy="36.5"
                  r="34"
                  stroke="#E9ECEF"
                  stroke-width="2"
                />
                <path
                  d="M35.4999 2.5C43.8437 2.5 51.8962 5.56812 58.1245 11.1203C64.3528 16.6725 68.322 24.3211 69.2766 32.6101C70.2312 40.899 68.1045 49.2497 63.3014 56.0723C58.4982 62.8949 51.354 67.7132 43.2286 69.6098C35.1033 71.5065 26.5642 70.3492 19.2369 66.3581C11.9095 62.3671 6.30553 55.821 3.4917 47.966"
                  stroke="#3A57E8"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M26.6904 44.784C26.3209 45.1944 26.354 45.8267 26.7645 46.1963C27.1749 46.5658 27.8072 46.5327 28.1767 46.1223L26.6904 44.784ZM44.2763 27.8042C44.2474 27.2527 43.7768 26.829 43.2253 26.8579L34.2376 27.3289C33.6861 27.3578 33.2624 27.8284 33.2913 28.3799C33.3202 28.9314 33.7908 29.3551 34.3423 29.3262L42.3313 28.9075L42.75 36.8965C42.7789 37.4481 43.2495 37.8717 43.801 37.8428C44.3525 37.8139 44.7762 37.3434 44.7473 36.7919L44.2763 27.8042ZM28.1767 46.1223L44.0208 28.5257L42.5345 27.1874L26.6904 44.784L28.1767 46.1223Z"
                  fill="#ADB5BD"
                />
              </svg>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  marginLeft: "5vh",
                  display: "flex",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#8A92A6",
                  }}
                >
                  Intensity
                </p>
                <p style={{ marginTop: "-10px" }}>64.17 I</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginLeft: "2vh",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="http://localhost:3000/control-room"
            >
              <div
                style={{
                  backgroundColor: "white",
                  width: "36.5vh",
                  height: "10vh",
                  margin: "1vh",
                  boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
                  borderRadius: "8px",
                  display: "flex",
                }}
              >
                <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
                  <img src={bulbImg} alt="My Image" width="60" height="60" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0px",
                    marginLeft: "5vh",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#8A92A6",
                    }}
                  >
                    Light/ Air Conditioner
                  </p>
                  <p style={{ marginTop: "-10px" }}>OFF</p>
                </div>
              </div>
            </a>
            <div
              style={{
                backgroundColor: "white",
                width: "36.5vh",
                height: "10vh",
                margin: "1vh",
                boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
                borderRadius: "8px",
                display: "flex",
              }}
            >
              <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
                <img src={humanD} alt="My Image" width="60" height="60" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "0px",
                  marginLeft: "5vh",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#8A92A6",
                  }}
                >
                  Human Detected
                </p>
                <p style={{ marginTop: "-10px" }}>True</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "65vh",
              height: "68vh",
              backgroundColor: "white",
              marginLeft: "6vh",
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
