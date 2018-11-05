<template>
  <div id="app">
    <!-- 这里不能引入组件 -->
    <!-- 全局 -->
    <div class="global-container">
      <Login v-if="this.$store.state.login.loginComponentToggle"></Login>
      <Register v-if="this.$store.state.register.registerComponentToggle"></Register>
      <Publish v-if="this.$store.state.publish.publishComponentToggle"></Publish>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// 这里一定要写上vue后缀名
import Login from "@/pages/loginModule/login.vue";
import Register from "@/pages/registerModule/register.vue";
import Publish from "@/pages/publishModule/publish.vue";
@Component({
  components: {
    Login,
    Register,
    Publish,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.global-container{
  position: relative;
  z-index:999;
}
</style>
