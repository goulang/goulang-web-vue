<template>
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
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    
  },

})
export default class UserHeader extends Vue {
  constructor(){
    super()
  }

}
</script>
<style lang="scss" scoped>
i{
  font-size: 18px;
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
</style>

<style lang="scss">

.user-edit{
  i{
    transition: all .5s ease;
    color: #2db7f5;
  }
  .writing{
    &:hover{
      i{
        color: #1396ff;
      }
    }
  }
}
</style>
