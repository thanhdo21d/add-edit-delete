
import axios from "axios"
import { router, useEffect, useState } from "../../lib"
const addItem = ()=>{
  useEffect(()=>{
    const  formAdd   = document.getElementById("form-add")
    const  name   = document.getElementById("name")
    const  categories   = document.getElementById("categories")
    const  description   = document.getElementById("description")
    const  image   = document.getElementById("image")
    const  price   = document.getElementById("price")
     
    formAdd.addEventListener("submit",(e)=>{
      e.preventDefault()

      const addProduct ={
        name :name.value,
        categories :categories.value,
        description :description.value,
        image :image.value,
        price :price.value,
      }
      axios.post("http://localhost:3000/products",addProduct)
      .then(()=>{
        router.navigate('/')
      })
    })

  })
  return `
  <form id="form-add" action="">
  <div>
    <label for="">name</label>
    <input class="border-2" type="text" id="name">
  </div>
  <div>
    <label for="">categories</label>
    <input class="border-2" type="text" id="categories">
  </div>
  <div>
    <label for="">description</label>
    <input class="border-2" type="text" id="description">
  </div>
  <div>
    <label for="">image</label>
    <input class="border-2" type="text" id="image">
  </div>
  <div>
    <label for="">price</label>
    <input class="border-2" type="text" id="price">
  </div>
  <div>
   <button class="border-2" type="submit">add</button>
  </div>
 </form>
  
  `
}
export default addItem