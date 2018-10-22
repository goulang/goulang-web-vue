<template>
  <div class="gl-home user-home">
    <Row type="flex" class="code-row-bg">
      <section>
        <article>
          <Menu mode="horizontal" @on-select="handleToggleInform" replace active-name="userNews">
            <MenuItem name="userNews">
              用户消息
            </MenuItem>
            <MenuItem name="systemInform">
              系统通知
            </MenuItem>
          </Menu>
          <userNews v-if="userNews" />
          <SystemInform v-else />
        </article>
        <UserAside />
      </section>
    </Row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAside from "@/pages/userModule/user/userAside.vue";
import userNews from "@/pages/userModule/inform/userNews.vue";
import SystemInform from "@/pages/userModule/inform/systemInform.vue";

@Component({
  components: {
    UserAside,
    userNews,
    SystemInform
  }
})
export default class InformPage extends Vue {
  constructor(){
    super()
  }
  data () {
    return ({
      informTime: (new Date()).getTime() - 60 * 3 * 1000,
      userNews: true
    })
  }
  handleToggleInform(name: string){
    switch(name){
      case 'userNews': {
        this.$data.userNews = true
        return;
      }
      case 'systemInform': {
        this.$data.userNews = false
        return;
      }
      default: {
        console.log('未知错误');
        return;
      }
    }

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
