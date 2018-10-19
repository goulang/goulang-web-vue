<template>
  <div class="gl-resource">
    <div class="gl-home user-home">
      <Row type="flex" class="code-row-bg">
        <section>
          <article>
            <Menu mode="horizontal" active-name="userNews">
              <MenuItem name="userNews">
                用户消息
              </MenuItem>
              <MenuItem name="systemInform">
                系统通知
              </MenuItem>
            </Menu>
            <!-- <div class="user-news">
              <ul class="inform-list">
                <li class="inform-item">
                  <a href="">mengh </a> 关注了 <a href=""> Anacardier </a><time>2018年10月19日18:10:27</time>
                </li>
                <li class="inform-item">
                  <a href="">mengh </a> 发布了文章 <a href=""> 面试前端岗位，有哪些面试官会问的问题？该如何准备？面试前端岗位，有哪些面试官会问的问题？该如何准备？</a><time>2018年10月19日18:10:34</time>
                </li>
                <li class="inform-item">
                  <a href="">mengh </a> 评论了 <a href=""> 面试前端岗位，有哪些面试官会问的问题？该如何准备？</a><time>2018年10月19日18:10:36</time>
                </li>
                <li class="inform-item">
                  <a href="">mengh </a> 提了一个问题 <a href=""> 面试前端岗位，有哪些面试官会问的问题？该如何准备？</a><time>2018年10月19日18:10:39</time>
                </li>
                <li class="inform-item">
                  <a href="">Anacardier </a> 关注了您<time>2018年10月19日18:10:39</time>
                </li>
              </ul>
            </div> -->
            <div class="system-inform">
              <div class="system-container">
                <ul class="official-list">
                  <li class="official-item">
                    <div class="user-avatar">
                      <a href="">
                        <img src="@/assets/imgs/logo.jpg" class="avatar-img" alt="">
                      </a>
                    </div>
                    <div class="user-name">
                      <a href="">够浪官方</a>
                      <span>罪恶之人</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <UserAside />
        </section>
      </Row>
    </div>
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
export default class ResourcePage extends Vue {}
</script>
<style lang="scss" scoped>
.user-news,
.system-inform{
  background: #fff;
  ul{
    position: relative;
    padding: 10px 15px;
    .li{
      padding: 5px 0;
      font-size: 14px;
    }
  }
  .inform-item{
    a{
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
.system-inform{
  .user-avatar{
    .avatar-img{
      border-radius: 50%;
      position: absolute;
      display: block;
      height: 40px;
      width: 40px;
      left: 10px;
      top: 17px;
      transition: all .3s ease;
    }
  }
}

time {
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
</style>
