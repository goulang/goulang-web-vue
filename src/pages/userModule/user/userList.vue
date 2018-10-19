<template>
  <ul class="user-info-list" :class="{ 'mgt--20': name!=='issue' }" >
    <li v-for="(item,idx) of userInfo" :key="idx" class="user-info-item">
      <div class="user-info-container">
        <div class="user-avatar">
          <a href="">
            <img :src="item.user_avatar" class="avatar-img" alt="">
          </a>
        </div>
        <div class="user-name truncate-line">
          <span>
            <a href="">
            {{item.name}}
            </a>
            <br />
            <!-- 是否是从"问题"点进来的 -->
            <a href="" v-if="name==='issue'">
              <!-- 用户提问题的标题 -->
              <small>{{item.title}}</small>
            </a>
            <!-- 用户签名 -->
            <small v-else>{{item.title}}</small>
          </span>
        </div>
        <!-- 从"问题点进来不需要显示关注按钮" -->
        <div v-if="name!=='issue'" data-v-74a6ae54="" class="user-author-attention">
          <Button type="primary">关注</Button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    
  },
  props: {
    userInfo: Array,
    name: String
  }
})
export default class UserLIst extends Vue {
  constructor(){
    super()
  }

}
</script>

<style lang="scss" scoped>
.user-info-list{
  margin-top: 0;
  padding-right: 20px;
  width: 100%;
  transition: opacity .1s linear;
  opacity: 1;
  padding: 5px 15px;
  background: #fff;
  font-size:14px;
  transition: all .3s ease;
  .user-info-item{
    border-bottom: 1px solid hsla(0, 0%, 87%, .5);
    border-top: 0;
    min-height: 50px;
    position: relative;
    padding: 10px 0;
    width: calc(100% + 30px);
    margin-left: -15px;
    &:hover{
      background-color: hsla(0,0%,100%,.07);
    }
    &:last-child{
      border-bottom-color: hsla(0, 0%, 100%, .5);
    }
  }
}
.user-info-container{
  height:100%;
  .user-avatar{
    .avatar-img{
      border-radius: 50%;
      display: block;
      position: absolute;
      height: 40px;
      width: 40px;
      left: 10px;
      top: 17px;
      transition: all .3s ease;
    }
  }
  .user-name{
    padding: 6px 0 0 60px;
    span{
      a{
        small{
          &:hover{
            opacity: .8;
            text-decoration: underline;
          }
        }
      }
      small{
        display: inline-block;
        color: #333;
        transition: all .3s ease;
      }
    }
  }
  .user-author-attention{
    position: absolute;
    right: 10px;
    top: 20px;
  }
  .truncate-line{
    text-overflow: clip;
    max-width: calc(100% - 66px);
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
