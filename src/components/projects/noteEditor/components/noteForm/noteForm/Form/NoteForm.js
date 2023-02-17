import React from "react";
import s from "./noteForm.module.css"

const NoteForm =(props)=>{
function onKeyPressHandler(e){
    if(e.key==="Enter") {
        props.addNote(e);
    }

}
    return(<div className={s.wrapper}>
        <form className={s.noteForm}>
            <textarea
                type="text"
                onKeyPress={ (e) =>  onKeyPressHandler(e) }
                value={props.text}
                onChange={ (e) => props.setTextNote(e) }
            />

            <button onClick={(e)=>props.addNote(e)}>
                Submit
            </button>
        </form>
    </div>)
}

export default NoteForm;