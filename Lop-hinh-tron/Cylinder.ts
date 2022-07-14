import {Circle} from "./lop-Circle";

export class Cylinder extends Circle {
    private height : number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height;
    }
    setHeight(height:number) : void {
        this.height = height;
    }
    getHeight() :number {
        return this.height
    }
    getVol() : number {
        return this.getArea()*this.height;
    }
}

