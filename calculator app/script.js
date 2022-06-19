class Calculator 
{
    constructor(previousOptext,currentOptext)
    {
        this.previousOptext = previousOptext;
        this.currentOptext = currentOptext;
        this.clear()
       // this.operation = operation;
    }
  clear()
  {
      this.previousOp = "";
      this.currentOp = "";
      this.operation = undefined;
  }

  append(n)
  {     
      //this.currentOp = this.currentOp.toString() + number.toString();
      /*if(this.currentOp==="")
      {    
          this.currentOp = number;
      }
      else*/
    
      if(n===".")
      { if(this.currentOp.includes("."))
         return;
        else 
        this.currentOp = this.currentOp.toString() + n.toString()

      }
        else
        this.currentOp = this.currentOp.toString() + n.toString()
      
  }

  operations(operation) {
    
    if (this.currentOp === '')
    { 
      return;}
    if (this.previousOp !== '') {
      //console.log(this.previousOp)
      const t = this.compute();
      this.previousOp=t;
      this.currentOp="";
      this.operation = operation;
      return;
    }
    
    this.operation = operation
    this.previousOp= this.currentOp
    this.currentOp = ''
  }
 
 
 compute()
 {    let ans;
      const prev = parseFloat(this.previousOp);
      const curr = parseFloat(this.currentOp);
     switch(this.operation)
     {
         case '+' : ans = prev + curr;
                    break;
         case '-' : ans = prev - curr;
                    break;
         case  '*' : ans = prev * curr;
                    break;   
        case  '/' : ans = prev / curr;
                    break;                            
     }
     return ans;
 }
/* getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }*/

 /* display() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }*/

  equals()
  { if(this.previousOp ==="")
  {
      this.currentOp = this.currentOp
  } else if(this.currentOp ==="")
  { //console.log("ghi")
    this.currentOp = this.previousOp;
  } else
    {const answer = this.compute();
    this.currentOp = answer;
    this.previousOp = "";
    this.operation = undefined;}
  }
delete()
{
  this.currentOp = this.currentOp.toString().slice(0,-1);
}

  display()
  {
    this.currentOptext.innerText = this.currentOp;
    if (this.operation != null) {
      this.previousOptext.innerText =
        `${(this.previousOp)} ${this.operation}`
    } else {
      this.previousOptext.innerText = '';
    }
  }
}







const numberButtons = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const allClear = document.querySelector("[data-all-clear]");
const equals = document.querySelector("[data-equals]"); 
const delete1 = document.querySelector("[data-delete]");
const previousOptext = document.querySelector("[data-previous-operand]");
const currentOptext = document.querySelector("[data-current-operand]");
  
const calculator = new Calculator(previousOptext,currentOptext)
numberButtons.forEach(i =>
    {
       i.addEventListener("click" ,()=>
       {   
           calculator.append(i.innerText);
           calculator.display();
       })
    });

allClear.addEventListener("click",()=>
{
    calculator.clear();
    calculator.display();
});    

operation.forEach(j =>
    {
        j.addEventListener("click",() =>
        {
            calculator.operations(j.innerText);
            calculator.display();
        })
    });

 equals.addEventListener("click",() =>
 {
    calculator.equals();
    calculator.display();
 })   

 delete1.addEventListener("click",() =>
 {
   calculator.delete();
   calculator.display();
 })
 