/*
 * @Author: mengh 
 * @Date: 2018-10-22 16:00:13 
 * @Last Modified by: mengh
 * @Last Modified time: 2018-10-23 16:03:20
 */
<template>
  <div class="gl-setting">
    <div class="settings user-setting">
      <Menu @on-select="handleSettingToggle" active-name="basic" mode="horizontal">
        <MenuItem name="basic">基本设置</MenuItem>
        <MenuItem name="bound">账号绑定</MenuItem>
        <MenuItem name="password">修改密码</MenuItem>
      </Menu>
      <Basic v-if="basic" />
      <Bound v-else-if="bound" />
      <Password v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Basic from '@/pages/userModule/setting/basic.vue';
import Bound from '@/pages/userModule/setting/bound.vue';
import Password from '@/pages/userModule/setting/password.vue';
@Component({
  components: {
    Basic,
    Bound,
    Password,
  }
})
export default class SettingPage extends Vue {
  constructor() {
    super();
  }
  data () {
    return ({
      basic: true,
      bound: false,
    })
  }
  handleSettingToggle(name: string) {
    console.log(name)
    switch (name) {
      case 'basic': {
        this.$data.basic = true;
        this.$data.bound = false;
        return;
      }
      case 'bound': {
        this.$data.basic = false;
        this.$data.bound = true;
        return;
      }
      default:{
        this.$data.basic = false;
        this.$data.bound = false;
      }
    }
    // this.$router.replace({
    //   name
    // });
    // sessionStorage.setItem("setname", name);
  }
}
</script>
<style lang="scss">
.gl-setting{
  width: 930px;
  margin: 20px auto 0;
  transition: transform 0.1s ease;
  .user-setting{
    background-color: #fff;
  }
  .settings{
    .setting{
      padding: 15px;
      .setting-title{
        padding: 20px 45px;
        margin-left: -15px;
        width: calc(100% + 30px);
        border-bottom: 1px solid #ddd;
        p{
          font-size: 14px;
        }
      }
      form{
        width: 50%;
      }
      form,
      .bound-container{
        padding: 20px;
        position: relative;
        margin-left: 50px;
      }
    }
  }
}
.set-avatar,
.bound-btn{
  i{
    font-size: 16px;
  }
}
.bound-btn{
  &:hover{
    text-decoration: underline;
    i{
      color: #57a3f3;
    }
  }
  i{
    font-size: 18px;
    line-height: 0;
  }
}
</style>
