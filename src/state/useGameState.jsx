import { useState } from "react";
import { createArray } from "../array";

const const_array_field = [" A", " B", " C"];
const max_matrix_length = const_array_field.length;

const getRandomLetter = () => {
  return const_array_field[
    Math.floor(Math.random() * const_array_field.length)
  ];
};

const createEmptyField = () =>
  createArray(max_matrix_length, () =>
    createArray(max_matrix_length, () => getRandomLetter())
  );

export const useGameState = () => {
  const [state, setState] = useState({
    letter: getRandomLetter(),
    matrix: createEmptyField(),
    won: 0,
    lose: 0,
  });

  const { letter, matrix, won, lose } = state;

  const start = () => {
    const letter = getRandomLetter();
    const matrixFull = createEmptyField();
    const matrixClean = createEmptyField();

    for (let row = 0; row < max_matrix_length; row++) {
      for (let cell = 0; cell < max_matrix_length; cell++) {
        matrixClean[row][cell] = matrixFull[row][cell].replace(/\s/g, "");
      }
    }

    setState({
      letter: letter,
      matrix: matrixClean,
      won: won,
      lose: lose,
    });

    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        ...{ matrix: matrixFull },
      }));
    }, 5000);
  };

  const clickToCell = (y, x, targetLetter) => {
    const cell = state.matrix[y][x];
    let count = 0;
    let won = state.won;
    let lose = state.lose;

    if (cell !== targetLetter) {
      for (let row = 0; row < max_matrix_length; row++)
        for (let i = 0; i < max_matrix_length; i++)
          matrix[row][i] = matrix[row][i].replace(/\s/g, "");

      count = -1;
      lose++;
      alert("You lost ;=(((");
    } else {
      matrix[y][x] = matrix[y][x].slice(1, 2);
    }

    setState((prev) => ({
      ...prev,
      ...{ matrix: matrix, lose: lose },
    }));

    for (let row = 0; row < max_matrix_length; row++) {
      for (let i = 0; i < max_matrix_length; i++) {
        if (state.matrix[row][i] === cell) {
          count++;
          return;
        }
      }
    }

    if (count == 0) {
      alert("!!! You WON !!!");
      won++;
    }
    setState((prev) => ({
      ...prev,
      ...{ won: won },
    }));
  };

  return { letter, start, matrix, clickToCell, won, lose };
};
