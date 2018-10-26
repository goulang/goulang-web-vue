<template>
  <div class="gl-books">
    <Details />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import Details from "@/components/details/details.vue"
@Component({
  components: {
    Details
  }
})
export default class booksPage extends Vue {
  constructor() {
    super();
  }
}
</script>