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
    <ul className="py-3">
      {expenses.map((expense) => (
        <li 
          className="mb-3 flex items-center justify-between rounded-lg bg-white p-4 shadow"
          key={expense.id}
        >
          <div>
            <h3 className="font-semibold">
              {expense.description}
            </h3> 

            <p className="text-sm text-gray-500">
              ({expense.category})
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold">
              £{expense.amount.toFixed(2)}
            </span>

            <button 
              className="rounded-lg bg-red-600 border-2 border-red-900 px-10 py-3 font-medium text-white hover:bg-red-700"
              onClick={() => onDeleteExpense(expense.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;