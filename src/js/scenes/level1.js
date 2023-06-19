import { Scene, Actor, Vector } from "excalibur";
import { Layout } from "../misc/layout";
import { Resources } from "../resources";
import { Cursor } from "../UI-elements/cursor";
import { Tower } from "../towers/tower";
import { RoadElement } from "../mapelements/roadelement";
import { Level1layout } from "../mapelements/level1layout";
import { DevMapAssist } from "../mapelements/devmapassist";
import { EnemyCore } from "../enemies/enemycore";

export class Level1 extends Scene{

    levelbackground
    layout
    cursor

    spawncounter
    spawndelay

    constructor(){
        super()
    }

    onInitialize(){
        this.layout = new Layout()
        this.add(this.layout)

        this.levelbackground = new Level1layout()
        this.add(this.levelbackground)
        
        //developing assist
        this.add(new DevMapAssist())

        this.add(new RoadElement(370,100,740,80))
        this.add(new RoadElement(700,300,80,480))
        this.add(new RoadElement(370,500,740,80))

        this.cursor = new Cursor()
        this.add(this.cursor)

        this.spawncounter = 0
        this.spawndelay = 500
    }

    onPreUpdate(engine, delta){
        this.spawncounter = this.spawncounter + delta

        if(this.spawncounter > this.spawndelay){
            let test = new EnemyCore()
            test.RouteArray = [[0,100],[700,100],[700,500],[0,500]]
            test.onSpawn()
            test.speedfactor = 500
            this.add(test)
            this.spawncounter = 0
        }
    }
}