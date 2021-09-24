import './style.scss'
import { Select } from './assets/js/customSelect'
import { Carousel } from './assets/js/carousel'

function importAll(r) {
  const images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
importAll(require.context('./assets/images/', false, /\.(png|jpe?g|svg|mp4)$/))

Select.create(document.querySelector('.selectStyled'))
const carousel = Carousel.create(document.querySelector('.carousel'))
const cards = document.getElementsByClassName('mediaCard')
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
for (let i = 0; i < cards.length; i++) {
  const element = cards[i]
  element.addEventListener('click', () => {
    carousel.open(i)
  })
}
// const carousel = Carousel(document.getElementsByClassName('carousel')[0])
