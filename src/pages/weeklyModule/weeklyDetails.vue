<template>
    <div class="gl-details gl-home">
      <main>
          <article>
            <div class="weekly">
              <ul class="weekly-content">
                <li><h2>够浪推荐</h2></li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li><h2>其他</h2></li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li><h2>其他</h2></li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
                <li class="weekly-article">
                  <h3 class="article-title"><a href="">gRPC-Web 发布</a></h3>
                  <p class="article-desc">“现在可以通过 .proto 文件来定义客户端和服务器端数据类型和服务接口，轻松构建真正的端到端 gRPC 应用程序架构。gRPC-Web 为 Web 开发提供了 REST 之外的另一个选择。”</p>
                </li>
              </ul>
            </div>
          </article>
          <aside class="w--25">
          </aside>
      </main>
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
.weekly{
  margin: 0 auto;
  margin-top: -20px;
  background-color: #fff;
  .weekly-content{
    .weekly-article{
      padding: 10px 15px;
      border-bottom: 1px solid rgba($color: #ddd, $alpha: .8);
      &:hover{
        // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
      }
      .article-title{
        a{
          color: rgba($color: #333, $alpha: .8);
          &:hover{
            text-decoration: underline;
            color: rgba($color: #333, $alpha: .5);
          }
        }
      }
      .article-desc{
        margin-top: 8px;
        font-size: 14px;
        line-height: 1.5;
        color: rgba($color: #666, $alpha: .8);
      }
    }
    .weekly-article:nth-child(4n){
      border: 0;
    }
    h2,h3{
      font-weight: 100;
    }
    h2{
      text-align: center;
      margin: 20px 0;
      padding: 0 15px;
      line-height: 2;
      font-size: 22px;
      color: rgba($color: #fff, $alpha: 1.0);
      background-color: rgba($color: #2dbcaf, $alpha: 1.0);
    }
  }
}
</style>