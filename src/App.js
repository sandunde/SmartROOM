import PageContent from "./Components/PageContent";
import AppHeader from "./Components/AppHeader";
import SideBar from "./Components/SideBar";
import "./App.css";
import { useLocation } from "react-router-dom";

const App = () => {
  let location = useLocation();
  return (
    <div className="App">
      {(location.pathname !== "/") && (location.pathname !== "/create-account" )? <AppHeader /> : null}
      <div className="SideMenuAndPageContent">
        {(location.pathname !== "/") && (location.pathname !== "/create-account" )? <SideBar /> : null}
        <PageContent />
      </div>
    </div>
  );
};

export default App;
