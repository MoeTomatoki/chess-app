import { useEffect, useRef, useState } from "react"
import { Board, Colors, GameBoard, Player } from "../model"

export function GameFields({ }) {
    const [board, setBoard] = useState(new Board())
    const wPlayer = useRef(new Player(Colors.WHITE))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
        setCurrentPlayer(wPlayer.current)
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
    }

    return (
        <div className='app'>
            <GameBoard
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={() => console.log("Передача хода")}
            />
        </div>
    )
}