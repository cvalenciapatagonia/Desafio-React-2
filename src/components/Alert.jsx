import React from "react";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";


const Alert = ({ message, type }) => {
  return (
    <div className="alert-container">
      {message && <Badge variant bg= {type} className="badgeStyle">{message}</Badge>}
    </div>
  );
};

export default Alert;