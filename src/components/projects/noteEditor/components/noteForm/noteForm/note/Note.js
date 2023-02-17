import React, {useState} from "react";
import TagList from "../tags/TagList";
import style from "./note.module.css";

function Notes(props) {
    let [mode, setMode] = useState(false);

    function onBlurNoteHandler(noteId, newText) {
        setMode(false);
        props.changeNote(noteId, newText);
    }

    return (
        <div className={style.note_wrapper}>
            {!mode
                && <>
                    <div className={style.note_text_wrapper}>
                        <p className={style.note_text} onClick={() => setMode(true)}> {props.text} </p>
                        <button className={style.btn_close}  onClick={() => props.deleteNote(props.noteId)}> X </button>
                    </div>
                    <TagList
                        tags={props.tags}
                        deleteTag={props.deleteTag}
                    />
                </>}




            {mode
                && <div className={style.note}>
                     <textarea
                         onBlur={(e) => onBlurNoteHandler(props.noteId, e.target.value)}
                         name="note"
                         defaultValue={props.text}
                     />
                    <TagList
                        tags={props.tags}
                        deleteTag={props.deleteTag}
                    />
                </div>}
        </div>
    );
}

export default Notes;
