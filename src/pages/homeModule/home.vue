<template>
  <div class="gl-home">
    <Row type="flex" class="code-row-bg">
      <section>
        <ArticleList />
        <!-- <article class="clearfix">
          <Col span="24">
            <ol id="posts">
              <li class="post-container" v-for="(item,idx) of articleJson">
                <div class="post-full">
                  <div class="post-wrapper">
                    <div class="post-header">
                      <div class="post-author-info clearfix">
                        <div class="post-info-name clearfix">
                          <a href="">{{item.name}}</a>
                          <span>{{item.time}}</span>
                        </div>
                        <div class="post-author-attention">
                          <a class="attention" @click="handleAttention(item,idx)" title="item.name">
                            {{item.attention?'关注':'取消关注'}}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="post-content clearfix">
                      <div class="post-picture">
                        <a href="">
                          <img :src="item.img" width="100%" height="100%" alt="">
                        </a>
                      </div>
                      <div class="post-list">
                        <div class="post-list-item">
                          <div class="post-list-item-title">
                            <h3><a href="#">{{item.title}}</a></h3>
                          </div>
                          <div class="post-list-item-content">
                            {{item.content}}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="post-footer clearfix">
                      <div class="post-heat">
                        <div class="post-heat-count">
                          <span class="heat-link-current" title="12,345喜欢">
                            12,345喜欢
                          </span>
                        </div>
                      </div>
                      <div class="post-controls">
                        <div class="post-control-inner">
                          <div class="post-control share">
                            <Icon type="ios-share-alt-outline" title="分享" />
                          </div>
                          <div class="post-control reply">
                            <Icon type="ios-text-outline" title="回复"/>
                          </div>
                          <div class="post-control like">
                            <Icon type="ios-heart-outline" title="喜欢" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="post-avatar post-avatar-sticky">
                    <div class="post-avatar-wrapper">
                      <a class="post-avatar-img post-avatar-link" href="">
                        <img :src="item.user_avatar" width="50" height="50" alt="">
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </Col>
        </article> -->
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
import {asideJson, footerJson} from "@/assets/json/homeJson";
import ArticleList from "./articleList.vue";
import { Component, Vue } from "vue-property-decorator";
import store from '@/vuex/store';
import {mapMutations} from 'vuex';
@Component({
  components:{
    /**
   * ArticleList  文章列表
   * asideList    侧 边 栏
   * footerList   页面底部
   */
    ArticleList
  }
})
export default class HomePage extends Vue {
  constructor() {
    super();
  }
  asideJson: Array<object> = asideJson;
  footerJson: Array<object> = footerJson;

  created(): void {
    return this.$store.state.attention
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
  z-index: -1;
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
  width: 23%;
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
  width:1040px;
  margin:auto;
  padding-top:30px;
  transition: transform 0.1s ease;
  section{
    width:100%;
    article{
      width:70%;
      float: left;
      #posts {
        margin: 0 0 0 70px;
        padding: 0;
        .post-container{
          margin: 0 0 20px 0;
        }
        .post-full{
          width: 100%;
          font-size: 14px;
          background: #fff;
          padding: 15px 0 0;
          word-wrap: break-word;
          border-radius: 3px;
          position: relative;
        }
        .post-header,
        .post-footer{
          padding:0 20px;
        }
        .post-header{
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
            color:#999;
            a{
              color:#333;
            }
            span{
              margin-left:5px;
              font-size:12px;
            }
          }
        }
        .post-footer{
          display: table;
          width: 100%;
          border-spacing: 0;
          height: 45px;
          padding-right: 19px;
          font-weight: bold;
          color: #8f8f8f;
          border-bottom-right-radius: 6px;
          border-bottom-left-radius: 6px;
          line-height: 45px;
          .post-heat{
            display: table-cell;
            width: 100%;
            vertical-align: top;
            .post-heat-count{
              font-size: 13px;
              float: left;
              .heat-link-current{
                display: block;
              }
            }
          }
          .post-controls{
            display: table-cell;
            width: 100%;
            line-height: 0;
            vertical-align: top;
            .post-control-inner{
              height: 45px;
              font-size: 0;
              text-align: right;
              white-space: nowrap;
            }
            .post-control{
              margin: 10px 0 10px 12px;
              display: inline-block;
              position: relative;
              text-align: left;
              height: 24px;
              width: 24px;
              cursor: pointer;
              &:first-child{
                margin-left:0;
              }
              .ivu-icon{
                &::before{
                  font-size: 24px;
                  width: 24px;
                  height: 24px;
                  color: #8f8f8f;
                  margin-top: -1px;
                }
              }
            }
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
        .post-list{
          border-top: 1px solid #e7e7e7;
          word-break: break-word;
          transition: opacity .2s ease;
          opacity: 1;
          margin-top:-6px;
          .post-list-item{
            padding: 15px 20px;
            .post-list-item-title{
              display: inline;
              font-weight: 500;
              font-size: 18px;
              line-height: 28px;
              position: relative;
              vertical-align: middle;
              a{
                color: #333;
                &:hover{
                  text-decoration: underline;
                }
              }
            }
            .post-list-item-content{
              // color:#333;
              margin:15px 0;
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
          height: 50px;
          width: 50px;
          left: -70px;
          top: 0;
          .post-avatar-wrapper{
            position: -webkit-sticky;
            position: sticky;
            top: 69px;
            height: auto;
            width: auto;
          }
          .post-avatar-link{
            background: #f5f5f5 50% 50% no-repeat;
            display: block;
            height: 100%;
            width: 100%;
            border-radius: 4px;
            background-size: cover;
            overflow: visible;
            img{
              border-radius:4px;
              -webkit-transition: all 1.5s;
              transition: all 1.5s;
              display: block;
              opacity: 1;
              pointer-events: none;
              box-sizing: border-box;
            }
          }
        }
        .post-avatar-sticky{
          height:100%;
          .post-avatar-link{
            height: 50px;
            width: 50px;
          }
        }
      }
    }
    aside{
      width:25%;
      float: right;
    }
  }
}
</style>
