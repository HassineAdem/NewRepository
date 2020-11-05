const reasoninput = document.querySelector ("#reasoninput");
const amountinput = document.querySelector ("#amountid");
const closebutton = document.querySelector ("#closebutton");
const addbutton = document.querySelector ("#addbutton");
const expensesList= document.querySelector("#expenses-list");
const totalexpensesoutput = document.querySelector ("#total-expenses");

var totalExpenses = 0 ; 
const clear = () => { 
    reasoninput.value= "";
    amountinput.value= "0";

}

closebutton.addEventListener ("click",()=> {clear ()});
addbutton.addEventListener ('click',  ()=> {
    const enteredAmount = amountinput.value ;
    const enteredReason=reasoninput.value ; 
    if (enteredReason.trim().length <=0 || enteredAmount.trim().length <=0 || enteredAmount <= 0) {
    
            
        
        return 0 ; 
    }; 
    
    const expensesElement= document.createElement ("ion-item")
    expensesList.innerHTML ='';
   expensesElement.textContent = enteredReason + ": $" + enteredAmount; 
  expensesList.appendChild (expensesElement);
  totalExpenses  +=  +enteredAmount; 
  totalexpensesoutput.textContent =  "$" + totalExpenses; 
 
    clear();
  
});

