from typing import List, Optional
from datetime import date
from uuid import UUID
from ..repositories.expense_repository import ExpenseRepository
from ..schemas import ExpenseCreate, ExpenseUpdate
from ..infra.models import Expense

class ExpenseService:
    @staticmethod
    def create_expense(user_id: UUID, expense_create: ExpenseCreate) -> Expense:
        return ExpenseRepository.create(user_id, expense_create)

    @staticmethod
    def get_expense(user_id: UUID, expense_id: UUID) -> Optional[Expense]:
        return ExpenseRepository.get(user_id, expense_id)

    @staticmethod
    def update_expense(user_id: UUID, expense_id: UUID, expense_data: ExpenseUpdate) -> Expense:
        return ExpenseRepository.update(user_id, expense_id, expense_data)

    @staticmethod
    def delete_expense(user_id: UUID, expense_id: UUID) -> None:
        ExpenseRepository.delete(user_id, expense_id)

    @staticmethod
    def list_expenses(user_id: UUID, category: Optional[str] = None, date: Optional[date] = None) -> List[Expense]:
        return ExpenseRepository.filter(user_id, category, date)