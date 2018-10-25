<template>
  <div class="gl-issue gl-home">
    <section>
        <article>
          <div class="issue-main">
            <UserList  :userInfo="asideJson" :name="'issue'"  />
          </div>
        </article>
        <aside class="w--25">
          
        </aside>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { articleJson, asideJson } from "@/assets/json/homeJson";
import UserList from "@/pages/userModule/user/userList.vue";
@Component({
  components: {
    UserList
  },

})
export default class issuePage extends Vue {
    /**
   * articleJson  文章列表
   * asideJson    侧 边 栏
   * footerJson   页面底部
   */
  articleJson: Array<object> = articleJson;
  asideJson: Array<object> = asideJson;
}
</script>
<style lang="scss" scoped>
.issue-main{
  padding: 15px;
  background: #fff;
  .issue-list{
    .issue-item{
      padding: 5px 0;
      border-bottom: 1px solid #ddd;
      .issue-item-user{
        a{
          color: #666;
        }
      }
      .item-container{
        height: 30px;
        .issue-item-title{
          float: left;
          line-height: 30px;
          width: 70%;
          a{
            color: #333;
          }
        }
        .issue-item-rank{
          display: inline-block;
          margin-left: 34px;
          margin-top: -16px;
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
      }
    }
  }
}
</style>
