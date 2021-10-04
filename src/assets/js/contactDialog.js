import { findFocusableElements } from './utils'

export class ContactDialog {
  constructor() {
    this.element = document.querySelector('.dialog')
    this.openBtn = document.querySelector('.photographerIdentity__contact')
    this.closeBtn = document.querySelector('.dialogForm__close')
    this.submitBtn = document.querySelector('.dialogForm__submit')
    this.form = this.element.querySelector('form')
    this.FocusableElements = findFocusableElements(this.element)
    this.firstChild = this.FocusableElements[0]
    this.lastChild = this.closeBtn
    this.FocusableElements.forEach((el) => {
      el.setAttribute('tabindex', -1)
    })

    this.open = this.open.bind(this)
    this.openBtn.addEventListener('click', this.open)
  }

  /**
   *Ouvre la fenetre dialog et lance les listeners
   */
  open() {
    document.querySelector('main').setAttribute('aria-hidden', 'true')
    document.querySelector('header').setAttribute('aria-hidden', 'true')
    document.body.classList.add('noScroll')
    this.element.setAttribute('aria-hidden', 'false')
    this.firstChild.focus()
    this.openBtn.removeEventListener('click', this.open)
    this.element.classList.add('visible')
    this.FocusableElements.forEach((el) => {
      el.setAttribute('tabindex', 0)
    })

    this.close = this.close.bind(this)
    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.close()
    })

    this.keyboard = this.keyboard.bind(this)
    this.element.addEventListener('keydown', this.keyboard)

    this.onSubmit = this.onSubmit.bind(this)
    this.submitBtn.addEventListener('click', this.onSubmit)
  }

  /**
   * Ferme la fenetre dialog et supprime les listener
   */
  close() {
    document.querySelector('main').setAttribute('aria-hidden', 'false')
    document.querySelector('header').setAttribute('aria-hidden', 'false')
    document.body.classList.remove('noScroll')
    this.element.setAttribute('aria-hidden', 'true')
    this.closeBtn.removeEventListener('click', this.close)
    this.closeBtn.removeEventListener('keydown', this.keyboard)
    this.submitBtn.removeEventListener('click', this.onSubmit)
    this.element.classList.remove('visible')
    this.open = this.open.bind(this)
    this.openBtn.addEventListener('click', this.open)
    this.FocusableElements.forEach((el) => {
      el.setAttribute('tabindex', -1)
    })
    this.openBtn.focus()
  }

  /**
   * Gestions des evenements claviers :
   * echap, tab et maj + tab
   * @param {document#event:keydown} e
   */
  keyboard(e) {
    if (e.code === 'Escape') {
      e.preventDefault()
      this.close()
    }
    if (e.code === 'Tab') {
      if (
        this.lastChild === document.activeElement &&
        !e.shiftKey &&
        !e.altKey
      ) {
        e.preventDefault()
        this.firstChild.focus()
      }
      if (
        (e.shiftKey || e.altKey) &&
        this.firstChild === document.activeElement
      ) {
        e.preventDefault()
        this.lastChild.focus()
      }
    }
  }

  /**
   * Gestion du formulaire à la soumission
   * @param {document#event:click} e
   */
  onSubmit(e) {
    // e.preventDefault()
    const inputs = this.element.querySelectorAll('.dialogForm__input')
    if (this.form.checkValidity()) {
      for (const input of inputs) {
        console.log(input.value)
      }
      e.preventDefault()
      this.close()
    }
  }
}
