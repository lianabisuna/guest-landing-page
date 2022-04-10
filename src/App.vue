<template>
  <div id="app">
    <PageNavigation />
  </div>
</template>

<script>
import PageNavigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    PageNavigation
  }
}
</script>

<style>
#app {
  font-family: Archivo, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4F4F4F;
  font-size: 13px;
}
</style>
