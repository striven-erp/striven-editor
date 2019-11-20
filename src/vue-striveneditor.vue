<template>
  <div ref="editor"></div>
</template>

<script>
import StrivenEditor from "./striveneditor";

export default {
  name: "striven-editor",
  props: {
    toolbarHide: Boolean,
    toolbarBottom: Boolean,
    toolbarOptions: Array,
    minimal: Boolean,
    metaUrl: String,
    extensions: Array,
    uploadOnPaste: Boolean,
    toolbarOptionFillColor: String,
    placeholder: String,
    sanitizePaste: String,
    imageUrl: String,
    customToolbarOption: Object,
    activeOptionColor: String,
    onEnter: Function,
    value: String,
    toolbarTemplate: Function
  },
  mounted() {
    let vm = this;
    // Create new object to avoid mutating props
    let config = { ...vm.$props, toolbarTemplate: (vm.toolbarTemplate && vm.toolbarTemplate()) };

    vm.editor = new StrivenEditor(vm.$refs.editor, config);

    // Listen to input event for v-model support
    vm.editor.body.oninput = e => {
      vm.pauseUpdate = true;
      vm.editor.setLinks();
      vm.$emit("input", vm.editor.getContent());
    };
  },
  data() {
    return {
      editor: {},
      pauseUpdate: false
    };
  },
  watch: {
    value(val) {
      // Set the editor content when not modified from within the editor
      if (!this.pauseUpdate) {
        this.editor.setContent(val);
      }

      this.pauseUpdate = false;
    }
  }
};
</script>

<style></style>