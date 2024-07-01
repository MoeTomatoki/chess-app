import clsx from "clsx";
import { Colors, Cell, GameCell } from "./";
import React, { useState, } from "react";

export function GameBoard({ board, setBoard, currentPlayer, swapPlayer }) {

    function handleClick(cell: Cell) {
        console.log(cell.x, cell.y)
    }

    return (
        <div>
            <h3>Текущий игрок: {currentPlayer?.color}</h3>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <GameCell
                                onClick={handleClick}
                                cell={cell}
                                key={cell.id}
                                selected={false}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

