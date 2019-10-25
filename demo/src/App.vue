<template>
  <div
    id="app"
    style="font-family: Segoe UI; color: #2c3e50; margin-top: 20vh; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0 1rem;"
  >
    <striven-editor
      ref="editor"
      :toolbar-hide="toolbarHide"
      :minimal="minimal"
      :toolbar-bottom="toolbarBottom"
      :placeholder="'Type something in here...'"
      style="min-height: 300px; width: 800px;"
      :meta-url="metaUrl"
      :toolbar-template="customButton"
      :on-enter="submitOnEnter"
    ></striven-editor>
    <div class="custom-button" ref="customButton" @click="sendContent">Send</div>
    <br />
    <i>ctrl + enter to submit</i>
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
      metaUrl: "https://mighty-anchorage-82390.herokuapp.com/meta", // metaserver.js
      // imageUrl: "http://localhost:4200/image", // imageserver.js
      minimal: true,
      uploadOnPaste: false,
      toolbarBottom: true,
      toolbarHide: true,
      sanitizePaste: true,
      onInvalidFile() {
        alert("invalid file");
      },
      placeholder: "Begin typing in this editor...",
      submitOnEnter: (e) => {
        if(e.ctrlKey) {
          const content = this.editor.getContent();
          const files = this.editor.getFiles();

          if(content || files.length) {
            console.log({ content, files });
            this.editor.clearContent();
            this.editor.clearFiles();
          }
        }
      },
      customButton: () => this.$refs.customButton,
      editor: null
    };
  },
  mounted() {
    this.editor = this.$refs.editor.editor;
  },
  methods: {
    sendContent() {
      const content = this.editor.getContent();
      const files = this.editor.getFiles();

      if (content || files.length) {
        console.log({ content, files });
        this.editor.clearContent();
        this.editor.clearFiles(); 
      }
      this.editor.body.blur();
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
