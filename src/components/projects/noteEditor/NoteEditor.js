import React from "react";
import './style.css';
import NoteFormContainer from "./components/noteForm/noteForm/noteContainer/noteFormContainer";
import SideInformation from "./components/sideInformation/sideInformation";
function NoteEditor() {
  return (
    <div  className="note-editor--wrapper">
        <NoteFormContainer/>
      <div className="aside--wrapper">
        <SideInformation/>
      </div>
    </div>
  );
}

export default NoteEditor;
