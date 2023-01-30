import React from "react";
import './style.css';
function BackBtn(){
    console.log('BackBtn');
    function fallBack(){
        console.log('back',history);
        history.back();
    }
    
    return(
    <div className="btn_back_wrapper">
        <button className="btn_back" onClick={fallBack} >Back</button>
    </div>
    )
}
export default BackBtn;