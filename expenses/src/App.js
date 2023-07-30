import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [{
  id: 1,
  title: 'EMI',
  date: new Date(2021, 6, 31),
  amount: 330.29
}];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, 'Let\'s get started'),
  //   React.createElement(NewExpense, {}),
  //   React.createElement(Expenses, { items: expenses })
  // )
  return (
    <div className="App">
      <h2>Expenses</h2>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
