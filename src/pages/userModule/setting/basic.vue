<template>
  <div class="setting-basic setting-item">
    <div class="setting-title">
      <h3>账户</h3>
      <p>更改您的基本帐户信息。</p>
    </div>
    <Form ref="formCustom">
      <FormItem class="set-avatar" prop="avatar">
        <div class="avatar-tle">
            <p>头像</p>
        </div>
        <div class="avatar">
            <img src="@/assets/imgs/861.png" width="100%" alt="">
        </div>
        <Button class="set-avatar-btn" type="dashed" icon="ios-share-outline">更换头像</Button>
      </FormItem>
      <FormItem label="用户名" prop="username">
        <Input type="text" placeholder="请输入您的用户名"></Input>
      </FormItem>
      <FormItem label="职位" prop="username">
        <Input type="text" placeholder="请输入您的职位"></Input>
      </FormItem>
      <FormItem label="公司" prop="username">
        <Input type="text" placeholder="请输入您的公司"></Input>
      </FormItem>
      <FormItem label="现居地" prop="reside">
        <Cascader v-model="reside" :data="resideData" filterable></Cascader>
      </FormItem>
      <FormItem label="个人说明" prop="username">
        <Input type="textarea" :rows="4" placeholder="罪恶之人"></Input>
      </FormItem>
      <FormItem prop="username">
        <Button type="primary">保存</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class BasicPage extends Vue {
  constructor() {
    super();
  }
  data () {
    return ({
      resideData: [{
        value: 'beijing',
        label: '北京',
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
          },
          {
            value: 'suzhou',
            label: '苏州',
          }
        ],
      }],
      reside: [], // 现居地
    })
  }
}
</script>

<style lang="scss" scoped>
// 基本设置
.setting-basic{
  .set-avatar{
    position: absolute;
    right: -230px;
    top: 80px;
    text-align: center;
    .avatar-tle{
      font-size: 14px;
      text-align: left;
      opacity: .9;
    }
    .set-avatar-btn{
      margin-top: 15px;
    }
    .avatar{
      position: relative;
      width: 120px;
      height: 120px;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  
}
</style>