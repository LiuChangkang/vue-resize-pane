<template>
  <div id="app">
    <ResizePane style="width: 100%;height: 100%" layout="row" first-min-size="300px" second-min-size="500px">
      <img slot="first" alt="Vue logo" src="./assets/logo.png">
      <HelloWorld slot="second" msg="Welcome to Your Vue.js App"/>
    </ResizePane>  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  height: 80vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
