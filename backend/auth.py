from fastapi import Depends, HTTPException, status
from uuid import UUID

# Temporary mock user class for development
class User:
    def __init__(self, id: UUID):
        self.id = id

# Mock authentication dependency - returns a test user
# TODO: Replace with actual authentication logic
def get_current_user() -> User:
    # For development, return a mock user with a fixed UUID
    return User(id=UUID('00000000-0000-0000-0000-000000000001'))
