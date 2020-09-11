const { assert } = chai;

mocha.setup('bdd');

function getEditor() {
  const editor = [...document.getElementsByClassName('striven-editor')].pop();
  return editor.StrivenEditor(); 
}

function node(content) {
  const node = document.createElement('div');
  node.innerHTML = content;
  return node;
}

/* Regression Tests */
describe('Regression Tests', () => {
  
 it('should not return script elements', () => {
  const se = getEditor();
  
  const content = `
    <p>This is some dangerous content!</p>
    <script>alert('hello');</script>
  `;

  se.setContent(content);
  const script = node(se.getContent()).querySelector('script');

  assert.notExists(script, 'script tags were pruned');
  se.clearContent();

 });

 it('should create an ordered list with no content', () => {
  const se = getEditor();
  se.toolbar.querySelector('#toolbar-insertOrderedList').click();

  assert.exists(se.body.querySelector('ol'), 'an ordered list was created');
  se.clearContent();

 });

 it('should create an unordered list with no content', () => {
  const se = getEditor();
  se.toolbar.querySelector('#toolbar-insertUnorderedList').click();

  assert.exists(se.body.querySelector('ul'), 'an unordered list was created');
  se.clearContent();

 });

 it('apply font style to content', (done) => {
  const se = getEditor();
  se.setContent('<p>Change me to Verdana</p>');
  
  setTimeout(() => {
    se.getRange().selectNode(se.body.querySelector('p')); 
    se.toolbar.querySelector('#toolbar-fontName').click();
    se.editor.querySelector('.se-toolbar-popup-option[style="font-family: Verdana;"]').click();
    se.body.onfocus();
    setTimeout(() => {
      assert.exists(se.body.querySelector('p font[face="Verdana"]'), 'selected font style was applied');
      se.clearContent();
      done();
    }, 0);
  }, 200);

 });

 it('apply font size to content', (done) => {
  const se = getEditor();
  se.setContent('<p>Change me to 36pt size</p>');

  setTimeout(() => {
    se.getRange().selectNode(se.body.querySelector('p')); 
    se.toolbar.querySelector('#toolbar-fontSize').click();
    const option = [...se.editor.querySelectorAll('.se-toolbar-popup-option')].filter(opt => (opt.textContent === '36pt')).pop();
    option.click();
    se.body.onfocus();
    setTimeout(() => {
      assert.exists(se.body.querySelector('font[size="7"]'), 'selected font size was applied');
      se.clearContent();
      done();
    }, 0);
  }, 200);

 });

 it('apply font format to content', (done) => {
  const se = getEditor();
  se.setContent('<p>Change me to an H1 format</p>');

  setTimeout(() => {
    se.getRange().selectNode(se.body.querySelector('p')); 
    se.toolbar.querySelector('#toolbar-fontFormat').click();
    const option = [...se.editor.querySelectorAll('.se-toolbar-popup-option')].filter(opt => (opt.textContent === 'Heading 1')).pop();
    option.click();
    se.body.onfocus();
    setTimeout(() => {
      assert.exists(se.body.querySelector('h1'), 'selected font format was applied');
      se.clearContent();
      done();
    }, 0);
  }, 200);

 });

});

/* Internal Tests */
describe('Editor Initilization', () => {
  it('should of been created', () => {
    assert.exists(getEditor().editor, 'Editor is created'); 
  });

  it('should have a body', () => {
    assert.exists(getEditor().body, 'Editor contains a body');
  });

  it('should have a toolbar', () => {
    assert.exists(getEditor().toolbar, 'Editor contains a body');
  });
});

mocha.run();
