import { Actor, Vector } from "excalibur";
import { Resources } from "../resources";

export class Level1layout extends Actor{

    constructor(){
        super({width: Resources.Level1layout.width, height: Resources.Level1layout.height})
    }

    onInitialize(){
        this.anchor = new Vector(0,0)
        this.pos = new Vector(0,0)
        this.graphics.use(Resources.Level1layout.toSprite())
    }
}