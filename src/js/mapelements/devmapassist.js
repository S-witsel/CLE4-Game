import { Actor, Vector } from "excalibur";
import { Resources } from "../resources";

export class DevMapAssist extends Actor{

    constructor(){
        super({width: Resources.LevelGridAssist.width, height: Resources.LevelGridAssist.height})
    }

    onInitialize(){
        this.anchor = new Vector(0,0)
        this.pos = new Vector(0,0)
        this.graphics.use(Resources.LevelGridAssist.toSprite())
    }
}