const TASKINPUT = document.querySelector('#task');
const DURATIONINPUT = document.querySelector('#duration');
const ADD = document.querySelector('.btn');
// const TASKS = document.querySelector('#task-list').addEventListener('click', deleteTask);

// const DELETEBTN = document.querySelector('.icon');

//The code below is for adding a div on submit
// ADD.addEventListener('click', (e) => {
//     e.preventDefault();

//     let task = TASKINPUT.value;
//     let duration = DURATIONINPUT.value;

//     const ITEM = document.createElement('div');
//     ITEM.innerHTML = `
//     <p>Task: ${task}</p>
//     Duration: ${duration}
//     <ion-icon name="close-circle-outline"></ion-icon>
//     `
//     document.querySelector('.new-div').append(ITEM);
    
// })

ADD.addEventListener('click', (e) => {
    //prevent default form behaviour on submit
    e.preventDefault(); 
    
    function validateInput(){
        const taskField = document.querySelector('#task').value;
        const durationField = document.querySelector('#duration').value;
        const noField = document.querySelector('.icon');

        if(taskField == '' || durationField == ''){
            alert('Input fields cannot be empty');
            noField.style.display = "none";
        }
    }
    validateInput();
   
    //The code below is for adding a table on submit
    const tableLists = document.querySelector('#task-list');
    const tableRow = document.createElement('tr');

    let task = TASKINPUT.value.trim();
    let duration = DURATIONINPUT.value.trim();

    tableRow.innerHTML =`
    <td>${task}</td>
    <td>${duration}</td>
    <td><ion-icon name="close-circle-outline" class="icon"></ion-icon></td>
    `;
        
    tableLists.appendChild(tableRow);

  //Function to delete task after completing it
  const closeToDo = document.querySelectorAll('.icon');
  var i;
    for(i = 0; i < closeToDo.length; i++ ){
        
        closeToDo[i].onclick = function () {
            var done = this.parentElement.parentElement;
         
            done.style.display = "none";
        }
    }

    //clear Input fields after submitting

    function clearFields(){
        document.querySelector('#task').value = ' ';
        document.querySelector('#duration').value = ' ';
    }
    clearFields();


   
})



/*const inputFields = document.querySelectorAll('input');
const submitButton = document.querySelector('button');
const arti = document.querySelector('article');

let taskValue = inputFields[0].value;
let reminderValue = inputFields[1].value;
const todoList = []

function submitHandler(){
     taskValue = inputFields[0].value.trim();
 reminderValue = inputFields[1].value.trim();
if(taskValue == ''|| reminderValue == ''){
    alert('Input fields can\'t be empty')
}
else if(taskValue.length > 20){
    alert('Task can\'t be more than 20 letters long')
}

 const todoHandler = {
        id : Math.random().toString(),
        Task: taskValue, 
        Deadline: reminderValue
    }

todoList.push(todoHandler);
console.log(todoList);
resetInput();
addToDoList(todoHandler.id,todoHandler.Task,todoHandler.Deadline)

}

function resetInput(){
inputFields[0].value = ' ';
    inputFields[1].value = ' ';
}*/

    
// }
/*function addToDoList(id,tasks,remind){
    const displayElem = document.createElement('div');
    displayElem.innerHTML = `
     <h3>Task : ${tasks} </h3>
        <p>Deadline : ${remind} </p>
         <img src="close.png" alt="" class="close-icon">
`
    if (taskValue == '' || reminderValue == '' || taskValue.length > 20){
    return;
}
    arti.append(displayElem)
    const closeToDo = document.querySelectorAll('.close-icon')
 
  var i;
    for(i = 0; i < closeToDo.length; i++ ){
        
        closeToDo[i].onclick = function () {
            var div = this.parentElement;
         
            div.style.display = "none";
        }
    }
}

submitButton.addEventListener('click', submitHandler)*/


