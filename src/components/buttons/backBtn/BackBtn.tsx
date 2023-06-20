import React from "react";
import {   useSearchParams, useParams } from 'react-router-dom';
import './style.css';
function BackBtn(props: any) {
    function fallBack() {
        history.back();
    }
    const params = useParams();
    console.log('params',params);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('searchParams',searchParams);
    return (
        <div className="btn_back_wrapper">
            <button className="btn_back" onClick={fallBack} >Back</button>
        </div>
    );

}
export default BackBtn;