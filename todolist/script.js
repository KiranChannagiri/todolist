
let items = document.querySelector(".items");
let task = document.querySelector(".task");
document.querySelector(".add").addEventListener("click",()=>
{
    if(task.value=="")
    {
        alert("Kindly enter task")
    }
    else 
    {
        let p=document.createElement("p");
        items.appendChild(p);
        p.textContent=task.value;
        items.classList.add("opacityone");
        let i = document.createElement("i");
        p.appendChild(i);
        i.classList.add("fa-solid");
        i.classList.add("fa-trash-can");
        task.value="";
        i.addEventListener("click", deleteTask);
    } 
});
function deleteTask(event) {
    let taskItem = event.target.parentElement;
    taskItem.remove();
}