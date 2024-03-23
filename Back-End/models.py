from pydantic import BaseModel
from typing import List

class Singup(BaseModel):
  email: str
  password: str
  nameLocal: str
  name: str
  phone: str

class UserSignup(BaseModel):
  uid: str
  name: str
  last_name: str
  email: str
  phone: int

class Login(BaseModel):
  email: str
  password: str

class LoginUser(BaseModel):
  email: str
  local: str
  
class ResetUser(BaseModel):
  email: str

class User(BaseModel):
  uid: str
class Service(BaseModel):
  uid: str
  title: str
  image:str
  money:str
  contect: str
