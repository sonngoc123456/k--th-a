import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private z : number ;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    setZ(z:number) : void {
        this.z = z;
    }
    getZ() : number {
        return this.z;
    }
    setXYZ(x:number,y:number,z:number) : void {
        this.setX(x);this.setY(y);this.setZ(z);
    }
    getXYZ() : object {
        return {x:this.getX(),y:this.getY(),z:this.getZ()};
    }
}