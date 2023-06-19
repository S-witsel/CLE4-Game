import { Actor } from "excalibur";
import { Resources } from "../resources";
import { Towerrange } from "./towerrange";

export class Tower extends Actor{

    range

    enemiesinrange
    currenttarget

    constructor(){
        super({radius: 25})
    }

    onInitialize(engine){
        this.range = 100
        this.graphics.use(Resources.Towerplaceholder.toSprite())

        this.enemiesinrange = []

        this.range = new Towerrange(this.range)
        engine.currentScene.add(this.range)
        this.addChild(this.range)

        this.on('prekill', (event) => {
            this.range.kill()
        })
    }
}