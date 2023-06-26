import { Actor, SpriteSheet, Vector, Graphic, Animation, range } from "excalibur";
import { Resources } from "../resources";

export class EnemyCore extends Actor{

    RouteArray
    RemainingRoute
    CurrentRoute

    startposx
    startposy

    xvel
    yvel

    speedfactor
    traversedpixels

    health
    type

    spritesheet
    animationstate
    animationtimer

    constructor(){
        super({radius: (Resources.Broccoli1.height / 2)})
    }

    onInitialize(){
        
        this.onSpawn()
        this.setType(this.type)
        //this.graphics.use(Resources.Broccoli1.toSprite())
        this.health = 10
        this.graphics.use(Animation.fromSpriteSheet(this.spritesheet, range(0,1), 500))

    }

    onSpawn(){
        this.startposx = this.RouteArray[0][0]
        this.startposy = this.RouteArray[0][1]
        this.traversedpixels = 0
        this.pos = new Vector(this.startposx, this.startposy)
        this.RemainingRoute = this.RouteArray.length
        this.CurrentRoute = 0
        this.animationstate = 0
        this.animationtimer = 0
        
        this.scale = new Vector(3,3)
    }

    onPreUpdate(engine, delta){
        
        
        //this.updateVel()
        this.GotoNext()
        this.updateTargetPriority(engine, delta)

        
        
        // this.animationtimer = this.animationtimer + delta
        // if(this.animationtimer > 1000){
        //     if(this.animationstate > 0){
        //         this.animationstate = 0
        //         this.graphics.use(this.spritesheet.getSprite(0, 0))
        //     } 
        //     if(this.animationstate < 1){
        //         this.animationstate = 1
        //         this.graphics.use(this.spritesheet.getSprite(1, 0))
        //     }
        //     this.animationtimer = 0
        // }

        if(this.health <= 0){
            this.kill()
        }
    }

    GotoNext(){
        if((this.pos.x > (this.RouteArray[this.CurrentRoute][0] - 5)) && (this.pos.x < (this.RouteArray[this.CurrentRoute][0] + 5)) && (this.pos.y > (this.RouteArray[this.CurrentRoute][1] - 5)) && (this.pos.y < (this.RouteArray[this.CurrentRoute][1] + 5))){
            this.CurrentRoute = this.CurrentRoute + 1

            if(this.CurrentRoute === this.RemainingRoute){
                this.kill()
            } else {
                let pos = new Vector(this.RouteArray[this.CurrentRoute][0],this.RouteArray[this.CurrentRoute][1])
                this.actions.moveTo(pos,this.speedfactor);
            }
        }
    }

    updateTargetPriority(engine,delta){
        this.traversedpixels = this.traversedpixels + ((delta / 1000) * this.speedfactor)
    }

    setType(type){
        switch(type){
            case 1:
                this.spritesheet = SpriteSheet.fromImageSource({
                    image: Resources.TomatoSpriteSheet,
                    grid: {
                        rows: 1,
                        columns: 2,
                        spriteWidth: 21,
                        spriteHeight: 17
                    }
                })
                break;
            case 2:break;
            case 3:break;
            case 4:break;
            case 5:break;
        }
    }

    // updateVel(){
    //     this.xvel = this.RouteArray[this.CurrentRoute + 1][0] - this.RouteArray[this.CurrentRoute][0]
    //     this.yvel = this.RouteArray[this.CurrentRoute + 1][1] - this.RouteArray[this.CurrentRoute][1]

    //     if(this.xvel > 0){

    //     }

    //     if(this.pos.x === this.RouteArray[this.CurrentRoute][0] && this.pos.x === this.RouteArray[this.CurrentRoute][1]){
            
    //         let normalvelocity = new Vector(this.xvel, this.yvel)
    //         this.vel = normalvelocity.normalize().scale(this.speedfactor)

    //         this.CurrentRoute = this.CurrentRoute + 1
    //     }
    // }
}