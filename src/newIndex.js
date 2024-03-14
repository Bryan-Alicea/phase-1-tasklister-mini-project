//code here

let form = document.querySelector('#create-task-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    createTask(event.target.new_task_description.value)
    form.reset()
})

function createTask(task){
    let taskTag = document.createElement('p')
    let button = document.createElement('button')
    
    taskTag.textContent = `${task}  `
    button.textContent = "X"

    taskTag.appendChild(button)
    let priority = createPriotity(taskTag)
    priority.style.marginLeft = "10px"
    taskTag.appendChild(priority)
  
    document.querySelector('#tasks').appendChild(taskTag)
    button.addEventListener('click', deleteTask)
}

function deleteTask(event){
    event.target.parentNode.remove()
}

function createPriotity(event){
    let select = document.createElement('select')

    let placeholderOption = document.createElement('option');
    placeholderOption.textContent = "Select a color";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;

    select.appendChild(placeholderOption)
    
    let colors = ['Red', 'Yellow', 'Green']

    colors.forEach(color => {
        let option = document.createElement('option')
        option.textContent = color
        select.appendChild(option)
    })
   return select
}