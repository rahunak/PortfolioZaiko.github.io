import React from "react";
import './style.css';
function BackBtn(props: any) {
    function fallBack() {
        console.log(' history.back() ', history);
        history.back();
    }
    return (
        <div className="btn_back_wrapper">
            <button className="btn_back" onClick={fallBack} >Back</button>
        </div>
    );

}
export default BackBtn;