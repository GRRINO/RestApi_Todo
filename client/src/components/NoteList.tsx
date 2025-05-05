import React, { useEffect, useState } from "react";
import { createNote, deleteNote, getNotes, updateNote } from "../services/note";
import { Note } from "../types/note";

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [msg, setMsg] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [editMode, setEditMOde] = useState(false);
  const [editId, setEditId] = useState("");

  const makeRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, [refresh]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (msg.trim() === "") return;
    try {
      if (editMode===true) {
        await updateNote(editId,msg)
      } else {
      await createNote(msg);
        
      }
      setMsg("");
      makeRefresh();
    } catch (error) {
      throw new Error("Failed to add data");
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteNote(id);
      makeRefresh();
    } catch (error) {
      throw new Error("Failed to delete data");
    }
  };

  const handleModeChange =  ( id:string,title: string) => {
    setEditMOde(true);
    setMsg(title);
    setEditId(id);
  };


  return (
    <div>
      <h2>Note List</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.title}{" "}
            <button type="button" onClick={() => handleDeleteNote(note._id)}>
              delete
            </button>
            <button
              type="button"
              onClick={() => handleModeChange(note._id, note.title)}
            >
              update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input
          value={msg}
          onChange={(e) => {
            e.target.value;
            setMsg(e.target.value);
          }}
          type="text"
        />
        <button>{editMode ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default NoteList;



