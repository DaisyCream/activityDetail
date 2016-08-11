<style scoped>
#content{
    position: relative;
    padding: 0.4rem 0.8rem 0.4rem 0.8rem;/*px*/
    background-color: #ffffff;
    margin-top: 0.21rem;/*px*/
    box-shadow: 1px 1px 6px #acacac;
}

#title{
    position: relative;
    color: #413f3f;
    font-size: 44px;/*px*/
}

#userName{
    position: relative;
    font-size: 28px;/*px*/
    color: #6b6b6b;
    margin-top: 0.3rem;
}


#content-text{
    position: relative;
    font-size: 25px;/*px*/
    margin-top: 0.2rem;
    color: #413f3f;
}


#userHead{
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    /*border: 1px solid #413f3f;*/
    top: 0.2rem;
    right: 1.1rem;
    background-image: url(../images/head.png);
    background-size: 100%;
}

</style>

<template>
  <div id="content">
          <div id="title">今晚7点打篮球</div>
          <div id="userName">DaisyCream</div>
          <div id="content-text">按实际的水电费撒旦经发局开发大会傻蛋哈坎大姐圣诞节阿富汗上岛咖啡世纪东方哈的空间为夫好胃口按实际的水电费</div>
          <div id="userHead"></div>
  </div>
</template>

<script>
  module.exports = {
    props: [''],
    components: {
    },
    data: function () {
      return {}
    },
    methods: {

    },
    ready: function () {
    }
  }
</script>
