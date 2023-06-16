import { Actor, Vector } from "excalibur";

export class RoadElement extends Actor{

    xpos
    ypos

    constructor(xpos, ypos, xlength, ylength){

        super({width: xlength, height: ylength})

        this.xpos = xpos
        this.ypos = ypos
    }

    onInitialize(){
        this.pos = new Vector(this.xpos, this.ypos)
        this.z = 1
    }
}