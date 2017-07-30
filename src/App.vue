<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/auth">Login</router-link>
    <hr />
    <img src="./assets/img/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  a {
    color: pink;
    &:hover {
      color: blue;
    }
  }
}
</style>
