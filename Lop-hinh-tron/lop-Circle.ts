export class Circle {
    private radius : number;
    private color : string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    setRadius(radius:number) : void {
        this.radius = radius;
    }
    setColor(color : string) : void {
        this.color = color;
    }
    getRadius() : number {
        return this.radius;
    }
    getColor() : string {
        return this.color;
    }
    getArea() : number {
        return Math.pow(this.radius,2)*Math.PI;
    }
}