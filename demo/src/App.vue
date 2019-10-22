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
        outline: none;"
      >
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { StrivenEditor } from '@striven-erp/striven-editor';

export default {
  name: "app",
  mounted() {
    const editorOptions = {
      // metaUrl: "http://localhost:4200/meta", // metaserver.js
      // imageUrl: "http://localhost:4200/image", // imageserver.js
      minimal: false,
      uploadOnPaste: false,
      toolbarBottom: true,
      toolbarHide: true,
      sanitizePaste: true,
      placeholder: "Begin typing in this editor...",
      submitOnEnter: ({ content, files }) => {
        if(content || files) {
          console.log({ content, files });
        }
        this.editor.body.blur();
      },
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
    };

    this.editor = new StrivenEditor(this.$refs.editor, editorOptions);

    this.$refs.sendButton.onclick = () => console.log(this.editor.getContent());

    const paperPlane = document.createElement("span");
    const svg =
      '<svg width="50%" height="50%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">';
    const path =
      '<path fill="#fff" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"/>';
    paperPlane.innerHTML = `${svg}${path}</svg>`;

    this.$refs.sendButton.append(paperPlane);
    this.$refs.sendButton.onmouseenter = () =>
      (this.$refs.sendButton.style.backgroundColor = "#4cae4c");
    this.$refs.sendButton.onmouseleave = () =>
      (this.$refs.sendButton.style.backgroundColor = "#5cb85c");
  }
};
</script>

<style></style>
