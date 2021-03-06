export class Shape {
    private color : string = 'red';
    private filled : boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    getColor() : string {
        return this.color;
    }
    setColor(color : string) : void {
        this.color = color;
    }
    isFilled() : boolean {
        return this.filled
    }
    setFilled(filled : boolean) : void {
        this.filled = filled;
    }
    toString() :string {
        return `A shape with color of ${this.getColor()} and ${this.isFilled() ? "filled" : "not filled"}`;
    }
}