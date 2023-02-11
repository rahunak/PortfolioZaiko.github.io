import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import BackBtn from "../../buttons/backBtn/BackBtn";
import style from './style.module.css';

type MyProps = {};
type MyState = { loading: boolean, advice: string, adviceId: string };
class Advice extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            advice: '',
            adviceId: ''
        }
    }
    componentDidMount() {
        this.getAdviceFromServer().then((data) => {
            this.setState({
                advice: data.slip.advice,
                adviceId: data.slip.id,
            });
        });
    }
    componentWillUnmount() {
        this.setState({
            loading: false,
            advice: "",
            adviceId: "",
        });
    }

    async getAdviceFromServer() {
        let response = await fetch('https://api.adviceslip.com/advice')
        let data = await response.json();
        return data;
    }

    getAdviceHandler(e: any) {
        e.target.classList.add(style.spin);
        this.setState(prev => {
            return {
                ...prev, loading: true
            }
        });

        this.getAdviceFromServer().then((data) => {
            this.setState(prev => {
                return {
                    loading: true,
                    advice: data.slip.advice,
                    adviceId: data.slip.id,
                }
            });
        });
    }
    removeSpinEffect(e: any) {
        console.log('this.state.loading',this.state.loading);
        if (!this.state.loading) {
            e.target.classList.add(style.spin_pause);
        }
    }
    render() {
        return (
            <div className={style.advice}>
                <div id="labelAdvice" className={style.label}>Advice № {this.state.adviceId}</div>
                <div id="textAdvice" className={style.textAdvice}>{this.state.advice}</div>
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
                <button className={this.state.loading ? style.spin + ' ' + style.btn : style.btn} id="buttonGetAdvice"
                    onClick={(e) => this.getAdviceHandler(e)}
                    onAnimationEnd={(e) => { this.removeSpinEffect(e) }}
                    aria-label="getting advice">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                    </svg>
                </button>

            </div>
        );

    }
}
export default Advice;