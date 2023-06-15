import { Actor, Vector, Input, Color } from "excalibur";
import { Resources } from "../resources";
import { Tower } from "../towers/tower";

export class Cursor extends Actor{

    canplacetower
    placementcd
    sprite

    constructor(){
        super({radius: 25})
    }

    onInitialize(){
        
        this.canplacetower = 0
        this.sprite = Resources.Emptyspace.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(500,350)

        this.on('collisionstart' ,(event) => {
            if(event.other instanceof Tower){
                this.canplacetower = this.canplacetower + 1
                console.log(this.canplacetower)
            }
        })
        this.on('collisionend' ,(event) => {
            if((event.other instanceof Tower)){
                this.canplacetower = this.canplacetower - 1
                console.log(this.canplacetower)
                this.placementcd = 0
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
                engine.currentScene.add(tower)
            }
        }
        
        if(this.canplacetower > 0){
            this.sprite.tint = new Color(255, 0, 0)
        } else {
            this.sprite.tint = new Color(255, 255, 255)
        }
    }
}