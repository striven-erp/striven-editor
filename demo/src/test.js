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

/* Editor Tests */
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

/* Quality Assurance Tests */
describe('Quality Assurance', () => {
  it('should insert a link that will open in a new window', () => {
    const se  = getEditor();
    const { editor, body } = se;
    body.focus(); 

    const menu = editor.querySelector('#link-menu');
    
    const url = menu.querySelector('input');
    url.value = 'https://striven.com/';

    menu.querySelector('button').click();
    const link = body.querySelector('a[target="_blank"]');

    assert.exists(link, 'will open in new window');
    se.clearContent();

  });

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

})

mocha.run();
