import type { Expense } from "../types/Expense";

type ExpenseListProps = {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
};

function ExpenseList({
  expenses,
  onDeleteExpense,
}: ExpenseListProps) {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.description} - £{expense.amount} ({expense.category})

          <button
            onClick={() => onDeleteExpense(expense.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;