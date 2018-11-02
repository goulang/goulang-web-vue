<template>
  <article>
    <div class="forgetpwd-main">
      <div class="go-img">
        <img src="@/assets/imgs/go.png" width="400" alt="">
        <p>欢迎来到专业的GoLang开发者社区</p>
      </div>
      <Row style="padding:20px">
        <Col class="forgetpwd-container" style="" span="14">
          <Card :bordered="false">
            <p slot="title">重置密码</p>
            <!-- 判断name是否为reset -->
            <div v-if="name!='reset'" class="forgetpwd-form">
              <div class="email-title">Email：</div>
              <div class="email">
                <Input placeholder="输入您的Email" clearable style="width: 300px" />
              </div>
              <div class="verify">
                <Input placeholder="请输入右侧验证码" clearable style="width: 150px" />
                <span class="verify-img">
                    <img src="" alt="">
                </span>
              </div>
              <div class="submit">
                <Button type="success" long>提交</Button>
              </div>
            </div>
            <!-- 新密码 -->
            <div v-else class="forgetpwd-form">
              <div class="pwd-title">新密码：</div>
              <div class="new-pwd">
                <Input placeholder="密码不能少于6位" clearable style="width: 300px" />
              </div>
              <div class="submit">
                <Button type="success" long>提交</Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
  props: {
    name: String
  }
})
export default class ForgetPage extends Vue {
  constructor(){
    super()
  }
  created() {
    console.log(this.$props.name)
  }
}
</script>
<style lang="scss" scoped>
article{
  width: 100%;
}
.verify-img{
  display: inline-block;
  width: 135px;
  height: 32px;
  float: right;
}
.go-img{
  text-align: center;
  img{
    margin-bottom: 10px;
  }
  p{
    color: rgba($color: #999, $alpha: 1);
  }
}
.forgetpwd-container{
  border:1px solid #eee;
  margin: 0 auto;
  float: none;
  .ivu-card{
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  .ivu-card-body{
      padding: 16px 108px;
  }
  .ivu-card-head{
    background-color: rgba($color: #f5f5f5, $alpha: 1.0);
  }
  .forgetpwd-form{
    width: 300px;
    margin: 0 auto;
    &>div{
      margin-bottom: 10px;
    }
    .submit{
      button{
        background-color: #2dbcaf;
        border-color: #2dbcaf;
        &:hover{
          background-color: rgba($color: #2dbcaf, $alpha: .8);
          border-color: rgba($color: #2dbcaf, $alpha: 0);
        }
      }
    }
  }
}
  
</style>