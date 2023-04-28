import officeLap1 from "../Assets/officeLap1.jpg";
import officeLap2 from "../Assets/officeLap2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
import { Button } from "antd";
import Data from "../Dummy/dummyData3.json";
import Data2 from "../Dummy/dummyData4.json";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {Data.map((post) => {
          return (
            <div
              style={{
                marginTop: "2vh",
                padding: "3vh",
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: "#2E93B7",
                width: "324px",
                height: "370px",
                borderRadius: "20px",
                marginLeft: "5vh",
              }}
            >
              <img
                style={{
                  marginLeft: "3vh",
                }}
                src={post.img}
                width={250}
              />
              <p
                style={{
                  fontFamily: "Noto Sans",
                  fontWeight: "300",
                  fontSize: "18px",
                  lineHeight: "19px",
                }}
              >
                {post.date}
              </p>
              <p
                style={{
                  fontFamily: "Noto Sans",
                  fontWeight: "900",
                  fontSize: "18px",
                  lineHeight: "15px",
                }}
              >
                {post.title}
              </p>
              <p
                style={{
                  marginTop: "-12px",
                  fontFamily: "Noto Sans",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "18px",
                }}
              >
                {post.body}
              </p>
              <Link to={post.link} target="_blank">
                <Button type="primary" style={{ marginTop: "-12px" }}>
                  Read more
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        {Data2.map((post) => {
          return (
            <div
              style={{
                marginTop: "2vh",
                padding: "3vh",
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: "#2E93B7",
                width: "324px",
                height: "370px",
                borderRadius: "20px",
                marginLeft: "5vh",
              }}
            >
              <img
                style={{
                  marginLeft: "3vh",
                }}
                src={post.img}
                width={250}
              />
              <p
                style={{
                  fontFamily: "Noto Sans",
                  fontWeight: "300",
                  fontSize: "18px",
                  lineHeight: "19px",
                }}
              >
                {post.date}
              </p>
              <p
                style={{
                  fontFamily: "Noto Sans",
                  fontWeight: "900",
                  fontSize: "18px",
                  lineHeight: "15px",
                }}
              >
                {post.title}
              </p>
              <p
                style={{
                  marginTop: "-12px",
                  fontFamily: "Noto Sans",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "18px",
                }}
              >
                {post.body}
              </p>
              <Button type="primary" style={{ marginTop: "-12px" }}>
                Read more
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
