<template>
    <div class="gl-details gl-home">
      <main>
          <article>
            <div class="article-main">
              <div class="article-container">
                <div class="article-title">
                  <h2>精读《Epitath 源码 - renderProps 新用法》</h2>
                </div>
                <div class="article-author">
                  <div class="author-avatar">
                    <a class="avatar-bg" href="">
                      <img src="@/assets/imgs/avatar.png" alt="">
                    </a>
                  </div>
                  <div class="author-msg">
                    <div class="author-name">
                      <a class="h-o--8" href="">
                        <span>Anacardier</span>
                      </a>
                    </div>
                    <div class="author-time">
                      <time>
                        2018年10月25日
                      </time>
                      <span class="read-sum gray-dot">
                        1.7k阅读
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <aside class="w--25">
            <div class="user-info">
              <div class="user-header">
                <div class="user-title">
                  <div class="user-avatar">
                    <a class="avatar-bg" href="">
                      <img src="@/assets/imgs/avatar.png" alt="">
                    </a>
                  </div>
                  <div class="user-name">
                    <a class="h-o--8" href=""><span>Anacardier</span></a>
                  </div>
                </div>
                <div class="user-description">
                  <p>
                    先广后精。Explore the whole world,and then do one thing but do it best.
                  </p>
                </div>
              </div>
              <div class="user-draw">
                <div class="user-stats-item">
                  <span>1,024</span>
                  <br />
                  <small>文章数</small>
                </div>
                <div class="user-stats-item">
                  <span>1,024</span>
                  <br />
                  <small>粉丝</small>
                </div>
                <div class="user-stats-item following">
                  <Button type="success">关注</Button>
                </div>
              </div>
            </div>
            <!-- 相关文章 -->
            <div class="relate">
              <Card :padding="15" dis-hover>
                <p slot="title">相关文章</p>
                <p>
                  <a class="h-o--8" href="">精读《Epitath 源码 - renderProps 新用法》</a>
                  <em>mengh - 1.7k阅读</em>
                </p>
                <p>
                  <a class="h-o--8" href="">你还没搞懂this？</a>
                  <em>mengh - 999k阅读</em>
                </p>
                <p>
                  <a class="h-o--8" href="">MySQL实验: 实践索引对全列匹配、最左前缀匹配、范围查询等条件的影响以及了解脏读、幻读等</a>
                  <em>mengh - 1k阅读</em>
                </p>
              </Card>
            </div>
          </aside>
      </main>
    </div>
</template>


<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import WeeklyDetails from '@/pages/weeklyModule/weeklyDetails.vue';
@Component({
  components: {
    WeeklyDetails
  }
})
export default class Details extends Vue {
  constructor(){
    super()
  }
}
</script>

<style lang="scss" scoped>

.user-avatar,
.author-avatar{
  .avatar-bg{
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 4px;
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
}
.article-main{
  padding: 15px;
  background: #fff;
  .article-container{
    .article-title{
      padding: 15px;
      // margin-bottom: 15px;
      h2{
        color: #333;
        opacity: .85;
      }
    }
    .article-author{
      padding: 5px;
      position: relative;
      .author-avatar{
        width: 50px;
        height: 50px;;
        a{
          margin-top: 0;
        }
      }
      .author-msg{
        color: #999;
        opacity: .85;
        position: absolute;
        top: 10px;
        left: 70px;
        .author-name{
          a{
            color: #333;
          }
        }
        time{
          color: #999;
        }
        .author-time{
          font-size: 14px;
        }
      }
    }
    
  }
}
.user-info{
  background: #fff;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  .user-draw,
  .user-header{
    padding: 15px;
    opacity: .9;
  }
  .user-header{
    border-bottom: 1px solid #ddd;
  }
  .user-title{
    height: 40px;
    line-height: 40px;
    .user-avatar{
      display: inline-block;
      width: 32px;
      height: 32px;
    }
    .user-name{
      float: right;
      text-align: left;
      padding-left: 10px;
      width: calc(100% - 32px);
      a{
        color: #333;
        opacity: .8;
        transition: all .5s;
        &:hover{
          opacity: .65;
        }
      }
    }
  }
  .user-description{
    color: #666;
    opacity: .8;
    font-size: 14px;
    margin-top: 8px;
    vertical-align: inherit;
  }
  .user-draw{
    .user-stats-item{
      display: inline-block;
      text-align: center;
      width: 30%;
      font-size: 14px;
      span{
        color: #666;
      }
      small{
        color: #999;
      }
      opacity: .8;
    }
    .following{
      width: 40%;
      float: right;
      button{
        margin-top: 5px;
      }
    }
  }
  
}
.relate{
  border: 1px solid #ddd;
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
      }
      em{
        margin-left: 10px;
        color: #999;
      }
    }
  }
}
</style>
