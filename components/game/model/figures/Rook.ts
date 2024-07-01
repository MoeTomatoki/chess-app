import { Colors, Cell } from "../index";
import { Figure, FigureNames } from "./Figure";
import bLog from "./img/black-rook.png"
import wLog from "./img/white-rook.png"

export class Rook extends Figure {
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? bLog : wLog
        this.name = FigureNames.ROOK
    }
}