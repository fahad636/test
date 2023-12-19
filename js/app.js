const selectBudgetForm = document.querySelector(".budget-form");
const selectBudgetInput = document.querySelector(".budget-input");
const selectBudgetAmount = document.querySelector("#budget-amount");
const selectExpenseList = document.querySelector(".expense-list");
const expenseAmountTotal = document.querySelector("#expense-amount");


selectBudgetForm.addEventListener("submit", function(event) {
	event.preventDefault();
    const currentValue = selectBudgetInput.value;
    if(!currentValue){
        alert("Please Enter Your Budget")
        return;
    }
     selectBudgetAmount.innerText = currentValue;
     selectBudgetInput.value = "" ;
     updateExpenseTotal()
})
const selectExpenseForm = document.querySelector("#expense-form");
const selectExpenseInput = document.querySelector("#expense-input");
const selectAmountInput = document.querySelector("#amount-input");
selectExpenseForm.addEventListener("submit" , function(event) {
    event.preventDefault();
     const selectExpenseInputValue = selectExpenseInput.value;
     const selectAmountInputValue = selectAmountInput.value;
     if(!selectExpenseInputValue){
        alert("please Fill Expense")
        return;
     }
     if(!selectAmountInputValue){
        alert("please Fill Expense Amount")
        return;
     }
     const createElement = document.createElement("div");
     createElement.className = "expense";
     createElement.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item">- ${selectExpenseInputValue}</h6>
         <h5 class="expense-amount mb-0 list-item">${selectAmountInputValue}</h5>
         <div class="expense-icons list-item">
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>`
     selectExpenseList.append(createElement);
     selectExpenseInput.value = "";
     selectAmountInput.value = "";
     updateExpenseTotal()
})
function updateExpenseTotal() {
 const selectExpenseRow = document.querySelectorAll(".expense-list .expense-item");
    if(selectExpenseRow?.length > 0){
        let total = 0;
         selectExpenseRow.forEach(function(singleRow) {
         const expenseAmount = parseFloat(singleRow.querySelector(".expense-amount").innerText);
           total += expenseAmount;
         })
        expenseAmountTotal.innerText = total;
      const expenseAmountTotalFinal = parseFloat(document.querySelector("#expense-amount").innerText);
      const budgetAmount = parseFloat(document.querySelector("#budget-amount").innerText)
      // console.log(expenseAmountTotalFinal)
      // console.log(budgetAmount)
      let totalPrice = 0;
      totalPrice -= expenseAmountTotalFinal - budgetAmount;
      // console.log(totalPrice)
      let balaceAmount = document.querySelector("#balance-amount");
      balaceAmount.innerText = totalPrice;
       // updateExpenseTotal()
     }
   }

   selectExpenseList.addEventListener("click" , function(event) {
    const currentElement = event.target;
    if (currentElement?.classList?.contains("fa-trash")){
    const currentV =  parseFloat(currentElement.closest(".expense-amount"));
        console.log(currentV.innerText)
    // currentElement.closest(".expense-item").remove();
   // // total -= expenseAmountTotal.innerText - currentElement.value;
    updateExpenseTotal();
  }
    // console.log(total)
   })