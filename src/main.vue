<style>
body{
    margin: 0px;
    padding: 0px;
    background-color: #ededed;
    overflow: hidden;
}

.msg{
    position: relative;
    height: 70px;
    padding: 0rem 0.53rem 0rem 0.53rem;
    /*border: 1px solid #413f3f;*/
    line-height: 70px;
    margin-top: 0.27rem;
    box-shadow: 1px 1px 6px #acacac;
    background-color: #ffffff;
    color: #5e5e5e;
}

.tipImg{
    position: relative;
    width: 0.53rem;
    height: 0.53rem;
    background-size: 100%;
    display: inline-block;
    /*border: 1px solid #413f3f;*/
    top: 0.13rem;
}

.information{
    position: relative;
    font-size: 26px;/*px*/
    /*border: 1px solid #413f3f;*/
    margin-left: 0.2rem;
}

.go{
    position: absolute;
    right: 0.47rem;
    width: 0.26rem;
    height: 0.48rem;
    background-size: 100%;
    background-image: url(../images/go.png);
    display: inline-block;
    /*border: 1px solid #413f3f;*/
    top: 0.25rem;
}
</style>

<template>
  <content></content>
  <phone-number></phone-number>
  <time></time>
  <location></location>
  <participants></participants>
  <comment-list></comment-list>
  <commit></commit>
</template>

<script>

  module.exports = {
    components: {
      'content': require('../components/content.vue'),
      'phone-number':require('../components/phoneNumber.vue'),
      'time': require('../components/time.vue'),
      'location': require('../components/location.vue'),
      'participants': require('../components/participants.vue'),
      'comment-list': require('../components/commentList.vue'),
      'commit': require('../components/commit.vue'),
    },
    data: {

    },
    computed: {
    },
    methods: {

    },
    created: function () {

    },
    ready: function () {

    }
  }
</script>
