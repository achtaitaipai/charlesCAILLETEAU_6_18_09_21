import '../scss/style.scss'
import Data from '../json/FishEyeData.json'
import { Select } from './customSelect'
import { Carousel } from './carousel'
import { Photographer } from './photographer'
import { Media } from './media'
import { getUrlValue, importAll } from './utils'
import { ContactDialog } from './contactDialog.js'

// importer les images
importAll(require.context('../images/', false, /\.(mp4)$/))
/* Déclaration des variables
 */
const Id = parseInt(getUrlValue('id'))
if (isNaN(Id)) window.location.href = 'index.html'
// récupérer l'objet photographe correspondant à l'id passé dans l'url
const photographerData = Data.photographers.find((el) => el.id === Id)
// créé un nouveau photographe ainsi que son élément 'identity' puis l'insérer
const photographer = new Photographer(photographerData)
const main = document.querySelector('.mainPhotographer')

// récupérer les objet medias qui correspondent à l'id passé dans l'url
const mediaData = Data.media.filter(
  (el) => el.photographerId === parseInt(getUrlValue('id'))
)
main.insertBefore(
  photographer.identitySection(),
  document.querySelector('.medias')
)

document.title = 'Fisheye - ' + photographer.name
// eslint-disable-next-line no-unused-vars
const dialog = new ContactDialog()
// au chargement activer les animations
// https://css-tricks.com/transitions-only-after-page-load/
window.addEventListener('load', () => {
  const anims = document.getElementsByClassName('preload')
  while (anims.length > 0) {
    anims[0].classList.remove('preload')
  }
})

const medias = []
mediaData.forEach((data) => {
  const media = new Media(data, function (e) {
    e.preventDefault()
    document.querySelector(
      '.photographerIdentity__likes'
    ).textContent = `${Media.getLikes(medias)} ♥`
  })
  medias.push(media)
})

Media.sort('popularity', medias)
// au clique sur une mediaCard => ouvrir le carousel à l'image correspondante
for (let i = 0; i < medias.length; i++) {
  const mediaCard = medias[i].cardElement
  const mediaCardLink = mediaCard.querySelector('a')
  mediaCardLink.addEventListener('click', (e) => {
    e.preventDefault()
    const index = [...mediaCard.parentElement.children].indexOf(mediaCard)
    carousel.open(index)
  })
}

// création du sélect customisé
Select.create(document.querySelector('.selectStyled'), (value) =>
  Media.sort(value, medias)
)

document.querySelector(
  '.photographerIdentity__likes'
).textContent = `${Media.getLikes(medias)} ♥`

const carousel = new Carousel(document.querySelector('.carousel'))
