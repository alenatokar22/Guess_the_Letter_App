import * as React from "react";
import "./App.css";
import { Header } from "./Header";
import { Field } from "./Field";
import { StartButton } from "./StartButton";
import { useGameState } from "./state/useGameState";

export default function App() {
  const { letter, start, matrix, clickToCell, won, lose } = useGameState();
  return (
    <div className="app">
      <Header letter={letter} />
      <div className="score">
        <span className="display__won">WON: {won}</span>{" "}
        <span className="display__lose">LOSE: {lose}</span>
      </div>
      <div className="field">
        <Field matrix={matrix} cellAction={clickToCell} targetLetter={letter} />
      </div>
      <StartButton start={start} />
    </div>
  );
}
