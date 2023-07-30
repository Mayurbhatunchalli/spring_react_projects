

function ExpenseFilter(props) {

    const onChangeYearHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div>
            <div>
                <label>Filter by Year</label>
                <select value={props.selected} onChange={onChangeYearHandler}>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    )

}

export default ExpenseFilter;