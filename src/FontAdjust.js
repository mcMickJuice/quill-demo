import Quill from 'quill'

const Inline = Quill.import('blots/inline')

class FontAdjust extends Inline {
  static create(value) {
    console.log('create being called')
    const node = super.create()

    node.setAttribute('style', `font-size:${value}%`)
    node.setAttribute('data-fontAdjSize', value)

    return node
  }

  static formats(node) {
    console.log('FORMATS CALLED', node)
    const attr = node.getAttribute('data-fontAdjSize')

    console.log(attr)
    return attr
  }
}

FontAdjust.blotName = 'font-adjust'
FontAdjust.tagName = 'span' // would this need to be a div if it wraps paragraphs?

export default FontAdjust
