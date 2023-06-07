import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useFetch } from "react-async";
import BackBtn from "../../buttons/backBtn/BackBtn";
import style from "./style.module.css";
import "./style.css";
type MyProps = {};
type MyState = { isLoading: boolean; advice: string; adviceId: string };
function Advice() {


  const [isLoading, setIsLoading] = useState(false);
  const [adviceId, setAdviceId] = useState("");
  const [adviceText, setAdviceText] = useState("");

  useEffect(() => {
    getAdviceFromServer().then((res) => {
      setAdviceId(res.slip.id);
      setAdviceText(res.slip.advice);
    })
  }, []);

  async function getAdviceFromServer() {
    let response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    return await response.json();
  }


  async function onClickHandle(e: any) {
  

    setIsLoading(true);
    let res = await getAdviceFromServer()
    
    setAdviceId( res.slip.id );
    setAdviceText( res.slip.advice );
   
    setTimeout(()=>{
      setIsLoading(false);
    },300)
  }

  return (
    <div className={style.advice}>
      <div id="labelAdvice" className={style.label}>
        Advice № {adviceId}
      </div>
      <div id="textAdvice" className={style.textAdvice}>
        {adviceText}
      </div>
      <div className={style.line}>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#CEE3E9" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <button  
        className={
          isLoading
            ? style.btn+ " "+ style.spin
            : style.btn
        }
        id="buttonGetAdvice"
        onClick={(e) => onClickHandle(e)}
        aria-label="getting advice"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        </svg>
      </button>
    </div>
  );
}
export default Advice;
