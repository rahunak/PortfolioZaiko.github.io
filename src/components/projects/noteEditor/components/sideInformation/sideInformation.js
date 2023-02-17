import React from "react";
import s from "./sideInformation.module.css";
function SideInformation(props) {
    return (

        <aside className={s.sideInformation}>
            <h1>Note Editor</h1>
 

            <ul>
                <li>Your notes can include #tags: #instagramm  #linkedin</li>
                <li>search panel looks notes using #tags</li>
                <li>you be able correct your notes</li>
            </ul>
 


        </aside>
    );
}

export default SideInformation;