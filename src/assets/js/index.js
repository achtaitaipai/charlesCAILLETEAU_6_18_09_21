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
  photographers = photographers.filter((photographer) =>
    photographer.tags.includes(filter)
  )
}

photographers.forEach((el) => {
  const phot = new Photographer(el)
  cardsContainer.appendChild(phot.card())
})
