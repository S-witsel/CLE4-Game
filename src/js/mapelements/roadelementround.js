import { Actor, Vector } from "excalibur";

export class RoadElementRound extends Actor{

    xpos
    ypos

    constructor(xpos, ypos, radius){

        super({radius: radius})
        this.xpos = xpos
        this.ypos = ypos
    }

    onInitialize(){
        this.anchor = new Vector(0,0)
        this.pos = new Vector(this.xpos, this.ypos)
        this.z = 1
    }
}