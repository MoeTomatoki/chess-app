import { Colors, Cell } from "../index";
import { Figure, FigureNames } from "./Figure";
import bLog from "./img/black-knight.png"
import wLog from "./img/white-knight.png"

export class Knight extends Figure {
    constructor (color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? bLog : wLog
        this.name = FigureNames.KNIGHT
    }
}