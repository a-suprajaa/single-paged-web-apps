const add = document.getElementById("add");
const form = document.getElementById("form");
const textarea = document.getElementById("text")
 
add.addEventListener("click",(e) =>
{   console.log("note clicked")
    
    console.log(textarea.value)
    e.preventDefault();
    addnote();
    
})

function addnote()
{
   const note = document.createElement("div")
   note.classList.add("notes")
   note.innerHTML = `<div>
   <button class = delete>delete</button>
   <p class="card-text"> ${textarea.value}</p>
   
   </div>
   `
   console.log(textarea.value)
   document.body.appendChild(note);
    textarea.value = ""
    const delete1 = note.querySelector(".delete")
    delete1.addEventListener("click",() =>
    {
        //note.innerHTML = "";
        document.body.removeChild(note)
    })



    
}