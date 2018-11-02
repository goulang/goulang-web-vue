<template>
  <div class="gl-forgetpwd gl-home">
    <!-- 忘记密码 -->
    <main>
      <Forget />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Forget from "./forget.vue";

@Component({
  components: {
    Forget
  }
})
export default class ForgetpwdPage extends Vue {
  constructor(){
    super()
  }
}
</script>
<style lang="scss" scoped>
</style>