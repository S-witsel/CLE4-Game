import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Level1 } from './scenes/level1'

export class Game extends Engine {

    constructor() {
        super({ width: 1500, height: 700 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.showDebug(true)
        this.addScene('level1', new Level1())

        this.goToScene('level1')
        console.log("start de game!")
    }
}

new Game()
