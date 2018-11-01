<template>
  <div class="gl-spitslot gl-home">
    <!-- 槽点 -->
    <main>
      <article>
        <div class="spitslot-main">
          <div class="spitslot-header-container">
            <div class="spitslot-header">
              <div class="header-title">
                <h2>吐个槽吧：</h2>
              </div>
              <div class="header-text">
                <Input type="textarea" :rows="4" placeholder="这一刻发生了哪些事呢？说给大家听听吧~" />
              </div>
              <div class="show-img demo-upload-list clearfix" v-for="(idx,item) in uploadList" :key="idx" v-if="showImg">
                <template v-if="item.status === 'finished'">
                  <img :src="item.url">
                  <div class="demo-upload-list-cover">
                      <icon type="ios-trash-outline" @click.native="handleRemove(item)"></icon>
                  </div>
                </template>
                <template v-else>
                  <i-progress v-if="item.showProgress" :percent="item.percentage" hide-info></i-progress>
                </template>
              </div>
              <div class="header-tool">
                <div class="emoji">
                  <Icon type="ios-happy-outline" />
                </div>
                <div class="file-img">
                  <!-- <Icon type="ios-image-outline" /> -->
                  <Upload 
                    ref="upload"
                    :show-upload-list="false"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :before-upload="handleBeforeUpload"
                    multiple
                    action="###">
                      <Icon type="ios-image-outline" />
                  </Upload>
                </div>
                <div class="sendbtn">
                  <Button type="primary">发布</Button>
                </div>
              </div>
            </div>
          </div>
          <div class="spitslot-container">
            <ul class="spitslot-list">
              <li class="spitslot-item">
                <div class="user-container">
                  <div class="user-avatar">
                    <a class="avatar-bg" href="">
                      <img src="@/assets/imgs/avatar.png" alt="">
                    </a>
                  </div>
                  <div class="user-msg">
                    <div class="user-name">
                      <a class="h-o--8" href="">
                        <span>Anacardier</span>
                      </a>
                    </div>
                    <div class="user-time">
                      <span class="corporation-post">
                        <span class="user-post">
                          前端开发
                        </span>
                        @
                        <span class="user-corporation">
                          租号玩
                        </span>
                      </span>
                      <time class="gray-dot">
                        1天前
                      </time>
                    </div>
                  </div>
                </div>
                <div class="spitslot-content">
                  <p>
                    YNAP是全球最受欢迎的高端电商之一，囊括了近1000个奢侈品品牌、设计师品牌和美妆品牌。YNAP既有售卖当季产品的Net-A-Porter和Mr Porter，也有YOOX和THE OUTNET，同时也为奢侈品品牌提供电商代运营服务。
                  </p>
                </div>
                <div class="spitslot-img-list">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                </div>
                <div class="spitslot-item-footer">
                  <div class="footer-controls">
                    <div class="footer-control-inner">
                      <div class="footer-control reply">
                        <Icon type="ios-text-outline" title="回复" />
                      </div>
                      <div class="footer-control share">
                        <Icon type="ios-share-alt-outline" title="分享" />
                      </div>
                      <div class="footer-control like">
                        <Icon type="ios-heart-outline" title="喜欢" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="spitslot-item">
                <div class="user-container">
                  <div class="user-avatar">
                    <a class="avatar-bg" href="">
                      <img src="@/assets/imgs/avatar.png" alt="">
                    </a>
                  </div>
                  <div class="user-msg">
                    <div class="user-name">
                      <a class="h-o--8" href="">
                        <span>Anacardier</span>
                      </a>
                    </div>
                    <div class="user-time">
                      <span class="corporation-post">
                        <span class="user-post">
                          前端开发
                        </span>
                        @
                        <span class="user-corporation">
                          租号玩
                        </span>
                      </span>
                      <time class="gray-dot">
                        1天前
                      </time>
                    </div>
                  </div>
                </div>
                <div class="spitslot-content">
                  <p>
                    YNAP是全球最受欢迎的高端电商之一，囊括了近1000个奢侈品品牌、设计师品牌和美妆品牌。YNAP既有售卖当季产品的Net-A-Porter和Mr Porter，也有YOOX和THE OUTNET，同时也为奢侈品品牌提供电商代运营服务。
                  </p>
                </div>
                <div class="spitslot-img-list">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                </div>
                <div class="spitslot-item-footer">
                  <div class="footer-controls">
                    <div class="footer-control-inner">
                      <div class="footer-control reply">
                        <Icon type="ios-text-outline" title="回复" />
                      </div>
                      <div class="footer-control share">
                        <Icon type="ios-share-alt-outline" title="分享" />
                      </div>
                      <div class="footer-control like">
                        <Icon type="ios-heart-outline" title="喜欢" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="spitslot-item">
                <div class="user-container">
                  <div class="user-avatar">
                    <a class="avatar-bg" href="">
                      <img src="@/assets/imgs/avatar.png" alt="">
                    </a>
                  </div>
                  <div class="user-msg">
                    <div class="user-name">
                      <a class="h-o--8" href="">
                        <span>Anacardier</span>
                      </a>
                    </div>
                    <div class="user-time">
                      <span class="corporation-post">
                        <span class="user-post">
                          前端开发
                        </span>
                        @
                        <span class="user-corporation">
                          租号玩
                        </span>
                      </span>
                      <time class="gray-dot">
                        1天前
                      </time>
                    </div>
                  </div>
                </div>
                <div class="spitslot-content">
                  <p>
                    YNAP是全球最受欢迎的高端电商之一，囊括了近1000个奢侈品品牌、设计师品牌和美妆品牌。YNAP既有售卖当季产品的Net-A-Porter和Mr Porter，也有YOOX和THE OUTNET，同时也为奢侈品品牌提供电商代运营服务。
                  </p>
                </div>
                <div class="spitslot-img-list">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                </div>
                <div class="spitslot-item-footer">
                  <div class="footer-controls">
                    <div class="footer-control-inner">
                      <div class="footer-control reply">
                        <Icon type="ios-text-outline" title="回复" />
                      </div>
                      <div class="footer-control share">
                        <Icon type="ios-share-alt-outline" title="分享" />
                      </div>
                      <div class="footer-control like">
                        <Icon type="ios-heart-outline" title="喜欢" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="spitslot-item">
                <div class="user-container">
                  <div class="user-avatar">
                    <a class="avatar-bg" href="">
                      <img src="@/assets/imgs/avatar.png" alt="">
                    </a>
                  </div>
                  <div class="user-msg">
                    <div class="user-name">
                      <a class="h-o--8" href="">
                        <span>Anacardier</span>
                      </a>
                    </div>
                    <div class="user-time">
                      <span class="corporation-post">
                        <span class="user-post">
                          前端开发
                        </span>
                        @
                        <span class="user-corporation">
                          租号玩
                        </span>
                      </span>
                      <time class="gray-dot">
                        1天前
                      </time>
                    </div>
                  </div>
                </div>
                <div class="spitslot-content">
                  <p>
                    YNAP是全球最受欢迎的高端电商之一，囊括了近1000个奢侈品品牌、设计师品牌和美妆品牌。YNAP既有售卖当季产品的Net-A-Porter和Mr Porter，也有YOOX和THE OUTNET，同时也为奢侈品品牌提供电商代运营服务。
                  </p>
                </div>
                <div class="spitslot-img-list">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                  <img src="@/assets/imgs/avatar.png" alt="">
                </div>
                <div class="spitslot-item-footer">
                  <div class="footer-controls">
                    <div class="footer-control-inner">
                      <div class="footer-control reply">
                        <Icon type="ios-text-outline" title="回复" />
                      </div>
                      <div class="footer-control share">
                        <Icon type="ios-share-alt-outline" title="分享" />
                      </div>
                      <div class="footer-control like">
                        <Icon type="ios-heart-outline" title="喜欢" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <aside class="w--25">
        
      </aside>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class SpitslotPage extends Vue {
  constructor(){
    super()
  }
  data () {
    return {
      uploadList: [],
      showImg : false
    }
  }
  handleRemove (file: string) {
    // const fileList = this.$refs.upload.fileList;
    // this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
  }
  handleBeforeUpload (file: object) {
    const check = this.$data.uploadList;
    //大于0说明上传了一张图片则显示。
    if (check.length > 0) {
      this.$data.showImg = false;
    }
    if (check.length > 9) {
      this.$Notice.warning({
        title: '最多上传9张图片。'
      });
    }
    return check;
  }
}
</script>
<style lang="scss" scoped>
.spitslot-main{
  padding: 15px;
  background-color: #fff;
  .spitslot-header-container{
    width: calc(100% + 30px);
    margin-left: -15px;
    border-bottom: 1px solid #ddd;
  }
  .spitslot-header{
    padding: 20px 30px;
    .header-title{
      margin-bottom: 10px;
    }
    .show-img{
      margin-top: 10px;
      height: 60px;
      max-height: 60px;
      img{
        width: 60px;
        height: 60px;
        margin: 0 7px;
        cursor: pointer;
        &:first-child,
        &:last-child{
          margin: 0;
        }
      }
    }
    .header-tool{
      margin-top: 10px;
      .emoji,
      .file-img,
      .sendbtn{
        display: inline-block;
        i{
          font-size: 28px;
          cursor: pointer;
        }
      }
      .emoji{
        margin-right: 10px;
      }
      .file-img{
        position: relative;
        input[name='upfile']{
          width: 28px;
          height: 28px;
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          cursor: pointer;
        }
      }
      .sendbtn{
        float: right;
        margin-top: -2px;
      }
    }
  }
  .spitslot-container{
    .spitslot-list{
      padding: 10px 0;
      .spitslot-item{
        padding: 5px 15px;
        border-bottom: 1px solid #ddd;
        margin-top: 15px;
        &:first-child{
          margin-top: 5px;
        }
      }
    }
    .user-container{
      position: relative;
      .user-avatar{
        width: 45px;
        height: 45px;
      }
      .avatar-bg{
        display: inline-block;
        width: 100%;
        height: 100%;
        background: #fff 50% 50% no-repeat;
        background-image:url(../../assets/imgs/avatar.png);
        background-size: cover;
        border-radius: 50%;
        overflow: visible;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0;
        }
      }
      .user-msg{
        color: #999;
        opacity: .85;
        position: absolute;
        top: 2px;
        left: 60px;
        .user-name{
          a{
            color: #333;
          }
        }
        time{
          color: #999;
        }
        .user-time{
          font-size: 14px;
        }
      }
    }
    .spitslot-content,
    .spitslot-img-list,
    .spitslot-item-footer{
      margin: 0 auto;
      padding-left: 60px !important;
    }
    .spitslot-content{
      font-size: 14px;
      padding: 8px 0;
      color: #333;
      opacity: .8;
    }
    .spitslot-img-list{
      text-align: center;
      img{
        width: calc((100% - 8px * 2) / 3);
        margin: 5px 5px 0 0;
        &:nth-child(3n){
          margin-right: 0;
        }
      }
    }
    .spitslot-item-footer {
      display: table;
      width: 100%;
      border-spacing: 0;
      height: 45px;
      font-weight: bold;
      color: #8f8f8f;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
      line-height: 45px;
      .footer-controls {
        display: table-cell;
        width: 100%;
        line-height: 0;
        vertical-align: top;
        .footer-control-inner {
          height: 45px;
          font-size: 0;
          text-align: right;
          white-space: nowrap;
        }
        .footer-control {
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
  }
}
</style>
