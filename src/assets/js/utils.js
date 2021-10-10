/**
 *
 * @param {string} name -- nom de la valeur à rechercher dans l'url
 * @returns {string} value
 */
export function getUrlValue(name) {
  const parsedUrl = new URL(window.location.href)
  return parsedUrl.searchParams.get(name)
}
export function getUrlValues(name) {
  const parsedUrl = new URL(window.location.href)
  const retour = parsedUrl.searchParams.get(name)
    ? parsedUrl.searchParams.get(name).split(',')
    : null
  return retour
}

/**
 * Importe une série de fichiers
 * @param {function} r
 * @returns {Array.<string>} images - Liens vers les fichiers
 */
export function importAll(r) {
  const images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
/**
 * Crée des éléments Html qui peuvent être liés entre eux à partir d'un tableau d'objet
 * @param {Object[]} arr
 * @param {String} arr[].name
 * @param {String} arr[].parent
 * @param {String} arr[].class
 * @param {String} arr[].type
 * @param {Object} arr[].attributes
 * @returns HtmlElement
 */
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

/**
 * Crée un élément Html à partir d'un objet
 * @param {Object} obj
 * @param {String} obj.name
 * @param {String} obj.parent
 * @param {String} obj.class
 * @param {String} obj.type
 * @param {String} obj.content
 * @param {String} obj.innerhtml
 * @param {Object} obj.attributes
 * @returns HtmlElement
 */
export function createElementFromObject(obj) {
  const el = document.createElement(obj.type) || document.createElement('div')
  el.className = obj.class || ''
  const attributes = obj.attributes || []
  for (const [key, value] of Object.entries(attributes)) {
    const data = camelCaseParser(key)
    el.setAttribute(data, value)
  }
  if (obj.content) el.appendChild(document.createTextNode(obj.content))
  if (obj.innerhtml) el.innerHTML = obj.innerhtml
  return el
}

/**
 *
 * @param {string} text - text en camelCase
 * @returns {string}
 */
function camelCaseParser(text) {
  const result = text.replace(/([A-Z])/g, '-$1')
  const finalResult = result.charAt(0) + result.slice(1).toLowerCase()
  return finalResult
}

/**
 *
 * @param {HTMLelement} element - element parent dans lequel chercher les éléments focusables
 * @returns {Array.<HTMLelement>}
 */
export function findFocusableElements(element) {
  return element.querySelectorAll(`
      a[href],
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      [tabindex="0"],
      [tabindex="1"],
      .ember-power-select-trigger
    `)
}
