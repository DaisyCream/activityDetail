<style scoped>
#participants {
    position: relative;
    height: 80px;
    padding-top: 10px;
    padding-bottom: 10px;
    overflow: hidden;
}

#participants-head{
    position: relative;
    width: 8rem;
    /*height: 80px;*/
    /*border: 1px solid #413f3f;*/
    left: -0.2rem;
    top: 0.05rem;
}

#participants-head li{
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    display: inline-block;
    margin-left: 0.26rem;
    background-image: url(../images/head.png);
    background-size: 100%;

}



#numbers{
    position: absolute;
    font-size: 32px;/*px*/
    bottom: 0.4rem;
    right: 0.4rem;
}

#more-btn{
    position: absolute;
    font-size: 24px;/*px*/
    right: 0.8rem;
    bottom: -0.14rem;
    color: #5eb6d4;
}

</style>

<template>
<div class="msg" id="participants">
        <ul id="participants-head">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div id="numbers">12/15</div>
        <div id="more-btn" @click="showParticipants">展开</div>
</div>
</template>

<script>
  module.exports = {
    props: [''],
    components: {
    },
    data: function () {
      return {
        headClickCount:1,
      }
    },
    methods: {
        showParticipants: function(e){
            var target = e.target;
            if(this.headClickCount%2!=0){
                  target.parentNode.style.height = "auto";
            }else{
                  target.parentNode.style.height = "80px";
            }
            this.headClickCount++;
        }

    },
    ready: function () {
    }
  }
</script>