import Quill from 'quill'
import { targetRed } from './constants'

const Embed = Quill.import('blots/embed')

const targetLogo = '◎'

class BullseyeEmbedBlot extends Embed {
  // Creates corresponding DOM node
  static create(value) {
    // value indicates what kind of bullseye we want
    console.log('value', value)
    const node = super.create()

    // format element to be red
    const span = document.createElement('span')
    span.style = `color:${targetRed};`
    span.innerText = targetLogo
    node.appendChild(span)
    return node
  }

  // TODO: style bullseye appropriately
  // handle big vs normal
}

BullseyeEmbedBlot.blotName = 'bullseye'
BullseyeEmbedBlot.tagName = 'span'

export default BullseyeEmbedBlot
