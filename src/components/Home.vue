<script setup>
import axios from "axios";
import { ref } from "vue";

let images = ref();
axios.get('http://localhost:8080/v1/product/image')
  .then(res => {
    console.log(res.data)
    images.value = res.data;
  })

</script>
<template>
  <!--圖片輪播-->
  <div id="image">
    <div style="width: 600px;height: 500px; margin-left: 400px;">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item.img" style=";
                                    max-height: 100%;  
                                     max-width: 100%; 
                                          width: auto;
                                         height: auto;
                                        position: absolute;  
                                              top: 0;  
                                           bottom: 0;  
                                              left: 0;  
                                              right: 0;  
                                              margin: auto; ">
        </el-carousel-item>
      </el-carousel>
      <!--進入-->
      <div >
        <h1 style="color: black; margin-left: 150px;"><b>歡迎光臨小食堂</b></h1>
        <div style="margin-left:170px; margin-top: 30px;">
    <form method="post" action="http://localhost:8080/login"  >
      <b><span style="font-size:x-large;font-weight: bold;">帳號:</span></b>
    <input type="text" placeholder="請輸入帳號" name="username"><br><br>
      <span style="font-size: x-large ;font-weight: bold;">密碼:</span>
      <input type="password" placeholder="請輸入密碼" name="password"><br><br>
      <div  style="margin-left: 30px">
      <button type="submit" class="btn btn-primary" style="margin-left: 50px;height:40px;">登入</button>
      </div>
    </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style>
#image {
  background-image: url(../assets/images/背景.jpg);
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>