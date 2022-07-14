import {Point2D} from "./Point2D";

let point : Point2D = new Point2D(10,20);
console.log(point.getXY());
point.setXY(5,5);
console.log(point.getXY());

import {Point3D} from "./Point3D";

let point1 : Point3D = new Point3D(2,5,3);
console.log(point1.getXYZ());
point1.setXYZ(10,5,10);
console.log(point1.getXYZ());