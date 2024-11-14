import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#353934',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './avinomad.png',
  fullDecal: './circuit.png',
});

export default state;