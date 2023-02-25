import { router, useEffect, useState } from "../../lib"

const home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  },[])
  useEffect(() => {
    const btns = document.querySelectorAll("#btn-delete")
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id
        deleteItem(id)
      })
    })
  })
  const deleteItem = (id) => {
    fetch (`http://localhost:3000/products/${id}`,{
      method: "DELETE",
    })
    .then(()=>{
      router.navigate('/')
    })
  }
  return `
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>categories</th>
        <th>description</th>
        <th>image</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
    ${data.map((item, index) => {
    return `
      <tr>
      <th>${item.name}</th>
      <th>${item.categories}</th>
      <th>${item.description}</th>
      <th> <img src="${item.image}" alt=""></th>
      <th>${item.price}</th>
      <th><button id="btn-delete" data-id="${item.id}">delete</button></th>
    </tr>
      
      `
  })}
     
    </tbody>
  </table>
  `
}
export default home