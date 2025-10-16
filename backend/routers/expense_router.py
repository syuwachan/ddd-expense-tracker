from fastapi import APIRouter, Depends, HTTPException
from typing import List
from datetime import date
from uuid import UUID
from ..schemas import ExpenseCreate, ExpenseUpdate, Expense
from ..services.expense_service import ExpenseService
from ..auth import get_current_user

router=APIRouter(prefix="/expenses", tags=["Expenses"])

# expense list
@router.get("/", response_model=List[Expense])
def list_expenses(
    category:str|None=None,date:date|None=None,user=Depends(get_current_user)):
    return ExpenseService.list_expenses(user.id,category,date)

# create expense
@router.post('/',response_class=Expense,status_code=201)
def create_expense(expense:ExpenseCreate,user=Depends(get_current_user)):
    return ExpenseService.create_expense(user.id,expense)

# get, update, delete expense
@router.get("/{expense_id}",response_model=Expense)
def get_expense(expense_id:UUID,user=Depends(get_current_user)):
    expense=ExpenseService.get_expense(user.id,expense_id)
    if not expense:
        raise HTTPException(status_code=404,detail="Expense not found")
    return expense

@router.put("/{expense_id}",response_model=Expense)
def update_expense(expense_id:UUID,expense_update:ExpenseUpdate,user=Depends(get_current_user)):
    return ExpenseService.update_expense(user.id,expense_id,expense_data=expense_update)

@router.delete("/{expense_id}",status_code=204)
def delete_expense(expense_id:UUID,user=Depends(get_current_user)):
    ExpenseService.delete_expense(user.id,expense_id)

