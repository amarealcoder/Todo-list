const TASKINPUT = document.querySelector('#task');
const DURATIONINPUT = document.querySelector('#duration');
const ADD = document.querySelector('.btn');
const tableLists = document.querySelector('#task-list');


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
    
   
   
    //The code below is for adding a table on submit
    
    const tableLists = document.querySelector('#task-list');
    const tableRow = document.createElement('tr');

    let task = TASKINPUT.value.trim();
    let duration = DURATIONINPUT.value.trim();
        
    if(task === '' || duration == ''){
        alert('The task and duration input fields cannot be empty');
        return
    }      
    else{
    tableRow.innerHTML =`
    <td>${task}</td>
    <td>${duration}</td>
    <td><ion-icon name="close-circle-outline" class="icon"></ion-icon></td>
    `;
    
    tableLists.appendChild(tableRow);
    }
    
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


