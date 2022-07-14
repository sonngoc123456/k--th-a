import {Shape} from "./hinh-hoc";

export class Circle extends Shape {
    private radius : number = 1

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() :number {
        return this.radius;
    }
    setRadius(radius:number) : void {
        this.radius = radius
    }
    getArea() : string {
        return `Dien tich : ${(this.radius*this.radius*Math.PI)}`
    }
    getPerimeter() : string {
        return `Chu vi : ${(this.radius*2*Math.PI)}`
    }
    toString(): string {
        return `A Circle with radius of ${this.radius}, which is a subclass of ${super.toString()}`;
    }
}