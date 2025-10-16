export interface Expense {
  id: string; // UUID
  amount: number;
  category: string;
  memo?:string;
  created_at:string;
}

export interface ExpenseCreate{
	category:string;
	amount:number;
	memo?:string;
}

export interface ExpenseUpdate{
	category?:string;
	amount?:number;
	memo?:string;
}