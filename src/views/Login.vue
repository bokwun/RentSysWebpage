<template lang="html">
  <div class="main">
    <div class="loginContent">
      <!-- 注册 -->
      <div class="outregBox">
        <!-- 返回首页 -->
        <div class="gobackIndex">
          <span @click="gobackIndex()">返回首页</span>
        </div>
        <!-- 没有账户？去注册 -->
        <div class="gotoReg" v-if="!isReg">
          没有账户？<span @click="goReg()">去注册</span>
        </div>
        <div class="gotoReg" v-else>
          已有账户？<span @click="goLog()">去登录</span>
        </div>
      </div>
      <!-- 登录界面 -->
      <div class="wrap">
        <!-- 登录输入框 -->
        <div v-if="!isReg">
          <ul class="inputFrame1">
            <!-- 用户名输入块 -->
            <li class="userName1">
              <input
                type="text"
                value=""
                id="usernameUser1"
                class="login-input1"
                name="username"
                style="font-size:20px"
                maxlength=""
                placeholder="手机号/账户名/邮箱"
                v-model="userName">
              <p v-if="idempty" style="color:red">您还没输入用户名</p>
            </li>
            <!-- 密码输入块 -->
            <li class="password1">
              <input type="password" value="" id="passwordUser1"
                name="username" style="font-size:20px"
                maxlength="" placeholder="密码"
                v-model="password"
              >
              <p v-if="pwdempty" style="color:red">您还没输入密码</p>
              <p v-if="right" style="color:red">用户名或密码不正确</p>
            </li>
            <!-- 登录按钮 -->
            <li class="button1">
              <button
                type="button"
                id="btnSubmitUser1"
                class="submit1"
                @click="login()">登录
              </button>
            </li>
          </ul>
        </div>
        <!-- 注册输入框 -->
        <div v-else>
          <ul class="inputFrame2">
            <!-- 用户名输入块 -->
            <li class="userName2">
              <input
                type="text"
                value=""
                id="usernameUser2"
                class="login-input"
                name="username"
                style="font-size:20px"
                maxlength=""
                placeholder="手机号/账户名/邮箱"
                v-model="userName">
              <p v-if="same" style="color:red">该用户名已存在</p>
              <p v-if="idempty" style="color:red">用户名不能为空</p>
            </li>
            <!-- 密码输入块 -->
            <li class="password2">
              <input type="password" value="" id="passwordUser2"
                name="username" style="font-size:20px"
                maxlength="" placeholder="设置密码"
                v-model="password"
              >
              <p v-if="pwdempty" style="color:red">密码不能为空</p>
            </li>
            <!-- 确认密码输入块 -->
            <li class="repeatPassword">
              <input
                type="password"
                value=""
                id="repeatPasswordUser"
                name="username"
                style="font-size:20px"
                maxlength=""
                placeholder="确认密码"
                v-model="repeatPassword">
              <p v-if="repwdempty" style="color:red">两次输入密码不相同</p>
            </li>
            <!-- 注册按钮 -->
            <li class="button2">
              <button
                type="button"
                id="btnSubmitUser2"
                class="submit2"
                @click="reg()">注册
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store"
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    return {
	  localIP: this.GLOBAL.localIP,
      isReg: false,
      userName: '',
      password: '',
      repeatPassword: '',
      // same为判断隐藏字段是否出现，注册用户名输入栏下,检查注册的名字是否存在
      same: false,
      //判断账户密码正确性
      right: false,
      // 判断输入栏是否空
      idempty: false,
      pwdempty: false,
      repwdempty: false,
    }
  },
  store,
  computed: {
    //主页点击登录/注册时，由于登录注册一个页面，需给login页面发个值告诉对方
    //显示登录或者注册页面
    // 从PageTopBar接收
    isRegister : {
      get: function () {
        // isRegister = store.state.isRegister
        return store.state.isRegister
      },
      set: function () {
      }
    }
  },
  // 进入界面就执行
  created () {
    this.changeIsReg()
  },
  methods: {
    // 只有点击头栏的注册才会传入这个isRegister
    changeIsReg () {
      // 第一次点击注册跳转到login时，isReg值被改，而isRegister还是true
      // 这时login页面变成true
      // 假如此时跳转到其它页面，然后再点击头栏的登录，页面会显示注册状态！！！
      //
      this.isReg = this.isRegister
      //所以需改变isRegister,原因：再次进入login页面时，只有isRegister能改变isReg值
      // 这样每次进入login页面或者点击登录都是登录栏，而点击注册必定会跳到注册栏，下面的赋值只会
      // 对登录有影响
      store.state.isRegister = false
    },
    // 返回首页
    gobackIndex () {
      this.isReg = false
      this.$router.push('/')
    },
    // 去注册
    goReg () {
      this.userName= ''
      this.password= ''
      this.isReg = true
      this.same= false
      this.idempty= false
      this.pwdempty= false
      this.repwdempty= false
      this.right= false
    },
    // 去登录
    goLog () {
      this.userName= ''
      this.password= ''
      this.repeatPassword= ''
      this.isReg = false
      this.same= false
      this.idempty= false
      this.pwdempty= false
      this.repwdempty= false
      this.right= false
    },
    // 登录
    login () {
      this.idempty= false
      this.pwdempty= false
      this.right= false
      if (!this.userName) {
        this.idempty= true
      } else if(!this.password) {
        this.pwdempty= true
      } else {

      }
      if (this.userName && this.password) {
        var url = "http://" + this.localIP + "/api/checkUser/" + this.userName;
        axios.get(url)
        .then( response => {
          if ( response.data.person && this.userName === response.data.person.id &&
                this.password === response.data.person.password)
          {
            var ses = window.sessionStorage;
            //把接收到的数据解析成json字符串，不然控制台输出[object object]
            var d = JSON.stringify(response.data.person)
            // 此时ses里面是{id:value, password:value}
            // sessionStorage.setItem("key", "value")
            ses.setItem('data', d)
            this.$router.push('/');
          } else {
            this.right = true
          }
        })
        .catch( error => {
          console.log(error);
          console.log("失败！！！");
        })
      }
    },
    // 注册
    reg () {
      this.same= false
      this.idempty= false
      this.pwdempty= false
      this.repwdempty= false
      if (!this.userName) {
        this.idempty= true
      } else if (!this.password) {
        this.pwdempty= true
      } else if (this.password !== this.repeatPassword) {
        this.repwdempty= true
      } else {

      }
      if (this.userName && this.password && this.password === this.repeatPassword) {
        // 用户名去匹配数据库
        var url = "http://" + this.localIP + "/api/checkUser/" + this.userName;
		var url2 = "http://" + this.localIP + "/api/postmsg"
        axios.get(url)
        .then( response => {
            if (!response.data.person) {
              // 提交注册信息
              var data = qs.stringify({
                id : this.userName,
                password : this.password
              })
              axios.post( url2,
                          data,
                          {"Content-Type":'application/x-www-form-urlencoded'}
              )
              .then( () => {
                this.userName = ''
                this.password = ''
                this.repeatPassword = ''
                alert("注册成功！")
                this.isReg=false;
              })
              .catch( error => {
                console.log(error);
              })
            } else {
              this.same= true
            }
          }
        )
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  position: fixed;
  background: url('~@/../src/assets/log-bg.jpg') center center no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}
.wrap{
  position: relative;
  padding-top: 38px;
  padding-bottom: 39px;
  margin: 0 auto;
  width: 520px;
  height: 517px;
  background-color: white;
  opacity: 1;
}
.outregBox{
  position: relative;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 10px;
  width: 520px;
  height: 30px;
  display: flex;
}
.outregBox div{
  display: inline;
}
.outregBox div span{
  color: white;
  text-decoration: none;
}
.outregBox div span:hover{
  text-decoration: underline;
  cursor: pointer;
}
.gobackIndex{
  position: absolute;
  left: 0;
}
.gotoReg{
  position: absolute;
  right: 0;
  color: white;
}
.inputFrame1 li{
  list-style-type: none;
  height: 100px;
}
.inputFrame2 li{
  list-style-type: none;
  height: 100px;
}
.inputFrame1, .inputFrame2{
  width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.userName1{
  position: relative;
  top:80px;
  margin-top:10px;
}
.userName2{
  position: relative;
  top:70px;
  margin-top:10px;
}
.password1{
  position: relative;
  top: 100px;
  margin-top:10px;
}
.password2{
  position: relative;
  top: 75px;
  margin-top:10px;
}
.repeatPassword{
  position: relative;
  top: 80px;
  margin-top:10px;
}
.button1{
  position: relative;
  top: 120px;
  margin-top:10px;
}
.button2{
  position: relative;
  top: 90px;
  margin-top:10px;
}
#usernameUser1, #usernameUser2{
  width: 96%;
  height: 50px;
  padding-left: 10px;
  padding-bottom: 5px;
}
#passwordUser1, #passwordUser2, #repeatPasswordUser{
  width: 96%;
  height: 50px;
  padding-left: 10px;
  padding-bottom: 5px;
}
#btnSubmitUser1, #btnSubmitUser2{
  width: 100%;
  height: 50px;
  padding-left: 10px;
  padding-bottom: 5px;
  text-align:center;
  font-size: 18px;
  background-color: #FF552E;
  border: none;
  color: white;
  padding: 1px 6px;
}
</style>
