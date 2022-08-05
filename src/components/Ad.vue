<template>
  <div class="ad">
    <h3>喜歡這篇小說嗎?</h3>
    <p>按此打賞作者$NT100元</p>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="W55V3YXT4Y57E">
      <input type="image" src="https://www.paypalobjects.com/zh_TW/TW/i/btn/btn_buynowCC_LG_wCUP.gif" border="0" name="submit" alt="PayPal － 更安全、更簡單的線上付款方式！">
      <img alt="" border="0" src="https://www.paypalobjects.com/zh_TW/i/scr/pixel.gif" width="1" height="1">
      </form>
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
