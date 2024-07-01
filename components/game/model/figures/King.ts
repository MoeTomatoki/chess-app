import { Cell, Colors } from "../index";
import {Figure, FigureNames} from "./Figure";
import bLog from "./img/black-king.png"
import wLog from "./img/white-king.png"


export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? bLog : wLog;
        this.name = FigureNames.KING;
    }
}