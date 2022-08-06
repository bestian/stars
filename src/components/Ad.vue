<template>
  <div class="ad">
    <div class="ui divider"></div>
    <h3>喜歡這篇小說嗎?</h3>
    <h4>掃此打賞作者$NT100元</h4>
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
  z-index: 2;
  width: 100vw;
  height: 3em;
  text-align: center;
  background-color: white;
}

img {
  width: 140px;
  height: 140px;
}
</style>
