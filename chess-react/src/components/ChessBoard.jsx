//import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";

export const ChessBoard = ({ board }) => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  return (
    <div className="text-white-200">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              return (
                <div
                  key={j}
                  onClick={() => {
                    console.log(square.square);
                    if (!from) {
                      setFrom(square?.square ?? null);
                    } else {
                      setTo(square?.square ?? null);
                    }
                  }}
                  className={`w-16 h-16 ${
                    (i + j) % 2 === 0 ? "bg-green-500" : "bg-white"
                  }`}
                >
                  <div className="w-full h-full justify-center flex">
                    <div className="h-full justify-center flex flex-col">
                      {square ? square.type : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
