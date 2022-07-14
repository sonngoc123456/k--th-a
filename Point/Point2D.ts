export class Point2D {
    private x : number;
    private y : number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    setX(x:number) :void {
        this.x = x;
    }
    getX() {
        return this.x;
    }
    setY(y:number) :void {
        this.y = y;
    }
    getY() : number {
        return this.y;
    }
    getXY() : object {
        return {x: this.getX(), y: this.getY()}
    }
    setXY(x:number,y:number) : void {
        this.setX(x);this.setY(y)
    }
}