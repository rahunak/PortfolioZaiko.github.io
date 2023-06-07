import React from "react";
import './style.css';
function BackBtn(props: any) {
    function fallBack() {
        history.back();
    }
    console.log('props',props);
    return (
        <div className="btn_back_wrapper">
            <button className="btn_back" onClick={fallBack} >Back</button>
        </div>
    );

}
export default BackBtn;