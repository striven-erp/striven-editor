<template>
  <div id="app" style="font-family: Segoe UI; color: #2c3e50; margin-top: 20vh; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0 1rem;">
    <!-- <h1>Striven Editor</h1> -->
    <div style="display: flex; padding: 1rem; width: 100%; justify-content: center;">
      <div ref="editor" class="editor" style="margin-top: 20px; background-color: #fff; min-height: 300px; width: 600px;"></div>
      <button
        ref="sendButton" 
        style="
        color: #fff;
        border: none; 
        cursor: pointer; 
        align-self: flex-end; 
        height: 3rem; 
        width: 4rem;
        border-radius: 4%;
        background-color: #5cb85c; 
        margin: 0 5px;
        outline: none;">
        <!-- <i style="color: #fff; font-size: 25px;" class="fas fa-paper-plane" /> -->
      </button>
    </div>
    <!-- <div id="footer"> -->
      <!-- <a style="color: inherit; text-decoration: none;" href="https://github.com/business-by-miles/striven-editor">Find this on GitHub</a> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import Tribute from 'tributejs';
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
// import { dom } from '@fortawesome/fontawesome-svg-core';
// import { library as faLib } from "@fortawesome/fontawesome-svg-core";
// import USERS from './users';

// faLib.add(faPaperPlane);
// dom.watch();

import { StrivenEditor } from 'striven-editor';
// import { StrivenEditor } from '@striven-erp/striven-editor';

export default {
  name: 'app',
  mounted() {
    // const that = this;
    const editorOptions = {
      metaUrl: 'http://localhost:4200/meta',
      // imageUrl: 'http://localhost:4200/image',
      // onToolbarSend: () => console.log(this.editor.getContent()),
      minimal: false,
      uploadOnPaste: false,
      toolbarBottom: true,
      toolbarHide: true,
      sanitizePaste: true,
      placeholder: "Begin typing in this editor...",
      customToolbarButton: {
        svgData: {
          viewBox: "0 0 1792 1792",
          d: "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"
        },
        borderColor: "rgb(76, 174, 76)",
        hoverBorderColor: "rgb(76, 174, 76)",
        backgroundColor: "rgb(92, 184, 92)",
        hoverBackgroundColor: "rgb(76, 174, 76)",
        color: "#fff",
        hoverColor: "#fff",
        handler: () => console.log(this.editor.getContent())
      }
    }

    this.editor = new StrivenEditor(this.$refs.editor, editorOptions);
    
    this.$refs.sendButton.onclick = () => console.log(this.editor.getContent())

    // paperPlane.innerHTML = "<svg width=\"25\" height=\"25\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" d=\"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z\"/></svg>";

    const paperPlane = document.createElement('span');
    const svg = "<svg width=\"50%\" height=\"50%\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\">";
    const path = "<path fill=\"#fff\" d=\"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z\"/>";
    paperPlane.innerHTML = `${svg}${path}</svg>`;

    this.$refs.sendButton.append(paperPlane);
    this.$refs.sendButton.onmouseenter = () => this.$refs.sendButton.style.backgroundColor = "#4cae4c";
    this.$refs.sendButton.onmouseleave = () => this.$refs.sendButton.style.backgroundColor = "#5cb85c";

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
