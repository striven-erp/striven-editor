<template>
  <div
    id="app"
    style="font-family: Segoe UI; color: #2c3e50; margin-top: 20vh; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0 1rem;"
  >
    <div style="display: flex; padding: 1rem; width: 100%; justify-content: center;">
      <div
        ref="editor"
        class="editor"
        style="margin-top: 20px; background-color: #fff; min-height: 300px; width: 600px;"
      ></div>
    </div>
    <div ref="customButton" class="custom-button" @click="sendContent">
      Send
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { StrivenEditor } from "@striven-erp/striven-editor";

export default {
  name: "app",
  mounted() {
    const editorOptions = {
      metaUrl: "https://mighty-anchorage-82390.herokuapp.com/meta", // metaserver.js
      // imageUrl: "http://localhost:4200/image", // imageserver.js
      minimal: true,
      uploadOnPaste: false,
      toolbarBottom: true,
      toolbarHide: false,
      sanitizePaste: true,
      onInvalidFile() {
        alert("invalid file");
      },
      placeholder: "Begin typing in this editor...",
      submitOnEnter: ({ content, files }) => {
        if (content || files.length) {
          console.log({ content, files });
        }
        this.editor.body.blur();
      },
      customToolbarButton: this.$refs.customButton
    };

    this.editor = new StrivenEditor(this.$refs.editor, editorOptions);
  },
  methods: {
    sendContent() {
      const content = this.editor.getContent();
      const files = this.editor.getFiles();

      if (content || files.length) {
        console.log({ content, files });
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
