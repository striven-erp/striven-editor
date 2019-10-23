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
        submitOnEnter: Function,
        value: String
    },
    mounted() {
        let vm = this;
        // Create new object to avoid mutating props
        let config = {...vm.$props};
        vm.editor = new StrivenEditor(vm.$refs.editor, config);
        // Listen to input event for v-model support
        vm.editor.body.oninput = e => {
            vm.$emit("input", vm.editor.getContent());
        };
    },
    data() {
        return {
            editor: {}
        };
    },
    watch:{
        value(val){
            // Clear the editor if the value is cleared
            if (!val){
                this.editor.setContent(null);
            }
        }
    }
};
</script>

<style></style>