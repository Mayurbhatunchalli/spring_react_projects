import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2>No Expenses Found.</h2>
    }

    return (
        props.items.map((expense) =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
            />)
    )
}

export default ExpensesList;