<template>
  <div class="ad">
    <div class="ui divider"></div>
    <h3>喜歡這篇小說嗎?</h3>
    <h4>用<a href="https://www.google.com/search?q=%E6%82%A0%E9%81%8A%E4%BB%98" target="_blank">悠遊付</a>掃此打賞作者$NT100元</h4>
    <img src="../assets/100.png" />
  </div>

</template>

<script>
export default {
  name: 'AdAd',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ad {
  position: static;
  z-index: 2;
  width: 100vw;
  height: 20em;
  text-align: center;
  background-color: white;
}

img {
  width: 140px;
  height: 140px;
}
</style>
