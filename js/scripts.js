const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')
  //para la alerta
  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title" style="color: red;">${item.title}</h6>
            </td>
            <td class="table__price text-white-50" style="color: red;"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento" style="width: 50px;">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    if (item.title === "MDMA" && item.cantidad >= 1) {
      item.precio = "35";
    }
    if (item.title === "MDMA" && item.cantidad >= 5) {
      item.precio = "20";
    }
    if (item.title === "MDMA" && item.cantidad >= 25) {
      item.precio = "15";
    }
    if (item.title === "MDMA" && item.cantidad >= 50) {
      item.precio = "10";
    }
    if (item.title === "XTC Audi 319mg" && item.cantidad >= 1) {
      item.precio = "5";
    }
    if (item.title === "XTC Audi 319mg" && item.cantidad >= 20) {
      item.precio = "4";
    }
    if (item.title === "XTC Audi 319mg" && item.cantidad >= 50) {
      item.precio = "3";
    }
    if (item.title === "XTC Audi 319mg" && item.cantidad >= 100) {
      item.precio = "2";
    }
    if (item.title === "Cocaina" && item.cantidad >= 1) {
      item.precio = "10";
    }
    if (item.title === "Cocaina" && item.cantidad >= 1000) {
      item.precio = "1.5";
    }
    if (item.title === "Spedd" && item.cantidad >= 1) {
      item.precio = "10";
    }
    if (item.title === "Spedd" && item.cantidad >= 50) {
      item.precio = "7";
    }
    if (item.title === "Spedd" && item.cantidad >= 100) {
      item.precio = "6";
    }
    if (item.title === "Spedd" && item.cantidad >= 500) {
      item.precio = "3";
    }
    if (item.title === "Spedd" && item.cantidad >= 1000) {
      item.precio = "2";
    }
    if (item.title === "Mephedrone" && item.cantidad >= 1) {
      item.precio = "35";
    }
    if (item.title === "Mephedrone" && item.cantidad >= 5) {
      item.precio = "30";
    }
    if (item.title === "Mephedrone" && item.cantidad >= 25) {
      item.precio = "20";
    }
    if (item.title === "Mephedrone" && item.cantidad >= 50) {
      item.precio = "16";
    }
    if (item.title === "Mephedrone" && item.cantidad >= 100) {
      item.precio = "14";
    }
    if (item.title === "Crystal Meth" && item.cantidad >= 1) {
      item.precio = "70";
    }
    if (item.title === "Crystal Meth" && item.cantidad >= 5) {
      item.precio = "60";
    }
    if (item.title === "Crystal Meth" && item.cantidad >= 10) {
      item.precio = "50";
    }
    if (item.title === "Crystal Meth" && item.cantidad >= 25) {
      item.precio = "40";
    }
    if (item.title === "Crystal Meth" && item.cantidad >= 50) {
      item.precio = "30";
    }
    if (item.title === "Ritalin 20mg LA , Methylphenidate 20mg adult" && item.cantidad >= 1) {
      item.precio = "10";
    }
    if (item.title === "Ritalin 20mg LA , Methylphenidate 20mg adult" && item.cantidad >= 20) {
      item.precio = "7.5";
    }
    if (item.title === "Lean actavis rep" && item.cantidad >= 1) {
      item.precio = "80";
    }
    if (item.title === "Lean actavis rep" && item.cantidad >= 2) {
      item.precio = "60";
    }
    if (item.title === "Promethazine" && item.cantidad >= 1) {
      item.precio = "5";
    }
    if (item.title === "Promethazine" && item.cantidad >= 50) {
      item.precio = "3";
    }
    if (item.title === "Zoplidem" && item.cantidad >= 1) {
      item.precio = "5";
    }
    if (item.title === "Zoplidem" && item.cantidad >= 20) {
      item.precio = "4";
    }
    if (item.title === "cannabis (marihuana - Weed)" && item.cantidad >= 1) {
      item.precio = "10";
    }
    if (item.title === "cannabis (marihuana - Weed)" && item.cantidad >= 12) {
      item.precio = "8.333333333334";
    }
    if (item.title === "Nicole kush" && item.cantidad >= 1) {
      item.precio = "6";
    }
    if (item.title === "Ketama" && item.cantidad >= 1) {
      item.precio = "6.6";
    }
    if (item.title === "Gorilla glue" && item.cantidad >= 1) {
      item.precio = "5.6";
    }
    if (item.title === "Kinder Bueno" && item.cantidad >= 1) {
      item.precio = "5.4";
    }
    if (item.title === "Rolex" && item.cantidad >= 1) {
      item.precio = "4.4";
    }
    if (item.title === "Porsche" && item.cantidad >= 1) {
      item.precio = "4.4";
    }
    if (item.title === "Bentley" && item.cantidad >= 1) {
      item.precio = "4.2";
    }
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')
  //alerta de remover
  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}
//en el input text para agregar desde input
function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}
//para guardar l en cache
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}
//para mostrar el  cache
window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}