from pydantic import BaseModel
from typing import Optional
from datetime import date
from uuid import UUID

class ExpenseBase(BaseModel):
    category:str
    amount:int
    memo:Optional[str]=None


class ExpenseCreate(ExpenseBase):
    pass        

class ExpenseUpdate(BaseModel):
    category:Optional[str]=None
    amount:Optional[int]=None
    memo:Optional[str]=None

class Expense(ExpenseBase):
    id:UUID
    created_at:date

    class Config:
        orm_mode=True