<template>
  <ul class="user-info-list">
    <li v-for="(item,idx) of userInfo" :key="idx" class="user-info-item">
      <div class="user-info-container">
        <div class="user-avatar">
          <a href="">
            <img :src="item.user_avatar" class="avatar-img" alt="">
          </a>
        </div>
        <div class="user-name truncate-line" :class="{'issue-line': name=='issue','recruit-line': name=='recruit'}">
          <span>
            <a href="">
            {{item.name}}
            </a>
            <time v-if="name==='issue'" class="gray-dot">一小时前提问</time>
            <time v-else class="gray-dot">一小时前</time>
            <br />
            <!-- 用户提问题的标题 -->
            <a href="" v-if="name==='issue'">
              <small>{{item.title}}</small>
            </a>
            <!-- 用户发布的招聘 -->
            <a href="" v-else-if="name==='recruit'">
              <small>{{item.title}}</small>
            </a>
            <!-- 用户签名 -->
            <small v-else>{{item.title}}</small>
          </span>
        </div>
        <!-- 问题 -->
        <div class="issue-rank" v-if="name==='issue'">
          <div class="rank--item rank-votes">
            <div class="votes">
              <span>100</span>
              <br>
              <span>得票</span>
            </div>
          </div>
          <div class="rank--item rank-answers">
            <div class="answers">
              <span>100</span>
              <br>
              <span>回答</span>
            </div>
          </div>
          <div class="rank--item rank-views">
            <div class="views">
              <span>100</span>
              <br>
              <span>浏览</span>
            </div>
          </div>
        </div>
        <!-- 招聘 -->
        <div v-if="name==='recruit'" class="recruit-rank">
          <div class="rank--item rank-answers">
            <div class="answers">
              <span>100</span>
              <br>
              <span>回复</span>
            </div>
          </div>
          <div class="rank--item rank-views">
            <div class="views">
              <span>100</span>
              <br>
              <span>浏览</span>
            </div>
          </div>
        </div>
        <!-- 关注，粉丝 -->
        <div v-if='name==="followers"' data-v-74a6ae54="" class="user-author-attention">
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
      left: 15px;
      top: 17px;
      transition: all .3s ease;
    }
  }
  .user-name{
    padding: 6px 0 0 65px;
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
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #333;
        width: 100%;
        transition: all .3s ease;display: inline-block;
      }
    }
  }
  .issue-rank,
  .recruit-rank{
    display: inline-block;
    margin-left: 34px;
    margin-top: 4px;
    width: 25%;
    .rank--item {
      width: 33.33%;
      display: inline-block;
      font-size: 14px;
      color: #666;
      opacity: .8;
      text-align: center;
    }
  }
  .recruit-rank{
    width: 15%;
    .rank--item{
      width: 50%;
    }
  }
  .user-author-attention{
    position: absolute;
    right: 15px;
    top: 20px;
  }
  .truncate-line{
    overflow: hidden;
    max-width: calc(100% - 106px);
  }
  .issue-line,
  .recruit-line{
    width: 70%;
    float: left;
  }
  .recruit-line{
    width: 80%;
  }
}
</style>
