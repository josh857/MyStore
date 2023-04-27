import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

//type  的方法
export const getTypeProduct = defineStore('product', () => {
  //此為接page對象
  let page = ref({});
  //此為商品list
  let product = ref();
  //此為當前頁數
  let pagenum = ref(1);
  //此為購物車數量
  let num = ref([])
  //初始化獲得分頁的type1 商品
  const getproductbytype = (type) => {
    axios.get('http://localhost:8080/v1/product/getproduct/' + type + '/' + pagenum.value)
      .then((res) => {
        page.value = res.data;
        console.log(page)
        product.value = res.data.content
      })
  }
  //獲得根據分頁給的頁數找尋type1的分頁查詢
  const getProduct = (type, num) => {
    axios.get('http://localhost:8080/v1/product/getproduct/' + type + '/' + num)
      .then((res) => {
        page.value = res.data;
        console.log(page)
        product.value = res.data.content
      })
  }

  //獲得當前數據庫中的count
  const getcount = () => {
    axios.get('http://localhost:8080/v1/car/getcount')
      .then((res) => {
        num.value = res.data;
      })
  }
  //儲存至購物車的方法當儲存成功購物車數量則++
  const saveProductToCar = (id) => {
    axios.post('http://localhost:8080/v1/car/save/' + id)
      .then(res => {
        console.log(res.data);
        window.alert(res.data);
        if (res.data === "儲存成功") {
          num.value++;
        }
      })
  }
  return { page, product, getProduct, getproductbytype, num, saveProductToCar, getcount }
})

//購物車方法
export const carHandler = defineStore('car',()=>{
  //商品列表
  const Products = ref([]);
  //獲得購物車內所有商品
  const getProducts = ()=>{
    axios.get('http://localhost:8080/v1/car/getproducts')
    .then(res => {
    Products.value = res.data;
  })
  }
  
  return { Products , getProducts}
  
})



