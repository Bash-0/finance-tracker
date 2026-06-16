import { useState } from "react";
import './App.css'
import Header from './components/header'
import type { Expense } from './types/Expense'
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [expenses, setExpenses] = useState<Expense[]>([]);

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

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - £{expense.amount}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App
