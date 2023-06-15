import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import emptyspace from '../images/placeholder/emptyspace.png'
import towerplaceholder from '../images/placeholder/towerplaceholder.png'

import templatelayout from '../images/templatelayout.png'

const Resources = {

    Emptyspace : new ImageSource(emptyspace),
    Towerplaceholder : new ImageSource(towerplaceholder),

    TemplateLayout : new ImageSource(templatelayout)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }