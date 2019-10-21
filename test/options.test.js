import StrivenEditor from '../src/striveneditor.js'

let editor

const { expect } = chai
const { spy } = sinon

describe('Editor', () => {
  afterEach(() => {
    editor = null
  })

  describe('#options()', () => {
    it('should apply the plugin options', () => {
      const toolbarBottom = true
      const toolbarHide = true

      editor = new StrivenEditor(document.querySelector('.editor-element'), {
        toolbarBottom,
        toolbarHide,
      })

      expect(editor.options.toolbarBottom).to.equal(toolbarBottom)
      expect(editor.options.toolbarHide).to.equal(toolbarHide)
    })
  })
})