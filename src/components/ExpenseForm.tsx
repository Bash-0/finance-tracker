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
    <div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
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

      <button onClick={onAddExpense}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;