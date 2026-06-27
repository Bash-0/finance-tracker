type ExpenseFormProps = {
  description: string;
  amount: string;
  category: string;
  setDescription: (value: string) => void;
  setAmount: (value: string) => void;
  setCategory: (value: string) => void;
  onAddExpense: () => void;
};

function ExpenseForm({
  description,
  amount,
  category,
  setDescription,
  setAmount,
  setCategory,
  onAddExpense,
}: ExpenseFormProps) {
  return (
    <div className="rounded-xl bg-white p-6 space-y-3 shadow-md">
      <input className="w-full rounded-lg border border-gray-300 p-3"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="grid gap-3 md:grid-cols-2">
        <input className="w-full rounded-lg border border-gray-300 p-3"
          type="number" 
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
      
        
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700" onClick={onAddExpense}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;