import { Actor, Vector } from "excalibur";
import { Resources } from "../resources";

export class Towerinfo extends Actor{
    constructor(){
        super()
    }

    onInitialize(){
        this.anchor = new Vector(0,0)
        this.pos = new Vector(1000,0)
        this.z = 2
    }

    onPreUpdate(engine){
        if(engine.currentScene.towerchoice !== null){
            switch(engine.currentScene.towerchoice){
                case 1: this.graphics.use(Resources.ArtistUI.toSprite());break;
                case 2: this.graphics.use(Resources.BokitoUI.toSprite());break;
                case 3: this.graphics.use(Resources.FarmerUI.toSprite());break;
                case 4: this.graphics.use(Resources.HackerUI.toSprite());break;
                case 5: this.graphics.use(Resources.HooligansUI.toSprite());break;
                case 6: this.graphics.use(Resources.JobUI.toSprite());break;
                case 7: this.graphics.use(Resources.MrweedUI.toSprite());break;
            }
        }
    }
}