<script setup>
import axios from "axios";
import { ref } from  "vue";

let images= ref();
axios.get('http://localhost:8080/v1/product/image')
      .then(res=>{
        console.log(res.data)
        images.value=res.data;
      })

 



</script>

<template>
  <!--圖片輪播-->
  <div id= "image">
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
    <div>
  <h1 style="color: black; margin-left: 150px;"><b>歡迎光臨小食堂</b></h1>
  <div style="margin-left:250px; margin-top: 30px;">
  <el-button type="primary" round><router-link to="/Food"><span style="font-size: 20px;">--進入--</span></router-link></el-button>
  </div>
</div>
</div> 
</div>

  </template>
  
  <style>
  
    #image{
        background-image: url(../assets/images/背景.jpg);
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        padding-top: 130px;
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