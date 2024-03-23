import pyrebase

firebaseConfig = {
  'apiKey': "AIzaSyDSBgxw9rC2pDyyduUJZKR7PjV2-VxRPX0",
  'authDomain': "pythonfastapi-b9ab7.firebaseapp.com",
  'databaseURL': "https://pythonfastapi-b9ab7-default-rtdb.firebaseio.com",
  'projectId': "pythonfastapi-b9ab7",
  'storageBucket': "pythonfastapi-b9ab7.appspot.com",
  'messagingSenderId': "673215663261",
  'appId': "1:673215663261:web:32c18d1a3331cc031c5874",
  'measurementId': "G-TZX8RPPCBS"
}

def initialize_firebase_app():
  try:
    firebase = pyrebase.initialize_app(firebaseConfig)
    auth = firebase.auth()
    db = firebase.database()
    return auth,db
  except Exception as e:
    print(f"Error during Firebase initialization: {e}")
    return None
