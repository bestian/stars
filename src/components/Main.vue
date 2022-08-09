<template lang="pug">
  .hello
    h1.ui.header 諸星之戰
      .sub.header 作者：
        a(href="https://www.github.com/bestian/", target="_blank") 北辰
    .ui.link.cards.container
      router-link.card(to="/a1")
        .image
          img(src='../assets/stars.png')
        .content
          .header 第一章
          .meta
            | 隕星之夜
      router-link.card(to="/b1")
        .image
          img(src='../assets/stars.png')
        .content
          .header 第二章
          .meta
            | 迷團浮現
      router-link.card(to="/c1")
        .image
          img(src='../assets/stars.png')
        .content
          .header 第三章
          .meta
            | 遠古遺產
      router-link.card(to="/d1")
        .image
          img(src='../assets/stars.png')
        .content
          .header 第四章
          .meta
            | 大逃亡
      router-link.card(to="/e1")
        .image
          img(src='../assets/stars.png')
        .content
          .header 第五章
          .meta
            | 封聖

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;
}
</style>
