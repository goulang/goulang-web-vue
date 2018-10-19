<template>
  <div class="gl-resource">
    <div class="gl-home user-home">
      <Row type="flex" class="code-row-bg">
        <section>
          <article>
            
          </article>
          <UserAside />
        </section>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAside from "@/pages/userModule/user/userAside.vue";

@Component({
  components: {
    UserAside,
  }
})
export default class ResourcePage extends Vue {}
</script>
<style lang="scss" scoped>
// .app-resource {
//   color: #f0f;
// }
</style>
