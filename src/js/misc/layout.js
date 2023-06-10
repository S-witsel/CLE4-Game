import { Actor, Vector } from "excalibur";
import { Resources } from "../resources";

export class Layout extends Actor{

    constructor(){
        super({width: Resources.TemplateLayout.width, height: Resources.TemplateLayout.height})
    }

    onInitialize(){
        this.anchor = new Vector(0,0)
        this.pos = new Vector(0,0)
        this.graphics.use(Resources.TemplateLayout.toSprite())
    }
}