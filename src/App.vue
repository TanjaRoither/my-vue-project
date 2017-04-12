<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/foo">Foo</router-link></li>
        <li><router-link to="/steps">Steps</router-link></li>
        <li><router-link to="/todoapp">Todo App</router-link></li>
        <li><router-link to="/todox">Todo with VueX</router-link></li>

      </ul>
    </nav>
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
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
  }
}
</style>
