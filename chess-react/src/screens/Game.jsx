import { ChessBoard } from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  console.log(board);
  // useEffect(() => {
  //   if (!socket) return ;
  //   socket.onmessage = (event) => {
  //     const message = JSON.parse(event.data);
  //   }
  // });

  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 bg-red-200 w-full">
            <ChessBoard board={board} />
          </div>
          <div className="col-span-2 w-full">
            <Button
              onClick={() => {
                socket.send(JSON.stringify({}));
              }}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
