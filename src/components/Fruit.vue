<script  setup>
import axios from 'axios';
import { reactive, ref, watch } from 'vue';

let page = ref({});
 let product = ref();
 let pagenum = ref(1);
 
 const change = (n)=>{
        axios.get('http://localhost:8080/v1/product/getproduct/3/'+n)
        .then((res)=>{
            page.value=res.data;
            console.log(page)
            product.value=res.data.content
        })
    }

    axios.get('http://localhost:8080/v1/product/getproduct/3/'+pagenum.value)
        .then((res)=>{
            page.value=res.data;
            console.log(page)
            product.value=res.data.content
        })

        
    //點擊事件加入購物車儲存至car表        
const saveCar=(id)=>{
    axios.post('http://localhost:8080/v1/car/save/'+id)
    .then(res=>{
        console.log(res.data);
        window.alert(res.data);
        location.reload();
    })
   
    
}           
</script>


<template>
    <el-row>
    <el-card class="box-card" style="margin-top: 30px; margin-left: 60px;" v-for="p in product">
    <template #header>
        <div class="card-header">
       <img  :src="p.img"  
       style="width:200px ; height: 150px;">
       </div>
      <div class="card-header">
        <span style="text-align: center; display:block;" v-text="p.name" ></span>
      </div>
    </template>
    <div style="margin-left:30px">價格:<span v-text="p.price"></span><span>元</span></div>
    <router-link :to="'/Detail?'+p.id"><el-button color="#626aef" style="width: 60px;">詳細</el-button></router-link>
    <el-button color="#626aef" style="width: 100px;" @click="saveCar(p.id)">加入購物車</el-button>
</el-card>
</el-row>
<nav aria-label="Page navigation example" style="margin-left: 600px; margin-top: 100px;">
  <ul class="pagination">
    <li class="page-item" v-for="n in page.totalPages" >
        <a class="page-link" href="#" >
            <span v-text="n" style="font-size: medium;" @click="change(n)"></span>
        </a>
    </li>
  </ul>
</nav>
</template>





<style scoped>
    a{
        margin-left: 20px;
    }
    button{
        margin-left: 10px;
        width: 130px;
        height: 40px;
    }
    span{
        font-size: 30px;
        color:black
    }
   


</style>
