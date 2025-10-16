from typing import List, Optional
from datetime import date
from uuid import UUID
from ...repositories.expense_repository import ExpenseRepository
from ...schemas import ExpenseCreate, ExpenseUpdate, Expense

class ExpenseService:
    @staticmethod
    def __init__(self, repository: ExpenseRepository):
        self.repository = repository

    @staticmethod
    def create_expense(self, expense_create: ExpenseCreate) -> Expense:
        return self.repository.create(expense_create)
    
    @staticmethod
    def get_expense(self, expense_id: UUID) -> Optional[Expense]:
        return self.repository.get(expense_id)

    def update_expense(self, expense_id: UUID, expense_update: ExpenseUpdate) -> Optional[Expense]:
        return self.repository.update(expense_id, expense_update)

    def delete_expense(self, expense_id: UUID) -> bool:
        return self.repository.delete(expense_id)

    def list_expenses(self, skip: int = 0, limit: int = 100) -> List[Expense]:
        return self.repository.list(skip=skip, limit=limit)

    def list_expenses_by_date_range(self, start_date: date, end_date: date) -> List[Expense]:
        return self.repository.list_by_date_range(start_date=start_date, end_date=end_date)