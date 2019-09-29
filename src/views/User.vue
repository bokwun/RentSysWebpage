<template lang="html">
  <div class="mainFrame">
    <!-- 顶部栏 -->
    <!-- 组件PageTopBar -->
    <pageTopBar></pageTopBar>

    <!-- 头部栏 -->
    <div class="header" style="min-width: 1190px;">
      <div class="pos2">
        <div class="logo" @click="goIndex">
          XX租房
        </div>
        <span
          class="freeRelease"
          style="font-size:18px"
          @click="goRelease()">免费发布
        </span>
      </div>
    </div>

    <!-- mainBox -->
    <div class="mainBox">
      <div class="listTitle">
        <ul>
          我的发布
        </ul>
      </div>
      <div class="record">
        <ul class="listUI">
          <!-- @refresh为监听子组件，一旦子组件触发事件，父组件立刻执行showList函数 -->
          <list
            v-for="(item, index) in showMsg"
            :items="item"
            :isUV="isUV"
            :key="index"
          ></list>
          <!-- @refresh="showList" -->
        </ul>
      </div>
    </div>
    <!-- 返回顶部 -->
    <div class="gototop" @click="gototop">
      <p>返回</p>
      <p>顶部</p>
    </div>
  </div>
</template>

<script>
import PageTopBar from "@/components/PageTopBar"
import HouseList from '@/components/HouseList'
import axios from 'axios'
export default {
  data () {
    return {
	  localIP: this.GLOBAL.localIP,
      userN: '',
      showMsg: [],
      isUV: true

    }
  },
  // 注册子组件
  components: {
    list: HouseList,
    pageTopBar: PageTopBar
  },
  mounted () {
    this.showList()
  },
  methods: {
    // 请求数据库所有资源，并打印到主页
    showList () {
      var d = JSON.parse(window.sessionStorage.data)
      this.userN = d
      var url = "http://" + this.localIP + "/api/returnUserMsg/" + this.userN.id;
      axios.get(url)
      .then( response => {
        // showMsg为当前用户所发表的所有信息
        this.showMsg = response.data.messages
      })
      .catch( error => {
        console.log(error);
      })
    },
    goIndex () {
      this.$router.push('/')
    },
    gototop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    goRelease () {
      this.$router.push('/addHouseInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height:100px;
  position: relative;
  background-size: 100% 100%;
  margin-bottom: 30px;
}
.logo{
  border: 1px red solid;
  height: 40px;
  width: 200px;
  float: left;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 40px;
  background-color: rgba(255,85,46,.9);
  color: white;
  font-size: 20px;
}
.logo:hover{
  cursor: pointer;
}
.pos2{
  width: 1190px;
  margin: 0 auto;
  position: relative;
}
.freeRelease{
  width: 100px;
  height: 40px;
  margin: 30px 0;
  background-color: rgba(255,85,46,.9);
  color: white;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  float: right;
}
.freeRelease:hover{
  cursor: pointer;
  background-color: rgba(255,65,46,.9);
}

// ============mainBox=============
.mainBox{
  margin: 0 auto;
  width: 1190px;
  height: 4000px;
  position: relative;
}
.listTitle{
  height: 40px;
  margin-top: 30px;
  border-bottom: 2px solid rgba(255,85,46,.9);
}
.listTitle ul{
  background-color: rgba(255,85,46,.9);
  color: white;
  width: 120px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
}
.listUI{
  width: 1190px;
  background-color: white;
}

// 返回顶部
.gototop{
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  padding-top: 8px;
  border: 1px #ddd solid;
  position: fixed;
  bottom: 50px;
  right: 5px;
  text-align: center;
  font-size: 10px;
  background-color: white;
}
.gototop:hover{
  cursor: pointer;
  color: white;
  background-color: red;
}
</style>
