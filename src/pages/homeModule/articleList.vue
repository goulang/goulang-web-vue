<template>
 <Scroll loding-text="加载中" :height="1000" :on-reach-bottom="handleReachBottom">
    <article class="clearfix">
      <Col span="24">
        <ol id="posts">
          <li class="post-container" v-for="(item,idx) of listData">
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
    </article>
  </Scroll>
</template>

<script lang="ts">
import {articleJson} from "@/assets/json/homeJson";
import { Component, Vue } from "vue-property-decorator";
import store from '@/vuex/store';
import {mapMutations} from 'vuex';
@Component
export default class ArticlePage extends Vue {
  constructor() {
    super();
  }
  /**
   * articleJson  文章列表
   * asideJson    侧 边 栏
   * footerJson   页面底部
   */
  articleJson: Array<object> = articleJson;
  listData : Array<object> = [];
  maxLen: number = 10;
  minLen: number = 0;
  created(): void {
    if (articleJson.length < 10) {
      this.maxLen = articleJson.length
    } else {
      this.maxLen = 10
    }
    this.listData = articleJson.slice(this.minLen,this.maxLen);
    return this.$store.state.attention
  }
  
  handleAttention (obj:any, idx:number): void {
    this.articleJson.splice(idx, 1, Object.assign(obj, { attention: !obj.attention }));
    store.commit('handleAttention', obj);
  }
   handleReachBottom () {
      return new Promise(resolve => {
          setTimeout(() => {
            this.maxLen += this.maxLen;
              this.listData = articleJson.slice(this.minLen,this.maxLen);
              if (this.listData.length == articleJson.length) {
                alert("无更多数据！")
              }
              resolve();
          }, 2000);
      });
  }
}

</script>
<style lang="scss" scoped>
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
</style>
