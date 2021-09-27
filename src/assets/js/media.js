import { createComplexElement, createElementFromObject } from './utils'

export class Media {
  constructor(obj, refreshTotalLikes) {
    this.refreshTotalLikes = refreshTotalLikes
    this.title = obj.title
    this.alt = obj.title
    this.src = obj.image || obj.video
    this.likes = obj.likes
    this.date = new Date(obj.date)
    if (obj.image) this.media = new Photo(obj)
    else if (obj.video) this.media = new Video(obj)
    this.cardElement = this.createCard()
    this.carouselItemElement = this.createCarouselItem()
    this.appendElements()

    this.likesEl = this.cardElement.querySelector('.mediaCard__likes')
    this.onLikeClick = this.onLikeClick.bind(this)
    this.likesEl.addEventListener('click', this.onLikeClick)
  }

  onLikeClick() {
    this.likes++
    this.likesEl.textContent = this.likesEl.textContent.replace(
      this.likes - 1,
      this.likes
    )
    this.refreshTotalLikes()
    this.likesEl.removeEventListener('click', this.onLikeClick)
  }

  appendElements() {
    document.querySelector('.mediasContainer').append(this.cardElement)
    document.querySelector('.carousel__frame').append(this.carouselItemElement)
  }

  static getLikes(medias) {
    let likes = 0
    medias.forEach((media) => {
      likes += media.likes
    })
    return likes
  }

  static sort(typeOfSort, medias) {
    switch (typeOfSort) {
      case 'popularity':
        medias.sort((a, b) => {
          if (a.likes < b.likes) {
            return 1
          }
          if (a.likes > b.likes) {
            return -1
          }
          return 0
        })
        break
      case 'date':
        medias.sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          return 0
        })
        break
      case 'title':
        medias.sort((a, b) => {
          if (a.title < b.title) {
            return -1
          }
          if (a.title > b.title) {
            return 1
          }
          return 0
        })
        break
    }
    medias.forEach((media) => {
      media.appendElements()
    })
  }

  createCard() {
    const mediaCardObj = [
      {
        name: 'root',
        type: 'div',
        class: 'mediaCard',
        parent: 'main',
      },
      {
        name: 'imgContainer',
        class: 'mediaCard__imgContainer',
        type: 'a',
        parent: 'root',
        attributes: {
          href: '#',
          title: 'à remplir',
        },
      },
      {
        name: 'infos',
        class: 'mediaCard__infos',
        type: 'div',
        parent: 'root',
      },
      {
        name: 'title',
        class: 'mediaCard__title',
        type: 'h3',
        parent: 'infos',
        content: this.title,
      },
      {
        name: 'likes',
        class: 'mediaCard__likes',
        type: 'div',
        parent: 'infos',
        content: this.likes + ' ',
      },
      {
        name: 'heart',
        class: 'mediaCard__heart',
        type: 'span',
        parent: 'likes',
        content: '♥',
      },
    ]
    mediaCardObj.push(this.media.mediaCardObj)
    return createComplexElement(mediaCardObj)
  }

  createCarouselItem() {
    const carouselItemObj = {
      type: 'li',
      class: 'carousel__item',
      attributes: {
        dataLegend: this.title,
      },
    }
    const carouselItem = createElementFromObject(carouselItemObj)
    carouselItem.append(createElementFromObject(this.media.carouselItemObj))
    return carouselItem
  }
}

class Photo {
  constructor(obj) {
    this.mediaCardObj = {
      type: 'img',
      class: 'mediaCard__media',
      parent: 'imgContainer',
      attributes: {
        src: `./assets/images/${obj.image}`,
        alt: obj.title,
      },
    }
    this.carouselItemObj = {
      type: 'img',
      class: 'carousel__media',
      attributes: {
        src: `./assets/images/${obj.image}`,
        alt: obj.title,
      },
    }
  }
}

class Video {
  constructor(obj) {
    this.mediaCardObj = {
      type: 'video',
      class: 'mediaCard__media',
      parent: 'imgContainer',
      attributes: {
        src: `./assets/images/${obj.video}`,
      },
    }
    this.carouselItemObj = {
      type: 'video',
      class: 'carousel__media',
      attributes: {
        src: `./assets/images/${obj.video}`,
        controls: true,
      },
    }
  }
}
