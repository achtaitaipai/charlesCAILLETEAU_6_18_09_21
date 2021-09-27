/**
 *
 * @param {string} name -- nom de la valeur à rechercher dans l'url
 * @returns {string} value
 */
export function getUrlValue(name) {
  const parsedUrl = new URL(window.location.href)
  return parsedUrl.searchParams.get(name)
}

export function importAll(r) {
  const images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
export function createComplexElement(arr) {
  const newArr = []
  arr.forEach((obj) => {
    const newObj = {}
    newObj.DOMelement = createElementFromObject(obj)
    newObj.name = obj.name
    newObj.parent = obj.parent
    const papa = newArr.find((el) => el.name === obj.parent)
    if (papa) {
      papa.DOMelement.appendChild(newObj.DOMelement)
    }
    newArr.push(newObj)
  })
  return newArr.find((el) => el.parent === 'main').DOMelement
}

export function createElementFromObject(obj) {
  const el = document.createElement(obj.type) || document.createElement('div')
  el.className = obj.class || ''
  const attributes = obj.attributes || []
  for (const [key, value] of Object.entries(attributes)) {
    const data = camelCaseParser(key)
    el.setAttribute(data, value)
  }
  if (obj.content) el.appendChild(document.createTextNode(obj.content))
  return el
}

function camelCaseParser(text) {
  const result = text.replace(/([A-Z])/g, '-$1')
  const finalResult = result.charAt(0) + result.slice(1).toLowerCase()
  return finalResult
}
