<template>
    <div ref="editor"></div>
</template>

<script>
import StrivenEditor from './striveneditor';

export default {
    name: 'striven-editor',
    props: {
        toolbarHide: Boolean,
        toolbarBotoom: Boolean,
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
        submitOnEnter: Function
    }, 
    mounted() {
        this.editor = new StrivenEditor(this.$refs.editor, this.props)
    },
    data () {
        return {
            editor: {}
        }
    }
}
</script>

<style></style>