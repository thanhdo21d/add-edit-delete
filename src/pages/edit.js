import axios from "axios"
import { useEffect, useState } from "../../lib"

const edit = (id) => {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
       .then(({data})=>{
          setProduct(data)
       })

  },[])
  useEffect(()=>{
    const form = document.querySelector("#form-edit")
    const name = document.querySelector("#name")
    const categories = document.querySelector("#categories")
    const description = document.querySelector("#description")
    const image = document.querySelector("#image")
    const price = document.querySelector("#price")

    //
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const editproduct = {
        name :name.value,
        categories :categories.value,
        description :description.value,
        image :image.value,
        price :price.value,
      }
      axios.put(`http://localhost:3000/products/${id}`,editproduct)
      .then(()=>{
        router.navigate('/')
      })

    })

  })


  return `
  <form id="form-edit" action="">
      <label for="">name</label>
       <input value="${product.name}" class="border-2" id="name" type="text"><br />

       <label for="">categories</label>
       <input value="${product.categories}" class="border-2" id="categories" type="text"><br />

       <label for="">description</label>
       <textarea value="${product.description}"  class="border-2" id="description" type="text">
       </textarea><br />

       <label for="">image</label>
       <input value="${product.image}" class="border-2" id="image" type="text"><br />

       <label for="">price</label>
       <input value="${product.price}" class="border-2" id="price" type="text"><br />

       <button  class="border-2 bg-red-600"  type="submit">add</button>
  </form>
  `
}

export default edit