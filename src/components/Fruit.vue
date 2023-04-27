<script  setup>
import { getTypeProduct } from '../store/index.js'

const store = getTypeProduct();

//初始化獲得購物車內數量
store.getcount();

//加入購物車方法
const saveCar = (id) => {
  store.saveProductToCar(id);
}

//根據type 初始化商品資訊
store.getproductbytype(3);

//點擊分頁取得分頁num 傳入獲得分頁商品
const change = (n) => {
  store.getProduct(3, n);
} 
</script>


<template>
  <div class="row">
    <!--此為logo-->
    <div class="col-3" id="logo">
      <img src="../assets/images/vue.jpg">
    </div>
    <!--此為導航-->
    <div style="margin-top: 50px;padding-left: 90px;" class="col-6" id="nav">
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Food"
          replace><span>Food</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Drink"
          replace><span>Drink</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Fruit"
          replace><span>Fruit</span></router-link></button>
      <router-link to="/Car"><button type="button" class="btn btn-dark position-relative" style="margin-left: -8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-cart2"
            viewBox="0 0 16 16">
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style="margin-left: 1px;" id="count">
            {{ store.num }}
          </span>
        </button></router-link>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Jasper"
          replace><span>ex</span></router-link></button>
    </div>
    <!--此為user 訊息-->
    <div class="col-3" style="margin-left: -20px; margin-top: 100px;padding-left: 130px;" id="login">
      <router-link to="/"><a href="#">登出</a></router-link>
    </div>
  </div>

  <el-row class="pro">
    <el-card class="box-card" style="margin-top: 30px; margin-left: 60px;" v-for="p in store.product">
      <template #header>
        <div class="card-header">
          <img :src="p.img" style="width:200px ; height: 150px;">
        </div>
        <div class="card-header">
          <span style="text-align: center; display:block;" v-text="p.name"></span>
        </div>
      </template>
      <div style="margin-left:40px; margin-top: -20px;">價格:<span v-text="p.price"></span><span>元</span></div>
      <router-link :to="'/Detail?' + p.id"><el-button color="#626aef"
          style="width: 60px;margin-left: -2px;">詳細</el-button></router-link>
      <el-button color="#626aef" style="width: 100px;" @click="saveCar(p.id)">加入購物車</el-button>
    </el-card>
  </el-row>
  <nav id="page" aria-label="Page navigation example" style="margin-left: 600px; margin-top: 100px;">
    <ul class="pagination">
      <li class="page-item" v-for="n in store.page.totalPages">
        <a class="page-link" href="#">
          <span v-text="n" style="font-size: medium;" @click="change(n)"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>



<style scoped>
a {
  margin-left: 20px;
}

button {
  margin-left: 10px;
  width: 130px;
  height: 40px;
}

span {
  font-size: 30px;
  color: black
}

.row {
  width: 101%;
  height: 20%;
  background-color: rgb(15, 15, 87);
}

#logo {
  margin-left: 20px;
}

.row button {
  height: 70px;
  width: 80px;
}
.row span {
  margin-left: -20px;
  color: white;
  font-size: 16px;
}
@media screen and (max-width: 500px) {
  #logo{
    display: none;
  }
  #nav{
    flex-wrap:wrap;
    width: 100%;
  }
  #nav button{
   padding-left: -20px;
    width: 40px;
    height:40px;
  }
  #nav span{
    font-size: 8px;
  }
  #login{
    display: none;
  }

  #page{
   margin-left: -600px;
  }
  .pagination{
    margin-left: -480px;
  }
}
</style>
