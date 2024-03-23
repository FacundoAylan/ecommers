from config import initialize_firebase_app
from fastapi import FastAPI, HTTPException
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from models import Singup,UserSignup,Login,LoginUser,ResetUser, User, Service

auth, db = initialize_firebase_app()

app = FastAPI()
# Configuración de CORS para permitir solicitudes desde cualquier origen
origins = [
    "http://localhost:5173",
    "http://localhost:5173/Session",  # Agrega aquí la URL exacta de tu aplicación React
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Crear usuarios para las empresas
@app.post('/singup')
async def signup(user: Singup):
  email= user.email
  password= user.password
  nameLocal=user.nameLocal
  name= user.name
  phone= user.phone
  try:
    userCreate = auth.create_user_with_email_and_password(email, password)
    uid = userCreate["localId"]
    user_info={
      "uid":uid,
      "nameLocal": nameLocal,
      "name":name,
      "phone": phone,
      "email":email
    } 
    locals={"uid":uid, "name":nameLocal}
    db.child("Empresas").child("Locales").push(locals)
    db.child("Empresas").child(uid).set(user_info)
    print('Successfully created account')
  except:
      print('Email already exists')

#Crear usuario por la empresa
@app.post('/singupuser')
async def signup(user:UserSignup):
  uid =user.uid
  name=user.name
  last_name=user.last_name
  email=user.email
  phone=user.phone
  data_client ={"uid":uid,"name":name,"last_name":last_name, "email":email, "phone":phone, "creditos":0}

  try:
    users_data = db.child("Empresas").child(uid).child("Users").get()
    if users_data.val() is not None:
      users_dict = users_data.val()
      for user_id, user_data in users_dict.items():
        if "email" in user_data and user_data["email"] == email:
          raise HTTPException(status_code=422, detail="Usuario existente")

      db.child("Empresas").child(uid).child("Users").push(data_client)
      return {"message": "Se ha creado correctamente el usuario"}
    else:
      db.child("Empresas").child(uid).child("Users").push(data_client)
      return {"message": "Se ha creado correctamente el usuario"}
  except ZeroDivisionError as e:
      print('Email already exists')

#Iniciar sesion de la empresa
@app.post('/login')
def login(user: Login):
  email = user.email
  password = user.password
  try:
    login = auth.sign_in_with_email_and_password(email, password)
    uid = login["localId"]
    users_data = db.child("Empresas").child(uid).get()
    users_dict = users_data.val()
    info={
      "uid":uid,
      "email":users_dict["email"],
      "name":users_dict["name"],
      "nameLocal":users_dict["nameLocal"],
      "phone":users_dict["phone"]
    }
    users = []
    for uid, data in users_dict["Users"].items():
      users.append(data)
    
    result = {**info, "users": users}
    return(result)    
  except:
      raise HTTPException(status_code=404, detail='Invalid email or password')
  
#Iniciar Sesion para los usuarios de las empresas
@app.post('/LoginClient')
async def LoginClient(user:LoginUser):
  email= user.email
  locals= user.local
  try:
    local_date= db.child("Empresas").child("Locales").get()
    local_dict = local_date.val()
    for name, data_local in local_dict.items():
      if data_local["name"]==locals:
        uid= data_local["uid"]
        users_data = db.child("Empresas").child(uid).child("Users").get()
        users_dict = users_data.val()
        if users_data.val():
          for user_id, user_data in users_dict.items():
            if "email" in user_data and user_data["email"] == email:
              return( user_data)
  except:
    raise HTTPException(status_code=404, detail='Invalid email')

#Trae todos los nombre de los locales
@app.get('/locals')
async def locals():
  locals=[]
  try:
    local_date= db.child("Empresas").child("Locales").get()
    local_dict = local_date.val()
    for name, data_local in local_dict.items():
      locals.append(data_local["name"])
    return(locals)
  except:
    print('hola')
   
@app.post('/reset')
def reset(user: ResetUser):
   email= user.email
   try:
      reset = auth.send_password_reset_email(email)
      return{'mensaje: ' 'Successfully logged in'}, 200
   except:
      raise HTTPException(status_code=404, detail='Error')

#Sirve para traer a los usuarios
@app.post('/user')
def dataUser(user: User):
  uid= user.uid
  try:
    user_data= db.child("Empresas").child(uid).child("Users").get()
    if user_data is None:
        raise HTTPException(status_code=404, detail="User not found")
    user_array = [user.val() for user in user_data.each()]
    return user_array        
  except:
     raise HTTPException(status_code=404, detail='Error')
  
#Sirve para crear servicios para la empresa
@app.post('/Createservice')
async def createService(user:Service):
  uid=user.uid
  title=user.title
  image=user.image
  money=user.money
  contect=user.contect
  service={"title":title,"image":image,"money":money, "contect":contect}
  try:
    user_service= db.child("Empresas").child(uid).child("Service").get()
    if user_service is not None:
        user_dict = user_service.val()
        if user_dict is not None:
            for user_id, user_data in user_dict.items():
                if "title" in user_data and user_data["title"] == title:
                    raise HTTPException(status_code=422, detail="Servicio existente")

        db.child("Empresas").child(uid).child("Service").push(service)
        return {"message": "Se ha creado correctamente el nuevo servicio"}
    else:
      db.child("Empresas").child(uid).child("Service").push(service)
      return {"message": "Se ha creado correctamente el nuevo servicio"}
  except:
    raise HTTPException(status_code=404, detail='Invalid email')

#sirve para traer los servicios de la empresa
@app.post('/Getservice')
def getService(user: User):
  uid=user.uid
  try:   
    service_data=db.child("Empresas").child(uid).child("Service").get()
    if service_data is None:
      raise HTTPException(status_code=404, detail='Service not found')
    service_dict = []
    for uid, service in service_data.val().items():
      service_dict.append(service)
    return service_dict
  except:
     raise HTTPException(status_code=404, detail='Error')
 
if __name__ == '__main__':
    uvicorn.run('main:app', reload=True)