import '../scss/style.scss'
import Data from '../json/FishEyeData.json'
import { Photographer } from './photographer'
import { getUrlValues, importAll } from './utils'

importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/))

const cardsContainer = document.querySelector('.main__photographers')
const filters = getUrlValues('filter')
let photographers = Data.photographers

// si un filtre est passé dans l'url => filtrer les photographes
if (filters !== null) {
  document.title = 'Fisheye - ' + filters.join()
  photographers = photographers.filter((photographer) => {
    const tags = photographer.tags.join()
    let match = true
    filters.forEach((filter) => {
      if (!tags.includes(filter)) match = false
    })
    return match
  })
  const tags = Array.from(document.querySelectorAll('.nav__lien'))
  tags.forEach((tag) => {
    const toTest = tag.getAttribute('data-tag')
    if (filters.includes(toTest)) {
      tag.classList.add('active')
      const filterList = filters.filter((f) => f !== toTest).join()
      const url =
        filters.length > 1 ? 'index.html?filter=' + filterList : 'index.html'
      tag.setAttribute('href', url)
    } else if (filters.length > 0) {
      const url = tag.getAttribute('href') + ',' + filters.join()
      tag.setAttribute('href', url)
    }
  })
}
if (photographers.length > 0) {
  document.querySelector('.error').remove()
}
photographers.forEach((el) => {
  const phot = new Photographer(el)
  cardsContainer.appendChild(phot.card())
})
