const form = document.getElementById("form")
const input = document.getElementById("input")
var ul1 = document.getElementById("todos")
var items = document.querySelectorAll("li")


form.addEventListener("submit",(e) =>
{
   e.preventDefault();
   var v = input.value;
   addtodo(v);
   input.value = ""
   
})

function addtodo(value)
{
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(value));
   ul1.appendChild(li)
   li.addEventListener("click", () =>{
     li.classList.toggle("completed")
   })
   
}





