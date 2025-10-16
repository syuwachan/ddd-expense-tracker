# backend/domain/entities/expense.py
from dataclasses import dataclass, field
from datetime import date
import uuid
from ..value_objects.category import Category
from ..value_objects.money import Money


@dataclass
class Expense:
    """支出（Expense）を表すエンティティ"""
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    category: Category = field(default_factory=lambda: Category("その他"))
    amount: Money = field(default_factory=lambda: Money(0))
    memo: str = ""
    created_at: date = field(default_factory=date.today)

    def change_amount(self, new_amount: int):
        """支出金額を変更"""
        if new_amount < 0:
            raise ValueError("金額は0以上である必要があります。")
        self.amount = Money(new_amount)

    def change_category(self, new_category: Category):
        """カテゴリを変更"""
        self.category = new_category

    def describe(self) -> str:
        """支出の概要（UI表示用）"""
        return f"[{self.category.name}] {self.amount.value}円 - {self.memo}"