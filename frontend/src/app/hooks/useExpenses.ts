import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query";
import {api} from "../lib/api";
import type{Expense,ExpenseCreate,ExpenseUpdate} from "../../types/expense";

//一覧取得

export const useExpenses=()=>{
	return useQuery<Expense[],Error>({
		queryKey:["expenses"],
		queryFn:async()=>{
			const res=await api.get<Expense[]>("/expenses");
			return res.data;
		},
	});
};

//新規登録
export const useCreateExpense=()=>{
	const queryClient=useQueryClient();
	return useMutation<Expense,Error,ExpenseCreate>({
		mutationFn:async(data:ExpenseCreate)=>{
			const res=await api.post<Expense>("/expenses",data);
			return res.data;
		},
		onSuccess:()=>{
			queryClient.invalidateQueries({queryKey:["expenses"]});
		},
	});
};

//更新
export const useUpdateExpense=()=>{
	const queryClient=useQueryClient();
	return useMutation<Expense,Error,{id:string,data:ExpenseUpdate}>({
		mutationFn:async({id,data})=>{
			const res=await api.put<Expense>(`/expenses/${id}`,data);
			return res.data;
		},
		onSuccess:()=>{
			queryClient.invalidateQueries({queryKey:["expenses"]});
		},
	});
};

//削除
export const useDeleteExpense=()=>{
	const queryClient=useQueryClient();
	return useMutation<void,Error,{id:string}>({
		mutationFn:async({id})=>{
			await api.delete(`/expenses/${id}`);
		},
		onSuccess:()=>{
			queryClient.invalidateQueries({queryKey:["expenses"]});
		},
	});
};