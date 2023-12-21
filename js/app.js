const selectBudgetForm = document.querySelector(".budget-form");
const selectBudgetInput = document.querySelector(".budget-input");
const selectBudgetAmount = document.querySelector("#budget-amount");
const selectExpenseList = document.querySelector(".expense-list");
const expenseAmountTotal = document.querySelector("#expense-amount");
const selectExpenseForm = document.querySelector("#expense-form");
const selectExpenseInput = document.querySelector("#expense-input");
const selectAmountInput = document.querySelector("#amount-input");
const balanceAmounts = document.querySelector("#balance-amount");

   selectBudgetForm.addEventListener("submit", function(event) {
	 event.preventDefault();
       const currentValue = selectBudgetInput.value;
      if(!currentValue){
        alert("Please Enter Your Budget")
        return;
       }
     selectBudgetAmount.innerText = currentValue;
     selectBudgetAmount.innerText = currentValue;
     balanceAmounts.innerText = currentValue;
     selectBudgetInput.value = "" ;
     updateExpenseTotal()
})
  
  selectExpenseForm.addEventListener("submit" , function(event) {
    event.preventDefault();
     const selectExpenseInputValue = selectExpenseInput.value;
     const selectAmountInputValue = selectAmountInput.value;
     if(!selectExpenseInputValue){
        alert("Please Enter Your Expense")
        return;
      }
     if(!selectAmountInputValue){
        alert("Please Enter Expense Amount")
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
        let totalPrice = 0;
         totalPrice -= expenseAmountTotal.innerText - selectBudgetAmount.innerText;
        let balaceAmount = document.querySelector("#balance-amount");
        balaceAmount.innerText = totalPrice;
        }else {
        let total = 0;
        expenseAmountTotal.innerText = total;
        }
    }
 
    selectExpenseList.addEventListener("click", function(event) {
    const currentElement = event.target;
     if (currentElement?.classList?.contains("fa-trash")) {
        const removedExpenseAmount = parseFloat(currentElement.closest(".expense-item").querySelector(".expense-amount").innerText);
        currentElement.closest(".expense-item").remove();
        // Update the total expense amount
        updateExpenseTotal();
        // Recalculate and update the balance amount
        const balanceAmount = selectBudgetAmount.innerText - expenseAmountTotal.innerText;
        // document.querySelector("#balance-amount").innerText = balanceAmount;
        balanceAmounts.innerText = balanceAmount;

    }
});