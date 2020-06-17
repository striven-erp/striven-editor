/*
 * Constructs an SVG from a viewBox and d property
 * @param {Object} Object with viewBox and d property
 * @param {String} Fill color for the svg
 * @param {Number} Height of the SVG
 * @param {Width} Width of the SVG
 * @returns {HTMLElement} Returns SVG Element
 */
export default function(svgData, fillColor = '#000', height = 16, width = 16) {
  const {viewBox, d} = svgData;
  const xmlns = 'http://www.w3.org/2000/svg';

  const icon = document.createElement('div');
  const svg = `<svg width="${width}" height="${height}" viewBox="${viewBox}" xmlns="${xmlns}">`;
  const path = `<path fill="${fillColor}" d="${d}"/>`;

  icon.innerHTML = `${svg}${path}</svg>`;

  return icon.querySelector('svg');
}
