import { Actor, Vector } from "excalibur";
import { EnemyCore } from "../enemies/enemycore";

export class Towerrange extends Actor{

    constructor(range){
        super({radius: range})
    }
    
    onInitialize(engine){
        this.on('collisionstart', (event) =>{
            if(event.other instanceof EnemyCore){
                this.parent.enemiesinrange.push(event.other)
            }
        })
        this.on('collisionend', (event) =>{
            if(event.other instanceof EnemyCore){
                this.parent.enemiesinrange = this.parent.enemiesinrange.filter(item => item !== event.other)
            }
        })
    }
}