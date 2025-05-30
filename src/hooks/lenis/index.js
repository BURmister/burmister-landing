// lib/lenis.js
import Lenis from 'lenis';

let lenis = null;

export function initLenis(options = {}) {
   lenis = new Lenis(options);
   return lenis;
}

export function getLenis() {
   return lenis;
}
