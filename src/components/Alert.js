import React from "react";

export default function Alert(props) {
  return (
      props.alert &&
      <div
        className={`alert alert-${
          props.mode === "light" ? "dark" : "light"
        } alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>
        {props.alert.message}
      </div>
  );
}
