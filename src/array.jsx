export function createArray(length, callback) {
  return [...new Array(length)].map(callback);
}
