<script setup> 
import axios from "axios";
import { reactive, ref } from "vue";
import Nav from '../components/NavBar.vue' 
//根據uri 獲取商品id
const val = location.search.substring(1);
console.log(val)
const Product = ref({});

let num = reactive({ idx: 0 })
axios.get('http://localhost:8080/v1/car/getcount')
  .then((res) => {
    num.idx = res.data;
  })


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
     axios.get('http://localhost:8080/v1/car/getcount')
    .then((res) => {
    num.idx = res.data;
  })
    })
    
}
</script>

<template>
 <div class="row">
    <!--此為logo-->
    <div class="col-3 logo" >
    <img src="../assets/images/vue.jpg">  
    </div>
    <!--此為導航-->
    <div style="margin-top: 50px;padding-left: 70px;" class="col-6">
      <button type="button" class="btn btn-dark" ><router-link to="/"><span>HOME</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Food" replace><span>Food</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Drink" replace><span>Drink</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Fruit" replace><span>Fruit</span></router-link></button>
      <router-link to="/Car"><button type="button" class="btn btn-dark position-relative" style="margin-left: 8px;" >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="margin-left: 1px;" >
          {{ num.idx }}
        </span>
      </button></router-link>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Jasper" replace><span>ex</span></router-link></button>
    </div>
    <!--此為user 訊息-->
  <div class="col-3" style="margin-left: -20px; margin-top: 100px;padding-left: 130px;">
    <span><b>你好!</b></span><span><b>asdasdada</b></span>
    <a href="#">登入</a>
  </div>
  </div>

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
    <button href="#" class="btn btn-primary" @click="saveCar(Product.id)" style="width: 110px;height: 50px; margin-left: 120px;">加入購物車</button>
  </div>
</div>



</template>



<style>
.row {
  width: 101%;
  height: 20%;
  background-color: rgb(15, 15, 87);
}

.logo {
  margin-left: 20px;
}

.row button {
  height: 70px;
  width: 80px;
}

.row span {
  margin-left: 0px;
  color: white;
  font-size: 16px;
}
</style>