import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import templatelayout from '../images/templatelayout.png'

const Resources = {
    TemplateLayout : new ImageSource(templatelayout)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }