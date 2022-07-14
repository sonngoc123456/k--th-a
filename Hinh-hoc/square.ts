import {Rectangle} from "./rectangle";

export class Square extends Rectangle {
    private side : number

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side,side);
    }
    setSide(side:number) : void {
        this.setWidth(side);
        this.setLength(side);
    }
    getSide() : number {
        return this.getWidth();
    }
    setWidth(width: number) : void {
        this.setSide(width);
    }
    setLength(length: number) {
        this.setSide(length);
    }
    toString(): string {
        return `A Square with side ${this.getSide()}, which is a subclass of ${super.toString()}`;
    }
}