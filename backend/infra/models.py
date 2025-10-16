from sqlmodel import SQLModel, Field
from datetime import date, datetime
from uuid import UUID, uuid4
from typing import Optional

class Expense(SQLModel, table=True):
    __tablename__ = "expenses"

    id: UUID = Field(default_factory=uuid4, primary_key=True)
    user_id: UUID = Field(index=True)
    category: str = Field(index=True)
    amount: int
    memo: Optional[str] = None
    created_at: date = Field(default_factory=lambda: datetime.now().date(), index=True)
