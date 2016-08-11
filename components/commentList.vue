<style scoped>
#comment-list{
    position: relative;
    height: 2.67rem;
    padding: 0.2rem 0.53rem 0.2rem 0.53rem;
    font-size: 26px;/*px*/
    background-color: #ffffff;
    overflow: hidden;
    margin-top: 0.27rem;
    color: #5e5e5e;
    z-index: 2;
}

.comment{
    position: relative;
    font-size: 26px;/*px*/
    line-height: 36px;
}

.comment-name{
    color: #5eb6d4

}

.comment-time{
    position: relative;
    color: #b1b1b1;
    font-size: 22px;/*px*/
    margin-left: 20px;
}

#more-comment{
    width: 100%;
    position: relative;
    font-size: 26px;/*px*/
    color: #b1b1b1;
    text-align: center;
    background-color: #ffffff;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0px 1px 6px #acacac;
    top: -2px;
}

</style>

<template>
<div id="comment-list">
        <div class="comment">
            <span class="comment-name">daisycream</span>
            <span>:</span>
            <span class="comment-text">你是谁？</span>
            <span class="comment-time">8月2日 12:00</span>
        </div>
        <div class="comment">
            <span class="comment-name">哇哈哈哈</span>
            <span>:</span>
            <span class="comment-text">我是你大爷哇哈哈我是你大爷哇哈哈我是你大爷哇哈哈</span>
            <span class="comment-time">8月2日 12:20</span>
        </div>
        <div class="comment">
            <span class="comment-name">daisycream</span>
            <span>:</span>
            <span class="comment-text">哈哈哈哈哈哈，傻逼</span>
            <span class="comment-time">8月2日 13:00</span>
        </div>
        <div class="comment">
            <span class="comment-name">daisycream</span>
            <span>:</span>
            <span class="comment-text">哈哈哈哈哈哈，傻逼</span>
            <span class="comment-time">8月2日 13:00</span>
        </div>
        <div class="comment">
            <span class="comment-name">daisycream</span>
            <span>:</span>
            <span class="comment-text">哈哈哈哈哈哈，傻逼</span>
            <span class="comment-time">8月2日 13:00</span>
        </div>
        <div class="comment">
            <span class="comment-name">daisycream</span>
            <span>:</span>
            <span class="comment-text">哈哈哈哈哈哈，傻逼</span>
            <span class="comment-time">8月2日 13:00</span>
        </div>
        <div class="comment">
            <span class="comment-name">daisycream</span>
            <span>:</span>
            <span class="comment-text">哈哈哈哈哈哈，傻逼</span>
            <span class="comment-time">8月2日 13:00</span>
        </div>
        <div class="comment">
            <span class="comment-name">哇哈哈哈</span>
            <span>:</span>
            <span class="comment-text">我是你大爷哇哈哈我是你大爷哇哈哈我是你大爷哇哈哈</span>
            <span class="comment-time">8月2日 12:20</span>
        </div>
        <div class="comment">
            <span class="comment-name">哇哈哈哈</span>
            <span>:</span>
            <span class="comment-text">我是你大爷哇哈哈我是你大爷哇哈哈我是你大爷哇哈哈</span>
            <span class="comment-time">8月2日 12:20</span>
        </div>
    </div>
    <div id="more-comment" @click="showComments">展开更多评论</div>
</template>

<script>
  module.exports = {
    props: [''],
    components: {
    },
    data: function () {
      return {
        commentClickCount: 1,
      }
    },
    methods: {
        showComments: function(){
            var target = document.getElementById('comment-list');
                if(this.commentClickCount%2!=0){
                    target.style.height = "auto";
                }else{
                    target.style.height = "2.67rem";
                }
            this.commentClickCount++;
        }
    },
    ready: function () {
    }
  }
</script>