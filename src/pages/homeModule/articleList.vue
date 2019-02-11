<template>
  <article class="clearfix">
    <Col span="24">
    <ul id="posts">
      <li
        class="post-container"
        v-for="(item,idx) of listData"
        :key="idx"
      >
        <div class="post-full">
          <div class="post-wrapper">
            <div class="post-header">
              <div class="post-author-info clearfix">
                <div class="post-info-name clearfix">
                  <a href="">{{item.name}}</a>
                  <time>{{item.time}}</time>
                </div>
                <div class="post-author-attention">
                  <a
                    class="attention"
                    @click="handleAttention(item,idx)"
                    title="item.name"
                  >
                    {{item.attention?'关注':'取消关注'}}
                  </a>
                </div>
              </div>
            </div>
            <div class="post-content clearfix">
              <div class="post-picture">
                <a href="">
                  <img :src="item.img" />
                </a>
              </div>
              <div class="post-list">
                <div class="post-list-item">
                  <div class="post-list-item-title">
                    <h3
                      v-if="item.title.length >= '55'"
                      class="truncate-lines truncate-lines-2"
                      dir="auto"
                    >
                      <a
                        target="_blank"
                        :title="item.title"
                        href="#"
                      >{{item.title}}</a>
                    </h3>
                    <h3
                      v-else
                      dir="auto"
                    >
                      <a
                        target="_blank"
                        href="#"
                      >{{item.title}}</a>
                    </h3>
                  </div>
                  <div
                    v-if="item.content.length>='110'"
                    :title="item.content"
                    dir="auto"
                    class="post-list-item-content truncate-lines truncate-lines-3"
                  >
                    {{item.description}}
                  </div>
                  <div
                    v-else
                    dir="auto"
                    class="post-list-item-content truncate-lines truncate-lines-3"
                  >
                    {{item.description}}

                  </div>
                </div>
              </div>
            </div>
            <div class="post-footer clearfix">
              <div class="post-heat">
                <div class="post-heat-count">
                  <span
                    class="heat-link-current"
                    title="12,345喜欢"
                  >
                    12,345喜欢
                  </span>
                </div>
              </div>
              <div class="post-controls">
                <div class="post-control-inner">
                  <div class="post-control share">
                    <Icon
                      type="ios-share-alt-outline"
                      title="分享"
                    />
                  </div>
                  <div class="post-control reply">
                    <Icon
                      type="ios-text-outline"
                      title="回复"
                    />
                  </div>
                  <div class="post-control like">
                    <Icon
                      type="ios-heart-outline"
                      title="喜欢"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="post-avatar post-avatar-sticky">
            <div class="post-avatar-wrapper">
              <a
                class="post-avatar-img post-avatar-link"
                href=""
              >
                <img
                  :src="item.user_avatar"
                  width="50"
                  height="50"
                  alt=""
                >
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </Col>
  </article>
</template>

<script lang="ts">
import { articleJson } from "@/assets/json/homeJson";
import { Component, Vue } from "vue-property-decorator";
import ApiService from "@/services";
// import store from '@/vuex/index';
// import {mapMutations} from 'vuex';
@Component
export default class ArticlePage extends Vue {
  constructor() {
    super();
  }
  page: string = "1";
  limit: string = "10";
  /**
   * articleJson  文章列表
   * asideJson    侧 边 栏
   * footerJson   页面底部
   */
  articleJson: Array<object> = articleJson;
  // : Array<object> = [];
  data() {
    return {
      listData: [],
      page: 1
    };
  }
  maxLen: number = 10;
  minLen: number = 0;

  created(): void {
    this.GetTopics();
    // 加载更多
    window.addEventListener("scroll", this.Scroll, true);
    // 加载更多

    // if (articleJson.length < 10) {
    //   this.maxLen = articleJson.length;
    // } else {
    //   this.maxLen = 10;
    // }
    // this.listData = articleJson.slice(this.minLen, this.maxLen);
    // return this.$store.state.attention;
  }
  Scroll() {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.body.scrollHeight;
    console.log(scrollTop + windowHeight, scrollHeight);
    if (scrollTop + windowHeight == scrollHeight) {
      console.log("开始加载吧");
      // if (this.page <= this.totalPage) {
      //   this.getList();
      this.GetTopics();
      // }
    }
  }
  // 取消加载更多监听事件
  destroyed() {
    window.removeEventListener("scroll", this.Scroll, true);
  }
  GetTopics() {
    console.log(this.$data.page);
    ApiService.GetTopics({
      page: this.$data.page
      // limit: this.limit
    }).then((res: any) => {
      console.log(res);
      // 判断是不是最后一页了, 如果是最后一页了,什么都不做
      if (res.count <= res.page * res.limit) {
        return;
      }
      // this.listData = [...this.listData,...res.list]
      this.$data.listData = [...this.$data.listData, ...res.list];
      this.$data.page = res.page + 1;
      // console.log(  this.$data.page)
    });
  }
  handleAttention(obj: any, idx: number): void {
    this.articleJson.splice(
      idx,
      1,
      Object.assign(obj, { attention: !obj.attention })
    );
    //这里的home模块的store改写为带有命名空间的store,来自Amanda修改
    this.$store.commit("home/handleAttention", obj);
  }
  // handleReachBottom() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       this.maxLen += this.maxLen;
  //       this.listData = articleJson.slice(this.minLen, this.maxLen);
  //       if (this.listData.length == articleJson.length) {
  //         alert("无更多数据！");
  //       }
  //       resolve();
  //     }, 2000);
  //   });
  // }
}
</script>
<style lang="scss" scoped>
article {
  #posts {
    margin: 0 0 0 70px;
    padding: 0;
    .post-container {
      margin: 0 0 20px 0;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
    }
    .post-full {
      width: 100%;
      font-size: 14px;
      background: #fff;
      padding: 15px 0 0;
      word-wrap: break-word;
      border-radius: 3px;
      position: relative;
    }
    .post-content {
      border-top: 1px solid #e7e7e7;
      padding: 15px 15px 0;
      max-height: 170px;
      .post-picture {
        a {
          width: 25%;
          float: right;
          height: 150px;
          img {
            border-radius: 2px;
            height: 100%;
            width: 100%;
            overflow: hidden;
            object-fit: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: scroll;
          }
        }
      }
      .post-list {
        width: calc(75% - 20px);
        height: 100%;
        .post-list-item {
        }
      }
    }
    .post-header,
    .post-footer {
      padding: 0 20px;
    }
    .post-header {
      font-size: 13px;
      margin: -3px 0 13px;
      line-height: 20px;
      height: 20px;
      vertical-align: middle;
      text-rendering: optimizeLegibility;
      .post-author-info {
        max-width: 100%;
      }
      .post-info-name {
        float: left;
        max-width: 430px;
        color: #999;
        a {
          color: rgba(51, 51, 51, 1);
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
      }
    }
    .post-footer {
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
      .post-heat {
        display: table-cell;
        width: 100%;
        vertical-align: top;
        .post-heat-count {
          font-size: 13px;
          float: left;
          .heat-link-current {
            display: block;
          }
        }
      }
      .post-controls {
        display: table-cell;
        width: 100%;
        line-height: 0;
        vertical-align: top;
        .post-control-inner {
          height: 45px;
          font-size: 0;
          text-align: right;
          white-space: nowrap;
        }
        .post-control {
          margin: 10px 0 10px 12px;
          display: inline-block;
          position: relative;
          text-align: left;
          height: 24px;
          width: 24px;
          cursor: pointer;
          &:first-child {
            margin-left: 0;
          }
          .ivu-icon {
            &::before {
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
    .post-author-attention {
      float: left;
      .attention {
        color: #2d8cf0;
        margin-left: 10px;
        font-weight: 400;
        position: relative;
        transition: width 0.3s 0.3s;
      }
    }
    .post-list {
      word-break: break-word;
      transition: opacity 0.2s ease;
      opacity: 1;
      .post-list-item {
        .post-list-item-title {
          display: inline;
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          position: relative;
          vertical-align: middle;
          h3 {
            font-size: 22px;
            line-height: 1.25em;
            word-wrap: break-word;
            font-weight: 600;
          }
          a {
            color: rgba(51, 51, 51, 0.95);
            &:hover {
              text-decoration: underline;
            }
            &:active {
              color: rgba(51, 51, 51, 0.75);
            }
            &:visited {
              color: rgba(51, 51, 51, 0.75);
            }
          }
        }
        .post-list-item-content {
          color: #546673;
          word-wrap: break-word;
          margin: 15px 0;
        }
      }
    }

    .post-avatar {
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
      .post-avatar-wrapper {
        position: -webkit-sticky;
        position: sticky;
        top: 69px;
        height: auto;
        width: auto;
      }
      .post-avatar-link {
        background: #f5f5f5 50% 50% no-repeat;
        display: block;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        background-size: cover;
        overflow: visible;
        img {
          border-radius: 4px;
          -webkit-transition: all 1.5s;
          transition: all 1.5s;
          display: block;
          opacity: 1;
          pointer-events: none;
          box-sizing: border-box;
        }
      }
    }
    .post-avatar-sticky {
      height: 100%;
      .post-avatar-link {
        height: 50px;
        width: 50px;
      }
    }
  }
}
</style>
