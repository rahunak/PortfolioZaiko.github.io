import React from "react";
import style from "./tags.module.css";

function Tag(props) {

    return (
        <div className={style.tag_wrapper} >
            <p className={style.tag_text}> {props.text} </p>
            <button className={style.btn_tag_close} onClick={() => props.deleteTag(props.tagId)}>

                <svg className={style.btn_tag_svg}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" />
                    <path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" />
                    <path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" />
                </svg>


                {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> */}
            </button>
        </div>
    );
}

export default Tag;