<template>
  <div class="app-resource">
    this is goulang 资源
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ResourcePage extends Vue {}
</script>
<style lang="scss" scoped>
.app-resource {
  color: #f0f;
}
</style>
