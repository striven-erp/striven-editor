<template>
  <div id="app" style="font-family: Segoe UI; color: #2c3e50; margin-top: 20vh; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0 1rem;">
    <h1>Striven Editor</h1>
    <div ref="editor" class="editor" style="margin: 20px 0; background-color: #fff; min-height: 300px; width: 600px;"></div>
    <div id="footer">
      <a style="color: inherit; text-decoration: none;" href="https://github.com/business-by-miles/striven-editor">Find this on GitHub</a>
    </div>
  </div>
</template>

<script>
// import Tribute from 'tributejs';
// import { StrivenEditor } from '@striven-erp/striven-editor';
import { StrivenEditor } from 'striven-editor';
import USERS from './users';

export default {
  name: 'app',
  mounted() {
    const that = this;
    const editorOptions = {
      metaUrl: 'http://localhost:4200/meta',
      onToolbarSend: () => console.log(this.editor.getContent()),
      uploadOnPaste: true,
      toolbarBottom: true,
      toolbarHide: true
    }

    this.editor = new StrivenEditor(this.$refs.editor, editorOptions);
    
    // const tributeOptions = {
    //   trigger: "@",
    //   values: (text, cb) => cb(USERS),
    //   selectTemplate: function(item) {
    //     const { value } = item.original;
    //     return `@${value.replace(" ", "").toLowerCase()}`;
    //   },
    //   menuItemTemplate: function(item) {
    //     const { avatar, value } = item.original;
    //     return `<span class="menu-item">${
    //       avatar ? `<img src="${avatar}" />` : ""
    //     }<p>${value}</p></span>`;
    //   },
    //   lookup: "value",
    //   fillAttr: "value",
    //   allowSpaces: true
    // };
    // const tribute = new Tribute(tributeOptions);
    // tribute.attach(this.editor.body);

    // this.editor.body.addEventListener("tribute-replaced", function(e) {
    //   const { value } = e.detail.item.original;
    //   let content = that.editor.getContent();
    //   const mention = `<span class="striven-mention new-mention" contenteditable="false" data-mention="${value}">${value}</span>`;
    //   content = content.replace(
    //     "@" + value.replace(" ", "").toLowerCase(),
    //     mention
    //   );
    //   that.editor.body.innerHTML = content;
    //   const newMention = that.editor.body.querySelector(".new-mention");
    //   const range = that.editor.getRange();
    //   range.selectNode(newMention);
    //   range.collapse();
    //   newMention.classList.remove("new-mention");
    // });
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-align: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
}

#footer {
  margin: 25px 0;
}

#footer a {
  color: inherit;
  text-decoration: none;
}

.tribute-container ul {
  list-style: none;
}

.highlight > .menu-item {
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  border: 1px solid grey;
  padding: 5px;
  background-color: #f6f6f6;
  width: 15rem;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  border: 1px solid grey;
  padding: 5px;
  background-color: #fff;
  width: 15rem;
}

.menu-item img {
  border-radius: 1rem;
  height: 2rem;
  width: 2rem;
}

.menu-item p {
  margin: 0 1rem;
  text-align: center;
}

.striven-mention {
  background-color: lightblue;
  color: blue;
  padding: 1px 5px;
  border-radius: 5%;
}
</style>
