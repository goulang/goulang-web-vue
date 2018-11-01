<template>
  <!-- tabs -->
  <div class="cover-nav cover-nav-profile-user">
    <Tabs value="article" @on-click='handleAddClass' :animated="false">
      <TabPane label="文章" name="article">
        <ul class="posts">
          <li class="post-container" v-for="(item,idx) of articleJson" :key="idx">
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
        <ul class="posts">
          <li class="post-container" v-for="(item,idx) of articleJson" :key="idx">
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
                    <div class="title-type">
                      <span><time></time>赞了此文章</span>
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
        <ul class="posts">
          <li class="post-container" v-for="(item,idx) of articleJson" :key="idx">
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
                    <div class="title-type">
                      <span><time></time>关注了此用户</span>
                    </div>
                  </div>
                </div>
                <div class="post-content clearfix">
                  <UserList :userInfo="asideJson" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </TabPane>
      <TabPane label="问题" name="issue">
        <Tabs :animated="false" value="inquiry" class="issue">
          <TabPane :label="inquiry" name="inquiry">
            <UserList :userInfo="asideJson" :name="'issue'" />
          </TabPane>
          <TabPane :label="reply" name="reply">
            <UserList :userInfo="asideJson" :name="'issue'" />
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane label="评论" name="discuss">
        <ul class="posts">
          <li class="post-container" v-for="(item,idx) of articleJson" :key="idx">
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
                    <div class="title-type">
                      <span><time></time>评论了此文章</span>
                    </div>
                  </div>
                </div>
                <div class="post-content clearfix">
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
      <TabPane label="喜欢" name="like">
        <ul class="posts">
          <li class="post-container" v-for="(item,idx) of articleJson" :key="idx">
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
                    <div class="title-type">
                      <span><time></time>喜欢了此文章</span>
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
      <TabPane label="关注" :class="'mgt--20'" name="follow">
        <UserList :name="'follow'" :userInfo="asideJson" />
      </TabPane>
      <TabPane label="粉丝" :class="'mgt--20'" name="followers">
        <UserList :name="'followers'" :userInfo="asideJson" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { articleJson, asideJson } from "@/assets/json/homeJson";
import UserList from "@/pages/userModule/user/userList.vue";
@Component({
  components: {
    UserList
  },

})
export default class UserNavbar extends Vue {
  constructor(){
    super()
  }
  data () {
    return {
      inquiry: (h:any) => {
        return h('div', [
          h('span', '我的提问'),
          h('Badge', {
            props: {
              count: 3
            }
          })
        ])
      },
      reply: (h:any) => {
        return h('div', [
          h('span', '我的回答'),
          h('Badge', {
            props: {
              count: 3
            }
          })
        ])
      },
      mgb20: false,
    }
  }
  handleAddClass(name: string) {
  }
  /**
   * articleJson  文章列表
   * asideJson    侧 边 栏
   * footerJson   页面底部
   */
  articleJson: Array<object> = articleJson;
  asideJson: Array<object> = asideJson;
  
}
</script>
<style lang="scss" scoped>

.posts {
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
    margin-top: 4px;
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
    text-decoration: none;
    position: absolute;
    overflow: visible;
    display: block;
    height: 40px;
    width: 40px;
    left: 20px;
    top: -20px;
    .post-avatar-link {
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
.issue{
  margin-top: -20px;
  .ivu-tabs-bar{
    margin-bottom: 0 !important;
    .ivu-tabs-nav{
      width: 100%;
      .ivu-tabs-ink-bar{
        width: 0 !important;
      }
      .ivu-tabs-tab{
        margin: 0 !important;
        width: 50%;
        text-align: center;
        .ivu-badge{
          sup{
            background: #ddd;
            color: #666;
            opacity: .8;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
