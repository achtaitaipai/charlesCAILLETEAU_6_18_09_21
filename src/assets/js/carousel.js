export class Carousel {
  constructor(element) {
    this.element = element
    this.prev = this.element.getElementsByClassName('carousel__prev')[0]
    this.next = this.element.getElementsByClassName('carousel__next')[0]
    this.items = this.element.getElementsByClassName('carousel__item')
    this.legend = this.element.getElementsByClassName('carousel__legend')[0]
    this.closeBtn = this.element.getElementsByClassName('carousel__close')[0]
    this.index = 0
  }

  open(ind = 0) {
    this.index = ind
    this.element.classList.add('visible')
    for (let i = 0; i < this.items.length; i++) {
      const el = this.items[i]
      el.style.animation = 'none'
      if (i !== this.index) {
        el.style.transform = 'translate3D(-100%,0,0)'
      } else {
        el.style.transform = 'translate3D(0%,0,0)'
      }
    }
    this.legend.innerHTML = this.index

    this.nextMedia = this.nextMedia.bind(this)
    this.next.addEventListener('click', this.nextMedia, event, 2)

    this.previousMedia = this.previousMedia.bind(this)
    this.prev.addEventListener('click', this.previousMedia)

    this.navig = this.navig.bind(this)
    document.addEventListener('keydown', this.navig)
    this.close = this.close.bind(this)
    this.closeBtn.addEventListener('click', this.close)
  }

  close() {
    this.element.classList.remove('visible')
    this.next.removeEventListener('click', this.nextMedia)
    this.prev.removeEventListener('click', this.previousMedia)
    document.removeEventListener('keydown', this.navig)
  }

  navig() {
    if (event.keyCode === 39) this.nextMedia()
    else if (event.keyCode === 37) this.previousMedia()
  }

  nextMedia() {
    this.items[this.index].style.animation = '.3s ease-in 0s both 1 toLeft'
    this.index = (this.index + 1) % this.items.length
    this.items[this.index].style.animation = '.3s ease-in 0s both 1 fromRight'
    this.legend.innerHTML = this.index
  }

  previousMedia() {
    this.items[this.index].style.animation = '.3s ease-in 0s both 1 toRight'
    this.index = this.index > 0 ? this.index - 1 : this.items.length - 1
    this.items[this.index].style.animation = '.3s ease-in 0s both 1 fromLeft'
    this.legend.innerHTML = this.index
  }

  static create(element) {
    return new Carousel(element)
  }
}
