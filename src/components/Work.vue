<template>
  <div class="work">
    <div class="ui divider"></div>
    <img src="../assets/stars.png"/>
    <h3>本章節施工中...即將登場</h3>
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
.work {
  position: static;
  z-index: 2;
  width: 100vw;
  height: 30em;
  text-align: center;
  background-color: white;
}

img {
  width: 140px;
  height: 140px;
}
</style>
