<template>
  <div class="gl-home">
    <Row type="flex" class="code-row-bg">
      <section>
        <article class="clearfix">
          <Col span="24">
            <ol id="posts">
              <li class="post-container">
                <div class="post-full">
                  <div class="post-wrapper">
                    <div class="post-header">
                      <div class="post-author-info clearfix">
                        <div class="post-info-name clearfix">
                          <a href="">goulang</a>
                        </div>
                        <div class="post-author-attention">
                          <a class="attention" @click="handleAttention()" title="关注 goulang">
                            关注
                            <!-- <template v-if="attention">
                              关注
                            </template>
                            <template v-else>
                              取消关注
                            </template> -->
                          </a>
                        </div>
                        <div>

                        </div>
                      </div>
                    </div>
                    <div class="post-content">
                      <div class="post-picture">
                        <a href="">
                          <img src="@/assets/imgs/avatar.png" width="100%" height="300" alt="">
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="post-avatar">
                    <a class="post-avatar-img post-avatar-link" href="">
                      <img src="@/assets/imgs/avatar.png" width="60" height="60" alt="">
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </Col>
        </article>
        <aside class="clearfix">
          <Col span="24">侧边栏</Col>
        </aside>
      </section>
      <Col id="sidebar-footer-nav" class="pinned-sidebar-footer" span="24">
        <ul class="sidebar-nav visible clearfix">
          <li v-for="(item,idx) of footerJson" :v-for="idx" class="sidebar-nav-item clearfix">
            <a href="" class="sidebar-link">{{item.title}}</a>
          </li>
        </ul>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import {articleJson, asideJson, footerJson} from "@/assets/json/homeJson";
import { Component, Vue } from "vue-property-decorator";
import store from '@/vuex/store';
import {mapMutations} from 'vuex';
@Component
export default class HomePage extends Vue {
  constructor() {
    super();
  }
  /**
   * articleJson  文章列表
   * asideJson    侧 边 栏
   * footerJson   页面底部
   */
  articleJson: Array<object> = articleJson;
  asideJson: Array<object> = asideJson;
  footerJson: Array<object> = footerJson;

  created(): void {
    return (
      store.state.attention,
      console.log(store.state.attention)
    )
  }
  handleAttention (): void {
    
    store.commit('handleAttention')
    // store.state.attention = !store.state.attention;
  }

}
</script>
<style lang="scss" scoped>
.pinned-sidebar-footer {
  transform: translateZ(0);
  margin-left: -520px;
  position: fixed;
  width: 1040px;
  bottom: 0;
  left: 50%;
  .sidebar-nav{
    transition: opacity .15s ease-out,transform .15s ease-out;
    transform: translateY(15px) translateZ(0);
    opacity: 0;
  }
  .sidebar-nav.visible {
    transform: translateY(0) translateZ(0);
    opacity: 1;
  }
}
.sidebar-nav {
  margin: 15px 11px 10px;
  list-style: none;
  color: hsla(0,0%,20%,.8);
  float: right;
  width: 30%;
  padding: 0;
  .sidebar-nav-item {
    text-align: center;
    margin: 0 7px 0 0;
    float: left;
    padding: 0;
  }
}
.sidebar-link {
  text-decoration: none;
  line-height: 26px;
  font-size: 12px;
  display: block;
  color: hsla(0,0%,20%,.8);
  margin: 0 3px;
}
.gl-home {
  color: #f60;
  width:1040px;
  margin:auto;
  padding-top:30px;
  transition: transform 0.1s ease;
  section{
    width:100%;
    article{
      width:65%;
      float: left;
      #posts {
        margin: 0 0 0 85px;
        padding: 0;
        .post-full{
          width: 100%;
          font-size: 14px;
          background: #fff;
          padding: 15px 0 0;
          word-wrap: break-word;
          border-radius: 3px;
        }
        .post-header{
          padding:0 20px;
          font-size: 13px;
          margin: -3px 0 13px;
          line-height: 20px;
          height: 20px;
          vertical-align: middle;
          text-rendering: optimizeLegibility;
          .post-author-info{
            max-width:100%;
          }
          .post-info-name{
            float: left;
            max-width:430px;
            a{
              color:#999;
            }
          }
          .post-author-attention{
            float: left;
            .attention{
              color:#2d8cf0;
              margin-left: 10px;
              font-weight: 400;
              position: relative;
              transition: width .3s .3s;
            }
          }
        }
        .post-avatar{
          border-radius: 3px;
          background-color: #f5f5f5;
          text-decoration: none;
          position: absolute;
          overflow: visible;
          display: block;
          height: 100%;
          width: 60px;
          left: 0;
          top: 0;
          .post-avatar-link{
            background: #f5f5f5 50% 50% no-repeat;
            display: block;
            height: 60px;
            width: 60px;
            border-radius: 3px;
            background-size: cover;
            overflow: visible;
          }
        }
      }
    }
    aside{
      width:30%;
      float: right;
    }
  }
}
</style>
