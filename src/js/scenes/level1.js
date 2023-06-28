import { Scene, Actor, Vector } from "excalibur";
import { Layout } from "../misc/layout";
import { Resources } from "../resources";
import { Cursor } from "../UI-elements/cursor";
import { Tower } from "../towers/tower";
import { RoadElement } from "../mapelements/roadelement";
import { Level1layout } from "../mapelements/level1layout";
import { DevMapAssist } from "../mapelements/devmapassist";
import { EnemyCore } from "../enemies/enemycore";
import { RoadElementRound } from "../mapelements/roadelementround";
import { Towerinfo } from "../UI-elements/towerInfo";

export class Level1 extends Scene{

    levelbackground
    layout
    cursor

    map
    route

    route1
    route2
    route3

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
        //this.add(new DevMapAssist())

        //roadblocks
        this.add(new RoadElement(35,140,50,280))
        this.add(new RoadElement(140,255,260,50))
        this.add(new RoadElement(245,215,50,130))
        this.add(new RoadElement(535,175,630,50))
        this.add(new RoadElement(825,240,50,180))
        this.add(new RoadElement(650,305,400,50))

        this.add(new RoadElementRound(485,455,120))

        this.add(new RoadElement(485,650,50,150))

        this.add(new RoadElement(690,455,185,50))
        this.add(new RoadElement(755,535,50,210))
        this.add(new RoadElement(800,615,140,50))
        this.add(new RoadElement(845,645,50,110))

        this.add(new RoadElement(280,455,185,50))
        this.add(new RoadElement(215,540,50,220))
        this.add(new RoadElement(170,625,140,50))
        this.add(new RoadElement(125,650,50,100))

        this.route = [
            [35,0],
            [35,255],
            [245,255],
            [245,175],
            [825,175],
            [825,305],
            [475,305],
            [475,400]
        ]

        this.route1 = [
            [360,455],
            [215,455],
            [215,625],
            [125,625],
            [125,700]
        ]

        this.route2 = [
            [485,580],
            [485,700]
        ]
        
        this.route3 = [
            [610,455],
            [755,455],
            [755,615],
            [845,615],
            [845,700]
        ]

        this.cursor = new Cursor()
        this.add(this.cursor)

        this.spawncounter = 0
        this.spawndelay = 1000

        this.add(new Towerinfo())
    }

    onPreUpdate(engine, delta){
        this.spawncounter = this.spawncounter + delta

        if(this.spawncounter > this.spawndelay){
            let test = new EnemyCore()
            test.type = 1

            let randomnummer = Math.random() * 3
            let chosenroute
            if(randomnummer < 1){
               chosenroute = [...this.route,...this.route1] 
            }
            if(randomnummer >= 1 && randomnummer <= 2){
                chosenroute = [...this.route,...this.route2]
            }
            if(randomnummer > 2){
                chosenroute = [...this.route,...this.route3] 
             }
            test.RouteArray = chosenroute
            test.onSpawn()
            test.speedfactor = 100
            this.add(test)
            this.spawncounter = 0
        }
    }
}