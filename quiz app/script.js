const q = document.getElementById("question");
const opa = document.getElementById("a_text"); // labels of radio button
const opb = document.getElementById("b_text");
const  opc = document.getElementById("c_text");
const  opd = document.getElementById("d_text");
const sub = document.getElementById("submit");
const ans = document.querySelectorAll(".answer");

const arr_que = [
    
        {
            question: "What is the most used programming language in 2019?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "Who is the President of US?",
            a: "Florin Pop",
            b: "Donald Trump",
            c: "Ivan Saldano",
            d: "Mihai Andrei",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Cascading Style Sheet",
            c: "Jason Object Notation",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        }
    ];
    let qno = 0;  
    let score = 0;     
loadquiz(0);
function loadquiz(n)
{   deselect();
    q.innerText = arr_que[n].question;
    opa.innerText = arr_que[n].a;
    opb.innerText = arr_que[n].b;
    opc.innerText= arr_que[n].c;
    opd.innerText = arr_que[n].d;
     
}    
function selectans(n)
{ 
    var answ = undefined
   ans.forEach((i) =>
   {
       if(i.checked)
       {
          answ =i.id;
       }
   })
   cal_score(n,answ);
}

function cal_score(n,answ)
{
   if(answ === arr_que[n].correct)
   {   
       score++;
       console.log(score)
   }
   else 
   return
} 
function deselect()
{
  ans.forEach((i) =>
  {
      i.checked = false;
  })
}

sub.addEventListener("click",() =>
{  const val = selectans(qno);
    qno++
   if(qno <  arr_que.length)
   {  
       loadquiz(qno);
   }
   else 
   {  quiz.innerHTML = `
   <h2>You answered correctly at ${score}/${arr_que.length} questions.</h2>`
   }
})