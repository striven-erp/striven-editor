<template>
  <div id="app">
    <div ref="editor" style="width: 600px; height: 250px;"></div>
  </div>
</template>

<script>
import { StrivenEditor } from 'striven-editor';

export default {
  name: 'app',
  mounted() {
    this.editor = new StrivenEditor(this.$refs.editor);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
