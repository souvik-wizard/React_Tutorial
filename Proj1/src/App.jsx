import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

const dummy_data = [
  {
    id: 'e1',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  }
];


function App() {

  const [expenses, setExpenses]= useState(dummy_data);
  
  const addExpenseHandler = (expense) => {
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses];    
  });
}


  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
