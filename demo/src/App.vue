<template>
  <div id="app">
    <h1>Striven Editor</h1>
    <div ref="editor" class="editor"></div>
    <div id="footer">
      <a href="https://github.com/business-by-miles/striven-editor">Find this on GitHub</a>
    </div>
  </div>
</template>

<script>
import { StrivenEditor } from 'striven-editor';

export default {
  name: 'app',
  mounted() {
    this.editor = new StrivenEditor(this.$refs.editor, { metaUrl: 'http://localhost:4200/meta', uploadOnPaste: true });
  }
}
</script>

<style>
html {
  background-color: #f7f6f6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.editor {
  width: 600px;
  height: 250px;
  background-color: #fff;
}

#footer {
  margin: 25px 0;
}

#footer a {
  color: inherit;
  text-decoration: none;
}
</style>
