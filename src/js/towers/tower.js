import { Actor } from "excalibur";
import { Resources } from "../resources";

export class Tower extends Actor{

    constructor(){
        super({radius: 25})
    }

    onInitialize(){
        this.graphics.use(Resources.Towerplaceholder.toSprite())
    }
}