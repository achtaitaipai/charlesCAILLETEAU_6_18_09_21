import '../scss/style.scss'
import Data from '../json/FishEyeData.json'
import { Photographer } from './photographer'
import { getUrlValue, importAll } from './utils'

importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/))

const cardsContainer = document.querySelector('.main__photographers')
const filter = getUrlValue('filter')
let photographers = Data.photographers

// si un filtre est passé dans l'url => filtrer les photographes
if (filter !== null) {
  document.title = 'Fisheye - ' + filter
  photographers = photographers.filter((photographer) => {
    return photographer.tags.includes(filter)
  })
  const tags = document.querySelectorAll('.nav__tag')
  const arrTags = Array.prototype.slice.call(tags)
  const currentTag = arrTags.find((t) => t.innerHTML.includes(filter))
  currentTag.remove()
}

photographers.forEach((el) => {
  const phot = new Photographer(el)
  cardsContainer.appendChild(phot.card())
})
