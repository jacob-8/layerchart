import { geoCentroid } from 'd3-geo';
import pageSource from './+page.svelte?raw';

export async function load({ fetch }) {
  return {
    geojson: await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(
      (r) => r.json()
    ),
    cables: await fetch('/data/examples/geo/submarine-cables.json').then((r) => r.json()),
    landingPoints: await fetch('/data/examples/geo/submarine-cables-landing-points.json').then(
      (r) => r.json()
    ),
    meta: {
      pageSource,
    },
  };
}
