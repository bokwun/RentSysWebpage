<template lang="html">
  <div class="mainFrame">

    <!-- 顶部栏 -->
    <!-- 组件PageTopBar -->
    <pageTopBar></pageTopBar>

    <!-- mainbox -->
    <div class="mainBox">
      <div class="main">
        <!-- 头部标题 -->
        <div class="head">
          <h2>{{this.item.biaoti}}</h2>
        </div>

        <!-- 信息块一 -->
        <div class="content_one">

          <div class="left_content">
            <div class="top_part">
              <img v-bind:src="imgUrl" alt="picture">
            </div>
            <div class="bottom_part">
            </div>
          </div>

          <div class="right_content">

            <div class="zujin">
              <div class="zujin1">
                <span class="span1">{{item.zujin}}</span>
                <span class="span2">&nbsp;&nbsp;元/月</span>
              </div>
            </div>

            <ul class="message">
              <li>
                <span>房屋类型:</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.shi}}室{{item.ting}}厅{{item.wei}}卫&nbsp;&nbsp;&nbsp;{{item.mianji}}㎡</span>
              </li>
              <li>
                <span>所在楼层:</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.diceng}}层&nbsp;/&nbsp;{{item.gongceng}}层</span>
              </li>
              <li>
                <span>所在小区:</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.xiaoqumc}}</span>
              </li>
              <li>
                <span>所属区域:</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.quyu}}</span>
              </li>
              <li>
                <span>其它配置:</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.chewei}}</span>
              </li>
            </ul>

            <div class="lianxi">

              <div class="phoneNumber">
                <span class="span3">电&nbsp;&nbsp;话：</span>
                <span class="span4">{{item.lianxidh}}</span>
              </div>

              <div class="lianxiren">
                <span class="span4">{{item.lianxiren}} (联系人)</span>
              </div>

            </div>

          </div>
        </div>

        <!-- 信息块二 -->
        <div class="content_two">
          <div class="fangyuanxq">
            <h4>房源详情</h4>
          </div>
          <div class="miaoshu">
            <div class="miaoshul">
              <h4 class="span5">房源描述</h4>
            </div>
            <div class="miaoshur">
              <span class="span6">{{item.miaoshu}}</span>
            </div>

          </div>
        </div>

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
export default {
  // 注册子组件
  components: {
    pageTopBar: PageTopBar
  },
  data () {
    return {
      item: [],
      // 图片路径
      imgUrl:''
    }
  },
  mounted () {
    this.load()
    this.imgUrl = "../img/" + this.item.picName
  },
  methods: {
    load () {
      // string --> 对象
      var d = JSON.parse(window.sessionStorage.item)
      this.item = d
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
// ====mainBox====================
.mainBox{
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 20px;
}
.main{
  margin: 0 auto;
  width: 1190px;
  height: auto;
  position: relative;
}
.head{
  width: 100%;
  height: 60px;

}
.content_one{
  width: 100%;
  height: 500px;
  position: relative;
  border-bottom: 1px #eee solid;
}
.left_content{
  width: 40%;
  height: 100%;
  float: left;
  position: relative;
}
.top_part{
  width: auto;
  height: 65%;
  margin: 20px 20px;
  box-sizing: border-box;
  background: url('~@/../src/assets/lostPic.png') center center no-repeat;
  background-size: 100% 100%;
}
.top_part:hover{
  border: 1px #eee solid;
}
.top_part img{
  width: 100%;
  height: 100%;
}
.bottom_part{
  width: auto;
  height: 20%;
  margin: 30px 20px;
  box-sizing: border-box;
}
.right_content{
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
  margin-left: 20px;
}
.zujin{
  width: 100%;
  height: 100px;
  border-top: 1px #eee solid;
  box-sizing: border-box;
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
}
.zujin1{
  width: 250px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  position: absolute;
  top:20px;
}
.span1{
  width: 100px;
  color: red;
  font-size: 35px;
}
.span2{
  width: 50px;
  color: red;
}
.message{
  width: 100%;
  height: 250px;
  list-style-type: none;
}
.message li{
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-top: 3px;
  color: #666;

}
.lianxi{
  width: 100%;
  height: 90px;
}
.phoneNumber{
  width: 300px;
  height: 80px;
  line-height: 80px;
  margin-top: 10px;
  display:inline-block;
  float: left;
  font-size: 23px;
}
.lianxiren{
  width: 250px;
  height: 80px;
  line-height: 80px;
  margin-top: 10px;
  display:inline-block;
  float: right;
  font-size: 23px;
  text-align: center;
}
.span3{
  width: 30px;
}
.span4{
  margin-left: 20px;
}
.content_two{
  width: 100%;
  height: 400px;
  position: relative;
  margin-top: 30px;
}
.fangyuanxq{
  width: 100px;
  height: 30px;
  padding-left: 5px;
  padding-top: 1px;
  box-sizing: border-box;
}
.miaoshu{
  width: 100%;
  height: 370px;
  margin-top: 15px;
}
.miaoshul{
  width: 100px;
  height: 30px;
  padding-left: 5px;
  padding-top: 1px;
  box-sizing: border-box;
  float: left;
}
.miaoshur{
  width: 1090px;
  height: auto;
  padding-left: 5px;
  padding-top: 1px;
  box-sizing: border-box;
  float: right;
  // 保留原本格式，超出范围强制换行
  white-space: pre-wrap;

}

// 返回顶部
.gototop{
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  padding-top: 8px;
  border: 1px #aaa solid;
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
