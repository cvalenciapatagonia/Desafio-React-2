import "./App.css";
import React, { useState } from "react";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [appAlertMessage, setAppAlertMessage] = useState("");
  const [appAlertType, setAppAlertType] = useState("");

  return (
    <div className="container">
      <Registro
        appAlertMessage={appAlertMessage}
        appAlertType={appAlertType}
        setAppAlertMessage={setAppAlertMessage}
        setAppAlertType={setAppAlertType}
      />
    </div>
  );
}

export default App;