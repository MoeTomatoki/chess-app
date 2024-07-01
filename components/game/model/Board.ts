import { Cell, Colors } from "./index"
import { Bishop, Figure, King, Knight, Pawn, Queen, Rook } from "./figures/index"

export class Board {
    cells: Cell[][] = []

    public getCell(x: number, y:number){
        return this.cells[y][x]
    }

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(this, Colors.WHITE, j, i, null, j + i))
                }
                else {
                    row.push(new Cell(this, Colors.BLACK, j, i, null, j + i))
                }
            }
            this.cells.push(row)
        }
    }

    public addFigures() {
        this.addKing()
        this.addBishop()
        this.addKnight()
        this.addPawn()
        this.addQueen()
        this.addRook()
    }

    
    private addKing() {
        new King(Colors.WHITE, this.getCell(4, 7))
        new King(Colors.BLACK, this.getCell(4, 0))
    }
    private addKnight() {
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.WHITE, this.getCell(6, 7))
        new Knight(Colors.BLACK, this.getCell(6, 0))
    }
    private addQueen() {
        new Queen(Colors.WHITE, this.getCell(3, 7))
        new Queen(Colors.BLACK, this.getCell(3, 0))

    }
    private addRook() {
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.WHITE, this.getCell(7, 7))
        new Rook(Colors.BLACK, this.getCell(7, 0))
    }
    private addPawn() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, this.getCell(i, 6))
            new Pawn(Colors.BLACK, this.getCell(i, 1))
        }
    }
    private addBishop() {
        new Bishop(Colors.WHITE, this.getCell(5, 7))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.BLACK, this.getCell(2, 0))
    }
}