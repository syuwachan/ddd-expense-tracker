from fastapi import FastAPI
from .api.routers import expense_router
from .db import init_db

app=FastAPI(
	title="Expense Tracker API",
	version="1.0.0",
	description="API for tracking personal expenses"
	)

# Initialize the database
@app.on_event("startup")
def on_startup():
    init_db()


# Register routers
app.include_router(expense_router.router,prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to the Expense Tracker API🚀"}

