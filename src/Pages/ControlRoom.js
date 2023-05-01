import React, { useState } from "react";
import { Button, Modal, Select, Slider, notification } from "antd";
import bulbImg from "../Assets/lightbulb.png";
import fan from "../Assets/fan.png";
import airC from "../Assets/airC.png";
import { BulbTwoTone, BulbOutlined } from "@ant-design/icons";
import { firestore } from "../Firebase/firebase";
import { addDoc, collection } from "@firebase/firestore";
// import axios from 'axios';

const ControlRoom = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);
  const [isOnFan, setIsOnFan] = useState(false);
  const [isOnFan2, setIsOnFan2] = useState(false);
  const [isOnFan3, setIsOnFan3] = useState(false);
  const [isOnAc, setIsOnAc] = useState(false);
  const [isOnAc2, setIsOnAc2] = useState(false);
  const [state, setState] = useState("ON");
  const [state2, setState2] = useState("ON");
  const [state3, setState3] = useState("ON");
  const [state4, setState4] = useState("ON");
  const [stateFan, setStateFan] = useState("ON");
  const [stateFan2, setStateFan2] = useState("ON");
  const [stateFan3, setStateFan3] = useState("ON");
  const [stateAc, setStateAc] = useState("ON");
  const [stateAc2, setStateAc2] = useState("ON");
  const [fanCount, setFanCount] = useState(4);
  const [acCount, setAcCount] = useState(25);
  const ref = collection(firestore, "message");

  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };

  const handleChange = (value) => {
    setFanCount(value);
  };
  const handleChangeAc = (value) => {
    setAcCount(value);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Light 1 is set to ${state}`,
      placement,
      duration: 2,
    });
  };

  const openNotification2 = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Light 2 is set to ${state2}`,
      placement,
      duration: 2,
    });
  };

  const openNotification3 = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Light 3 is set to ${state3}`,
      placement,
      duration: 2,
    });
  };

  const openNotification4 = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Light 4 is set to ${state4}`,
      placement,
      duration: 2,
    });
  };

  const openNotificationFan = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Fan 1 is set to ${stateFan}`,
      placement,
      duration: 2,
    });
  };

  const openNotificationFan2 = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Fan 2 is set to ${stateFan2}`,
      placement,
      duration: 2,
    });
  };

  const openNotificationFan3 = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Fan 3 is set to ${stateFan3}`,
      placement,
      duration: 2,
    });
  };

  const openNotificationAc = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Air Conditioner 1 is set to ${stateAc}`,
      placement,
      duration: 2,
    });
  };

  const openNotificationAc2 = (placement) => {
    api.info({
      message: `Notification`,
      description: `The state of Air Conditioner 2 is set to ${stateAc2}`,
      placement,
      duration: 2,
    });
  };

  const handleClick = async (e) => {
    setIsOn(!isOn);
    if (isOn === true) {
      setState("ON");
    } else {
      setState("OFF");
    }
    let data = {
      lightOneMessage: state,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick2 = () => {
    setIsOn2(!isOn2);
    if (isOn2 === true) {
      setState2("ON");
    } else {
      setState2("OFF");
    }
  };

  const handleClick3 = () => {
    setIsOn3(!isOn3);
    if (isOn3 === true) {
      setState3("ON");
    } else {
      setState3("OFF");
    }
  };

  const handleClick4 = () => {
    setIsOn4(!isOn4);
    if (isOn4 === true) {
      setState4("ON");
    } else {
      setState4("OFF");
    }
  };

  const handleClickFan = () => {
    setIsOnFan(!isOnFan);
    if (isOnFan === true) {
      setStateFan("ON");
    } else {
      setStateFan("OFF");
      showModal();
    }
    let data = {
      fanOneMessage: stateFan,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickFan2 = () => {
    setIsOnFan2(!isOnFan2);
    if (isOnFan2 === true) {
      setStateFan2("ON");
    } else {
      setStateFan2("OFF");
      showModal();
    }
  };

  const handleClickFan3 = () => {
    setIsOnFan3(!isOnFan3);
    if (isOnFan3 === true) {
      setStateFan3("ON");
    } else {
      setStateFan3("OFF");
      showModal();
    }
  };

  const handleClickAc = () => {
    setIsOnAc(!isOnAc);
    if (isOnAc === true) {
      setStateAc("ON");
    } else {
      setStateAc("OFF");
      showModalAc();
    }
    let data = {
      acOneMessage: stateAc,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickAc2 = () => {
    setIsOnAc2(!isOnAc2);
    if (isOnAc2 === true) {
      setStateAc2("ON");
    } else {
      setStateAc2("OFF");
      showModalAc();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpenAc, setIsModalOpenAc] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    let data = {
      fanSpeed: fanCount,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalAc = () => {
    setIsModalOpenAc(true);
  };

  const handleOkAc = () => {
    setIsModalOpenAc(false);
    let data = {
      acSpeed: acCount,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  // const AUTH_TOKEN = "-RZN_Eb-f1zioGsu82x7pPxt27d7icMJ";
  // const BLYNK_API_URL = `http://blynk-cloud.com/${AUTH_TOKEN}/update/2`;

  // const turnOnLed = async () => {
  //   const response = await axios.get(`${BLYNK_API_URL}/V0?value=1`);
  //   return response.data;
  // };

  const handleCancelAc = () => {
    setIsModalOpenAc(false);
  };

  return (
    <div className="App">
      {contextHolder}
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: state === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
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
              Light 1
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClick();
                openNotification("bottom-right");
                // turnOnLed();
              }}
            >
              {isOn ? "ON" : "OFF"}
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: state2 === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
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
              Light 2
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClick2();
                openNotification2("bottom-right");
              }}
            >
              {isOn2 ? "ON" : "OFF"}
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: state3 === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
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
              Light 3
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClick3();
                openNotification3("bottom-right");
              }}
            >
              {isOn3 ? "ON" : "OFF"}
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: state4 === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
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
              Light 4
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClick4();
                openNotification4("bottom-right");
              }}
            >
              {isOn4 ? "ON" : "OFF"}
            </Button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: stateFan === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
          }}
        >
          <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
            <img src={fan} alt="My Image" width="60" height="60" />
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
              Fan 1
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClickFan();
                openNotificationFan("bottom-right");
              }}
            >
              {isOnFan ? "ON" : "OFF"}
            </Button>
            <Modal
              title="Control Fan 1"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Set the Fan Speed</p>
              <Select
                defaultValue="1"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                  {
                    value: "3",
                    label: "3",
                  },
                  {
                    value: "4",
                    label: "4",
                  },
                  {
                    value: "5",
                    label: "5",
                  },
                ]}
              />
            </Modal>
          </div>
        </div>
        <div
          style={{
            backgroundColor: stateFan2 === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
          }}
        >
          <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
            <img src={fan} alt="My Image" width="60" height="60" />
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
              Fan 2
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClickFan2();
                openNotificationFan2("bottom-right");
              }}
            >
              {isOnFan2 ? "ON" : "OFF"}
            </Button>
            <Modal
              title="Control Fan 2"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Set the Fan Speed</p>
              <Select
                defaultValue="1"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                  {
                    value: "3",
                    label: "3",
                  },
                  {
                    value: "4",
                    label: "4",
                  },
                  {
                    value: "5",
                    label: "5",
                  },
                ]}
              />
            </Modal>
          </div>
        </div>
        <div
          style={{
            backgroundColor: stateFan3 === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
          }}
        >
          <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
            <img src={fan} alt="My Image" width="60" height="60" />
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
              Fan 3
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClickFan3();
                openNotificationFan3("bottom-right");
              }}
            >
              {isOnFan3 ? "ON" : "OFF"}
            </Button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: stateAc === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
          }}
        >
          <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
            <img src={airC} alt="My Image" width="60" height="60" />
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
              Air Conditioner 1
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClickAc();
                openNotificationAc("bottom-right");
              }}
            >
              {isOnAc ? "ON" : "OFF"}
            </Button>
            <Modal
              title="Control Fan 1"
              open={isModalOpenAc}
              onOk={handleOkAc}
              onCancel={handleCancelAc}
            >
              <p>Set the Fan Speed</p>
              <Select
                defaultValue="25"
                style={{
                  width: 120,
                }}
                onChange={handleChangeAc}
                options={[
                  {
                    value: "LO",
                    label: "LO",
                  },
                  {
                    value: "17",
                    label: "17",
                  },
                  {
                    value: "18",
                    label: "18",
                  },
                  {
                    value: "19",
                    label: "19",
                  },
                  {
                    value: "20",
                    label: "20",
                  },
                  {
                    value: "21",
                    label: "21",
                  },
                  {
                    value: "22",
                    label: "22",
                  },
                  {
                    value: "23",
                    label: "23",
                  },
                  {
                    value: "24",
                    label: "24",
                  },
                  {
                    value: "25",
                    label: "25",
                  },
                  {
                    value: "26",
                    label: "26",
                  },
                  {
                    value: "27",
                    label: "27",
                  },
                  {
                    value: "28",
                    label: "28",
                  },
                  {
                    value: "29",
                    label: "29",
                  },
                  {
                    value: "30",
                    label: "30",
                  },
                  {
                    value: "31",
                    label: "31",
                  },
                  {
                    value: "32",
                    label: "32",
                  },
                  {
                    value: "33",
                    label: "33",
                  },
                  {
                    value: "34",
                    label: "34",
                  },
                  {
                    value: "35",
                    label: "35",
                  },
                ]}
              />
            </Modal>
          </div>
        </div>
        <div
          style={{
            backgroundColor: stateAc2 === "OFF" ? "black" : "white",
            width: "36.5vh",
            height: "10vh",
            margin: "1vh",
            boxShadow: "0px 10px 30px rgba(17, 38, 146, 0.05)",
            borderRadius: "8px",
            display: "flex",
            marginTop: "7vh",
          }}
        >
          <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
            <img src={airC} alt="My Image" width="60" height="60" />
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
              Air Conditioner 2
            </p>
            <Button
              type="primary"
              onClick={() => {
                handleClickAc2();
                openNotificationAc2("bottom-right");
              }}
            >
              {isOnAc2 ? "ON" : "OFF"}
            </Button>
          </div>
        </div>
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Control Lights
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "20vw",
            height: "10vh",
            backgroundColor: "white",
            borderRadius: "20px",
            marginRight: "200px",
          }}
        >
          <div
            style={{
              maxWidth: "15vw",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-5px",
            }}
          >
            <p
              style={{
                marginRight: "20px",
              }}
            >
              Control light 1 Intensity
            </p>
            <BulbOutlined style={{ fontSize: "30px", color: "#eedd82 " }} />
          </div>
        </div>
        <div
          style={{
            width: "20vw",
            height: "10vh",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "15vw",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-5px",
            }}
          >
            <p
              style={{
                marginRight: "20px",
              }}
            >
              Control light 2 Intensity
            </p>
            <BulbOutlined style={{ fontSize: "30px", color: "#FFFF00" }} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "20vw",
            height: "10vh",
            backgroundColor: "white",
            borderRadius: "20px",
            marginRight: "200px",
          }}
        >
          <div
            style={{
              maxWidth: "15vw",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-5px",
            }}
          >
            <p
              style={{
                marginRight: "20px",
              }}
            >
              Control light 3 Intensity
            </p>
            <BulbOutlined style={{ fontSize: "30px", color: "#FFFF00" }} />
          </div>
        </div>
        <div
          style={{
            width: "20vw",
            height: "10vh",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "15vw",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-5px",
            }}
          >
            <p
              style={{
                marginRight: "20px",
              }}
            >
              Control light 4 Intensity
            </p>
            <BulbOutlined style={{ fontSize: "30px", color: "#FFF117" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlRoom;
