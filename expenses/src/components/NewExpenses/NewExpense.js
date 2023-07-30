import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css"

const NewExpense = (props) => {

    const onSaveExpenses = (enteredValue) => {

        const expensedata = {
            ...enteredValue,
            id: Math.random().toString()
        };
        props.onNewExpense(expensedata);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenses} />
        </div>
    )

}

export default NewExpense;