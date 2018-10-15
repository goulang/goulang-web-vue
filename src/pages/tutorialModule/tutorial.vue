<template>
  <div class="app-tutorial">
    <div class="gl-home user-home">
      <Row type="flex" class="code-row-bg">
        <section>
          <article>
            <!-- 公用用户信息头部 -->
            <div class="user-msg">
              <Col span="5">
                <div class="user-avatar">
                  <a href="">
                    <img src="@/assets/imgs/logo.jpg" width="100%" alt="">
                  </a>
                </div>
                <div class="user-social">
                  <Icon type="logo-facebook" />
                  <Icon type="logo-twitter" />
                  <Icon type="logo-tumblr" />
                  <Icon type="logo-github" />
                </div>
              </Col>
              <Col span="14">
                <div class="user-main">
                  <h2>Anacardier</h2>
                  <div class="site">
                    <Icon type="ios-pin" />
                    <span>亳州</span>
                  </div>
                  <div class="briefcase">
                    <Icon type="ios-briefcase" />
                    <span>
                      <span>租号玩</span>
                      <em></em>
                      <span>前端开发</span>            
                    </span>
                  </div>
                  <div class="description">
                    <span>罪恶之人</span>
                  </div>
                </div>
              </Col>
              <Col span="5">
                <div class="user-edit">
                  <Button class="writing" type="info" icon="md-create" ghost>编辑我的资料</Button>
                </div>
              </Col>
            </div>
            <!-- tabs -->
            <div class="cover-nav cover-nav-profile-user">
              <Tabs value="article">
                  <TabPane label="文章" name="article">
                    <ul id="posts">
                      <li class="post-container" v-for="(item,idx) of listData" :key="idx">
                        <div class="post-full">
                          <div class="post-wrapper">
                            <div class="post-header">
                              <div class="post-author-info clearfix">
                                <div class="post-avatar">
                                  <a class="post-avatar-img post-avatar-link" href="">
                                    <img :src="item.user_avatar" width="40" height="40" alt="">
                                  </a>
                                </div>
                                <div class="post-info-name clearfix">
                                  <a href="">{{item.name}}</a>
                                  <time>{{item.time}}</time>
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
                                    <h3 v-if="item.title.length >= '55'" class="truncate-lines truncate-lines-2" dir="auto"><a :title="item.title" href="#">{{item.title}}</a></h3>
                                    <h3 v-else dir="auto"><a href="#">{{item.title}}</a></h3>
                                  </div>
                                  <div v-if="item.content.length>='110'" :title="item.content" dir="auto" class="post-list-item-content truncate-lines truncate-lines-3">
                                    {{item.content}}
                                  </div>
                                  <div v-else dir="auto" class="post-list-item-content truncate-lines truncate-lines-3">
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
                                    <Icon type="ios-text-outline" title="回复" />
                                  </div>
                                  <div class="post-control like">
                                    <Icon type="ios-heart-outline" title="喜欢" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPane>
                  <TabPane label="动态" name="dynamic">
                    动态
                  </TabPane>
                  <TabPane label="问题" name="issue">
                    问题
                  </TabPane>
                  <TabPane label="评论" name="discuss">
                    评论
                  </TabPane>
                  <TabPane label="喜欢" name="like">
                    喜欢
                  </TabPane>
                  <TabPane label="关注" name="follow">
                    关注
                  </TabPane>
                  <TabPane label="粉丝" name="Followers">
                    粉丝
                  </TabPane>
              </Tabs>
            </div>
          </article>
          <aside>
            <div class="aside-wrap">
              <div class="dateline">
                <p>
                  <Icon type="ios-time-outline" />
                  <time>注册于 2018年10月15日</time>
                </p>
              </div>
              <div class="follow">
                <div class="following">
                  <a href="">
                    <span>关注</span>
                    <em>123</em>
                  </a>
                </div>
                <div class="followers">
                  <a href="">
                    <span>粉丝</span>
                    <em>123</em>
                  </a>
                </div>
              </div>
              <div class="article-hot">
                <Card :padding="15">
                  <p slot="title"><Icon type="md-flame" />热门文章</p>
                  <p>
                    <a href="">精读《Epitath 源码 - renderProps 新用法》</a>
                    <em> - 1.7k阅读</em>
                  </p>
                  <p>
                    <a href="">你还没搞懂this？</a>
                    <em> - 999k阅读</em>
                  </p>
                  <p>
                    <a href="">MySQL实验: 实践索引对全列匹配、最左前缀匹配、范围查询等条件的影响以及了解脏读、幻读等</a>
                    <em> - 1k阅读</em>
                  </p>
                </Card>
              </div>
            </div>
          </aside>
        </section>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { articleJson } from "@/assets/json/homeJson";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class TutorialPage extends Vue {
  constructor() {
    super();
  }
  /**
   * articleJson  文章列表
   * asideJson    侧 边 栏
   * footerJson   页面底部
   */
  articleJson: Array<object> = articleJson;
  listData: Array<object> = [];
  maxLen: number = 10;
  minLen: number = 0;
  created(): void {
    if (articleJson.length < 10) {
      this.maxLen = articleJson.length;
    } else {
      this.maxLen = 10;
    }
    this.listData = articleJson.slice(this.minLen, this.maxLen);
    return this.$store.state.attention;
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
  handleReachBottom() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.maxLen += this.maxLen;
        this.listData = articleJson.slice(this.minLen, this.maxLen);
        if (this.listData.length == articleJson.length) {
          alert("无更多数据！");
        }
        resolve();
      }, 2000);
    });
  }
}
</script>
<style lang="scss" scoped>
.app-tutorial {
  // color: #f0f;
}
i{
  font-size: 18px;
}
.ivu-icon{
  color: #999;
}
time{
  color: #666;
  font-size: 14px;
}
.user-msg{
  // box-shadow: 0 1px 3px rgba(0,0,0,.1);
  box-shadow: 0 1px 2px rgba(0,0,0,.08);
  background-color: #fff;
  padding: 20px;
  height: 200px;
  width: 100%;
  float: none; 
  .user-avatar{
    margin: 0 auto;
    height: 120px;
    width: 120px;
    a{
      display: inline-block;
      height: 100%;
      img{
        border-radius: 50%;
      }
    }
  }
  .user-social{
    margin: 0 auto;
    margin-top: 10px;
    cursor: pointer;
    width: 120px;
    i{
      transition: opacity .5s ease;
      margin: 0 5px;
      opacity: .5;
      &:hover{
        opacity: 1;
      }
    }
    .ivu-icon-logo-twitter{
      color: #4baaf4;
    }
    .ivu-icon-logo-facebook{
      color: #4862a3;
    }
    .ivu-icon-logo-github{
      color: #333;
    }
    .ivu-icon-logo-tumblr{
      color: #001935;
    }
  }
  .user-main{
    padding-left: 20px;
    .briefcase,
    .site,
    .description{
      margin-top: 18px;
      font-size: 14px;
      .ivu-icon-ios-briefcase,
      .ivu-icon-ios-pin{
        margin-right: 10px;
      }
      span{
        color: #666;
        em{
          background-color: #999;
          display: inline-block;
          margin: 0 8px;
          height: 10px;
          opacity: .7;
          width: 1px;
        }
      }
    }
  }
  .user-edit{
    text-align: right;
    .writing{
      margin-bottom: 0;
      &:hover{
        border-color: #1396ff;
        color: #1396ff;
      }
    }
  }
}
// .cover-nav{
//   margin-top: 15px;
//   .ivu-tabs{
//     .ivu-tabs-bar{
//       background-color: #fff;
//       margin-bottom: 40px;
//     }
//     .ivu-tabs-tab{
//       padding: 15px 30px !important;
//     }
//   }
// }

//侧边栏
aside{
  width: 25%;
}
.aside-wrap{
  &>div{
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
    background-color: #fff;
    // padding: 5px 15px;
    margin-bottom: 15px;
  }
  .dateline{
    padding: 10px 0;
    p{
      text-align: center;
    }
    i{
      margin-bottom: 2px;
      margin-right: 5px;
    }
    time{
      letter-spacing: 1.5px;
    }
  }
  .follow{
    position: relative;
    padding: 10px 15px;
    &>div{
      display: inline-block;
      text-align: center;
      width: 50%;
      a{
        display: block;
        &:hover{
          opacity: .8;
        }
        span,
        em{
          display: block;
        }
        span{
          color: #666;
        }
        em{
          color: #333;
        }
      }
    }
    &:after{
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #dcdee2;
      display: inline-block;
      margin-top: -25px;
      height: 50px;
      opacity: .7;
      width: 1px;
    }
  }
  .article-hot{
    .ivu-card-bordered{
      border: 0;
    }
    .ivu-card-head{
      padding: 0;
      p{
        box-sizing: border-box;
        width: 100%;
        color: #333c;
        font-weight: 700;
        line-height: 25px;
        i{
          color: #ff6a6a;
          margin-bottom: 2px;
          margin-right: 5px;
        }
      }
    }
    .ivu-card-body{
      p{
        margin: 5px 0;
        a{
          color: #333;
          &:hover{
            opacity: .8;
          }
        }
        em{
          color: #999;
        }
      }
    }
  }
}


#posts {
  padding: 0;
  .post-container {
    margin: 0 0 40px 0;
    transition: all .3s ease-in-out;
    &:hover{
      box-shadow: 0 2px 5px rgba(0,0,0,.1);
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
    height: 170px;
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
    padding-left: 70px;
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
    height: 40px;
    width: 40px;
    left: 20px;
    top: -20px;
    .post-avatar-link {
      background: #f5f5f5 50% 50% no-repeat;
      display: block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-size: cover;
      overflow: visible;
      img {
        border-radius: 50%;
        -webkit-transition: all 1.5s;
        transition: all 1.5s;
        display: block;
        opacity: 1;
        pointer-events: none;
        box-sizing: border-box;
      }
    }
  }
}
</style>

<style lang="scss">
.cover-nav{
  margin-top: 15px;
  .ivu-tabs{
    .ivu-tabs-bar{
      background-color: #fff;
      margin-bottom: 40px;
    }
    .ivu-tabs-tab{
      padding: 15px 30px !important;
    }
  }
}
</style>
