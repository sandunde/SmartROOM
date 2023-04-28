import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Report from "../Pages/Report";
import News from "../Pages/News";
import About from "../Pages/About";
import ControlRoom from "../Pages/ControlRoom";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";

const AppRoute =() => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/create-account" element={<CreateAccount/>}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/report" element={< Report/>}></Route>
            <Route path="/news" element={< News/>}></Route>
            <Route path="/about" element={< About/>}></Route>
            <Route path="/control-room" element={< ControlRoom/>}></Route>

        </Routes>
    );
}

export default AppRoute;