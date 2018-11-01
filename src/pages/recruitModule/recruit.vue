<template>
  <div class="gl-recruit gl-home">
    <main>
      <article>
        <div class="recruit-main">
          <UserList :userInfo="asideJson" :name="'recruit'"  />
        </div>
      </article>
      <aside class="w--25">
        
      </aside>
    </main>
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
export default class RecruitPage extends Vue {
  constructor(){
    super()
  }
  /**
  * articleJson  文章列表
  * asideJson    侧 边 栏
  * footerJson   页面底部
  */
  articleJson: Array<object> = articleJson;
  asideJson: Array<object> = asideJson;
  data () {
    return {
      imgName: '',
      visible: false,
      uploadList: []
    }
  }
}
</script>
<style lang="scss" scoped>
.recruit-main{
  padding: 15px;
  background: #fff;
  .recruit-list{
    .recruit-item{
      padding: 5px 0;
      border-bottom: 1px solid #ddd;
      .recruit-item-user{
        a{
          color: #666;
        }
      }
      .item-container{
        height: 30px;
        .recruit-item-title{
          float: left;
          line-height: 30px;
          width: 70%;
          a{
            color: #333;
          }
        }
        .recruit-item-rank{
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
