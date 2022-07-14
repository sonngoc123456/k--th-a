import {Shape} from "../Hinh-hoc/hinh-hoc";
import {ShapeA} from "./Shape1";

export class Triangle extends ShapeA {
    private side1 : number;
    private side2 : number;
    private side3 : number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
}