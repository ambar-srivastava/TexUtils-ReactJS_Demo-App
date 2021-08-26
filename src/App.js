import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.textContent = "Enable Dark Mode";
      showAlert("Dark Mode has been Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.textContent = "Disable Dark Mode";
      showAlert("Dark Mode has been Disabled!", "success");
    }
  };

  return (
    <Router>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter Something Good"
              mode={mode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
