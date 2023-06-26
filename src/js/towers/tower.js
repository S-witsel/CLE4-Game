import { Actor, RotationType } from "excalibur";
import { Resources } from "../resources";
import { Towerrange } from "./towerrange";
import { EnemyCore } from "../enemies/enemycore";
import { ProjectileCore } from "../projectiles/projectilecore";

export class Tower extends Actor{

    delta

    range

    enemiesinrange
    currenttarget

    firecooldown
    firerate

    constructor(){
        super({radius: 25})
    }

    onInitialize(engine){
        this.onSpawn(engine)
    }

    onPreUpdate(engine, delta){
        this.delta = delta
        this.updateCurrentTarget()
        this.shootAtTarget(engine)
    }

    onSpawn(engine){
    	this.range = 300
        this.graphics.use(Resources.Towerplaceholder.toSprite())

        this.enemiesinrange = []

        this.range = new Towerrange(this.range)
        engine.currentScene.add(this.range)
        this.addChild(this.range)

        this.on('prekill', (event) => {
            this.range.kill()
        })

        this.firecooldown = 0
        this.firerate = 300

        this.on('collisionstart', (event) => {
            
        })
    }

    updateCurrentTarget(){
        if(this.enemiesinrange.length >= 1){
            this.currenttarget = this.enemiesinrange[0]
        }

        if(this.enemiesinrange.length > 1){


            this.enemiesinrange.forEach(element => {
                if(this.currenttarget.traversedpixels < element.traversedpixels){
                    this.currenttarget = element
                }
            });
        }
        
        if(this.enemiesinrange.length < 1){
            this.currenttarget = null
        }
    }

    shootAtTarget(engine){
        this.firecooldown = this.firecooldown + this.delta
        if(this.firecooldown > this.firerate){
            if(this.currenttarget !== null){
                let enemyx = this.currenttarget.pos.x
                let enemyy = this.currenttarget.pos.y

                let shootdirectionx = enemyx - this.pos.x
                let shootdirectiony = enemyy - this.pos.y

                function calculateAngle(x1, y1, x2, y2) {
                var deltaX = x2 - x1;
                var deltaY = y2 - y1;
                return Math.atan2(deltaY, deltaX);
                }

                var angleToActor2 = calculateAngle(this.pos.x, this.pos.y, enemyx, enemyy);
                this.rotation = angleToActor2;

                let projectile = new ProjectileCore(this.pos.x, this.pos.y, shootdirectionx, shootdirectiony, 0, 800, 30, 10)
                projectile.rotation = angleToActor2
                engine.currentScene.add(projectile)
            }
            this.firecooldown = 0
        }
    }
    
}