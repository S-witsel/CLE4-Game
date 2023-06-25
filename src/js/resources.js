import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import emptyspace from '../images/placeholder/emptyspace.png'
import towerplaceholder from '../images/placeholder/towerplaceholder.png'
import testprojectile from '../images/placeholder/TestProjectileV2.png'
import level1layout from '../images/placeholder/Level1placeholder.png'
import templatelayout from '../images/templatelayout.png'
import levelgridassist from '../images/levelGridAssist.png'

import broccoli1 from '../images/enemies/broccoli1.png'
import broccoli2 from '../images/enemies/broccoli2.png'
import broccoli3 from '../images/enemies/broccoli3.png'
import eggplant from '../images/enemies/eggplant.png'
import orchid from '../images/enemies/orchid.png'
import peach from '../images/enemies/peach.png'
import tomato1 from '../images/enemies/tomato1.png'
import tomato2 from '../images/enemies/tomato2.png'
import tomatospritesheet from '../images/enemies/TomatoSpriteSheet.png'

import artistUI from '../images/ui/artistUI.png'
import bokitoUI from '../images/ui/bokitoUI.png'
import farmerUI from '../images/ui/farmerUI.png'
import hackerUI from '../images/ui/hackerUI.png'
import hooligansUI from '../images/ui/hooligansUI.png'
import jobUI from '../images/ui/jobUI.png'
import mrweedUI from '../images/ui/mrweedUI.png'

import farmerSprite from '../images/towers/farmerSprite.png'

import farmerBullet from '../images/projectiles/farmerBullet.png'

import map1 from '../images/maps/map1.png'
import map2 from '../images/maps/map2.png'
import map3 from '../images/maps/map3.png'
import map4 from '../images/maps/map4.png'

const Resources = {

    Emptyspace : new ImageSource(emptyspace),
    Towerplaceholder : new ImageSource(towerplaceholder),
    TestProjectile : new ImageSource(testprojectile),
    Level1layout : new ImageSource(level1layout),
    TemplateLayout : new ImageSource(templatelayout),
    LevelGridAssist : new ImageSource(levelgridassist),

    Broccoli1 : new ImageSource(broccoli1),
    Broccoli2 : new ImageSource(broccoli2),
    Broccoli3 : new ImageSource(broccoli3),
    Eggplant : new ImageSource(eggplant),
    Orchid : new ImageSource(orchid),
    Peach : new ImageSource(peach),
    Tomato1 : new ImageSource(tomato1),
    Tomato2 : new ImageSource(tomato2),
    TomatoSpriteSheet : new ImageSource(tomatospritesheet),

    ArtistUI: new ImageSource(artistUI),
    BokitoUI: new ImageSource(bokitoUI),
    FarmerUI: new ImageSource(farmerUI),
    HackerUI: new ImageSource(hackerUI),
    HooligansUI: new ImageSource(hooligansUI),
    JobUI: new ImageSource(jobUI),
    MrweedUI: new ImageSource(mrweedUI),

    Farmersprite: new ImageSource(farmerSprite),

    FarmerBullet: new ImageSource(farmerBullet),

    Map1: new ImageSource(map1),
    Map2: new ImageSource(map2),
    Map3: new ImageSource(map3),
    Map4: new ImageSource(map4)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }