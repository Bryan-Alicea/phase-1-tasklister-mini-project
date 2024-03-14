document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    createTask(event.target.new_task_description.value)
    form.reset()
  })
});

function createTask(task){
  let pTag = document.createElement('p')
  let button = document.createElement('button')
  button.addEventListener('click', deleteTask)
  button.textContent = "X"
  pTag.textContent = `* ${task}  `
  pTag.appendChild(button)
  document.querySelector("#tasks").appendChild(pTag)
  
}

function deleteTask(event){
  event.target.parentNode.remove()
}