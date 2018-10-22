<template>
  <div class="system-inform">
    <div class="system-container">
      <ul class="official-list">
        <li class="official-item">
            <div class="user-cont-wrapper">
            <div class="user-name">
              <a href="">够浪官方</a>
              <span class="gray-dot">罪恶之人</span>
              <p>mengh861 您好，</p>
            </div>
            <div class="user-cont">
              一个 Vue CLI preset 一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。让用户无需在命令提示中选择它们让用户无需在命令提示中选择它们让用户无需在命令提示中选择它们
            </div>
            <div class="inform-time">
              <Time :time="informTime" />
            </div>
            <div class="user-avatar avatar">
              <div class="user-avatar-wrapper">
                <a href="">
                  <img src="@/assets/imgs/logo.jpg" class="avatar-img" alt="">
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {

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
