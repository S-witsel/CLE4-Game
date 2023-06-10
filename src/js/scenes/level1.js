import { Scene } from "excalibur";
import { Layout } from "../misc/layout";

export class Level1 extends Scene{

    layout

    constructor(){
        super()
    }

    onInitialize(){
        this.layout = new Layout()
        this.add(this.layout)
    }
}