<template lang="html">
    <!-- <ul class="listUI"> -->
      <li>

        <div class="pic">
          <!-- 绑定图片路径 -->
          <img v-bind:src="imgUrls" alt="picture" @click="showDetails(items)">
        </div>

        <div class="content" >
          <div class="partone">
            <h3 class="head">
              <span @click="showDetails(items)">{{items.biaoti}}</span>
            </h3>
          </div>
          <div class="parttwo">
            <span>{{items.shi}}室{{items.ting}}厅{{items.wei}}卫&nbsp;&nbsp;&nbsp;{{items.mianji}}㎡</span>
          </div>
          <div class="partthree">
            <span>{{items.quyu}}&nbsp;&nbsp;&nbsp;{{items.xiaoqumc}}</span>
          </div>
        </div>

        <div class="rent">
          <span>{{items.zujin}}</span>
          <span>元/月</span>
        </div>
        <!-- 删除图标 -->
        <div class="del" v-if="isUserVue" @click="deleteMsg(items)">
        </div>

      </li>
    <!-- </ul> -->
</template>

<script>
import store from "@/store"
import axios from 'axios'
export default {
  // 接收父组件的传值
  // items来自Home.vue
  // isUV来自user.vue
  props: ['items', 'isUV'],
  data () {
    return {
	  localIP: this.GLOBAL.localIP,
		
      // 判断是不是用户中心，显示列表删除按钮用的
      isUserVue: false,
      // 用来获取存储sessionStorag里面的账户信息
      showId:[],
      //图片的路径，这里是部署到 nginx 后的图片路径
      imgUrls:"../img/" + this.items.picName
    }
  },
  store,
  mounted () {
    // this.isUV是true值
    this.isUserVue = this.isUV
  },
  methods: {
    // items是当前点击的信息这一项
    showDetails (items) {
      // items的数据格式为application/x-www-form-urlencoded
      // window.sessionStorage接收string，需要转为string格式
      var ite = JSON.stringify(items)
      // items对应list里被点击的一项
      window.sessionStorage.setItem('item', ite)
      this.$router.push('/HouseInfo')
    },
    // 删除列表的一条信息
    deleteMsg (items) {
      var i = JSON.parse(window.sessionStorage.data)
      this.showId = i
      var param = {
        idUser : this.showId.id,
        dateTime : items.dateTime
      }
      var url = "http://" + this.localIP + "/api/delMessage"
      axios.get(url,{params: param})
      .then( response => {
        // 子组件触发事件refresh，父组件监听.refresh可以随意定义
        window.location.reload()
        // this.$emit('refresh')
      })
      .catch( error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
li{
  width: 1190px;
  height: 200px;
  border-bottom: 1px solid #eee;
  position: relative;
  list-style-type: none;
}
li:hover{
  background-color: #eee;
}
li:hover .head{
  color: rgba(255,85,46,.9);
}

.pic{
  width: 15%;
  height:80%;
  margin-right: 5%;
  position: absolute;
  top: 10%;
  background: url('~@/../src/assets/lostPic.png') center center no-repeat;
  background-size: 100% 100%;
}
.pic:hover{
  cursor: pointer;
}
// 左
.pic img{
  width: 100%;
  height: 100%;
}
// 中
.content{
  width: 60%;
  height: 80%;
  position: absolute;
  left: 20%;
}
// 右
.rent{
  width: 15%;
  height: 35%;
  line-height: 70px;
  position: absolute;
  right: 0;
  font-size: 30px;
  color: rgba(255,85,46,.9);
  text-align: center;
}
// 中间字体的样式=========
.partone{
  width: 70%;
  height: 30%;
  line-height: 45px;
  font-size: 20px;
  font-weight: bolder;
  position: absolute;
  top: 10%;
}
.parttwo{
  width: 30%;
  height: 15%;
  position: absolute;
  top: 50%;
}
.partthree{
  width: 30%;
  height: 15%;
  position: absolute;
  top: 75%;
}
.head{
  overflow: hidden;
  white-space: nowrap;
  // 超出范围用。。。代替
  text-overflow:ellipsis;
}
.head span:hover{
  cursor: pointer;
}
// =========================

// 删除按钮的样式
.del{
  width: 52px;
  height: 51px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url('~@/../src/assets/del.png') center center no-repeat;
  background-size: 100% 100%;
  display: none;
}
.del:hover{
  cursor: pointer;
}
li:hover .del{
  display: block;
}
</style>
