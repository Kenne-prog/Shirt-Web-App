import { proxy } from 'valtio';
import {nbalogo} from '../assets'

const state = proxy({
   intro: true, 
   color: 'grey',
   isLogoTexture: true,
   isFullTexture: false, 
   logoDecal: nbalogo,
   fullDecal: nbalogo,
   selectedLogo: nbalogo,
})

export default state;