<template lang="html">
  <!-- 顶部栏 -->
  <!-- style属性：设置最小显示的长度，
  防止缩放浏览器时导致样式渲染不到位 -->
  <div class="commonTopbar" style="min-width: 1190px;">
    <div class="pos1">

      <div class="bar_left">
        <h2 style="font-size:16px;color:red">某地</h2>
        <span>[切换城市]</span>
      </div>

      <div class="bar_left" >
        <span class="gbIndex" @click="gobackIndex()">返回首页</span>
      </div>

      <div class="bar_right">

          <div class="part1" v-if="!isLogin">
            <div class="span" @click="goLog()">登录</div>
            <div class="span1">/</div>
            <div class="span" @click="goReg()">注册</div>
          </div>

          <div class="part1" v-else>
            <div class="span" @click="user()">{{this.userMsg.id}}</div>
            <div class="span1">/</div>
            <div class="span" @click="quit()">退出</div>
          </div>

          <div class="part2">
            <span>网站导航</span>
            <ul>
              <li>导航一</li>
              <li>导航二</li>
              <li>导航三</li>
              <li>导航一</li>
              <li>导航二</li>
              <li>导航三</li>
              <li>导航一</li>
              <li>导航二</li>
              <li>导航三</li>
              <li>导航一</li>
              <li>导航二</li>
              <li>导航三</li>
            </ul>
          </div>

      </div>

    </div>
  </div>
</template>

<script>
import store from "@/store"
export default {
  // 用到该组件都必须先注册该子组件
  data () {
    return {
      // 是否登录判断符
      isLogin: '',

      isRegister: true,
      // 用来接收sessionstorage里面的用户值
      userMsg: []
    }
  },
  store,
  mounted () {
    this.checkWhetherLogin()
  },
  methods: {
    //判断是否登录
    checkWhetherLogin () {
      // sessionStorage里面有数据
      if (window.sessionStorage.data) {
        this.isLogin = true
        // 把sessionStorage里面的string值转换成对象
        var d = JSON.parse(window.sessionStorage.data)
        this.userMsg = d
      }
      else {
        this.isLogin = false
      }
    },
    // 返回首页
    gobackIndex () {
      this.$router.push('/')
    },
    // 去登录
    goLog () {
      this.$router.push('/login')
    },
    //去注册
    goReg () {
      // 将isRegister传给login
      // PageTopBar.vue --> Login.vue
      store.commit('chIsReg',  this.isRegister)
      this.$router.push('/login')
    },
    //去用户中心
    user () {
      this.$router.push('/user')
    },
    // 退出
    quit () {
      window.sessionStorage.removeItem('data')
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.commonTopbar{
  position: relative;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #ddd;
}
.pos1{
  width: 1190px;
  margin: 0 auto;
  position: relative;
}
// =============左边的样式==================//
.bar_left{
  width: 150px;
  height: 35px;
  line-height: 35px;
  float: left;
  text-align: center;
  display: flex;
  margin-left: 2px;
}
.bar_left span{
  text-decoration: none;
  color: black;
}
.bar_left span:hover{
  color: red;
  cursor: pointer;
}

// =============右边的样式==================//
.bar_right{
  width: 200px;
  height: 35px;
  line-height: 35px;
  float: right;
  text-align: center;
}

// 登录注册用户退出
.part1{
  float: left;
  width: 110px;
  height: 35px;
}
.part1 div{
  float: left;
}
.span{
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  // 超出范围用。。。代替
  text-overflow:ellipsis;
}
.span:hover{
  color: red;
  cursor: pointer;
}
.span1{
  width: 5px;
  margin-left: 4px;
}

// 导航栏
.part2{
  width: 80px;
  float: right;
  position: relative;
  text-align: center;
}
.part2:hover span{
  color: red;
}
.part2:hover{
  cursor: pointer;
  border-bottom: 1px solid white;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.part2 ul{
  width: 400px;
  height: 200px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: white;
  display: none;
  position: absolute;
  top: 36px;
  right: -1px;
  z-index: 1;
// 分3块，每块50px；
  column-count:3;
  column-gap:50px;
  column-rule-style:solid;
  /* Firefox */
  -moz-column-count:3;
  -moz-column-gap:50px;
  -moz-column-rule-style:solid;
  /* Safari and Chrome */
  -webkit-column-count:3;
  -webkit-column-gap:50px;
  -webkit-column-rule-style:solid;
}
.part2:hover ul{
  display: block;
}
.part2 ul li{
  list-style-type: none;
}

</style>
