import { Actor, Vector } from "excalibur";
import { EnemyCore } from "../enemies/enemycore";
import { Resources } from "../resources";

export class ProjectileCore extends Actor{

    xpos
    ypos
    xvel
    yvel
    type
    speedfactor
    damage

    constructor(xpos, ypos, xvel, yvel, type, speedfactor, damage, hitboxradius){
        super({radius: hitboxradius})
        this.xpos = xpos
        this.ypos = ypos
        this.xvel = xvel
        this.yvel = yvel
        this.type = type
        this.speedfactor = speedfactor
        this.damage = damage
    }

    onInitialize(){
        this.onSpawn()
    }

    onPreUpdate(){

    }

    onSpawn(){
        this.pos = new Vector(this.xpos, this.ypos)
        let unrefinedvelocity = new Vector(this.xvel, this.yvel)
        this.vel = unrefinedvelocity.normalize().scale(this.speedfactor)

        this.on('collisionstart', (event) => {
            if(event.other instanceof EnemyCore){
                event.other.health = event.other.health - this.damage
                this.kill()
            }
        })
        this.on('exitviewport', (event) => {
            this.kill()
        })

        this.graphics.use(Resources.FarmerBullet.toSprite())
        this.scale = new Vector(3,3)
    }
}