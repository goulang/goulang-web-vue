<template>
  <div class="app-recruit">
    <div class="demo-upload-list" v-for="(idx,item) in uploadList" :key="idx">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <icon type="ios-trash-outline" @click.native="handleRemove(item)"></icon>
            </div>
        </template>
        <template v-else>
            <i-progress v-if="item.showProgress" :percent="item.percentage" hide-info></i-progress>
        </template>
    </div>
    <upload
        ref="upload"
        :show-upload-list="false"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="/assets/imgs/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <icon type="ios-camera" size="20"></icon>
        </div>
    </upload>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RecruitPage extends Vue {
  constructor(){
    super()
  }
  mounted ():void {
    this.$data.uploadList = this.$data.$refs.upload.fileList;
  }
  data () {
    return {
      imgName: '',
      visible: false,
      uploadList: []
    }
  }
  handleView (name:string) {
      this.$data.imgName = name;
      this.$data.visible = true;
  }
  handleRemove (file:string) {
      const fileList = this.$data.$refs.upload.fileList;
      this.$data.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
  }
  handleSuccess (res:any, file:string) {
      // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      // file.name = '7eb99afb9d5f317c912f08b5212fd69a';
  }
  handleFormatError (file:string) {
      // this.$Message.warning('The file format is incorrect');
  }
  handleMaxSize (file:string) {
      // this.$Message.warning('Exceeding file size limit');
  }
  handleBeforeUpload () {
      // const check = this.$data.uploadList.length < 5;
      // if (!check) {
      //     this.$Message.warning('Up to five pictures can be uploaded.');
      // }
      // return check;
  }
}
</script>
<style lang="scss" scoped>
@import url("//unpkg.com/iview/dist/styles/iview.css");
.app-recruit {
  color: #0f0;
}
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

</style>
