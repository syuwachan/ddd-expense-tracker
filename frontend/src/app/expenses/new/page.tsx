'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useCreateExpense} from "../../hooks/useExpenses";

export default function ExpensesPage() {
	const router = useRouter();
	const createExpense = useCreateExpense();

	//入力用の状態
	const [category, setCategory] = useState("");
	const [amount, setAmount] = useState<number>(0);
	const [memo, setMemo] = useState("");

	//フォームの送信
	const handleSubmit=(e: React.FormEvent) => {
		e.preventDefault();
		createExpense.mutate(
			{category, amount, memo: memo || undefined},
			{
				onSuccess: () => {
					alert("支出が追加されました");
					router.push("/expenses");
				},
				onError: () => {
					alert("登録に失敗しました");
				}
			}
		);
	}


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Add New Expense</h1>
          <p className="text-gray-600">Track your spending easily</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Category Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder="e.g., Food, Transport, Entertainment"
                required
              />
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amount (¥)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500 font-semibold">¥</span>
                <input
                  type="number"
                  value={amount || ''}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="1200"
                  required
                  min="0"
                />
              </div>
            </div>

            {/* Memo Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                メモ <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder="e.g., Lunch with friends"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={createExpense.isPending}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3.5 rounded-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {createExpense.isPending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </span>
              ) : (
                'Add Expense'
              )}
            </button>

            {/* Cancel Link */}
            <button
              type="button"
              onClick={() => router.push('/expenses')}
              className="w-full text-gray-600 font-medium py-2 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}