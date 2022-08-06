<template>
  <div id="app">
    <nav class="ui top menu">
      <div class="ui dropdown link item simple">
        <span class="text">第一章</span>
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link class="item" to="/">1.1節</router-link>
          <router-link class="item" to="/a2">1.2節</router-link>
          <router-link class="item" to="/a3">1.3節</router-link>
          <router-link class="item" to="/a4">1.4節</router-link>
          <router-link class="item" to="/a5">1.5節</router-link>
          <router-link class="item" to="/a6">1.6節</router-link>
          <router-link class="item" to="/a7">1.7節</router-link>
          <router-link class="item" to="/a8">1.8節</router-link>
        </div>
      </div>
      <div class="ui dropdown link item simple">
        <span class="text">第二章</span>
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link class="item" to="/b1">2.1節</router-link>
          <router-link class="item" to="/b2">2.2節</router-link>
          <router-link class="item" to="/b3">2.3節</router-link>
          <router-link class="item" to="/b4">2.4節</router-link>
          <router-link class="item" to="/b5">2.5節</router-link>
          <router-link class="item" to="/b6">2.6節</router-link>
          <router-link class="item" to="/b7">2.7節</router-link>
          <router-link class="item" to="/b8">2.8節</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
    <ad></ad>
  </div>
</template>

<script type="text/javascript">

import Ad from './components/Ad.vue'
export default {
  name: 'App',
  components: {
    Ad
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  text-align: left;
  font-size: 18px;
}
</style>
