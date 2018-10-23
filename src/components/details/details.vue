<template>
    <div class="gl-details gl-home">
      <section>
          <article>

          </article>
          <aside class="w--25">
            <div class="user-info">
              <div class="user-header">
                <div class="user-title">
                  <div class="user-avatar">
                    <a href="">
                      <img src="@/assets/imgs/avatar.png" width="100%" alt="">
                    </a>
                  </div>
                  <div class="user-name">
                    <a href=""><span>Anacardier</span></a>
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
                  <span></span>
                  <small></small>
                </div>
              </div>
            </div>

            <div class="relate">

            </div>
          </aside>
      </section>      
    </div>
</template>


<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
@Component

export default class Details extends Vue {
  constructor(){
    super()
  }
}
</script>

<style lang="scss" scoped>
.user-info{
  background: #fff;
  border: 1px solid #ddd;
  .user-header{
    padding: 15px;
    border-bottom: 1px solid #ddd;
    opacity: .9;
  }
  .user-title{
    height: 40px;
    line-height: 40px;
    .user-avatar{
      display: inline-block;
      width: 32px;
      height: 32px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-top: 4px;
        background: #fff 50% 50% no-repeat;
        background-image:url(../../assets/imgs/avatar.png);
        background-size: cover;
        border-radius: 50%;
        overflow: visible;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0;
      }
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
  
}
</style>
