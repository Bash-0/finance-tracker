import { useEffect, useState } from "react";
import './App.css'
import Header from './components/header'
import type { Expense } from './types/Expense'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    // load the expenses data back in from local storage
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      return JSON.parse(savedExpenses);
    }

    return [];
  });
  
  // saves expenses into local storage
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


  return (
    <main>
      <Header title = "Smart Finance Tracker" />

      <ExpenseForm
        description={description}
        amount={amount}
        category={category}
        setDescription={setDescription}
        setAmount={setAmount}
        setCategory={setCategory}
        onAddExpense={() => {
          if (!description || !amount) return;

          const newExpense: Expense = {
            id: crypto.randomUUID(),
            description,
            amount: Number(amount),
            category,
            date: new Date().toISOString(),
          };

          setExpenses([...expenses, newExpense]);

          setDescription("");
          setAmount("");
          setCategory("Food");
        }}
      />

      <ExpenseList
        expenses={expenses}
        onDeleteExpense={(id) => {
          setExpenses(
            expenses.filter(
              (expense) => expense.id !== id
            )
          );
        }}
      />
    </main>
  );
}

export default App
