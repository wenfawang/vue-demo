<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/test">Test</router-link>
      |
      <router-link to="/foo">Foo</router-link>
    </div>
    <keep-alive :include="includes">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  name: 'App',
  data() {
    return {
      // include: 'Home,Test',
    };
  },
  computed: {
    includes() {
      console.log('this.$stroe.state', this.$store.state.include);
      const includeArr = this.$store.state.include;
      return !includeArr.length ? '' : includeArr.join(',');
    },
  },
};
</script>
