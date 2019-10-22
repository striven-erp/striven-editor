<template>
  <div
    id="app"
    style="font-family: Segoe UI; color: #2c3e50; margin-top: 20vh; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 0 1rem;"
  >
    <div style="display: flex; padding: 1rem; width: 100%; justify-content: center;">
      <striven-editor :minimal="true" v-model="value"/>
      
      <!-- <div
        ref="editor"
        class="editor"
        style="margin-top: 20px; background-color: #fff; min-height: 300px; width: 600px;"
      ></div> -->
    </div>

    <p>Output</p>
    <p v-html="value"></p>

    <button @click="value = null">Clear Value</button>
  </div>
  
</template>

<script>
/* eslint-disable */
import { VueStrivenEditor as StrivenEditor } from "@striven-erp/striven-editor";

export default {
  name: "app",
  components: { StrivenEditor },
  data(){
        return {value: null}
  },
  mounted() {
    const editorOptions = {
      // metaUrl: "http://localhost:4200/meta", // metaserver.js
      // imageUrl: "http://localhost:4200/image", // imageserver.js
      minimal: true,
      uploadOnPaste: false,
      toolbarBottom: true,
      toolbarHide: true,
      sanitizePaste: true,
      placeholder: "Begin typing in this editor...",
      submitOnEnter: ({ content, files }) => {
        if (content || files.length ) {
          console.log({ content, files });
        }
        this.editor.body.blur();
      },
      customToolbarButton: {
        svgData: {
          viewBox: "0 0 1792 1792",
          d:
            "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"
        },
        borderColor: "rgb(76, 174, 76)",
        hoverBorderColor: "rgb(76, 174, 76)",
        backgroundColor: "rgb(92, 184, 92)",
        hoverBackgroundColor: "rgb(76, 174, 76)",
        color: "#fff",
        hoverColor: "#fff",
        handler: () => {
          const content = this.editor.getContent();
          const files = this.editor.getFiles();

          if (content || files.length) {
            console.log({ content, files });
          }
          
          this.editor.clearContent();
          this.editor.body.blur();
        }
      }
    };

    this.editor = new StrivenEditor(this.$refs.editor, editorOptions);
  }
};
</script>

<style></style>
