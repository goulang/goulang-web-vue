<template>
  <aside class="clearfix ">
    <Col span="24">
      <div class="recommend-attention">
        <dl>
          <dt class="main-header recommended-user-header">推荐的用户</dt>
          <dd v-for="(item,idx) of asideJson" :key="idx" class="item">
            <div class="recommended-user-info user-info">
              <div class="recommended-avatar">
                <a href="">
                  <img :src="item.user_avatar" class="avatar-img" alt="">
                </a>
              </div>
              <div class="recommended-name truncate-line">
                <span>
                  <a href="">{{item.name}}</a>
                  <small>{{item.title}}</small>
                </span>
              </div>
              <div data-v-74a6ae54="" class="recommended-author-attention">
                <Button type="primary">关注</Button>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      <div class="funny-pictures">
        <div class="recommend-funny">
          <div class="user-info">
            <div class="recommended-avatar">
                <a href="">
                  <img src="https://66.media.tumblr.com/9a59479d0610473d42c16d707348dbb4/tumblr_pck93iHHxi1ri7wu8o1_400.png" class="avatar-img" alt="">
                </a>
              </div>
              <div class="recommended-name truncate-line">
                <span>
                  <a href="">阿达</a>
                  <small>按时</small>
                </span>
              </div>
              <div data-v-74a6ae54="" class="recommended-author-attention">
                <Button type="primary">关注</Button>
              </div>
          </div>
          <div class="funny-img">
            <img width="100%" height="100%" src="https://66.media.tumblr.com/9a59479d0610473d42c16d707348dbb4/tumblr_pck93iHHxi1ri7wu8o1_400.png" alt="">
          </div>
          <div class="funny-footer">
            <div class="funny-heat">
              <div class="funny-heat-count">
                <span class="heat-link-current" title="12,340喜欢">
                  12,340喜欢
                </span>
              </div>
            </div>
            <div class="funny-controls">
              <div class="funny-control-inner">
                <div class="funny-control share">
                  <Icon type="ios-share-alt-outline" title="分享" />
                </div>
                <div class="funny-control like">
                  <Icon type="ios-heart-outline" title="喜欢" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
</aside>
</template>

<script lang="ts">
import { asideJson } from "@/assets/json/homeJson";
import { Component, Vue } from "vue-property-decorator";
import store from "@/vuex/store";
import { mapMutations } from "vuex";
@Component
export default class AsidePage extends Vue {
  constructor() {
    super();
  }
  /**
   * asideJson    侧 边 栏
   */
  asideJson: Array<object> = asideJson;
  //   asideBarData : Array<object> = [];
}
</script>
<style lang="scss" scoped>
aside{
  position: relative;
  margin-right: -1px;
  padding-bottom: 20px;
  float: right;
  transition: opacity .2s;
  background: inherit;
  opacity: 1;
}
.recommend-attention{
  margin-top: 0;
  padding-right: 20px;
  max-height: 260px;
  overflow: hidden;
  width: 100%;
  transition: opacity .1s linear;
  min-height: 260px;
  opacity: 1;
  padding: 5px 15px;
  background: #fff;
  font-size:14px;
  .recommended-user-header{
    box-sizing: border-box;
    width: 100%;
    padding: 0 10px;
    color: hsla(0, 0%, 20%, .8);
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
  }
  .item{
    border-bottom: 1px solid hsla(0, 0%, 100%, .5);
    border-top: 0;
    height: 50px;
    margin-top: 5px;
    position: relative;
    &:hover{
      background-color: hsla(0,0%,100%,.07);
    }
    
  }
  .main-header{
    border-bottom: 2px solid hsla(0, 0%, 20%, .13);
    background-color: transparent;
    text-transform: uppercase;
  }
}
.user-info{
  height:100%;
  .recommended-avatar{
      .avatar-img{
        border-radius: 3px;
        display: block;
        position: absolute;
        height: 40px;
        width: 40px;
        left: 10px;
        top: 5px;
      }
    }
    .recommended-name{
      padding: 6px 0 0 57px;
      span{
        small{
          display: block;
          color: #999;
        }
      }
    }
    .recommended-author-attention{
      position: absolute;
      right: 10px;
      top: 9px;
    }
    .truncate-line{
      text-overflow: clip;
      max-width: calc(100% - 66px);
      white-space: nowrap;
      overflow: hidden;
    }
}
.recommend-attention,
.funny-pictures{
  box-shadow: 0 2px 2px rgba(0,0,0,.08);
}
.funny-pictures{
  background:#fff;
  margin-top: 20px;
  padding: 5px 15px;
  font-size:14px;
  .recommend-funny{
    position: relative;
  }
  .user-info{
    margin-bottom: 10px;
    .recommended-avatar{
      .avatar-img{
        left: 0;
      }
    }
    .recommended-name{
      padding-left: 47px;
    }
    .truncate-line{
      max-width: calc(100% - 66px);
    }
    .recommended-author-attention{
      right: 0;
    }
  }
  .funny-footer{
    padding: 0 10px;
    color: #8f8f8f;
    .funny-heat{
      display: table-cell;
      width: 100%;
      vertical-align: top;
      .funny-heat-count{
        font-size: 13px;
        float: left;
        .heat-link-current{
          line-height: 40px;
          display: block;
        }
      }
    }
    .funny-controls{
      display: table-cell;
      width: 100%;
      line-height: 0;
      vertical-align: top;
    }
    .funny-control-inner{
      height: 40px;
      font-size: 0;
      text-align: right;
      white-space: nowrap;
    }
    .funny-control{
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
</style>
