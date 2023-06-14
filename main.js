let wrapper = document.querySelector('.list')
let loading = document.querySelector('.lds-hourglass')
let baseURL = 'https://64861ed1a795d24810b7ba35.mockapi.io/api'

let getData = async ()=>{
  try {
    let request = await fetch(`${baseURL}/users`)
    let data = await request.json()
    
  
    data.forEach((item)=>{
      let li = `<li class="item">
      <img src="${item.avatar}" alt="avatar" class="img" />
      <h2 class="name_heading">${item.name}</h2>
      <div class="btn_box">
      <button class="edit btn">
      <img src="./img/pencil.png" alt="edit icon" class="icon_img" />
      </button>
      <button class="delete btn">
      <img src="./img/delete.png" alt="delete icon" class="icon_img" />
      </button>
      </div>
      </li>`
      wrapper.insertAdjacentHTML('beforeend',li)
    })
    
  } catch(err){
    alert(err)
  }
}
getData()