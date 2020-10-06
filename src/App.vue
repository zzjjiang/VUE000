<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hello world</router-link>|
      <router-link to="/home">home</router-link>|
      <router-link to="/about">about</router-link>|
      <router-link to="/info">info</router-link>|
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
