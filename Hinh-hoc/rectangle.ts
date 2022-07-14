import {Shape} from "./hinh-hoc";

export class Rectangle extends Shape {
    private width : number = 1;
    private length : number = 1;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth() : number {
        return this.width;
    }
    getLength() : number {
        return this.length;
    }
    setWidth(width : number) : void {
        this.width = width;
    }
    setLength(length : number) : void {
        this.length = length;
    }
    getArea() : string {
        return `Dien tich : ${(this.width * this.length)}`
    }
    getPerimeter() : string {
        return `Chu vi : ${(this.width + this.length)*2}`
    }
    toString(): string {
        return `A Rectangle with width ${this.width} and length ${this.length}, which is a subclass of ${super.toString()}`;
    }


}