import { findFocusableElements } from './utils'

export class Carousel {
  /**
   *
   * @param {HTMLelement} element L'élément html animé par la classe
   */
  constructor(element) {
    this.element = element
    this.prevBtn = this.element.querySelector('.carousel__prev')
    this.nextBtn = this.element.querySelector('.carousel__next')
    this.closeBtn = this.element.querySelector('.carousel__close')
    this.items = this.element.querySelectorAll('.carousel__item')
    this.legend = this.element.querySelector('.carousel__legend')
    this.index = 0
    this.FocusableElements = findFocusableElements(this.element)
    this.firstChild = this.FocusableElements[0]
    this.lastChild = this.closeBtn
    this.FocusableElements.forEach((el) => {
      el.setAttribute('tabindex', -1)
    })

    this.close = this.close.bind(this)
    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.close()
    })
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index]
      element.setAttribute('aria-hidden', 'true')
      element.style.display = 'none'
    }
  }

  /**
   *
   * @param {number} id image à afficher
   */
  open(id = 0) {
    // reset liste des éléments pour qu'ils soient dans l'ordre même s'il y a eu un tri
    this.items = this.element.querySelectorAll('.carousel__item')
    this.index = id

    // masquer tous les items du tableau sauf celui à afficher
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index]
      element.style.animation = ''
      if (index === this.index) {
        // element.style.transform = 'translate3D(0,0,0)'
        element.style.display = ''
        element.removeAttribute('aria-hidden')
      } else {
        // element.style.transform = 'translate3D(100%,0,0)'
      }
    }

    // masquer le header et le main aux lecteurs d'écran
    document.querySelector('main').setAttribute('aria-hidden', 'true')
    document.querySelector('header').setAttribute('aria-hidden', 'true')
    document.body.classList.add('noScroll')

    // rendre visible le carousel
    this.element.setAttribute('aria-hidden', 'false')
    this.element.classList.add('visible')
    this.FocusableElements.forEach((el) => {
      el.setAttribute('tabindex', 0)
    })
    this.legend.textContent = this.items[this.index].getAttribute('data-legend')
    this.element.focus()

    // créer les listeners
    this.nextFrame = this.nextFrame.bind(this)
    this.prevFrame = this.prevFrame.bind(this)
    this.keyEvents = this.keyEvents.bind(this)
    this.nextBtn.addEventListener('click', this.nextFrame)
    this.prevBtn.addEventListener('click', this.prevFrame)
    this.element.addEventListener('keydown', this.keyEvents)
  }

  /**
   * Fermer le carousel
   * Rendre les éléments hors-carousel visible
   * cacher le carousel et ses enfants
   * supprimer les listener
   */
  close() {
    document.querySelector('main').setAttribute('aria-hidden', 'false')
    document.querySelector('header').setAttribute('aria-hidden', 'false')
    document.body.classList.remove('noScroll')
    this.element.setAttribute('aria-hidden', 'true')
    this.element.removeEventListener('keydown', this.keyEvents)
    this.nextBtn.removeEventListener('click', this.nextFrame)
    this.prevBtn.removeEventListener('click', this.prevFrame)
    this.element.classList.remove('visible')
    this.FocusableElements.forEach((el) => {
      el.setAttribute('tabindex', -1)
    })
    this.items = this.element.querySelectorAll('.carousel__item')
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index]
      element.setAttribute('aria-hidden', 'true')
      element.style.display = 'none'
      element.style.animation = 'none'
      element.querySelector('.carousel__media').setAttribute('tabindex', -1)
    }
    document.querySelectorAll('.mediaCard__imgContainer')[this.index].focus()
  }

  /**
   *
   * @param {document#event:keydown|document#event:click} e
   */
  nextFrame(e) {
    e.preventDefault()
    const oldElement = this.items[this.index]
    this.index = (this.index + 1) % this.items.length
    const newElement = this.items[this.index]
    oldElement.style.animation = '.3s ease-out 0s forwards 1 vanish'
    oldElement.setAttribute('aria-hidden', 'true')
    oldElement.querySelector('.carousel__media').setAttribute('tabindex', -1)
    oldElement.addEventListener(
      'animationend',
      () => {
        oldElement.style.display = 'none'
      },
      { once: true }
    )
    newElement.style.animation = '.3s ease-in 0s forwards 1 emerge'
    newElement.style.display = ''
    newElement.removeAttribute('aria-hidden')
    this.legend.textContent = newElement.getAttribute('data-legend')
    newElement.querySelector('.carousel__media').setAttribute('tabindex', 1)
    this.lastChild = newElement.querySelector('.carousel__media')
    newElement.querySelector('.carousel__media').focus()
  }

  /**
   * passer à l'image précédente
   * @param {document#event:keydown|document#event:click} e
   */
  prevFrame(e) {
    e.preventDefault()
    const oldElement = this.items[this.index]
    this.index = this.index > 0 ? this.index - 1 : this.items.length - 1
    const newElement = this.items[this.index]
    oldElement.style.animation = '.3s ease-in 0s forwards 1 vanish'
    oldElement.setAttribute('aria-hidden', 'true')
    oldElement.addEventListener(
      'animationend',
      () => {
        oldElement.style.display = 'none'
      },
      { once: true }
    )
    newElement.style.animation = '.3s ease-in 0s forwards 1 emerge'
    newElement.style.display = ''
    this.legend.textContent = newElement.getAttribute('data-legend')
    newElement.removeAttribute('aria-hidden')
    newElement.querySelector('.carousel__media').setAttribute('tabindex', 1)
    this.lastChild = newElement.querySelector('.carousel__media')
    newElement.querySelector('.carousel__media').focus()
  }

  /**
   * gestions des évènements claviers : <- , -> , tab, maj + tab
   * @param {document#event:keydown} e
   */
  keyEvents(e) {
    switch (e.code) {
      case 'ArrowRight':
        this.nextFrame(e)
        break
      case 'ArrowLeft':
        this.prevFrame(e)
        break
      case 'Escape':
        this.close()
        break
      case 'Tab':
        if (e.shiftKey || e.altKey) {
          if (document.activeElement === this.firstChild) {
            e.preventDefault()
            this.lastChild.focus()
          }
        } else {
          if (document.activeElement === this.lastChild) {
            e.preventDefault()
            this.firstChild.focus()
          }
        }
        break
      default:
        break
    }
  }
}
