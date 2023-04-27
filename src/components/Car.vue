<script async setup>
import axios from 'axios';
import { getTypeProduct,carHandler } from '../store';
const store = getTypeProduct();
const store1= carHandler();
  store1.getProducts();
  //商品數量增加
const plus = (id) => {
  axios.put('http://localhost:8080/v1/car/updatePlus/' + id)
    .then(res => {
      console.log(res);
      axios.get('http://localhost:8080/v1/car/getproducts')
        .then(res => {
          Products.value = res.data;
          console.log(res.data);
        })
    })
}

//商品數量減少
const Less = (id) => {
  axios.put('http://localhost:8080/v1/car/updateLess/' + id)
    .then(res => {
      console.log(res);
      axios.get('http://localhost:8080/v1/car/getproducts')
        .then(res => {
          Products.value = res.data;
          console.log(res.data);
        })
    })
}

//刪除商品
const Delete = (id) => {
  axios.delete('http://localhost:8080/v1/car/delete/' + id)
    .then((res) => {
      store1.getProducts();
      store.getcount();
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
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Food"
          replace><span>Food</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Drink"
          replace><span>Drink</span></router-link></button>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Fruit"
          replace><span>Fruit</span></router-link></button>
      <router-link to="/Car"><button type="button" class="btn btn-dark position-relative" style="margin-left: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-cart2"
            viewBox="0 0 16 16">
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ store.num }}
          </span>
        </button></router-link>
      <button type="button" class="btn btn-dark" style="margin-left: 8px;"><router-link to="/Jasper"
          replace><span>ex</span></router-link></button>
    </div>
    <!--此為user 訊息-->
    <div class="col-3" style="margin-left: -20px; margin-top: 100px;padding-left: 130px;">
      <a href="#">登入</a>
    </div>
  </div>

  <table class="table" style="margin-top: 60px; width: 80%;margin-left: 150px;">
    <thead>
      <tr>
        <th scope="col" style="width:300px">image</th>
        <th scope="col">Name</th>
        <th scope="col">price</th>
        <th scope="col" style="padding-left: 25px;">quantity</th>
        <th scope="col">handler</th>
      </tr>
    </thead>
    <tbody class="table-group-divider" v-for=" p in store1.Products" :key="p.id">
      <tr>
        <th scope="row"><img :src="p.img"></th>
        <td>
          <p style="margin-top:20px;">{{ p.productName }}</p>
        </td>
        <td>
          <p style="margin-top:20px" v-text="p.price * p.count"></p>
        </td>
        <td>
          <button style="width: 30px; height: 30px; margin-top: 21px;" @click="plus(p.id)">+</button>
          <input style="width: 30px;" v-model="p.count">
          <button style="width: 30px; height: 30px;" @click="Less(p.id)">-</button>
        </td>
        <td>
          <button type="button" class="btn btn-danger" style="width: 50px;height: 30px; margin-top: 20px;"
            @click="Delete(p.id, index)"><span style="font-size: 10px;">刪除</span></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
img {
  width: 100px;
  height: 100px;
}

th {

  width: 250px;
}

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
}</style>