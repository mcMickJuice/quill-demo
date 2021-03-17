import './styles.css'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import BullseyeEmbedBlot from './BullseyeEmbedBlot'
import FontAdjust from './FontAdjust'

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel  ¬
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div>
<button id="normal-bullseye">Normal ◎</button>
<button id="large-bullseye">Large ◎</button>
</div>
<div>
<label for="fontAdj">Font Adjustment (%)</label>
<input  id="fontAdj" type="number" />
</div>
<div>
<label for="color-picker">Pick a Color</label>
<input type="color" id="color-picker" />
</div>

<div id="editor"></div>
`

const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ size: ['small', false, 'large'] }],
  [{ color: ['#cc0000', 'black'] }], // default takes color from theme
  ['clean'] // remove formatting button
]

/**
 * this is bigbullseye
 * <span style="color: #cc0000;"><span class="h-sr-only">Target</span><span aria-hidden="true">◎</span></span>
 *
 */

Quill.register(BullseyeEmbedBlot)
Quill.register(FontAdjust)

const quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: toolbarOptions
  }
})

document.getElementById('normal-bullseye').addEventListener('click', () => {
  let range = quill.getSelection(true)
  quill.insertEmbed(range.index, 'bullseye', 'normal', Quill.sources.USER)
  quill.setSelection(range.index + 1)
})

document.getElementById('large-bullseye').addEventListener('click', () => {
  let range = quill.getSelection(true)
  quill.insertEmbed(range.index, 'bullseye', 'large', Quill.sources.USER)
  quill.setSelection(range.index + 1)
})

document.getElementById('fontAdj').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    const val = Number(event.target.value)

    event.target.value = null

    // is this is font sizing an out of box feature or do I need a blot?
    quill.format('font-adjust', val)
  }
})

document.getElementById('color-picker').addEventListener('change', (evt) => {
  const value = evt.target.value

  quill.format('color', value)
})

// document.getElementById('editor').addEventListener('keyup', )

/* 
control what shows in toolbar
how to show custom toolbar stuff?
*/

/*
icons/emojis
circle logo
bullseye tag
bigbullseye

colors
standard red and black?
custom colors

transformation
font adjust
font size
superscript
sup script??

characters
copyright
rights reserved
trademark
sm (sitemark?)
% off tag


*/
