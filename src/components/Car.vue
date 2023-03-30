<script async setup>
import {  nextTick, reactive, ref} from 'vue';
import axios from 'axios';




 let Products =ref();
 

 axios.get('http://localhost:8080/v1/car/getproducts')
      .then(res=>{
        Products.value= res.data;
        console.log(res.data);
      })



const  plus=(id)=>{
  axios.put('http://localhost:8080/v1/car/updatePlus/'+id)
      .then(res=>{
        console.log(res);
        axios.get('http://localhost:8080/v1/car/getproducts')
      .then(res=>{
        Products.value= res.data;
        console.log(res.data);
      })
      })
   
}

const  Less=(id)=>{
  axios.put('http://localhost:8080/v1/car/updateLess/'+id)
      .then(res=>{
        console.log(res);
        axios.get('http://localhost:8080/v1/car/getproducts')
      .then(res=>{
        Products.value= res.data;
        console.log(res.data);
      })
      })
}


const Delete=(id,index)=>{
      axios.delete('http://localhost:8080/v1/car/delete/'+id)
      .then(res=>{
        console.log(res);
        axios.get('http://localhost:8080/v1/car/getproducts')
      .then(res=>{
        Products.value= res.data;
        console.log(res.data);
      })
      })
      
      
}



</script>

<template>
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
  <tbody class="table-group-divider" v-for=" p in Products"  :key="p.id">
    <tr>
      <th scope="row"><img :src="p.img"></th>
      <td><p style="margin-top:20px;" >{{ p.productName }}</p></td>
      <td><p style="margin-top:20px" v-text="p.price*p.count"></p></td>
      <td>
        <button style="width: 30px; height: 30px; margin-top: 21px;" @click="plus(p.id)">+</button>
        <input style="width: 30px;" v-model="p.count" >
        <button style="width: 30px; height: 30px;" @click="Less(p.id)">-</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger" style="width: 50px;height: 30px; margin-top: 20px;" @click="Delete(p.id,index)"><span style="font-size: 10px;">刪除</span></button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<style>
img{
    width: 100px;
    height: 100px;
}
th{

    width: 250px;
}


</style>