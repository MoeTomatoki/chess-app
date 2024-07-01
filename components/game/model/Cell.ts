import { Board, Colors } from "./index"
import { Figure } from "./figures/Figure"

export class Cell {
    board: Board
    readonly color: Colors
    readonly x: number
    readonly y: number
    figure: Figure | null
    available: boolean
    id: number

    constructor(board: Board, color: Colors, x: number, y: number, figure: Figure | null, id: number,) {
        this.board = board
        this.color = color
        this.x = x
        this.y = y
        this.figure = figure
        this.available = false
        this.id = id
    }

}