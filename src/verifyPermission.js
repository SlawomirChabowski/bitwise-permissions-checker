export default verifyPermission;
export { verifyPermission };

/**
 * @param {Number} permissions 
 * @param {Number} position
 * @returns {Boolean}
 */
function verifyPermission(permissions, position) {
  // permissions >> position - moves the number to the right (to get the value on the position to compare)
  // value & 1 - checks whether the value is 1 or 0
  return Boolean((permissions >> position) & 1)
}
