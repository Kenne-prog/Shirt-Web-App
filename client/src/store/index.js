import { proxy } from 'valtio';

const state = proxy({
   intro: true, 
   color: '#EFBD48',
   isLogoTexture: true,
   isFullTexture: false, 
   logoDecal: './lakers.png',
   fullDecal: './lakers.png',
})

export default state;