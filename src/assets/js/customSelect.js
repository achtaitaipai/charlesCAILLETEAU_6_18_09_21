import { createComplexElement } from './utils'
/*
source : https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
*/
export class Select {
  /**
   *
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element
    this.elSelectNative = this.element.querySelector('select')

    // wrap select in container
    const parent = this.elSelectNative.parentNode
    const wrapper = document.createElement('div')
    wrapper.className = 'selectWrapper'
    parent.replaceChild(wrapper, this.elSelectNative)
    wrapper.appendChild(this.elSelectNative)

    this.createSelectClone()

    this.customOptsList = Array.from(this.elSelectCustomOpts.children)
    this.optionsCount = this.customOptsList.length
    this.defaultLabel = this.elSelectCustomBox.getAttribute('data-value')
    this.optionChecked = ''
    this.optionHoveredIndex = -1
    // Toggle custom select visibility when clicking the box
    this.elSelectCustomBox.addEventListener('click', (e) => {
      const isClosed = !this.elSelectCustom.classList.contains('isActive')

      if (isClosed) {
        this.openSelectCustom()
      } else {
        this.closeSelectCustom()
      }
    })

    // Update selectCustom value when selectNative is changed.
    this.elSelectNative.addEventListener('change', (e) => {
      const value = e.target.value
      const elRespectiveCustomOption = this.elSelectCustomOpts.querySelectorAll(
        `[data-value="${value}"]`
      )[0]

      this.updateCustomSelectChecked(
        value,
        elRespectiveCustomOption.textContent
      )
    })

    // Update selectCustom value when an option is clicked or hovered
    this.customOptsList.forEach((elOption, index) => {
      elOption.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value')

        // Sync native select to have the same value
        this.elSelectNative.value = value
        this.updateCustomSelectChecked(value, e.target.textContent)
        this.closeSelectCustom()
      })

      elOption.addEventListener('mouseenter', (e) => {
        this.updateCustomSelectHovered(index)
      })
    })
  }

  createSelectClone() {
    const obj = [
      {
        name: 'root',
        type: 'div',
        class: 'selectCustom js-selectCustom',
        attributes: {
          ariaHidden: 'true',
        },
        parent: 'main',
      },
      {
        type: 'div',
        class: 'selectCustom-trigger',
        content:
          this.elSelectNative.options[this.elSelectNative.selectedIndex]
            .textContent,
        parent: 'root',
      },
      {
        name: 'options',
        type: 'div',
        class: 'selectCustom-options',
        parent: 'root',
      },
    ]
    const options = this.element.querySelector('select').children
    for (let i = 0; i < options.length; i++) {
      const option = {}
      option.type = 'div'
      option.class = 'selectCustom-option'
      option.parent = 'options'
      option.attributes = { dataValue: options[i].value }
      option.content = options[i].innerHTML
      obj.push(option)
    }
    this.element
      .querySelector('.selectWrapper')
      .appendChild(createComplexElement(obj))
    this.elSelectCustom = this.element.querySelector('.js-selectCustom')
    this.elSelectCustomBox = this.element.querySelector('.selectCustom-trigger')
    this.elSelectCustomOpts = this.element.querySelector(
      '.selectCustom-options'
    )
  }

  openSelectCustom() {
    this.elSelectCustom.classList.add('isActive')
    // Remove aria-hidden in case this was opened by a user
    // who uses AT (e.g. Screen Reader) and a mouse at the same time.
    this.elSelectCustom.setAttribute('aria-hidden', false)

    if (this.optionChecked) {
      const optionCheckedIndex = this.customOptsList.findIndex(
        (el) => el.getAttribute('data-value') === this.optionChecked
      )
      this.updateCustomSelectHovered(optionCheckedIndex)
    }

    // Add related event listeners
    this.watchClickOutside = this.watchClickOutside.bind(this)
    this.supportKeyboardNavigation = this.supportKeyboardNavigation.bind(this)
    document.addEventListener('click', this.watchClickOutside)
    document.addEventListener('keydown', this.supportKeyboardNavigation)
  }

  closeSelectCustom() {
    this.elSelectCustom.classList.remove('isActive')

    this.elSelectCustom.setAttribute('aria-hidden', true)

    this.updateCustomSelectHovered(-1)

    // Remove related event listeners
    document.removeEventListener('click', this.watchClickOutside)
    document.removeEventListener('keydown', this.supportKeyboardNavigation)
  }

  updateCustomSelectHovered(newIndex) {
    const prevOption = this.elSelectCustomOpts.children[this.optionHoveredIndex]
    const option = this.elSelectCustomOpts.children[newIndex]

    if (prevOption) {
      prevOption.classList.remove('isHover')
    }
    if (option) {
      option.classList.add('isHover')
    }

    this.optionHoveredIndex = newIndex
  }

  updateCustomSelectChecked(value, text) {
    const prevValue = this.optionChecked

    const elPrevOption = this.elSelectCustomOpts.querySelector(
      `[data-value="${prevValue}"`
    )
    const elOption = this.elSelectCustomOpts.querySelector(
      `[data-value="${value}"`
    )

    if (elPrevOption) {
      elPrevOption.classList.remove('isActive')
    }

    if (elOption) {
      elOption.classList.add('isActive')
    }

    this.elSelectCustomBox.textContent = text
    this.optionChecked = value
  }

  watchClickOutside(e) {
    const didClickedOutside = !this.elSelectCustom.contains(event.target)
    if (didClickedOutside) {
      this.closeSelectCustom()
    }
  }

  supportKeyboardNavigation(e) {
    // press down -> go next
    if (
      event.keyCode === 40 &&
      this.optionHoveredIndex < this.optionsCount - 1
    ) {
      e.preventDefault() // prevent page scrolling
      this.updateCustomSelectHovered(this.optionHoveredIndex + 1)
    }

    // press up -> go previous
    if (event.keyCode === 38 && this.optionHoveredIndex > 0) {
      e.preventDefault() // prevent page scrolling
      this.updateCustomSelectHovered(this.optionHoveredIndex - 1)
    }

    // press Enter or space -> select the option
    if (event.keyCode === 13 || event.keyCode === 32) {
      e.preventDefault()

      const option = this.elSelectCustomOpts.children[this.optionHoveredIndex]
      const value = option && option.getAttribute('data-value')

      if (value) {
        this.elSelectNative.value = value
        this.updateCustomSelectChecked(value, option.textContent)
      }
      this.closeSelectCustom()
    }

    // press ESC -> close selectCustom
    if (event.keyCode === 27) {
      this.closeSelectCustom()
    }
  }

  /**
   *
   * @returns {Select[]}
   */
  static create(element) {
    return new Select(element)
  }
}
