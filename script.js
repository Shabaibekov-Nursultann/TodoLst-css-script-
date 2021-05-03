let main = document.createElement('main')
main.classList.add('container')
document.body.prepend(main)

let projectName = document.createElement('h1')
projectName.innerHTML = 'TodoList'

main.prepend(projectName)

let listBlock = document.createElement('div')
main.append(listBlock)

let firstDiv = document.createElement('div')
listBlock.append(firstDiv)
firstDiv.className = 'firstDiv'

let textIn = document.createElement('input')
textIn.setAttribute('placeholder', 'Type here ...')
textIn.className = 'form-control inp'
firstDiv.append(textIn)

let setDate = document.createElement('input')
setDate.className = 'form-control'
setDate.setAttribute('type', 'date')
firstDiv.append(setDate)

let addButton = document.createElement('button')
addButton.innerHTML = 'Add'
addButton.className = 'btn btn-primary'
firstDiv.append(addButton)

let list = document.createElement('ul')
listBlock.append(list)
list.className = 'listButton'
let data = [
  {
    text: 'Todo',
    complete: false,
    date: '2020-01-01',
  },
  {
    text: 'Go to supermarket',
    complete: true,
    date: '2019-02-02',
  },
  {
    text: 'go to cinema',
    complete: false,
    date: '2018-03-03',
  },
]

function deleteMytodo(id) {
  data.splice(id, 1)
  renderTodos(data)
}

function completeMytodo(id) {
  data[id].complete = !data[id].complete
  renderTodos(data)
}

const renderTodos = (arr) => {
  list.innerHTML = ''
  arr.map((el, index) => {
    return (list.innerHTML += `<li class='todoItem li1' 
    id="${index}">
    <span>${el.date}</span>
    <span style="text-decoration: ${el.complete ? 'line-through' : 'none'}">${
      el.text
    }</span>
    <button type="button" class="btn btn-primary  btn1"   onclick="completeMytodo(${index})">complete</button>
    <button type="button" class="btn btn-danger" onclick="deleteMytodo(${index})">delete</button></li>`)
  })
}

renderTodos(data)

const addTodo = () => {
  if (textIn.value != '') {
    data.push({
      text: textIn.value,
      complete: false,
      date: setDate.value,
    })

    renderTodos(data)
  }
}

addButton.addEventListener('click', addTodo)
