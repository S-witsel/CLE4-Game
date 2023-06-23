import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import emptyspace from '../images/placeholder/emptyspace.png'
import towerplaceholder from '../images/placeholder/towerplaceholder.png'
import testprojectile from '../images/placeholder/TestProjectileV2.png'

import level1layout from '../images/placeholder/Level1placeholder.png'

import broccoli1 from '../images/enemies/broccoli1.png'

import templatelayout from '../images/templatelayout.png'
import levelgridassist from '../images/levelGridAssist.png'

const Resources = {

    Emptyspace : new ImageSource(emptyspace),
    Towerplaceholder : new ImageSource(towerplaceholder),
    TestProjectile : new ImageSource(testprojectile),

    Level1layout : new ImageSource(level1layout),

    Broccoli1 : new ImageSource(broccoli1),

    TemplateLayout : new ImageSource(templatelayout),
    LevelGridAssist : new ImageSource(levelgridassist)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }