<template>
  <div class="index">
      <AppHeader/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import AppHeader from "@/components/appHeader/appHeader.vue";
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    AppHeader
  }
})
export default class IndexPage extends Vue {

}
</script>
