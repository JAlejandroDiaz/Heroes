// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBvz_AxYuTaIMzW7E9USWk922LSKKIDNng",
  authDomain: "imagenes-heroes.firebaseapp.com",
  databaseURL: "https://imagenes-heroes-default-rtdb.firebaseio.com",
  projectId: "imagenes-heroes",
  storageBucket: "imagenes-heroes.appspot.com",
  messagingSenderId: "465334300605",
  appId: "1:465334300605:web:0d52fb8011df74b343ecd4",
  measurementId: "G-2XHQQ64556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


export async function Hola(id){
  
  const storageRef = ref (storage, id+'.jpg')
  const url =  getDownloadURL(storageRef)
  return url
}