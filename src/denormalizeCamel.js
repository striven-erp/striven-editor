/**
 * Converts camel case string to a readable sentence
 * @param {String} Camel case string to convert
 * @returns {String} Readable sentence
 */
export default (text) => {
  const result = text.replace( /([A-Z])/g, " $1" );
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  
  return finalResult;
}
