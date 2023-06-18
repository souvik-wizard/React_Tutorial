import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';

function Expenses(props) {
    // console.log(props);
    // console.log(props.items);
    const [filteredYear, setFilteredYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    console.log(filteredExpenses);
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;








// {/* 
//                 {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//                 {filteredExpenses.length > 0 &&
//                     filteredExpenses.map(expense => (
//                         <ExpenseItem
//                             key={expense.id}
//                             title={expense.title}
//                             amount={expense.amount}
//                             date={expense.date}
//                         />
//                     ))
//                 } */}


//                 {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : (
//                         filteredExpenses.map(expense => (
//                             <ExpenseItem
//                                 key={expense.id}
//                                 title={expense.title}
//                                 amount={expense.amount}
//                                 date={expense.date}  
//                             />
//                         ))
//                     )} */}

//                 {/* {filterChangeHandler ?
//                     filteredExpenses.length === 0 ? <p>No expenses found.</p> : (
//                         filteredExpenses.map(expense => (
//                             <ExpenseItem
//                                 key={expense.id}
//                                 title={expense.title}
//                                 amount={expense.amount}
//                                 date={expense.date}
//                             />
//                         ))
//                     ) : (
//                         props.items.map(expense => (
//                             <ExpenseItem
//                                 key={expense.id}
//                                 title={expense.title}
//                                 amount={expense.amount}
//                                 date={expense.date}
//                             />
//                         ))
//                     )
//                 } */}

