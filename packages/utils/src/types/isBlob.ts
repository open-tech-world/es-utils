/**
 * Checks if the given value is a blob.
 *
 * @example
 *
 * isBlob(new Blob()) //=> true
 *
 * isBlob({}) //=> false
 */

export default function isBlob(val: unknown): boolean {
  return Object.prototype.toString.call(val) === '[object Blob]';
}
