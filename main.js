let toDoTextbox = document.getElementById("to-do-textbox");
let addBtn=document.getElementById("add-btn");
let toDoList=document.getElementById("to-do-list");
function addTodoList(){
    let toDoTextboxData=toDoTextbox.value;
    let li=document.createElement('li');
    li.innerText=toDoTextboxData;
    toDoList.appendChild(li);
    toDoTextbox.value="";
    toDoTextbox.focus();
    let trashBtn=document.createElement("i"); 
    trashBtn.classList.add("fa","fa-trash");
    li.appendChild(trashBtn);
    console.log(trashBtn);
} 
addBtn.addEventListener('click',addTodoList);

toDoTextbox.addEventListener("keypress", function(hi){
    if (hi.key === "Enter") {
      document.getElementById("add-btn").click();
    }
  });
// function hi(hello){

//     if (hello.key === "Enter") {
//         document.getElementById("add-btn").click();
//     }
// }
// toDoTextbox.addEventListener("keypress",hi) 
function deleteTodoList(event){
    // alert("test");
    // console.log(event.target.classList[1]);
    console.log(event);
    

    if(event.target.classList[0]==="fa"){
        // alert("please delete");
         //here we have to delete the whole li when we click the delete icon.delete icon is in the i tag.li is the parent element of the i tag //
     let item=event.target.parentElement;
    //  console.log(item);
    item.remove();

    }
}

toDoList.addEventListener("click",deleteTodoList);
