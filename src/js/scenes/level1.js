import { Scene, Actor, Vector } from "excalibur";
import { Layout } from "../misc/layout";
import { Resources } from "../resources";
import { Cursor } from "../UI-elements/cursor";
import { Tower } from "../towers/tower";
import { RoadElement } from "../mapelements/roadelement";

export class Level1 extends Scene{

    layout
    cursor

    constructor(){
        super()
    }

    onInitialize(){
        this.layout = new Layout()
        this.add(this.layout)

        this.cursor = new Cursor()
        this.add(this.cursor)

        let element = new RoadElement(500,350,80,80)
        this.add(element)
    }
}