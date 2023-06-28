import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import emptyspace from '../images/placeholder/emptyspace.png'
import towerplaceholder from '../images/placeholder/towerplaceholder.png'
import testprojectile from '../images/placeholder/TestProjectileV2.png'
import level1layout from '../images/placeholder/Level1placeholder.png'
import templatelayout from '../images/templatelayout.png'
import levelgridassist from '../images/levelGridAssist.png'

import broccoli from '../images/enemies/broccoli.png'
import eggplant from '../images/enemies/eggplant.png'
import orchid from '../images/enemies/orchid.png'
import peach from '../images/enemies/peach.png'
import tomato from '../images/enemies/tomato.png'

import cursor from '../images/ui/cursor.png'
import artistUI from '../images/ui/artistUI.png'
import bokitoUI from '../images/ui/bokitoUI.png'
import farmerUI from '../images/ui/farmerUI.png'
import hackerUI from '../images/ui/hackerUI.png'
import hooligansUI from '../images/ui/hooligansUI.png'
import jobUI from '../images/ui/jobUI.png'
import mrweedUI from '../images/ui/mrweedUI.png'

import artistbullet from '../images/projectiles/artistBullet.png'
import bokitobullet from '../images/projectiles/bokitoBullet.png'
import farmerbullet from '../images/projectiles/farmerBullet.png'
import hackerbullet from '../images/projectiles/hackerBullet.png'
import hooligansbullet from '../images/projectiles/hooligansBullet.png'
import jobbullet from '../images/projectiles/jobBullet.png'
import weedbullet from '../images/projectiles/weedBullet.png'

import artist from '../images/towers/artist.png'
import artistb from '../images/towers/artistB.png'
import bokito from '../images/towers/bokito.png'
import farmer from '../images/towers/farmer.png'
import farmerb from '../images/towers/farmerB.png'
import hacker from '../images/towers/hacker.png'
import hackerb from '../images/towers/hackerB.png'
import hooligans from '../images/towers/hooligans.png'
import hooligansb from '../images/towers/hooligansB.png'
import job from '../images/towers/job.png'
import weed from '../images/towers/weed.png'
import weedb from '../images/towers/weedB.png'

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

    Broccoli : new ImageSource(broccoli),
    Eggplant : new ImageSource(eggplant),
    Orchid : new ImageSource(orchid),
    Peach : new ImageSource(peach),
    Tomato : new ImageSource(tomato),
    
    Cursor: new ImageSource(cursor),
    ArtistUI: new ImageSource(artistUI),
    BokitoUI: new ImageSource(bokitoUI),
    FarmerUI: new ImageSource(farmerUI),
    HackerUI: new ImageSource(hackerUI),
    HooligansUI: new ImageSource(hooligansUI),
    JobUI: new ImageSource(jobUI),
    MrweedUI: new ImageSource(mrweedUI),

    ArtistBullet: new ImageSource(artistbullet),
    BokitoBullet: new ImageSource(bokitobullet),
    FarmerBullet: new ImageSource(farmerbullet),
    HackerBullet: new ImageSource(hackerbullet),
    HooligansBullet: new ImageSource(hooligansbullet),
    JobBullet: new ImageSource(jobbullet),
    WeedBullet: new ImageSource(weedbullet),

    Artist: new ImageSource(artist),
    ArtistB: new ImageSource(artistb),
    Bokito: new ImageSource(bokito),
    Farmer: new ImageSource(farmer),
    FarmerB: new ImageSource(farmerb),
    Hacker: new ImageSource(hacker),
    HackerB: new ImageSource(hackerb),
    Hooligans: new ImageSource(hooligans),
    HoolignasB: new ImageSource(hooligansb),
    Job: new ImageSource(job),
    Weed: new ImageSource(weed),
    WeedB: new ImageSource(weedb),

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