export function isExternal(path) {
  return /(https?:|mailto:|tel:)/.test(path)
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  const str = `{"${
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
    }"}`
  return JSON.parse(str)
}
