import React, {useEffect, useState} from "react";
import NoteForm from "../Form/NoteForm";
import {v4 as uuidv4} from "uuid";
import Notes from "../note/Note";
import SearchPanel from "../../searchPanel/searchPanel";
import s from "./noteFormContainer.module.css"
 
const NoteFormContainer = () => {
    let [notes, setNotes] = useState([]);
    let [currText, setCurrText] = useState("");
    let [filter, setFilter] = useState("");
    let [havingTag, setHavingTag] = useState(false);
    useEffect(() => {
        let savedNotes = localStorage.getItem("noteEditor_notes")
        setNotes( JSON.parse(savedNotes));
        setHavingTag(()=>{
            if(savedNotes) return true;
            else return false;
        })
    },[]);
    useEffect(() => {
        },
        [notes, notes.tags]);
    let notesList;
    function setFilterParams(params) {
        setFilter('#'+params);
    }
    function searchTags(str) {
        return str.match(/#\w*/g);
    }
    function setTags(str) {
        let tags = searchTags(str);
        if (tags) {
            tags = tags.map(tag => {
                return {
                    tag: tag,
                    id: uuidv4(),

                }
            })
        }
        return tags;
    }
    function setTextNote(e) {
        let text = e.target.value;
        setCurrText(text);
    }
    function addNote(e) {
        e.preventDefault();
        let tags = setTags(currText);
        if (tags) setHavingTag(true);
        setNotes(prev => {
            if (currText.trim() === "") {
                return prev;
            }
            else{
                //добавим функцию сохранения в localStorage
                localStorage.setItem("noteEditor_notes",JSON.stringify([...notes, {
                    tags: tags,
                    textNote: currText,
                    id: uuidv4(),
                },
            ] ));
                return [...notes, {
                        tags: tags,
                        textNote: currText,
                        id: uuidv4(),
                    },
                ];
            }
           
        });
       
        setCurrText("");

    }
    function deleteNote(deleteId) {
        setNotes(prev =>{
            let resultNodes= notes.filter(el => el.id !== deleteId);
            localStorage.setItem("noteEditor_notes",JSON.stringify(resultNodes));
            return  resultNodes;
        });
    }
    function changeNote(noteId, newTextNote) {
        let newNotes = notes.map(note => {
            if (note.id === noteId) {
                note.textNote = newTextNote;
                note.tags = setTags(newTextNote);
                return note;
            }
            return note;
        })
        setNotes(newNotes);
        localStorage.setItem("noteEditor_notes",JSON.stringify(newNotes));
    }
    function deleteTag(tagId) {
        let newNotes = notes.map(note => {
            if (!note.tags) return note;
            for (let i = 0; i < note.tags.length; i++) {
                if (note.tags[i].id === tagId) note.tags.splice(i, 1);
            }
            return note;
        });

        setNotes(newNotes);
        localStorage.setItem("noteEditor_notes",JSON.stringify(newNotes));
    };
    function compareTags(a) {
        if (!a.tags) return 1;
        for (let i = 0; i < a.tags.length; i++) {
            if (a.tags[i].tag === filter) {
                return -1;
            }
        }
    }
    notesList = notes.sort(compareTags).map(note =>
        <Notes
            key={note.id}
            deleteTag={deleteTag}
            changeNote={changeNote}
            deleteNote={deleteNote}
            text={note.textNote}
            noteId={note.id}
            tags={note.tags || []}
        />);
    return (
    <div className="note-editor">
    <div className={s.note_editor__wrapper}>
        <NoteForm
            text={currText}
            setTextNote={setTextNote}
            addNote={addNote}
        />
        {
            havingTag &&
            <SearchPanel setFilterParams={setFilterParams}/>
        }
    </div>
    <div className={s.notesList__wrapper}>
        {notesList}
    </div>
  
    
    </div>);
}
export default NoteFormContainer;