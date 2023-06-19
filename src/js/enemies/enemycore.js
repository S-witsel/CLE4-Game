import { Actor, Vector } from "excalibur";
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

    constructor(){
        super({radius: (Resources.Broccoli1.height / 2)})
    }

    onInitialize(){
        this.onSpawn()
        this.graphics.use(Resources.Broccoli1.toSprite())
    }

    onSpawn(){
        this.startposx = this.RouteArray[0][0]
        this.startposy = this.RouteArray[0][1]
        this.pos = new Vector(this.startposx, this.startposy)
        this.RemainingRoute = this.RouteArray.length
        this.CurrentRoute = 0

        this.scale = new Vector(3,3)
    }

    onPreUpdate(){
        //this.updateVel()
        this.GotoNext()
    }

    GotoNext(){
        if(this.pos.x === this.RouteArray[this.CurrentRoute][0] && this.pos.y === this.RouteArray[this.CurrentRoute][1]){
            this.CurrentRoute = this.CurrentRoute + 1

            if(this.CurrentRoute === this.RemainingRoute){
                this.kill()
            } else {
                let pos = new Vector(this.RouteArray[this.CurrentRoute][0],this.RouteArray[this.CurrentRoute][1])
                this.actions.moveTo(pos,this.speedfactor);
            }
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