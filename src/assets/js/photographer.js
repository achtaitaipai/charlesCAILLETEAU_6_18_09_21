import { createComplexElement } from './utils'
export class Photographer {
  constructor(data) {
    this.id = data.id
    this.image = new Image()
    this.image.src = `./assets/images/${data.portrait}`
    this.name = data.name
    this.location = data.city + ' ' + data.country
    this.slogan = data.tagline
    this.price = data.price
    this.tags = data.tags
  }

  identitySection() {
    const el = [
      {
        name: 'root',
        type: 'section',
        class: 'photographerIdentity',
        parent: 'main',
      },
      {
        name: 'infos',
        type: 'div',
        class: 'photographerIdentity__infos',
        parent: 'root',
      },
      {
        name: 'title',
        type: 'h2',
        class: 'photographerIdentity__title',
        parent: 'infos',
        content: this.name,
      },
      {
        name: 'text',
        type: 'div',
        class: 'photographerIdentity__text',
        parent: 'infos',
      },
      {
        name: 'location',
        type: 'p',
        class: 'photographerIdentity__location',
        parent: 'text',
        content: this.location,
      },
      {
        name: 'slogan',
        type: 'p',
        class: 'photographerIdentity__slogan',
        parent: 'text',
        content: this.slogan,
      },
      {
        name: 'tagsList',
        type: 'div',
        class: 'photographerIdentity__tagsList',
        parent: 'infos',
      },
      {
        name: 'contact',
        type: 'button',
        class: 'photographerIdentity__contact',
        parent: 'root',
        content: 'Contactez-moi',
      },
      {
        name: 'imgContainer',
        type: 'div',
        class: 'photographerIdentity__imgContainer',
        parent: 'root',
      },
      {
        name: 'img',
        type: 'img',
        class: 'photographerIdentity__img',
        parent: 'imgContainer',
        attributes: {
          src: this.image.src,
          alt: `portrait de ${this.name}`,
        },
      },
    ]
    this.tags.forEach((tag) => {
      const tagEl = {
        name: 'tag',
        type: 'a',
        class: 'photographerIdentity__lien',
        parent: 'tagsList',
        content: '#' + tag,
        attributes: {
          href: 'index.html?filter=' + tag,
          title: 'à remplir',
        },
      }
      el.push(tagEl)
    })
    return createComplexElement(el)
  }

  /**
   *
   * @returns {HTMLElement} carte photographe
   */
  card() {
    const el = [
      {
        name: 'root',
        type: 'a',
        class: 'photographerCard',
        attributes: {
          href: `photographer.html?id=${this.id}`,
          title: `découvrez le travail de ${this.name}`,
        },
        parent: 'main',
      },
      {
        name: 'imgContainer',
        type: 'div',
        class: 'photographerCard__imgContainer',
        parent: 'root',
      },
      {
        name: 'img',
        type: 'img',
        class: 'photographerCard__img',
        attributes: {
          src: this.image.src,
          alt: '',
        },
        parent: 'imgContainer',
      },
      {
        name: 'titre',
        type: 'h2',
        class: 'photographerCard__title',
        parent: 'root',
        content: this.name,
      },
      {
        name: 'infos',
        type: 'div',
        class: 'photographerCard__infos',
        parent: 'root',
      },
      {
        name: 'location',
        type: 'p',
        class: 'photographerCard__location',
        parent: 'infos',
        content: this.location,
      },
      {
        name: 'slogan',
        type: 'p',
        class: 'photographerCard__slogan',
        parent: 'infos',
        content: this.slogan,
      },
      {
        name: 'tarif',
        type: 'p',
        class: 'photographerCard__tarif',
        parent: 'infos',
        content: this.price + '€',
      },
      {
        name: 'tags',
        type: 'ul',
        class: 'photographerCard__tags',
        parent: 'root',
      },
    ]
    this.tags.forEach((tag) => {
      const tagEl = {
        name: 'tag',
        type: 'li',
        class: 'photographerCard__tag',
        parent: 'tags',
        content: '#' + tag,
      }
      el.push(tagEl)
    })
    return createComplexElement(el)
  }
}
