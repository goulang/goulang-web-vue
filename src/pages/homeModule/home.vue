<template>
  <div class="gl-home">
    <footer>
      <Col span="24">

      </Col>
    </footer>
    <Row type="flex" class="code-row-bg">
      <section>
        <article>
            <Col span="24">

            </Col>
        </article>
        <aside>
          <Col span="24">侧边栏</Col>
        </aside>
      </section>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HomePage extends Vue {}
</script>
<style lang="scss" scoped>
.pinned_sidebar_footer {
    transform: translateZ(0);
    margin-left: -495px;
    position: fixed;
    width: 990px;
    bottom: 0;
    left: 50%;
}
.gl-home {
  color: #f60;
  width:1040px;
  margin:auto;
  padding-top:30px;
  section{
    width:100%;
    article{
      width:75%;
      float: left;
    }
    aside{
      width:20%;
      float: right;
    }
  }
}
</style>
