import { Cell, Colors } from "../index";
import {Figure, FigureNames} from "./Figure";
import bLog from "./img/black-bishop.png"
import wLog from "./img/white-bishop.png"


export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? bLog : wLog;
        this.name = FigureNames.BISHOP;
    }
}