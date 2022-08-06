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
        </div>
      </div>
      <div class="ui dropdown link item simple">
        <span class="text">第三章</span>
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link class="item" to="/c1">3.1節</router-link>
          <router-link class="item" to="/work">3.2節</router-link>
          <router-link class="item" to="/work">3.3節</router-link>
          <router-link class="item" to="/work">3.4節</router-link>
          <router-link class="item" to="/work">3.5節</router-link>
          <router-link class="item" to="/work">3.6節</router-link>
          <router-link class="item" to="/work">3.7節</router-link>
        </div>
      </div>
      <div class="ui dropdown link item simple">
        <span class="text">第四章</span>
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link class="item" to="/work">4.1節</router-link>
          <router-link class="item" to="/work">4.2節</router-link>
          <router-link class="item" to="/work">4.3節</router-link>
          <router-link class="item" to="/work">4.4節</router-link>
          <router-link class="item" to="/work">4.5節</router-link>
          <router-link class="item" to="/work">4.6節</router-link>
          <router-link class="item" to="/work">4.7節</router-link>
        </div>
      </div>
      <div class="ui dropdown link item simple">
        <span class="text">第五章</span>
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link class="item" to="/work">5.1節</router-link>
          <router-link class="item" to="/work">5.2節</router-link>
          <router-link class="item" to="/work">5.3節</router-link>
          <router-link class="item" to="/work">5.4節</router-link>
          <router-link class="item" to="/work">5.5節</router-link>
          <router-link class="item" to="/work">5.6節</router-link>
          <router-link class="item" to="/work">5.7節</router-link>
        </div>
      </div>
      <div class="right menu">
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbestian.github.io%2Fstars%2F%23%2F&layout=button_count&size=large&appId=485195848253155&width=80&height=28" width="80" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    </nav>
    <div class="stars">
      <img src="./assets/stars.png"/>
    </div>
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

html, body {
  background-color: #999;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.stars img {
  width: 150px;
}

p {
  text-align: left;
  font-size: 18px;
}
</style>
