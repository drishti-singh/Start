import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setdarkMode] = useState("light");
  const [enable, enableDark] = useState("Light Mode");
  const [alert, setAlert] = useState(null);
  function showAlert(type, msg) {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  function toggleMode() {
    if (mode === "light") {
      enableDark("Dark Mode");
      setdarkMode("dark");
      showAlert("Success !! ", "Dark mode is enabled");

      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = "TextUtils - Dark Mode";
      //   }, 1000);
      // setInterval(() => {
      // document.title = "TextUtils - Download";
      // }, 1500);
    } else {
      enableDark("Light Mode");
      setdarkMode("light");
      showAlert("Success !! ", "Light mode is enabled");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <div
          style={{
            backgroundColor: `${mode === "light" ? "white" : "#00000091"}`,
          }}
        >
          <Navbar
            title="TextUtils"
            about="About Here"
            mode={mode}
            enable={enable}
            toggleMode={toggleMode}
          />
         
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/" element={ <Textform
            heading="Enter the text to Analyse"
            toggleMode={toggleMode}
            mode={mode}
            showAlert={showAlert}
          />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
