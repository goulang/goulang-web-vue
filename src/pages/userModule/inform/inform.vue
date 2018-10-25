<template>
  <div class="gl-home user-home">
    <Row type="flex" class="code-row-bg">
      <section>
        <article>
          <Menu mode="horizontal" @on-select="handleToggleInform" replace active-name="userNews">
            <MenuItem name="userNews">
              用户消息
            </MenuItem>
            <MenuItem name="systemInform">
              系统通知
            </MenuItem>
          </Menu>
          <userNews v-if="userNews" />
          <SystemInform v-else />
        </article>
        <UserAside />
      </section>
    </Row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAside from "@/pages/userModule/user/userAside.vue";
import userNews from "@/pages/userModule/inform/userNews.vue";
import SystemInform from "@/pages/userModule/inform/systemInform.vue";

@Component({
  components: {
    UserAside,
    userNews,
    SystemInform
  }
})
export default class InformPage extends Vue {
  constructor(){
    super()
  }
  data () {
    return ({
      informTime: (new Date()).getTime() - 60 * 3 * 1000,
      userNews: true
    })
  }
  handleToggleInform(name: string){
    switch(name){
      case 'userNews': {
        this.$data.userNews = true
        return;
      }
      case 'systemInform': {
        this.$data.userNews = false
        return;
      }
      default: {
        console.log('未知错误');
        return;
      }
    }

  }
}
</script>