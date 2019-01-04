export function isValidUserName(str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim(str)) >= 0
}
