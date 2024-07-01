import { Colors, Cell } from "../index";
import { Figure, FigureNames } from "./Figure";
import bLog from "./img/black-queen.png"
import wLog from "./img/white-queen.png"

export class Queen extends Figure {
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? bLog : wLog
        this.name = FigureNames.QUEEN
    }
}