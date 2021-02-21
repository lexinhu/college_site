<template>
  <div class="main">
    <div class="title">
      <a href="/login">登录</a>
      <span>·</span>
      <a class="active" href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <form action="register">
        <div class="input-prepend restyle">
          <input v-model="member.nickname" type="text" placeholder="你的昵称" >
          <i class="iconfont icon-user" />
        </div>
        <div class="input-prepend restyle no-radius">
          <input v-model="member.mobile" type="text" placeholder="手机号" >
          <i class="iconfont icon-phone" />
        </div>
        <div class="input-prepend restyle no-radius">
          <input v-model="member.email" type="text" placeholder="邮箱" >
          <i class="iconfont icon-email" />
        </div>
        <div class="input-prepend restyle no-radius" style="position:relative">
          <input v-model="member.code" type="text" placeholder="验证码" >
          <i class="iconfont icon-yanzhengma" />
          <a
            href="javascript:"
            type="button"
            style="position:absolute;right: 10px;top: 15px;"
            @click="getCodeFun()"
          >{{ codeText }}</a>
        </div>
        <div class="input-prepend">
          <input v-model="member.password" type="password" placeholder="设置密码" >
          <i class="iconfont icon-password" />
        </div>
        <div class="btn">
          <input type="button" class="sign-up-button" value="注册" @click="submitRegister()" >
        </div>
        <p class="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守简书
          <br >
          <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
          和
          <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。
        </p>
      </form>
      <!-- 更多注册方式 -->
      <div class="more-sign">
        <h6>社交帐号直接注册</h6>
        <ul>
          <li>
            <a id="weixin" class="weixin" href="#">
              <i class="iconfont icon-weixin" />
            </a>
          </li>
          <li>
            <a id="qq" class="qq" target="_blank" href="#">
              <i class="iconfont icon-qq" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import registerApi from '~/api/register'

export default {
  layout: 'sign',
  data() {
    return {
      member: {
        mobile: '',
        email: '',
        code: '',
        nickname: '',
        password: ''
      },
      sending: false, // 是否发送验证码
      second: 60, // 倒计时间
      codeText: '获取验证码'
    }
  },
  methods: {
    // 获取验证码
    getCodeFun() {
      if (this.sending) return // 如果已点击则退出，防止多次重复提交

      if (this.member.mobile === '' && this.member.email === '') {
        this.$message.error('手机号或邮箱不能同时为空')
        return
      }
      this.$message.warning('正在校验数据')
      if (this.member.mobile !== '') {
        registerApi.sendMessageByMobile(this.member.mobile).then(response => {
          this.sending = true // 用户已点击
          // 倒计时
          this.timeDown()
          // 提示发送成功
          this.$message.success(response.message)
        }).catch(error => {
          this.$message.success(error.message)
        })
      } else if (this.member.email !== '') {
        registerApi.sendMessageByEmail(this.member.email).then(response => {
          this.sending = true // 用户已点击
          // 倒计时
          this.timeDown()
          // 提示发送成功
          this.$message.success(response.message)
        }).catch(error => {
          this.$message.success(error.message)
        })
      }
    },

    // 倒计时
    timeDown() {
      this.codeText = this.second

      // 定义计时器
      const timer = setInterval(() => {
        this.codeText--
        if (this.codeText < 1) {
          clearInterval(timer)
          this.codeText = '获取验证码'
          this.sending = false
          this.second = 60
        }
        // console.log(new Date())
      }, 1000)
    },

    // 注册
    submitRegister() {
      registerApi.register(this.member).then((response) => {
        // 提示注册成功
        this.$message.success(response.message)
        this.$router.push({ path: 'login' })
      })
    }
  }
}
</script>
