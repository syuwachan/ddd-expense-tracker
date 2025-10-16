from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import expense_router
from .db import init_db

app=FastAPI(
	title="Expense Tracker API",
	version="1.0.0",
	description="API for tracking personal expenses"
	)

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the database
@app.on_event("startup")
def on_startup():
    init_db()


# Register routers
app.include_router(expense_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to the Expense Tracker API🚀"}

