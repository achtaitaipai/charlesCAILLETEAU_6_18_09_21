import '../scss/style.scss'
import Data from '../json/FishEyeData.json'
import { Select } from './customSelect'
import { Carousel } from './carousel'
import { Photographer } from './photographer'
import { Media } from './media'
import { getUrlValue, importAll } from './utils'

// importer les images
importAll(require.context('../images/', false, /\.(mp4)$/))

// récupérer l'objet photographe correspondant à l'id passé dans l'url
const photographerData = Data.photographers.find(
  (el) => el.id === parseInt(getUrlValue('id'))
)

// créé un nouveau photographe ainsi que son élément 'identity' puis l'insérer
const photographer = new Photographer(photographerData)
const main = document.querySelector('.mainPhotographer')
main.insertBefore(
  photographer.identitySection(),
  document.querySelector('.medias')
)

// gestion des fenetre contact et carousel
const contact = document.getElementsByClassName(
  'photographerIdentity__contact'
)[0]
const closeModal = document.getElementsByClassName('dialogForm__close')[0]
const dialog = document.getElementsByClassName('dialog')[0]

contact.addEventListener('click', () => {
  dialog.classList.toggle('visible')
})

closeModal.addEventListener('click', (e) => {
  dialog.classList.toggle('visible')
  e.preventDefault()
})

const carousel = new Carousel(document.querySelector('.carousel'))

// au chargement activé les animations
// https://css-tricks.com/transitions-only-after-page-load/
window.addEventListener('load', () => {
  const anims = document.getElementsByClassName('preload')
  while (anims.length > 0) {
    anims[0].classList.remove('preload')
  }
})
// récupérer les objet medias qui correspondent à l'id passé dans l'url
const mediaData = Data.media.filter(
  (el) => el.photographerId === parseInt(getUrlValue('id'))
)

// trie les éléments par popularité (nb de like)
mediaData.sort((a, b) => {
  if (a.likes < b.likes) {
    return 1
  }
  if (a.likes > b.likes) {
    return -1
  }
  return 0
})
const medias = []
mediaData.forEach((data) => {
  const media = new Media(data)
  medias.push(media)
})
Media.sort('popularity', medias)
// au clique sur une mediaCard => ouvrir le carousel à l'image correspondante
for (let i = 0; i < medias.length; i++) {
  const mediaCard = medias[i].cardElement
  mediaCard.addEventListener('click', (e) => {
    e.preventDefault()
    const index = [...mediaCard.parentElement.children].indexOf(mediaCard)
    carousel.open(index)
  })
}

// création du sélect customisé
Select.create(document.querySelector('.selectStyled'), (value) =>
  Media.sort(value, medias)
)
