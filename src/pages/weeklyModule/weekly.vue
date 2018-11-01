<template>
  <div class="gl-weekly gl-home">
    <main>
      <article>
        <div class="weekly-title">
          <h2>最新发布的周刊</h2>
        </div>
        <div class="weekly-container">
          <ul class="weekly-list clearfix">
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="details">够浪周刊第11期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第10期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第9期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第8期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第7期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第6期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第5期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第4期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第3期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第2期</a>
            </li>
            <li class="weekly-item">
              <time>2018-11-01</time> 
              <a href="">够浪周刊第1期</a>
            </li>
          </ul>
        </div>
      </article>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class WeeklyPage extends Vue {}
</script>
<style lang="scss" scoped>
.gl-home{
  main{
    background-color: #fff;
  }
  article{
    float: none;
    width: 100%;
    margin: 0 auto;
  }
  .weekly-title{
    h2{
      font-size: 28px;
      padding: 24px 0;
      color: #2dbcaf;
      text-align: center;
    }
  }
  .weekly-container{
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 24px;
    .weekly-list{
      column-width: 400px;
      column-gap: 6em;
      .weekly-item{
        padding: 8px 0;
        position: relative;
        z-index: 9;
        &:after{
          content: '';
          position: absolute;
          top: 18px;
          left: 0;
          width: calc(100% - 50px);
          border-top:1px dashed rgba($color: #ddd, $alpha: .5);
          z-index: -1;
        }
        &:hover::after{
          border-top-color: rgba($color: #ddd, $alpha: 1);
        }
        a{
          background-color: rgba($color: #fff, $alpha: .8);
          color: rgba($color: #333, $alpha: .8);
          padding-right: 10px;
          &:visited {
            color: rgba($color: #333, $alpha: .3);
          }
          &:hover{
            color: rgba($color: #2dbcaf, $alpha: .8);
          }
        }
        time{
          float: right;
          background-color: rgba($color: #fff, $alpha: .8);
          padding-left: 10px;
        }
      }
    }
  }
} 

</style>