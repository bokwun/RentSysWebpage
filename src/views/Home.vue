<template lang="html">
  <div class="mainFrame">
    <!-- 嵌套路由中，父路由需加入这个标签，才能显示子路由里面的东西 -->
    <!-- 而且放置的位置会影响子路由里的html显示 -->
    <!-- <router-view /> -->

    <!-- 顶部栏 -->
    <!-- 组件PageTopBar -->
    <pageTopBar></pageTopBar>
<!-- ======================================================================= -->

    <!-- 头部栏 -->
    <div class="header" style="min-width: 1190px;">
      <div class="pos2">
        <div class="logo" @click="goIndex">
          XX租房
        </div>
        <span
          class="freeRelease" s
          tyle="font-size:18px"
          @click="goRelease()">免费发布</span>
      </div>
    </div>
<!-- ======================================================================= -->

    <!-- 展示栏 -->
    <div class="mainBox">
      <div class="main">

        <!-- 筛选信息栏 -->
        <div class="search_bd">
          <!-- 区域选择 -->
          <dl class="sec">
            <dd
              v-for="list in quyu"
              :class="{ bgRed:clickqy == list}"
              @click="changeqy(list)"
            >{{list}}</dd>
          </dl>
          <!-- 租金选择 -->
          <dl class="sec">
            <dt>租金：</dt>
            <dd
              v-for="(list, index) in zujin"
              v-model="forZuJin[index]"
              :class="{ bgRed:clickzj == list}"
              @click="changezj(list, index)"
            >{{list}}</dd>
          </dl>
          <!-- 厅室选择 -->
          <dl class="sec">
            <dt>厅室：</dt>
            <dd
              v-for="(list, index) in tings"
              v-model="forTings[index]"
              :class="{ bgRed:clickts == list}"
              @click="changets(list, index)"
            >{{list}}</dd>
          </dl>
        </div>
        <!-- ================================================ -->

        <!-- 房屋列表栏 -->
        <div class="content">
          <div class="listTitle">
            <ul>
              房屋出租
            </ul>
          </div>
          <div class="listBox">
            <!-- 组件HouseList -->
            <ul class="listUI" v-if="!listEmpty">
              <list
                v-for="(item, index) in showMsg"
                :items="item"
                :key="index"
              ></list>
            </ul>
            <ul class="nothing" v-else>
              <li><h1>搜索暂无结果</h1></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
<!-- ======================================================================= -->

    <!-- 返回顶部 -->
    <div class="gototop" @click="gototop">
      <p>返回</p>
      <p>顶部</p>
    </div>

  </div>
</template>

<script>
import HouseList from '@/components/HouseList'
import PageTopBar from '@/components/PageTopBar'
import axios from 'axios'
export default {
  // 注册列表组件和头部组件
  components: {
    list: HouseList,
    pageTopBar: PageTopBar
  },
  data () {
    return {
		
	  localIP: this.GLOBAL.localIP,
      // 存储请求到的数据
      showMsg: [],
      //for循环列出筛选栏，并给每个选项绑定一个值
      quyu: [
        "不限", "区域一", "区域二", "区域三",
        "区域四", "区域五", "区域六", "区域七"
      ],
      zujin: [
        "不限", "1000元以下", "1000-2000元", "2000-3000元",
        "3000-4000元", "4000-5000元", "5000元以上"
      ],
      forZuJin: [
        0, 1000, 1500, 2500,
        3500, 4500, 5000
      ],
      tings: [
        "不限", "一室", "两室",
        "三室", "四室", "四室以上"
      ],
      forTings: [
        0, 1, 2, 3, 4, 5
      ],
      // 渲染页面用
      clickqy: '不限',
      clickzj: '不限',
      clickts: '不限',
      // 请求数据用
      forZj: '0',
      forTs: '0',
      // 显示搜索暂无结果用的
      listEmpty: false
    }
  },
  mounted () {
    this.showList()
  },
  methods: {
    // 请求数据库所有资源，并打印到主页
    showList () {
      var url = "http://" + this.localIP + "/api/returnMsg"
      axios.get(url)
      .then( response => {
        this.showMsg = response.data.messages
        // 判断请求到的数据是否为空，是就显示搜索暂无结果
        if (this.showMsg.length === 0) {
          this.listEmpty = true
        } else {
          this.listEmpty = false
        }
      })
      .catch( error => {
        console.log(error);
      })
    },
    // 返回首页
    goIndex () {
      this.$router.push('/')
    },
    // 免费发布
    goRelease () {
      this.$router.push('/addHouseInfo')
    },
    // 返回顶部
    gototop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    // 筛选信息
    // 选择区域的逻辑函数
    changeqy (list) {
      // 实现点击任意一个区域值，它的字体颜色变
      this.clickqy = list
      var param = {
        // URL的请求参数
        quyu : this.clickqy,
        zujin : this.forZj,
        shi : this.forTs
      }
      var url = "http://" + this.localIP + "/api/returnMsgWhere"
      axios.get(url,{params: param})
      .then( response => {
        this.showMsg = response.data.messages
        // 判断请求到的数据是否为空，是就显示搜索暂无结果
        if (this.showMsg.length === 0) {
          this.listEmpty = true
        } else {
          this.listEmpty = false
        }
      })
      .catch( error => {
        console.log(error);
      })
    },
    // 选择租金的逻辑函数
    changezj (list, index) {
      this.clickzj = list
      // 给每个租金选项绑定一个值
      this.forZj = this.forZuJin[index]
      var param = {
        quyu : this.clickqy,
        zujin : this.forZj,
        shi : this.forTs
      }
      var url = "http://" + this.localIP + "/api/returnMsgWhere"
      axios.get(url,{params: param})
      .then( response => {
        this.showMsg = response.data.messages
        // 判断请求到的数据是否为空，是就显示搜索暂无结果
        if (this.showMsg.length === 0) {
          this.listEmpty = true
        } else {
          this.listEmpty = false
        }
      })
      .catch( error => {
        console.log(error);
      })
    },
    // 选择室的逻辑函数
    changets (list, index) {
      this.clickts = list
      this.forTs = this.forTings[index]
      var param = {
        quyu : this.clickqy,
        zujin : this.forZj,
        shi : this.forTs
      }
      var url = "http://" + this.localIP + "/api/returnMsgWhere"
      axios.get(url,{params: param})
      .then( response => {
        this.showMsg = response.data.messages
        if (this.showMsg.length === 0) {
          this.listEmpty = true
        } else {
          this.listEmpty = false
        }
      })
      .catch( error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// ===================头部的样式==========================//
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
// ====================头部的样式=========================//

// ====================主体的样式=========================//
.mainBox{
  width: 100%;
  height: 4000px;
  position: relative;
}
.main{
  margin: 0 auto;
  width: 1190px;
  height: 4000px;
  position: relative;
}
.sec{
  padding: 10px;
  background-color: #eee;
}
.sec dd{
  display: inline-block;
}
.search_bd dd{
  margin-right: 15px;
}
.search_bd dd:hover{
  color:rgba(255,85,46,.9);
  cursor: pointer;
}
.bgRed {
  color:rgba(255,85,46,.9);
}
.search_bd dt{
  float:left;
  margin-left: 2px;
  margin-right: 10px;
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
.nothing{
  width: 1190px;
  height: 200px;
}
.nothing li{
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #ccc;
  list-style-type: none;
}
// ====================主体的样式=========================//

// ====================返回顶部的样式=====================//
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
// ====================返回顶部的样式=====================//
</style>
