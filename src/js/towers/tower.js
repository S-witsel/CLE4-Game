import { Actor, Animation, AnimationStrategy, Resource, RotationType, SpriteSheet, Vector, range } from "excalibur";
import { Resources } from "../resources";
import { Towerrange } from "./towerrange";
import { EnemyCore } from "../enemies/enemycore";
import { ProjectileCore } from "../projectiles/projectilecore";

export class Tower extends Actor{

    delta

    rangeradius
    range

    enemiesinrange
    currenttarget

    firecooldown
    firerate

    type
    spritesheet

    constructor(){
        super({radius: (25 / 3)})
    }

    onInitialize(engine){
        this.onSpawn(engine)
        this.type = 1
        this.setType(this.type)
    }

    onPreUpdate(engine, delta){
        this.delta = delta
        this.updateCurrentTarget()
        this.shootAtTarget(engine)
    }

    onSpawn(engine){
    	this.rangeradius = 200
        this.enemiesinrange = []

        this.range = new Towerrange((this.rangeradius / 3))
        engine.currentScene.add(this.range)
        this.addChild(this.range)

        this.on('prekill', (event) => {
            this.range.kill()
        })

        this.firecooldown = 0
        this.firerate = 300
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

                let projectile = new ProjectileCore(this.pos.x, this.pos.y, shootdirectionx, shootdirectiony, 0, 800, 3, 10)
                projectile.rotation = angleToActor2
                engine.currentScene.add(projectile)
                this.graphics.use(Animation.fromSpriteSheet(this.spritesheet, range(0,0), 1, AnimationStrategy.Freeze))
            }
            this.firecooldown = 0
        }
        if(this.firecooldown > (this.firerate / 2)){
            this.graphics.use(Animation.fromSpriteSheet(this.spritesheet, range(1,1), 1, AnimationStrategy.Freeze))
        }
    }

    setType(type){
        switch(type){
            case 1:
                this.spritesheet = SpriteSheet.fromImageSource({
                    image: Resources.Farmersprite,
                    grid: {
                        rows: 1,
                        columns: 2,
                        spriteWidth: (Resources.Farmersprite.width / 2),
                        spriteHeight: Resources.Farmersprite.height
                    }
                });

                this.graphics.use(Animation.fromSpriteSheet(this.spritesheet, range(0,0), 1, AnimationStrategy.Freeze))
                this.scale = new Vector(3,3)
                break;
        }
    }
    
}