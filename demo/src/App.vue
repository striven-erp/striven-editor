<template>
  <div
    id="app"
    style="font-family: Segoe UI; color: #2c3e50; margin-top: 20vh; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0 1rem;"
  >
    <striven-editor
      ref="editor"
      v-model="content"
      :toolbar-hide="toolbarHide"
      :minimal="minimal"
      :toolbar-bottom="toolbarBottom"
      :placeholder="'Type something in here...'"
      style="min-height: 300px; width: 90%;"
      :on-enter="submitOnEnter"
      :on-paste="onPaste"
      :after-paste="afterPaste"
    ></striven-editor>

    <!-- TESTING -->
    <!-- <button @click="safariOut">isSafari</button> -->
    <!-- <button @click="chromeOut">isChrome</button> -->
    <!-- <button @click="insertList">insertUnorderedList</button> -->

    <div v-html="content"></div>
    <!-- <div ref="customButton" style="display: flex; align-items: flex-end;"> -->
    <!--   <div class="custom-button" @click="sendContent">Send</div>           -->
    <!-- </div>                                                                 -->
  </div>
</template>

<script>
/* eslint-disable */
import { VueStrivenEditor as StrivenEditor } from "@striven-erp/striven-editor";

export default {
  name: "app",
  components: { StrivenEditor },
  data() {
    return {
      // metaUrl: "https://mighty-anchorage-82390.herokuapp.com/meta", // metaserver.js
      // imageUrl: "http://localhost:4200/image", // imageserver.js
      minimal: false,
      uploadOnPaste: false,
      toolbarBottom: false,
      toolbarHide: true,
      sanitizePaste: true,
      onInvalidFile() {
        alert("invalid file");
      },
      // toolbarOptions: [
      //   {
      //     icon: 'https://innovate.test.striven.com/Images/striven-icon.svg',
      //     handler: () => {
      //       const range = this.editor.range;
      //       if(range && range.startContainer !== document) {
      //         range.insertNode(document.createTextNode('Created by a custom button!'))
      //       }
      //     }
      //   }
      // ],
      placeholder: "Begin typing in this editor...",
      submitOnEnter: e => {
        if (e.ctrlKey) {
          const content = this.editor.getContent();
          const files = this.editor.getFiles();

          if (content || files.length) {
            console.log({ content, files });
            this.editor.clearContent();
            this.editor.clearFiles();
          }
        }
      },
      // customButton: () => this.$refs.customButton,
      content: "",
      editor: null
    };
  },
  mounted() {
    this.editor = this.$refs.editor.editor;
  },
  methods: {
    afterPaste() {
      setTimeout(() => { 
        [...this.editor.body.querySelectorAll('.striven-mention')]
          .forEach(m => (m.outerHTML = m.textContent));
      }, 0);
    },
    onPaste(e) {
      console.log(e); 
    },
    sendContent() {
      console.log(this.editor.getContent());
      this.editor.clearContent();
    },
    safariOut() {
      this.editor.setContent(`${this.editor.browser.isSafari()}`)
    },
    chromeOut() {
      this.editor.setContent(`${this.editor.browser.isChrome()}`)
    },
    insertList() {
      document.execCommand('insertUnorderedList');
    }
  }
};
</script>

<style>
.custom-button {
  height: 100%;
  border-color: #4cae4c;
  background-color: #5cb85c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 1px 0;
  cursor: pointer;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.custom-button:hover {
  background-color: #4cae4c;
  border-color: #398439;
}
</style>
