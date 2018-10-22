/*
 * @Author: mengh 
 * @Date: 2018-10-22 16:00:13 
 * @Last Modified by: mengh
 * @Last Modified time: 2018-10-22 18:32:13
 */
<template>
  <div class="gl-setting">
    <div class="settings user-setting">
      <Menu active-name="basic" mode="horizontal">
        <MenuItem name="basic">基本设置</MenuItem>
        <MenuItem name="bound">账号绑定</MenuItem>
        <MenuItem name="password">修改密码</MenuItem>
      </Menu>
      <!-- <div class="setting-basic setting">
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
            <Input type="text" placeholder="请输入你的用户名"></Input>
          </FormItem>
          <FormItem label="职位" prop="username">
            <Input type="text" placeholder="请输入你的职位"></Input>
          </FormItem>
          <FormItem label="公司" prop="username">
            <Input type="text" placeholder="请输入你的公司"></Input>
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
      </div> -->
      <!-- <div class="setting-security setting">
        
      </div> -->
      <div class="setting-bound setting">
        <div class="setting-title">
          <h3>关联账户</h3>
          <p>关联您的社交媒体帐户进行一键登录</p>
        </div>
        <div class="set-bound">
          <div class="bound-container">
            <ul class="account-item">
              <li class="account-list">
                <Row>
                  <Col class-name="bound-icon" span="6">
                    <span class="icon-gl">sdas</span>
                    <span>QQ</span>
                  </Col>
                  <Col class-name="bound-user" span="12">
                    <div class="bound-user-text">

                    </div>
                  </Col>
                  <Col class-name="bound-btn" span="6">
                    <Button type="text" icon="md-link">立即绑定</Button>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class SettingPage extends Vue {
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
      reside: '', // 现居地
    })
  }
}
</script>

<style lang="scss" scoped>
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
  // 修改密码
  .setting-password{
    
  }
  // 账号绑定
  .setting-bound{
    .account-item{
      // padding: 10px 0;
      width: 92%;
    }
    .account-list{
      line-height: 33px;
      padding: 10px 0;
      .bound-user{
      }
      .bound-btn{
        float: right;
        text-align: right;
      }
    }
  }
}
</style>

<style lang="scss">
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
