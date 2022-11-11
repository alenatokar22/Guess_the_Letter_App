import * as React from "react";

const Cell = ({ handleClick, value, x, y, targetLetter }) => {
  if (value.length == 2) {
    value = "";
  }
  return (
    <button className="cell" onClick={() => handleClick(y, x, targetLetter)}>
      {value}
    </button>
  );
};

export const Field = ({ matrix, cellAction, targetLetter }) => {
  return (
    <div>
      {matrix.map((line, lineNumber) => (
        <div className="row" key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              targetLetter={targetLetter}
              handleClick={cellAction}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
