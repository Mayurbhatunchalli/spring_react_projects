import Card from "../UI/Card";
import "../Expenses/Expenses.css"
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeFilterYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={onChangeFilterYear} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )

}

export default Expenses;