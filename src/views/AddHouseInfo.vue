<template lang="html">
  <div class="mainFrame">

    <!-- topbar -->
    <pageTopBar></pageTopBar>
<!-- ======================================================================= -->

    <!-- process -->
    <div class="process">
      <div class="pos2">
        <div class="proone">
          <span>1.填写信息</span>
        </div>
        <div class="protwo">
          <span>2.完成发布</span>
        </div>
      </div>
    </div>
<!-- ======================================================================= -->

    <!-- mainBox -->
    <div class="mainBox">
      <div class="pos3">
        <!-- part2================================= -->
        <div class="part2">

          <div class="title1">
            <div class="titlename1">
              <span>基础信息</span>
            </div>
          </div>

          <div class="f1">
            <div class="f1_typ1">
              <span style="color: red">*</span>
              <span>小区名称</span>
            </div>
            <div class="f1_choose1">
              <input
                type="text"
                class="plotname"
                placeholder="请输入小区名"
                v-model="xiaoqumc">
            </div>
          </div>

          <div class="f2">
            <div class="f2_typ2">
              <span style="color: red">*</span>
              <span>房间类型</span>
            </div>
            <div class="f2_choose2">
              <div class="num">
                <input type="text" class="numInput" v-model="shi">
                <span class="r">室</span>
              </div>
              <div class="num">
                <input type="text" class="numInput" v-model="ting">
                <span class="r">厅</span>
              </div>
              <div class="num">
                <input type="text" class="numInput" v-model="wei">
                <span class="r">卫</span>
              </div>
              <div class="num">
                <span class="l">共</span>
                <input type="text" class="numInput" v-model="mianji">
                <span class="r">㎡</span>
              </div>
            </div>
          </div>

          <div class="f3">
            <div class="f3_typ3">
              <span style="color: red">*</span>
              <span>楼层</span>
            </div>
            <div class="f3_choose3">
              <div class="num">
                <span class="l">第</span>
                <input type="text" class="numInput" v-model="diceng">
                <span class="r">层</span>
              </div>
              <div class="num">
                <span class="l">共</span>
                <input type="text" class="numInput" v-model="gongceng">
                <span class="r">层</span>
              </div>
            </div>
          </div>

          <div class="f4">
            <div class="f4_typ4">
              <span style="color: red">*</span>
              <span>车位</span>
            </div>
            <div class="f4_choose4">
              <select class="parking" v-model="chewei">
                <!-- 第一个option需要先绑定v-model才能显示 -->
                <option disabled value="">请选择</option>
                <option value="有车位">有车位</option>
                <option value="无车位">无车位</option>
              </select>
            </div>
          </div>

          <div class="f5">
            <div class="f5_typ5">
              <span style="color: red">*</span>
              <span>租金</span>
            </div>
            <div class="f5_choose5">
              <div class="numspec">
                <input type="text" class="numInput" v-model="zujin">
                <span class="r">元/月</span>
              </div>
            </div>
          </div>

          <div class="f6">
            <div class="f6_typ6">
              <span style="color: red">*</span>
              <span>区域</span>
            </div>
            <div class="f6_choose6">
              <select class="area" v-model="quyu">
                <option disabled value="">请选择</option>
                <option value="区域一">区域一</option>
                <option value="区域二">区域二</option>
                <option value="区域三">区域三</option>
                <option value="区域四">区域四</option>
                <option value="区域五">区域五</option>
                <option value="区域六">区域六</option>
                <option value="区域七">区域七</option>
              </select>
            </div>
          </div>

        </div>
        <!-- ==========part2================================= -->

        <!-- ==========part3================================= -->
        <div class="part3">

          <div class="title1">
            <div class="titlename1">
              <span>详细信息</span>
            </div>
          </div>

          <div class="f1">
            <div class="f1_typ1">
              <span style="color: red">*</span>
              <span>标题</span>
            </div>
            <div class="f1_choose1">
              <input
                type="text"
                class="plotname"
                placeholder="请输入标题"
                v-model="biaoti">
            </div>
          </div>

          <div class="houseDescibe">
            <div class="left-part">
              <span style="color: red">*</span>
              <span>房源描述</span>
            </div>
            <div class="right-part">
              <textarea
                class="content"
                name="name"
                rows="9"
                cols="85"
                placeholder="对租客的要求，周边交通及生活配套..."
                v-model="miaoshu">
              </textarea>
            </div>
          </div>

          <div class="uploadPic">
            <div class="left-part">
              <span style="color: red">*</span>
              <span>上传图片</span>
            </div>
            <div class="right_part">
              <div class="placePic">
                <!-- ref和refs配对，上传图片那里 -->
                <input
                  type="file"
                  accept="image/*"
                  ref="file"
                  @change="uploading($event)">
              </div>
            </div>
          </div>

        </div>
        <!-- ==========part3================================= -->

        <!-- ==========part4================================= -->
        <div class="part4">

          <div class="title1">
            <div class="titlename1">
              <span>其它信息</span>
            </div>
          </div>

          <div class="f1">
            <div class="f1_typ1">
              <span style="color: red">*</span>
              <span>联系人</span>
            </div>
            <div class="f1_choose1">
              <input
                type="text"
                class="plotname"
                placeholder="请输入姓名"
                v-model="lianxiren">
            </div>
          </div>

          <div class="f1">
            <div class="f1_typ1">
              <span style="color: red">*</span>
              <span>联系电话</span>
            </div>
            <div class="f1_choose1">
              <input
                type="text"
                class="plotname"
                placeholder="请输入电话号码"
                v-model="lianxidh">
            </div>
          </div>

        </div>
        <!-- ==========part4================================= -->

        <!-- ==========part5================================= -->
        <div class="part5">

          <div class="pos5">
            <button type="button" class="release" @click="sub()">发布</button>
          </div>

        </div>
        <!-- ==========part5================================= -->

      </div>
    </div>
<!-- ======================================================================= -->

    <!-- 返回顶部 -->
    <div class="gototop" @click="gototop">
      <p>返回</p>
      <p>顶部</p>
    </div>
<!-- ======================================================================= -->
  </div>
</template>

<script>
import store from "@/store"
import PageTopBar from "@/components/PageTopBar"
import axios from 'axios'
import qs from 'qs'
export default {
  // 注册头部组件
  components: {
    pageTopBar: PageTopBar
  },
  data () {
    return {
	  localIP: this.GLOBAL.localIP,
	
      // 用来发布信息
      idUser:[],
      xiaoqumc: '',
      shi: '',
      ting: '',
      wei: '',
      mianji: '',
      diceng: '',
      gongceng: '',
      chewei: '',
      zujin: '',
      quyu: '',
      biaoti: '',
      miaoshu: '',
      lianxiren: '',
      lianxidh: '',
      dateTime: '',
      picName: '',
      isRegister: true,
      // 图片载体
      file:'',
      // 11表示11行，不等于11就意味着有空值
      count: 11

    }
  },
  methods: {
    uploading (event) {
      // 取消默认行为
      event.preventDefault()
      // ======获取图片和图片名字=================
      this.file = this.$refs.file.files[0]
      this.picName = this.$refs.file.files[0].name
    },
    sub () {
      // 判断输入信息是否为空
      if (!this.xiaoqumc) {
        this.count--
      }
      if (!this.shi || !this.ting || !this.wei || !this.mianji) {
        this.count--
      }
      if (!this.diceng || !this.gongceng) {
        this.count--
      }
      if (!this.chewei) {
        this.count--
      }
      if (!this.zujin) {
        this.count--
      }
      if (!this.quyu) {
        this.count--
      }
      if (!this.biaoti) {
        this.count--
      }
      if (!this.miaoshu) {
        this.count--
      }
      if (!this.file) {
        this.count--
      }
      if (!this.lianxiren) {
        this.count--
      }
      if (!this.lianxidh) {
        this.count--
      }

      if (this.count === 11) {
        // =================提交图片==============================
        var formData = new FormData()
        formData.append('upload', this.file)
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }
		var url = "http://" + this.localIP + "/api/upload"
        axios.post(url, formData, config)
        .then( response => {
          console.log(response.data)
        })
        .catch( error => {
          console.log(error)
        })
        //=======================================================

        // string --> 对象
        var d = JSON.parse(window.sessionStorage.data)
        this.idUser = d
        // 获取日期+时间  单位s
        var t = (new Date()).getTime()
        this.dateTime = t
        var message = qs.stringify({
          idUser:   this.idUser.id,
          xiaoqumc: this.xiaoqumc,
          shi:      this.shi,
          ting:     this.ting,
          wei:      this.wei,
          mianji:   this.mianji,
          diceng:   this.diceng,
          gongceng: this.gongceng,
          chewei:   this.chewei,
          zujin:    this.zujin,
          quyu:     this.quyu,
          biaoti:   this.biaoti,
          miaoshu:  this.miaoshu,
          lianxiren:this.lianxiren,
          lianxidh: this.lianxidh,
          dateTime: this.dateTime,
          picName:  this.picName
        })
		var url1 = "http://" + this.localIP + "/api/message"
        axios.post( url1,
                    message,
                    {"Content-Type":'application/x-www-form-urlencoded'}
        )
        .then( message => {
          alert("发布成功");
          this.$router.push('/');
        })
        .catch( err => {
          console.log(error);
        })
      } else {
        this.count = 11
        alert("请填写完整信息")
      }
    },
    // 返回顶部
    gototop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }

}
</script>

<style lang="scss" scoped>

// ===============================process=============================//
.process{
  width: 100%;
  height: 100px;
  position: relative;
}
.pos2{
  width: 1000px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
}
.proone, .protwo{
  flex: 1;
  border-bottom: 2px #ccc solid;
  margin: 25px 50px;
  position: relative;
  text-align: left;
  line-height: 50px;
}
// ============================process===============================//


//=============================mainBox===============================//
//=======================类别======================================
.mainBox{
  width: 100%;
  height: 1800px;
  position: relative;
}
.pos3{
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.part1{
  width: 1000px;
  height: 100px;
  position: relative;
}
.title1{
  width: 100%;
  height: 20px;
  position: relative;
}
.titlename1{
  width: 20%;
  height: 100%;
  text-align: right;
  position: relative;
  font-weight: bold;
}
.content1{
  width: 100%;
  height: 50px;
  margin-top: 20px;
}
.typ1{
  width: 20%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  float: left;
}
.choose1{
  width: 75%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  float: right;
}
.one, .two{
  float: left;
}

// =================================基础信息=============================
// ============================part2================================//
.part2{
  width: 100%;
  height: 600px;
  position: relative;
  margin-top: 20px;
}
.f1, .f2,.f3, .f4,.f5,.f6{
  width: 100%;
  height:80px;
  margin-top: 10px;
}
.f1_typ1, .f2_typ2,.f3_typ3, .f4_typ4,.f5_typ5,.f6_typ6{
  width: 20%;
  height: 100%;
  position: relative;
  float: left;
  line-height: 80px;
  text-align: right;
}
.f1_choose1, .f2_choose2,.f3_choose3, .f4_choose4,.f5_choose5,.f6_choose6{
  width: 75%;
  height: 80px;
  float: right;
  position: relative;
  text-align: left;
}
.f1_choose1{
  line-height: 80px;
}
.plotname{
  width: 80%;
  height: 40px;
  padding-left: 10px;
  padding-bottom: 3px;
  font-size: 16px;
  border: 1px solid #eee;
  outline-style: none;
}
.num{
  width: 120px;
  height: 30px;
  float: left;
  border: 1px solid #eee;
  position: relative;
  top: 25px;
  margin-right: 10px;
  line-height: 30px;
}
.numspec{
  width: 150px;
  height: 30px;
  float: left;
  border: 1px solid #eee;
  position: relative;
  top: 25px;
  margin-right: 10px;
  line-height: 30px;
}
.numInput{
  float: left;
  width: 60px;
  height: 29px;
  position: absolute;
  left: 30px;
  border: none;
  text-align: center;
  // 文本框点击后没有框线和颜色变化
  outline-style: none;
}
.parking, .area{
  width: 120px;
  height: 30px;
  float: left;
  border: 1px solid #eee;
  position: relative;
  top: 25px;
  margin-right: 10px;
  line-height: 30px;
  outline-style: none;
}
.plotname:hover{
    border: 1px solid black;
}
.plotname:focus{
    border: 1px solid black;
}
.num:hover{
  border: 1px solid black;
}
.numspec:hover{
    border: 1px solid black;
}
.parking:hover{
  cursor: pointer;
  border: 1px solid black;
}
.area:hover{
  cursor: pointer;
  border: 1px solid black;
}
.l{
  float: left;
  position: absolute;
  left: 2px;
  color: #ccc;
}
.r{
  float: right;
  position: absolute;
  right: 2px;
  color: #CCC;
}
// ============================part2================================//

// ============================part3================================//
.part3{
  width: 100%;
  height: 500px;
  position: relative;
  margin-top: 20px;
}
.houseDescibe{
  width: 100%;
  height:140px;
  margin-top: 10px;
}
.content{
  width: 750px;
  height: 100%;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 18px;
  font-family: monospace;
  color: black;
  box-sizing: border-box;
  resize: none;
  outline-style: none;
  border: 1px solid #eee;
}
.content:hover{
  border: 1px black solid;
}
.content:focus{
  border: 1px black solid;
}
.left-part{
  width: 20%;
  height: 100%;
  position: relative;
  float: left;
  text-align: right;

}
.right-part{
  width: 75%;
  height: 140px;
  float: right;
  position: relative;
  text-align: left;
}
.uploadPic{
  width: 100%;
  height:173px;
  margin-top: 20px;
}
.right_part{
  width: 75%;
  height: 173px;
  float: right;
  position: relative;
  text-align: left;
}
.placePic{
  height: 143px;
  width: 196px;
  position: relative;
}
.placePic input{
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url('~@/../src/assets/bg.png') center center no-repeat;
  background-size: 100% 100%;
  outline-style: none;
}
.placePic input:hover{
  cursor: pointer;
}
.clickToUpload:hover{
  cursor: pointer;
}
// ============================part3================================//

// ====================part4==========================
.part4{
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 20px;
}
// ====================part4==========================

// ====================part5==========================
.part5{
  width: 100%;
  height: 50px;
  position: relative;
  margin-top: 20px;
}
.pos5{
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.release{
  width: 250px;
  height: 100%;
  background-color: rgba(255,55,10,.9);
  color: white;
  font-size: 22px;
  position: absolute;
  left: 300px;
  border-radius: 8px;
  outline-style: none;
}
.release:hover{
    background-color: rgba(255,85,46,.9);
}
// ====================part5==========================
// ============================mainBox================================//

// ============================返回顶部================================//
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
