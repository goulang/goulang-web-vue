<template>
  <div class="index">
    <AppHeader />
    <router-view />
  </div>
</template>
<script lang="ts">
import AppHeader from "@/components/appHeader/appHeader.vue";
import { Component, Vue } from "vue-property-decorator";

import Cookie from "js-cookie";
@Component({
  components: {
    AppHeader
  }
})
export default class IndexPage extends Vue {
  created() {
    this.initPage();
  }

  // 初始化操作
  initPage() {
    let name = Cookie.get("goulang");
    if (name != undefined) {
      //  证明登录过了
      // 如果登录过了,那么把全局的设置给设置为登录过了
      this.$store.commit("login/toggleIsLogin", true);
      // this.$store.commit("login/toggleLoginComponent");
    } else {
      this.$store.commit("login/toggleIsLogin", false);
    }

    console.log(name);
  }
}
</script>
