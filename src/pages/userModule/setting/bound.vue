<template>
  <div class="setting-bound setting-item">
    <div class="setting-title">
      <h3>关联账户</h3>
      <p>关联您的社交媒体帐户进行一键登录</p>
    </div>
    <div class="set-bound">
      <div class="bound-container">
        <ul class="account-list">
          <li class="account-item">
            <Row>
              <Col class-name="bound-icon" span="2">
                <span class="icon-gl icon-gl-qq"></span>
              </Col>
              <Col class-name="bound-user" span="12">
                <div class="bound-user-text">
                  <h4>绑定QQ</h4>
                  <div class="bound-description">
                    <span>当前未绑定QQ账号</span>
                  </div>
                </div>
              </Col>
              <Col class-name="bound-btn" span="6">
                <Button type="text" icon="md-link">立即绑定</Button>
              </Col>
            </Row>
          </li>
          <li class="account-item">
            <Row>
              <Col class-name="bound-icon" span="2">
                <span class="icon-gl icon-gl-wx"></span>
              </Col>
              <Col class-name="bound-user" span="12">
                <div class="bound-user-text">
                  <h4>绑定微信</h4>
                  <div class="bound-description">
                    <span>当前未绑定微信账号</span>
                  </div>
                </div>
              </Col>
              <Col class-name="bound-btn" span="6">
                <Button type="text" icon="md-link">立即绑定</Button>
              </Col>
            </Row>
          </li>
          <li class="account-item">
            <Row>
              <Col class-name="bound-icon" span="2">
                <span class="icon-gl icon-gl-wb"></span>
              </Col>
              <Col class-name="bound-user" span="12">
                <div class="bound-user-text">
                  <h4>绑定微博</h4>
                  <div class="bound-description">
                    <span>当前未绑定微博账号</span>
                  </div>
                </div>
              </Col>
              <Col class-name="bound-btn" span="6">
                <Button type="text" icon="md-link">立即绑定</Button>
              </Col>
            </Row>
          </li>
          <li class="account-item">
            <Row>
              <Col class-name="bound-icon" span="2">
                <span class="icon-gl icon-gl-github">
                  <Icon type="logo-github" />
                </span>
              </Col>
              <Col class-name="bound-user" span="12">
                <div class="bound-user-text">
                  <h4>绑定Github</h4>
                  <div class="bound-description">
                    <span>当前未绑定Github账号</span>
                  </div>
                </div>
              </Col>
              <Col class-name="bound-btn" span="6">
                <Button type="text" icon="md-link">立即绑定</Button>
              </Col>
            </Row>
          </li>
          <li class="account-item">
            <Row>
              <Col class-name="bound-icon" span="2">
                <span class="icon-gl icon-gl-email">
                  <Icon type="ios-mail-outline" />
                </span>
              </Col>
              <Col class-name="bound-user" span="12">
                <div class="bound-user-text">
                  <h4>绑定邮箱</h4>
                  <div class="bound-description">
                    <span>当前未绑定邮箱账号</span>
                  </div>
                </div>
              </Col>
              <Col class-name="bound-btn" span="6">
                <Button type="text" icon="md-link">立即绑定</Button>
              </Col>
            </Row>
          </li>
          <li class="account-item">
            <Row>
              <Col class-name="bound-icon" span="2">
                <span class="icon-gl icon-gl-phone">
                  <Icon type="ios-phone-portrait" />
                </span>
              </Col>
              <Col class-name="bound-user" span="12">
                <div class="bound-user-text">
                  <h4>绑定手机号</h4>
                  <div class="bound-description">
                    <span>当前未绑定手机号</span>
                  </div>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class BoundPage extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
// 账号绑定
.setting-bound{
  .account-list{
    // padding: 10px 0;
    width: 92%;
  }
  .account-item{
    height: 60px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    .bound-icon{
      text-align: center;
      height: 40px;
      .icon-gl{
        display: inline-block;
        width: 32px;
        height: 32px;
        opacity: .55;
        margin-top: 4px;
        i{
          font-size: 32px;
        }
      }
      .icon-gl-qq{
        background: url(../../../assets/imgs/qq32.png);
      }
      .icon-gl-wx{
        background: url(../../../assets/imgs/wx32.png);
      }
      .icon-gl-wb{
        background: url(../../../assets/imgs/wb32.png);
      }
      .icon-gl-github{
        color: #333;
      }
    }
    .bound-user{
      padding-left: 10px;
      h4{
        color: rgba(0, 0, 0, .75);
        font-weight: 500;
        font-size: 14px;
      }
      .bound-description{
        font-size: 12px;
        color: rgba(0, 0, 0, .5);
      }
    }
    .bound-btn{
      float: right;
      text-align: right;
    }
  }
}
</style>