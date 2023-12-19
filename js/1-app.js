const selectBudgetForm = document.querySelector(".budget-form");
const selectExpenseForm = document.querySelector("#expense-form");
let selectBudgetAmount = document.querySelector("#budget-amount");
const selectExpenseAmount = document.querySelector("#amount-input");
const selectInput = document.querySelector("#budget-input");
const selectAmount = parseFloat(document.querySelector(".expense-amount"))
// console.log(selectAmount, "function")




selectBudgetForm.addEventListener("submit", function(event) {
	event.preventDefault();
	
	const currentValue = selectInput.value;
     selectBudgetAmount.innerText = currentValue;
     console.log(selectInput.value - selectAmount.innerText)
     selectInput.value = "";


	// console.log(selectBudgetAmount , "input")
	// console.log(currentValue , "input")
})

selectExpenseForm.addEventListener("submit" , function(event) {
	event.preventDefault();
	const selectExpenseInput = document.querySelector("#expense-input");
	const selectExpense = document.querySelector(".expense-list");
    const selectExpenseInputValue = selectExpenseInput.value;
    const selectExpenseAmountValue = selectExpenseAmount.value;


    // console.log(selectExpenseInputValue)   
    // console.log(selectExpenseAmountValue)   
     const createElement = document.createElement("div");
     createElement.className = "expense";
     createElement.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item">- ${selectExpenseInputValue}</h6>
         <h5 class="expense-amount mb-0 list-item">${selectExpenseAmountValue}</h5>

         <div class="expense-icons list-item">

          
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>`
        selectExpense.append(createElement);
        selectExpenseInput.value = "";
        selectExpenseAmount.value = "";
        updateExpenseTotal();
})
function updateExpenseTotal() {
	const selectExpenseRow = document.querySelectorAll(".expense-list .expense-item");
    if(selectExpenseRow?.length > 0){
    	let total = 0;
    	selectExpenseRow.forEach(function(singleRow) {
    		// const expenseAmount = singleRow.querySelector(".expense-amount").innerText;
		 const expenseAmount = parseFloat(singleRow.querySelector(".expense-amount").innerText);
           total += expenseAmount;
        // console.log(selectExpenseAmount.value)
    		// console.log(expenseAmount, "chech")
    	})
    	const expenseAmountTotal = document.querySelector("#expense-amount");
    	expenseAmountTotal.innerText = total;
    	console.log(total)

    }

}
// updateExpenseTotal();
