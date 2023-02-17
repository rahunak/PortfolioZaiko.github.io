import Tag from "./tag";
import React from "react";
import style from "./tags.module.css";


function TagList(props){

    let tagList=props.tags ?
        props.tags.map(el =>
        <Tag key={el.id}
          text={el.tag}
          tagId={el.id}
          deleteTag={props.deleteTag}
        />)
        : null;

    return(
        <>
            {
                (props.tags.length >0)
                &&  <ul className={style.tagList}>
                    <li className={style.firstCaption}>
                        Tags:
                    </li>
                    { tagList }
                </ul>
            }
        </>
     );
}
export default TagList;

