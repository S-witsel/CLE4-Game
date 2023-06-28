import { Actor, Vector, Input, Color} from "excalibur";
import { Resources } from "../resources";
import { Tower } from "../towers/tower";
import { RoadElement } from "../mapelements/roadelement";
import { RoadElementRound } from "../mapelements/roadelementround";

export class Cursor extends Actor{

    towerarray
    selectedtower

    towerchoice
    towerchoicebool

    canplacetower
    sprite

    constructor(){
        super({radius: 25})
    }

    onInitialize(){
        this.towerchoice = 1
        this.canplacetower = 0
        this.sprite = Resources.Cursor.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(500,350)

        this.on('collisionstart' ,(event) => {
            if(event.other instanceof Tower || event.other instanceof RoadElement || event.other instanceof RoadElementRound){
                this.canplacetower = this.canplacetower + 1
                this.selectedtower = event.other
            }
        })
        this.on('collisionend' ,(event) => {
            if((event.other instanceof Tower || event.other instanceof RoadElement || event.other instanceof RoadElementRound)){
                this.canplacetower = this.canplacetower - 1
                this.selectedtower = 0
            }
        })
    }

    onPreUpdate(engine, delta){

        let x = 0
        let y = 0

        if(engine.input.keyboard.isHeld(Input.Keys.W)){
            if(this.pos.y > 25){
                y = -300
            }
        }
        if(engine.input.keyboard.isHeld(Input.Keys.A)){
            if(this.pos.x > 25){
                x = -300
            }
        }
        if(engine.input.keyboard.isHeld(Input.Keys.D)){
            if(this.pos.x < 975){
                x = 300
            }
        }
        if(engine.input.keyboard.isHeld(Input.Keys.S)){
            if(this.pos.y < 675){
                y = 300
            }
        }
        this.vel = new Vector(x,y)

        if(engine.input.keyboard.isHeld(Input.Keys.Num7)){
            if(this.canplacetower < 1){
                let tower = new Tower()
                tower.pos = this.pos
                tower.type = this.towerchoice
                engine.currentScene.add(tower)
            }
        }

        if(engine.input.keyboard.isHeld(Input.Keys.Num4)){
            if(this.selectedtower instanceof Tower){
                this.selectedtower.kill()
            }
            
        }

        if(engine.input.keyboard.isHeld(Input.Keys.Num8) && this.towerchoicebool){
            this.towerchoice = this.towerchoice + 1
            if(this.towerchoice > 7){
                this.towerchoice = 1
            }
            this.towerchoicebool = false
        } else {
            this.towerchoicebool = true
        }
        if(engine.input.keyboard.isHeld(Input.Keys.Num9) && this.towerchoicebool){
            this.towerchoice = this.towerchoice - 1
            if(this.towerchoice < 1){
                this.towerchoice = 7
            }
            this.towerchoicebool = false
        } else {
            this.towerchoicebool = true
        }
        
        if(this.canplacetower > 0){
            this.sprite.tint = new Color(255, 0, 0)
        } else {
            this.sprite.tint = new Color(255, 255, 255)
        }
    }
}