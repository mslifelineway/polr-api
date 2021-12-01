import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { pagePaths } from "./utils/constants";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Links from "./containers/Links";
import Settings from "./containers/Settings";
import Developer from "./containers/Developer";
import Admin from "./containers/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={pagePaths.root} element={<Login />} />
        <Route path={pagePaths.login} element={<Login />} />
        <Route path={pagePaths.home} element={<Home />} />
        <Route path={pagePaths.links} element={<Links />} />
        <Route path={pagePaths.settings} element={<Settings />} />
        <Route path={pagePaths.admin} element={<Admin />} />
        <Route path={pagePaths.developer} element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;
