<template lang="pug">
  .ad
    h3 喜歡這篇小說嗎?
      br
      | 掃此打賞作者$NT100元
      img(src="../assets/100.png")

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
  text-align: left;
  position: fixed;
  z-index: 2;
  width: 220px;
  height: 3em;
  top: 0;
  right: 0;
  background-color: white;
}

img {
  width: 140px;
  height: 140px;
}
</style>
