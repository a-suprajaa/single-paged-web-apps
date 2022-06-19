const pass = document.getElementById("pw");
const len = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate_button = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

generate_button.addEventListener("click",generate_pass);

function generate_pass()
{   let dummy = "";
    if(upper.checked)
    {
      dummy += getuppercase();
    }

    if (lower.checked)
    {
        dummy += getlowercase();
    }

    if (number.checked)
    {
        dummy += getnumbers();
    }
    
    if (symbol.checked)
    {
        dummy += getsymbols();
    }

    if(dummy.length < len.value)
    {  
        do{
         let x = getrandom();
         if(dummy.includes(x))
         continue;
         else 
         dummy += x;
     
        }while(dummy.length<len.value)
    }
    pass.innerText = dummy;
    console.log(dummy.length)
    console.log(len.value)
}

function getuppercase()
{   
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
    
}

function getlowercase()
{   
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
    
}

function getnumbers()
{   
    return numbers[Math.floor(Math.random() * numbers.length)]
    
}

function getsymbols()
{   
    return symbols[Math.floor(Math.random() * symbols.length)]
    
}

function getrandom()
{  
    let tot ="";
    let x;
    if(upper.checked)
    {tot += upperLetters;}
    if(lower.checked)
    {tot += lowerLetters;}
    if(number.checked)
    {tot += numbers;}
    if(symbol.checked)
    {tot += symbols;}
    console.log(tot)
    let shuffle = "";  // contains the combined string in the shuffled manner
    do
    {
       x=tot[Math.floor(Math.random() * tot.length)];
       if(shuffle.includes(x))
       continue;
       else
       shuffle+=x;

    } while(shuffle.length <tot.length)

    return shuffle[Math.floor(Math.random() * shuffle.length)]
   
}