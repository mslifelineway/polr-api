import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { pagePaths } from "./utils/constants";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Links from "./containers/Links";
import Settings from "./containers/Settings";
import Developer from "./containers/Developer";
import Admin from "./containers/Admin";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path={pagePaths.root}
          element={user ? <Navigate to={pagePaths.home} /> : <Login />}
        />
        <Route
          path={pagePaths.login}
          element={user ? <Navigate to={pagePaths.home} /> : <Login />}
        />
        <Route
          path={pagePaths.home}
          element={!user ? <Navigate to={pagePaths.login} /> : <Home />}
        />
        <Route
          path={pagePaths.links}
          element={!user ? <Navigate to={pagePaths.login} /> : <Links />}
        />
        <Route
          path={pagePaths.settings}
          element={!user ? <Navigate to={pagePaths.login} /> : <Settings />}
        />
        <Route
          path={pagePaths.admin}
          element={!user ? <Navigate to={pagePaths.login} /> : <Admin />}
        />
        <Route
          path={pagePaths.developer}
          element={!user ? <Navigate to={pagePaths.login} /> : <Developer />}
        />
      </Routes>
    </Router>
  );
}

export default App;
