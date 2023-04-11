<script setup> 
import axios from "axios";
import { reactive, ref } from "vue";

//根據uri 獲取商品id
const val = location.search.substring(1);
console.log(val)
const Product = ref({});
//獲得取得id 獲取商品資訊
axios.get('http://localhost:8080/v1/product/getproduct/'+val)
.then(res=>{
    Product.value=res.data;
    console.log(Product);
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
  
  <div class="card" style="width: 400px; margin-left: 500px;margin-top: 100px;">
  <img  class="card-img-top"  :src="Product.img" style="width:300px ; height: 200px; padding-left: 90px;">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>{{ Product.name }}</b></h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="text-align: center;"><b>{{Product.price}}</b><b>元</b></li>
  </ul>
  <div class="card-body">
    <button href="#" class="btn btn-primary" @click="saveCar(Product.id)" style="width: 110px; margin-left: 120px;">加入購物車</button>
  </div>
</div>



</template>



<style>

</style>