<template>
  <div class="user-news">
    <ul class="inform-list">
      <li class="inform-item">
        <a href="">mengh</a><span>关注了</span><a href="">Anacardier</a><time class="gray-dot">2018年10月19日18:10:27</time>
      </li>
      <li class="inform-item">
        <a href="">mengh</a><span>发布了文章</span><a href="">面试前端岗位，有哪些面试官会问的问题？该如何准备？面试前端岗位，有哪些面试官会问的问题？该如何准备？</a><time class="gray-dot">2018年10月19日18:10:34</time>
      </li>
      <li class="inform-item">
        <a href="">mengh</a><span>评论了</span><a href="">面试前端岗位，有哪些面试官会问的问题？该如何准备？</a><time class="gray-dot">2018年10月19日18:10:36</time>
      </li>
      <li class="inform-item">
        <a href="">mengh</a><span>提了一个问题</span><a href="">面试前端岗位，有哪些面试官会问的问题？该如何准备？</a><time class="gray-dot">2018年10月19日18:10:39</time>
      </li>
      <li class="inform-item">
        <a href="">Anacardier</a><span>关注了您</span><time class="gray-dot">2018年10月19日18:10:39</time>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAside from "@/pages/userModule/user/userAside.vue";

@Component({
  components: {
    UserAside,
  }
})
export default class InformPage extends Vue {
  constructor(){
    super()
  }
  data () {
    return ({
      informTime: (new Date()).getTime() - 60 * 3 * 1000,
    })
  }
}
</script>
<style lang="scss" scoped>
.gray-dot{
  font-size: 12px;
  &:before {
    content: "\2022";
    color: #999;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 12px;
    top: -1px;
    border-radius: 50%;
  }
}

.user-news,
.system-inform{
  background: #fff;
  font-size: 15px;
  ul{
    position: relative;
    padding: 10px 0;
    li{
      padding: 15px;
      font-size: 14px;
      border-bottom: 1px solid #dcdee2;
    }
  }
  .inform-item{
    span{
      margin:0 3px;
    }
    a{
      color: #1396ff;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
.user-news{
  .inform-list{
    margin-top: -10px;
  }
}
.system-inform{
  .official-list{
    padding-bottom: 0;
    .official-item{
      position: relative;
      margin: 15px 0;
      .user-avatar{
        text-decoration: none;
        position: absolute;
        overflow: visible;
        display: block;
        height: 40px;
        width: 40px;
        left: 0;
        top: 0;
        .user-avatar-wrapper{
          position: sticky;
          top: 69px;
          height: auto;
          width: auto;
          a{
            display: block;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-size: cover;
            overflow: visible;
          }
        }
        .avatar-img{
          border-radius: 50%;
          pointer-events: none;
          box-sizing: border-box;
          display: block;
          height: 40px;
          width: 40px;
          opacity: 1;
          transition: all 1.5s;
        }
      }
      .avatar{
        height: 100%;
      }
    }
    .inform-time{
      text-align: right;
      margin-top: 8px;
      opacity: .8;
    }
    .user-cont-wrapper{
      position: relative;
      padding-left: 55px;
      margin-top: -5px;
      .user-cont{
        margin-top: 15px;
        opacity: .8;
      }
    }
    a{
      font-size: 16px;
      color: #333;
    }
  }
}
</style>
