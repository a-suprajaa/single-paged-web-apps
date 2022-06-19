
const canvas = document.getElementById("canvas")
const  increase = document.getElementById("increase")
const  decrease = document.getElementById("decrease") 
const size = document.getElementById("size")
const colour = document.getElementById("color")
const clear = document.getElementById("clear")
const ctx = canvas.getContext("2d")

 var size1 = 30;
 var colour1 = "black";

 var x = undefined
 var y = undefined
 var action = false

increase.addEventListener("click",() =>
{  if(size1 < 50)
   size1 +=5;
   else
   size1=50;
   updatesize(size1);
})

function updatesize(size1)
{
    size.innerText = size1;
}

decrease.addEventListener("click",() =>
{  if(size1 > 5)
   size1 -=5;
   else
   size1=5;
   updatesize(size1);
})

colour.addEventListener("change",(e) =>
{
   colour1 = e.target.value;
   console.log(colour1)
})

clear.addEventListener("click",() =>
{
    ctx.clearRect(0,0,canvas.height,canvas.width)
    console.log("canvas cleared")
    
})

canvas.addEventListener("mousedown", (e) =>
{
   action = true;
   x = e.offsetX;
   y = e.offsetY;

})
canvas.addEventListener("mouseup", (e) =>
{
   action = false;
   x = undefined;
   y = undefined;

})

canvas.addEventListener("mousemove",(e) =>{
    if(action == true ){
       console.log("working")
        x1 = e.offsetX
        y1 = e.offsetY
       drawCircle(x1,y1);
        drawLine(x,y,x1,y1);
        x=x1;
        y=y1;
    }
})
function drawCircle(x1,y1)
{
    /*ctx.beginPath();
ctx.arc(x1, y1, .5, 0, 2 * Math.PI, false);
ctx.lineWidth = size1;
ctx.strokeStyle = colour1;
ctx.fillStyle = colour1;
ctx.stroke();
ctx.fill()*/
ctx.fillStyle = colour1;

ctx.beginPath();
ctx.arc(x1, y1, size1/2, 0, 2 * Math.PI);
ctx.fill();

}

function drawLine(x,y,x1,y1)
{
ctx.strokeStyle = colour1;
ctx.lineWidth = size1;

// draw a red line
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x1, y1);
ctx.stroke();
}