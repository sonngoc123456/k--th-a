import {Shape} from "./hinh-hoc";
import {Circle} from "./circle";

let shape1 : Shape = new Shape('blue',false);
console.log(shape1);
console.log(shape1.toString());

let circle : Circle = new Circle('yellow',false,5);
console.log(circle.toString());
import {Rectangle} from "./rectangle";

let rec :Rectangle = new Rectangle('cam',true,20,50);
console.log(rec.toString());

import {Square} from "./square";

let square: Square = new Square("yellow", true,5.8);
console.log(square);
console.log(square.toString());