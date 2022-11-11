import * as React from "react";

export const StartButton = ({ start }) => {
  return (
    <button className="btn" type="submit" onClick={start}>
      Start
    </button>
  );
};
