//Formulario crud
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar') 

let itens
let id

//banco localstorage 
const getItensBD = () => JSON.parse(localStorage.getItem('bdfunc')) ?? []
const setItensBD = () => localStorage.setItem('bdfunc', JSON.stringify(itens))

function loadItens(){
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

loadItens()

function insertItem(item, index) {
  let tr = document.createElement('tr')
  
  tr.innerHTML = `
  <td>${item.nome}</td>
  <td>${item.funcao}</td>
  <td>R$ ${item.salario}</td>
  <td class="acao">
    <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
  </td>
  <td class="acao">
    <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
  </td>
  `
  
  tbody.appendChild(tr)
}


//abre o formulario de editar
function editItem(index){
  openModal(true, index)
}
//abre formulario de deletar
function deleteItem(index){
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}


//Abre o formulario
function openModal(edit = false, index =0){
  modal.classList.add('active')
  
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1){
      modal.classList.remove('acitve')
    }
  }
  
  //Editar
  if (edit) {
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    id = index
  }else{
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }
}


//Botão Salvar
btnSalvar.onclick = e =>{
  if(sNome.value == '' || sFuncao.value == '' || sSalario.value == ''){
    return
    console.log(e);
  }
  
  /// prevent Default  = prevenir la informacion 
  e.preventDefault();
  
  if(id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value
  }else{
    itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
  }
  
  setItensBD()
  
  modal.classList.remove('active')
  loadItens()
  id = undefined
}

