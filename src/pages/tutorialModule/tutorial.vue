<template>
  <div class="gl-tutorial">
    <div class="gl-home user-home">
      <Row type="flex" class="code-row-bg">
        <section>
          <article>
            <userHeader />
            <userNavbar />
          </article>
          <UserAside />
        </section>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import UserAside from "@/pages/userModule/user/userAside.vue";
import userHeader from "@/pages/userModule/user/userHeader.vue";
import userNavbar from "@/pages/userModule/user/userNavbar.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    UserAside,    // 侧边栏
    userHeader,   // 用户主题信息
    userNavbar,   // 用户导航栏
  }
})
export default class TutorialPage extends Vue {
  constructor() {
    super();
  }
}
</script>