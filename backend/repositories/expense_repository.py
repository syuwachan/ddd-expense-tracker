# backend/repositories/expense_repository.py
from typing import Optional, List
from datetime import date
from uuid import UUID
from sqlmodel import Session, select
from ..models import Expense
from ..db import get_session
from ..schemas import ExpenseCreate, ExpenseUpdate

class ExpenseRepository:
    @staticmethod
    def filter(user_id: UUID, category: Optional[str], date_filter: Optional[date]) -> List[Expense]:
        with next(get_session()) as session:
            query = select(Expense).where(Expense.user_id == user_id)
            if category:
                query = query.where(Expense.category == category)
            if date_filter:
                query = query.where(Expense.created_at == date_filter)
            return session.exec(query).all()

    @staticmethod
    def get(user_id: UUID, expense_id: UUID) -> Optional[Expense]:
        with next(get_session()) as session:
            expense = session.get(Expense, expense_id)
            if not expense or expense.user_id != user_id:
                return None
            return expense

    @staticmethod
    def create(user_id: UUID, data: ExpenseCreate) -> Expense:
        with next(get_session()) as session:
            expense = Expense(user_id=user_id, **data.dict())
            session.add(expense)
            session.commit()
            session.refresh(expense)
            return expense

    @staticmethod
    def update(user_id: UUID, expense_id: UUID, data: ExpenseUpdate) -> Expense:
        with next(get_session()) as session:
            expense = session.get(Expense, expense_id)
            if not expense or expense.user_id != user_id:
                raise ValueError("Expense not found or unauthorized")

            for key, value in data.dict(exclude_unset=True).items():
                setattr(expense, key, value)

            session.add(expense)
            session.commit()
            session.refresh(expense)
            return expense

    @staticmethod
    def delete(user_id: UUID, expense_id: UUID):
        with next(get_session()) as session:
            expense = session.get(Expense, expense_id)
            if not expense or expense.user_id != user_id:
                raise ValueError("Expense not found or unauthorized")
            session.delete(expense)
            session.commit()
