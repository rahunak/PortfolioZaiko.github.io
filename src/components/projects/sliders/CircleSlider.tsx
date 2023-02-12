import React from "react";
import BackBtn from "../../buttons/backBtn/BackBtn";
import sliderImages from '../../../files/js/imagesForCircleSlider';
import style from './style.module.scss';
function CircleSlider() {

    return (
        <React.Fragment>
            <div className={style.bg_image}></div>
            <div className={style.content__wrapper}>
                <div className={style.gallery}>
                    {
                        sliderImages.map(el => <img key={el.src} src={el.src} alt="" />)
                    }

                </div>
            </div>
        </React.Fragment>
    );
}
export default CircleSlider;