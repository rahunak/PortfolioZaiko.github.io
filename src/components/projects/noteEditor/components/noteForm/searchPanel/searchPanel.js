import * as React from "react";
import {useState} from "react";
import s from "./searchPanel.module.css";

function SearchPanel(props){
    let [filter,setFilter]=useState("");
    function onSubmitSetFilterParams(e){
        e.preventDefault();
        props.setFilterParams(filter);
        setFilter("");
    }
    function onKeyPressHandler(e){
        if(e.key==="Enter") {
            props.setFilterParams(filter);
            setFilter("");
        }

    }
    return(<div >
            <form className={s.searchPanel} onSubmit={(e)=>onSubmitSetFilterParams(e)}>
                <input
                    onKeyPress={(e)=>onKeyPressHandler(e)}
                    value={filter}
                    onChange={(e)=>setFilter(e.target.value)}
                />
                <button type="submit" value="Send">Search</button>
            </form>

        </div>
    );
}
export default SearchPanel;