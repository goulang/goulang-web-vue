<template>
  <div class="gl-user-home">
    <div class="gl-home user-home">
      <Row type="flex" class="code-row-bg">
        <main>
          <article>
            <userHeader />
            <userNavbar />
          </article>
          <UserAside />
        </main>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAside from "@/pages/userModule/user/userAside.vue";
import userHeader from "@/pages/userModule/user/userHeader.vue";
import userNavbar from "@/pages/userModule/user/userNavbar.vue";
@Component({
  components: {
    UserAside,    // 侧边栏
    userHeader,   // 用户主题信息
    userNavbar,   // 用户导航栏
  }
})
export default class UserHomePage extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
</style>
