<template>
  <div class="publish-gobal">
    <Modal
      v-model="publish"
      title="选择你要发布的类型"
      :transfer="false"
      @on-cancel="cancel"
      :footer-hide="true"
      width="980">
      <Row>
        <Col span="6">
          <div class="publish-type-item">
            <a class="publish-wrap" href="javascript:0;" @click="handleEditor('editor')">
              <div class="publish-item-title">
                <h2>文章</h2>
              </div>
              <div class="publish-body">
                <p>
                  发布你的作品
                </p>
              </div>
            </a>
          </div>
        </Col>
        <Col span="6">
          <div class="publish-type-item">
            <a class="publish-wrap" href="javascript:0;">
              <div class="publish-item-title">
                <h2>槽点</h2>
              </div>
              <div class="publish-body">
                <p>
                  TecMaestro是网页设计，开发和数字营销领域的领先服务提供商。
                </p>
              </div>
            </a>
          </div>
        </Col>
        <Col span="6">
          <div class="publish-type-item">
            <a class="publish-wrap" href="javascript:0;">
              <div class="publish-item-title">
                <h2>问答</h2>
              </div>
              <div class="publish-body">
                <p>
                  发布你的作品
                </p>
              </div>
            </a>
          </div>
        </Col>
        <Col span="6">
          <div class="publish-type-item">
            <a class="publish-wrap" href="javascript:0;">
              <div class="publish-item-title">
                <h2>招聘</h2>
              </div>
              <div class="publish-body">
                <p>
                  发布你的作品
                </p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class PublishPage extends Vue {
  constructor(){
    super()
  }
  data () {
    return {
      publish: true,
      translate: true
    }
  }
  created () {
  }
  cancel () {
    this.$store.commit("publish/togglePublishComponent");
  }
  handleEditor (name: string) {
    this.$router.push({
      name
    });
    // 关闭发布选项弹窗
    this.$store.commit("publish/togglePublishComponent");
    console.log(name)
  }
}
</script>
<style lang="scss" scoped>
.publish-gobal{
  .publish-type-item{
    padding: 0 10px 20px;
    .publish-wrap{
      display: flex;
      flex-direction: row;
      flex-direction: column;
      border-radius: 3px;
      border: 1px solid #2dbcaf;
      width: 100%;
      text-align: center;
      &:hover{
        .publish-item-title{
          color: rgba($color: #fff, $alpha: .8);
        }
        .publish-body{
          color: rgba($color: #333, $alpha: .8);
        }
      }
      .publish-item-title{
        padding: 15px;
        color: rgba($color: #fff, $alpha: 1);
        background-color: #2dbcaf;
        transition: all .3s;
      }
      .publish-body{
        display: flex;
        color: rgba($color: #333, $alpha: 1);
        font-size: 15px;
        height: 104px;
        flex-grow: 1;
        flex-direction: row;
        align-items: center;
        line-height: 1.45em;
        padding: 7.5px;
        padding-top: 10px;
        padding-bottom: 10px;
        background: #f5f5f5;
        transition: all .3s;
        p{
          width: 100%;
              vertical-align: baseline;
        }
      }
    }
  } 
}
</style>

<style lang="scss">
.publish-gobal{
  .ivu-modal-header-inner{
    text-align: center;
    color: #333;
  }
  .ivu-modal-mask{
    background-color: rgba(245, 245, 245, .9);
  }
  .ivu-modal-content{
    background-color: transparent;
  }
  .ivu-modal-header{
    border-bottom: 0;
  }
  .ivu-modal-header-inner{
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }
  .ivu-modal-content{
    box-shadow: none;
  }
}
</style>
