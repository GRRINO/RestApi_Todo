import { Note } from "../types/note";
import axios from "axios"

let API_URL = "";
if (import.meta.env.VITE_MODE === "development") {
  API_URL = import.meta.env.VITE_LOCAL_API_URL;
}
if (import.meta.env.VITE_MODE === "production") {
  API_URL = import.meta.env.VITE_API_URL;
}
console.log("api url", API_URL);

// export const getNotes = async (): Promise<Note[]> => {
//   const response = await fetch(`${API_URL}/getData`);
//   const note = await response.json();
//   return note.data;
// };

export const getNotes = async():Promise<Note[]> =>{
  const {data} = await axios.get(`${API_URL}/getData`)
  return data.data
}

// export const createNote = async (title: String) => {
//   await fetch(`${API_URL}/create`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title }),
//   });
// };

export const createNote = async (title: String) => {
  await axios.post(`${API_URL}/create`,{title})
};

// export const updateNote = async(id:String,title:String)=>{
//   await fetch(`${API_URL}/update/${id}`,{
//     method :'PUT',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title }), 
//   })
// }

export const updateNote = async(id:String,title:String)=>{
  await axios.put(`${API_URL}/update/${id}`,{title})
}

// export const deleteNote = async(id:String)=>{
//   await fetch(`${API_URL}/delete/${id}`,{
//     method :'DELETE'
//   })
// }

export const deleteNote = async(id:String)=>{
  await axios.delete(`${API_URL}/delete/${id}`)
}

