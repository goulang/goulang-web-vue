<template>
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
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    
  },

})
export default class UserAside extends Vue {
  constructor(){
    super()
  }

}
</script>

<style lang="scss" scoped>

i{
  font-size: 18px;
}
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
</style>
