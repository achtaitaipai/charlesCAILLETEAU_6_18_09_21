import { createComplexElement } from './utils'

export class Photographer {
  /**
   *
   * @param {Object} data
   * @param {number} data.id
   * @param {string} data.portrait
   * @param {string} data.name
   * @param {string} data.coutry
   * @param {string} data.city
   * @param {string} data.tagline
   * @param {string} data.price
   * @param {string} data.tags
   */
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
      {
        name: 'photographerIdentity__likesAndPrice',
        type: 'div',
        class: 'photographerIdentity__likesAndPrice',
        parent: 'root',
      },
      {
        name: 'photographerIdentity__likes',
        type: 'span',
        class: 'photographerIdentity__likes',
        parent: 'photographerIdentity__likesAndPrice',
      },
      {
        name: 'photographerIdentity__price',
        type: 'span',
        class: 'photographerIdentity__price',
        parent: 'photographerIdentity__likesAndPrice',
        content: `${this.price}???/jour`,
      },
    ]
    this.tags.forEach((tag) => {
      const tagEl = {
        name: 'tag',
        type: 'a',
        class: 'photographerIdentity__lien',
        parent: 'tagsList',
        innerhtml: `<span class="sr-only">${tag} </span> <span aria-hidden="true">#${tag}</span>`,
        attributes: {
          href: 'index.html?filter=' + tag,
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
        type: 'article',
        class: 'photographerCard',
        parent: 'main',
      },
      {
        name: 'link',
        type: 'a',
        class: 'photographerCard__link',
        parent: 'root',
        attributes: {
          href: `photographer.html?id=${this.id}`,
          title: `d??couvrez le travail de ${this.name}`,
          ariaLabel:this.name
        },
      },
      {
        name: 'imgContainer',
        type: 'div',
        class: 'photographerCard__imgContainer',
        parent: 'link',
      },
      {
        name: 'img',
        type: 'img',
        class: 'photographerCard__img',
        attributes: {
          src: this.image.src,
          alt:''
        },
        parent: 'imgContainer',
      },
      {
        name: 'titre',
        type: 'h2',
        class: 'photographerCard__title',
        parent: 'link',
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
        content: this.price + '???',
      },
      {
        name: 'tags',
        type: 'ul',
        class: 'photographerCard__tags',
        parent: 'root',
      },
    ]
    this.tags.forEach((tag) => {
      const tagLi = {
        name: tag,
        type: 'li',
        parent: 'tags',
      }
      el.push(tagLi)

      const tagA = {
        name: tag+'link',
        type: 'a',
        class: 'photographerCard__tag',
        parent: tag,
        innerhtml: `<span class="sr-only">${tag} </span> #<span aria-hidden="true"> ${tag}</span>`,
        attributes: {
          href: 'index.html?filter=' + tag,
      },
      }
      el.push(tagA)
    })
    return createComplexElement(el)
  }
}
